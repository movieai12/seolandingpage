# Dijitalfiir - AI Destekli SEO Ajansı

Modern Next.js 14 ile geliştirilmiş AI destekli SEO ajansı web sitesi.

## Özellikler

- 🤖 AI destekli SEO araçları
- 📊 Gerçek zamanlı DA/PA kontrolü (Moz API)
- 🔍 Google sıralama kontrolü (SerpAPI)
- ⚡ Next.js 14 App Router
- 🎨 Tailwind CSS ile modern tasarım
- 📱 Tam responsive tasarım
- 🔍 SEO optimize edilmiş
- 📈 React Query ile veri yönetimi

## Kurulum

1. Projeyi klonlayın:
```bash
git clone <repo-url>
cd dijitalfiir-nextjs
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Environment variables'ları ayarlayın:
```bash
cp .env.example .env.local
```

4. API bilgilerinizi `.env.local` dosyasına ekleyin:
```
# Moz API (DA/PA Checker için)
MOZ_ACCESS_ID=your_moz_access_id
MOZ_SECRET_KEY=your_moz_secret_key

# SerpAPI (Sıra Bulucu için)
SERPAPI_KEY=your_serpapi_key
```

5. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## API Kurulumları

### Moz API (DA/PA Checker)
1. [Moz Pro](https://moz.com/products/mozscape/access) hesabı oluşturun
2. API Access ID ve Secret Key alın
3. Bu bilgileri `.env.local` dosyasına ekleyin

### SerpAPI (Sıra Bulucu)
1. [SerpAPI](https://serpapi.com/) hesabı oluşturun
2. API Key alın (aylık 100 ücretsiz arama)
3. API Key'i `.env.local` dosyasına ekleyin

**Not:** API bilgileri yoksa araçlar demo verileriyle çalışacaktır.

## API Endpoints

### DA/PA Checker
- **POST** `/api/da-pa-check`
- Body: `{ "url": "example.com" }`
- Response: DA, PA ve diğer SEO metrikleri

### Sıra Bulucu
- **POST** `/api/rank-check`
- Body: `{ "keyword": "seo ajansı", "domain": "example.com", "location": "Turkey" }`
- Response: Google sıralama pozisyonu ve rakip analizi

## Teknolojiler

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Data Fetching:** React Query
- **APIs:** Moz API, SerpAPI
- **TypeScript:** Full type safety

## Proje Yapısı

```
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   │   ├── da-pa-check/   # DA/PA kontrolü
│   │   └── rank-check/    # Sıralama kontrolü
│   ├── araclar/           # SEO araçları
│   └── ...
├── components/            # React bileşenleri
├── hooks/                 # Custom hooks
├── lib/                   # Utility fonksiyonları
│   ├── moz-api.ts        # Moz API client
│   └── serpapi-client.ts # SerpAPI client
├── types/                 # TypeScript tipleri
└── public/               # Statik dosyalar
```

## Rate Limiting

- **DA/PA Checker:** 10 istek/dakika
- **Sıra Bulucu:** 5 istek/dakika (SerpAPI daha pahalı)

## Deployment

1. Build oluşturun:
```bash
npm run build
```

2. Production sunucusunu başlatın:
```bash
npm start
```

3. Environment variables'ları production ortamına ekleyin

## API Maliyetleri

- **Moz API:** Aylık sınırlı ücretsiz kullanım
- **SerpAPI:** Aylık 100 ücretsiz arama, sonrası ücretli

## Lisans

Bu proje özel lisans altındadır.