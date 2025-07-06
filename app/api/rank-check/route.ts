import { NextRequest, NextResponse } from 'next/server'
import { SerpAPIClient } from '@/lib/serpapi-client'
import { RankCheckRequest, RankCheckResponse } from '@/types/api'

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(ip: string): string {
  return `rate_limit_rank:${ip}`
}

function checkRateLimit(ip: string): boolean {
  const key = getRateLimitKey(ip)
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 5 // 5 requests per minute (SerpAPI is more expensive)

  const current = rateLimitStore.get(key)
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (current.count >= maxRequests) {
    return false
  }

  current.count++
  return true
}

function validateDomain(domain: string): boolean {
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
  return domainRegex.test(domain.replace(/^(https?:\/\/)?(www\.)?/, ''))
}

function normalizeDomain(domain: string): string {
  return domain.replace(/^(https?:\/\/)?(www\.)?/, '').toLowerCase()
}

// Mock keyword data for demo purposes
function getKeywordData(keyword: string) {
  const keywordLength = keyword.length
  const baseVolume = Math.max(100, keywordLength * 200)
  
  return {
    searchVolume: Math.floor(baseVolume + Math.random() * baseVolume),
    difficulty: Math.floor(Math.random() * 100) + 1,
    cpc: parseFloat((Math.random() * 10 + 0.5).toFixed(2))
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    const body: RankCheckRequest = await request.json()
    
    if (!body.keyword || !body.domain) {
      return NextResponse.json(
        { error: 'Keyword and domain are required' },
        { status: 400 }
      )
    }

    // Validate domain
    if (!validateDomain(body.domain)) {
      return NextResponse.json(
        { error: 'Invalid domain format' },
        { status: 400 }
      )
    }

    const normalizedDomain = normalizeDomain(body.domain)
    const keyword = body.keyword.trim()
    const location = body.location || 'Turkey'
    const device = body.device || 'desktop'

    // Check if SerpAPI key is configured
    const serpApiKey = process.env.SERPAPI_KEY

    if (!serpApiKey) {
      // Return mock data for development/demo
      const keywordData = getKeywordData(keyword)
      const mockPosition = Math.floor(Math.random() * 100) + 1
      
      const mockData: RankCheckResponse = {
        keyword,
        domain: normalizedDomain,
        position: mockPosition,
        url: `https://${normalizedDomain}/example-page`,
        title: `${keyword} - ${normalizedDomain}`,
        snippet: `Bu sayfa ${keyword} hakkında bilgi içermektedir...`,
        searchVolume: keywordData.searchVolume,
        difficulty: keywordData.difficulty,
        cpc: keywordData.cpc,
        location,
        totalResults: Math.floor(Math.random() * 10000000) + 1000000,
        competitors: [
          { domain: 'competitor1.com', position: Math.floor(Math.random() * 10) + 1, url: 'https://competitor1.com', title: `${keyword} - Competitor 1` },
          { domain: 'competitor2.com', position: Math.floor(Math.random() * 10) + 1, url: 'https://competitor2.com', title: `${keyword} - Competitor 2` },
          { domain: 'competitor3.com', position: Math.floor(Math.random() * 10) + 1, url: 'https://competitor3.com', title: `${keyword} - Competitor 3` },
          { domain: 'competitor4.com', position: Math.floor(Math.random() * 10) + 1, url: 'https://competitor4.com', title: `${keyword} - Competitor 4` },
          { domain: 'competitor5.com', position: Math.floor(Math.random() * 10) + 1, url: 'https://competitor5.com', title: `${keyword} - Competitor 5` }
        ],
        searchDate: new Date().toISOString()
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      return NextResponse.json(mockData)
    }

    // Use real SerpAPI
    const serpClient = new SerpAPIClient(serpApiKey)
    
    try {
      const searchResults = await serpClient.searchGoogle({
        q: keyword,
        location,
        device,
        num: 100
      })

      if (!searchResults.organic_results) {
        return NextResponse.json(
          { error: 'No search results found' },
          { status: 404 }
        )
      }

      // Find domain position
      const domainResult = serpClient.findDomainPosition(
        searchResults.organic_results,
        normalizedDomain
      )

      // Get competitors
      const competitors = serpClient.getCompetitors(searchResults.organic_results, 10)

      // Get keyword data (mock for now, you can integrate with other APIs)
      const keywordData = getKeywordData(keyword)

      const response: RankCheckResponse = {
        keyword,
        domain: normalizedDomain,
        position: domainResult.position,
        url: domainResult.url,
        title: domainResult.title,
        snippet: domainResult.snippet,
        searchVolume: keywordData.searchVolume,
        difficulty: keywordData.difficulty,
        cpc: keywordData.cpc,
        location: searchResults.search_parameters?.location_used || location,
        totalResults: searchResults.search_information?.total_results || 0,
        competitors: competitors.filter(comp => comp.domain !== normalizedDomain),
        searchDate: new Date().toISOString()
      }

      return NextResponse.json(response)
    } catch (serpError) {
      console.error('SerpAPI Error:', serpError)
      return NextResponse.json(
        { error: 'Failed to fetch search results' },
        { status: 503 }
      )
    }

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}