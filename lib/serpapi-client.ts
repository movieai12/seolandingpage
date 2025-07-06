import { getJson } from 'serpapi'

export class SerpAPIClient {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async searchGoogle(params: {
    q: string
    location?: string
    hl?: string
    gl?: string
    device?: 'desktop' | 'mobile'
    num?: number
  }) {
    try {
      const searchParams = {
        engine: 'google',
        api_key: this.apiKey,
        q: params.q,
        location: params.location || 'Turkey',
        hl: params.hl || 'tr',
        gl: params.gl || 'tr',
        device: params.device || 'desktop',
        num: params.num || 100, // Get up to 100 results to find rankings
      }

      const response = await getJson(searchParams)
      return response
    } catch (error) {
      console.error('SerpAPI Error:', error)
      throw new Error('Failed to fetch search results from SerpAPI')
    }
  }

  extractDomainFromUrl(url: string): string {
    try {
      const urlObj = new URL(url)
      return urlObj.hostname.replace('www.', '')
    } catch {
      return ''
    }
  }

  findDomainPosition(results: any[], targetDomain: string): {
    position: number | null
    url: string | null
    title: string | null
    snippet: string | null
  } {
    const normalizedTarget = targetDomain.replace(/^(https?:\/\/)?(www\.)?/, '').toLowerCase()
    
    for (const result of results) {
      if (result.link) {
        const resultDomain = this.extractDomainFromUrl(result.link).toLowerCase()
        if (resultDomain === normalizedTarget || resultDomain.includes(normalizedTarget)) {
          return {
            position: result.position,
            url: result.link,
            title: result.title,
            snippet: result.snippet
          }
        }
      }
    }

    return {
      position: null,
      url: null,
      title: null,
      snippet: null
    }
  }

  getCompetitors(results: any[], limit: number = 10) {
    return results.slice(0, limit).map(result => ({
      domain: this.extractDomainFromUrl(result.link),
      position: result.position,
      url: result.link,
      title: result.title
    }))
  }
}