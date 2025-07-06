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