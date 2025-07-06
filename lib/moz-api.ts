export class MozAPI {
  private accessId: string
  private secretKey: string
  private baseUrl = 'https://lsapi.seomoz.com/v2/url_metrics'

  constructor(accessId: string, secretKey: string) {
    this.accessId = accessId
    this.secretKey = secretKey
  }

  private generateAuthHeader(): string {
    // v2 API için basit base64 yeterli
    return `Basic ${Buffer.from(`${this.accessId}:${this.secretKey}`).toString('base64')}`
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
        targets: urls.map(url => url) // sadece string array gönder
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Moz API error: ${response.status} - ${errorText}`)
    }

    return response.json()
  }
}
