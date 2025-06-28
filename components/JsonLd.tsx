export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dijitalfiir.com/#organization",
        "name": "Dijitalfiir",
        "url": "https://dijitalfiir.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dijitalfiir.com/logo.png",
          "width": 300,
          "height": 100
        },
        "description": "Türkiye'nin öncü AI destekli SEO ajansı. Google'da zirveye tırmanmak için en gelişmiş teknolojileri kullanıyoruz.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+90-555-123-4567",
          "contactType": "customer service",
          "availableLanguage": "Turkish",
          "areaServed": "TR"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cumhuriyet Mah. Belediye Cad. No:85",
          "addressLocality": "Beylikdüzü",
          "addressRegion": "İstanbul",
          "postalCode": "34520",
          "addressCountry": "TR"
        },
        "sameAs": [
          "https://www.facebook.com/dijitalfiir",
          "https://www.twitter.com/dijitalfiir",
          "https://www.linkedin.com/company/dijitalfiir",
          "https://www.instagram.com/dijitalfiir"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://dijitalfiir.com/#website",
        "url": "https://dijitalfiir.com",
        "name": "Dijitalfiir",
        "description": "AI Destekli SEO Ajansı",
        "publisher": {
          "@id": "https://dijitalfiir.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://dijitalfiir.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dijitalfiir.com/#service",
        "name": "AI Destekli SEO Hizmetleri",
        "description": "Yapay zeka teknolojisi ile desteklenen kapsamlı SEO çözümleri",
        "provider": {
          "@id": "https://dijitalfiir.com/#organization"
        },
        "serviceType": "SEO Optimization",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Teknik SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "İçerik SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Link Building"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "AI SEO nedir?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI SEO, yapay zeka teknolojilerini kullanarak arama motoru optimizasyonu yapma sürecidir. Geleneksel SEO yöntemlerinden %34 daha hızlı sonuç verir."
            }
          },
          {
            "@type": "Question",
            "name": "SEO sonuçları ne kadar sürede görülür?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI destekli SEO stratejilerimizle ilk sonuçları 30 gün içinde görmeye başlayabilirsiniz. Tam etki 3-6 ay içinde ortaya çıkar."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}