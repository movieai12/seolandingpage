# Dijitalfiir - AI Destekli SEO Ajansı

Modern Next.js 14 ile geliştirilmiş AI destekli SEO ajansı web sitesi.

## Özellikler

- 🤖 AI destekli SEO araçları
- 📊 Gerçek zamanlı DA/PA kontrolü (Moz API)
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

4. Moz API bilgilerinizi `.env.local` dosyasına ekleyin:
```
MOZ_ACCESS_ID=your_moz_access_id
MOZ_SECRET_KEY=your_moz_secret_key
```

5. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## Moz API Kurulumu

DA/PA Checker aracının gerçek verilerle çalışması için Moz API'ye ihtiyacınız var:

1. [Moz Pro](https://moz.com/products/mozscape/access) hesabı oluşturun
2. API Access ID ve Secret Key alın
3. Bu bilgileri `.env.local` dosyasına ekleyin

**Not:** Moz API bilgileri yoksa araç demo verileriyle çalışacaktır.

## API Endpoints

### DA/PA Checker
- **POST** `/api/da-pa-check`
- Body: `{ "url": "example.com" }`
- Response: DA, PA ve diğer SEO metrikleri

## Teknolojiler

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Data Fetching:** React Query
- **API:** Moz API
- **TypeScript:** Full type safety

## Proje Yapısı

```
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── araclar/           # SEO araçları
│   └── ...
├── components/            # React bileşenleri
├── hooks/                 # Custom hooks
├── lib/                   # Utility fonksiyonları
├── types/                 # TypeScript tipleri
└── public/               # Statik dosyalar
```

## Deployment

1. Build oluşturun:
```bash
npm run build
```

2. Production sunucusunu başlatın:
```bash
npm start
```

## Lisans

Bu proje özel lisans altındadır.