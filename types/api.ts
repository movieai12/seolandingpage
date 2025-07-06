export interface DAPARequest {
  url: string
}

export interface DAPAResponse {
  domain: string
  da: number
  pa: number
  backlinks: number
  referringDomains: number
  organicKeywords: number
  organicTraffic: number
  mozRank: number
  mozTrust: number
  spamScore: number
  linkingRootDomains: number
  totalLinks: number
  lastCrawled: string
  error?: string
}

export interface RankCheckRequest {
  keyword: string
  domain: string
  location?: string
  language?: string
  device?: 'desktop' | 'mobile'
}

export interface RankCheckResponse {
  keyword: string
  domain: string
  position: number | null
  url: string | null
  title: string | null
  snippet: string | null
  searchVolume: number
  difficulty: number
  cpc: number
  location: string
  totalResults: number
  competitors: Array<{
    domain: string
    position: number
    url: string
    title: string
  }>
  searchDate: string
  error?: string
}

export interface SerpAPIResponse {
  search_metadata: {
    id: string
    status: string
    json_endpoint: string
    created_at: string
    processed_at: string
    google_url: string
    raw_html_file: string
    total_time_taken: number
  }
  search_parameters: {
    engine: string
    q: string
    location_requested: string
    location_used: string
    google_domain: string
    hl: string
    gl: string
    device: string
  }
  search_information: {
    organic_results_state: string
    query_displayed: string
    total_results: number
    time_taken_displayed: number
  }
  organic_results: Array<{
    position: number
    title: string
    link: string
    redirect_link: string
    displayed_link: string
    snippet: string
    snippet_highlighted_words: string[]
    sitelinks?: {
      inline: Array<{
        title: string
        link: string
      }>
    }
    rich_snippet?: {
      top?: {
        detected_extensions?: {
          [key: string]: any
        }
      }
    }
    about_this_result?: {
      source: {
        description: string
        source_info_link: string
        security: string
      }
      keywords: string[]
      languages: string[]
      regions: string[]
    }
  }>
}

export interface APIError {
  message: string
  code?: string
  details?: any
}

export interface MozAPICredentials {
  accessId: string
  secretKey: string
}

export interface MozAPIResponse {
  results: Array<{
    domain: string
    subdomain: string
    domain_authority: number
    page_authority: number
    spam_score: number
    root_domains_to_root_domain: number
    links_to_root_domain: number
    moz_rank_url: number
    moz_trust_url: number
    last_crawled: string
  }>
}