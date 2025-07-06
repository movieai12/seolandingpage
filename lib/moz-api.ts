import crypto from 'crypto'

export class MozAPI {
  private accessId: string
  private secretKey: string
  private baseUrl = 'https://lsapi.seomoz.com/v2/url_metrics'

  constructor(accessId: string, secretKey: string) {
    this.accessId = accessId
    this.secretKey = secretKey
  }

  private generateAuthHeader(): string {
    const expires = Math.floor(Date.now() / 1000) + 300 // 5 minutes from now
    const stringToSign = `${this.accessId}\n${expires}`
    const signature = crypto
      .createHmac('sha1', this.secretKey)
      .update(stringToSign)
      .digest('base64')
    
    return `Basic ${Buffer.from(`${this.accessId}:${signature}:${expires}`).toString('base64')}`
  }

  async getUrlMetrics(urls: string[]): Promise<any> {
    const authHeader = this.generateAuthHeader()
    
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        targets: urls.map(url => ({ target: url }))
      })
    })

    if (!response.ok) {
      throw new Error(`Moz API error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }
}