import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Dijitalfiir | AI Destekli SEO Ajansı | Google'da Zirveye Tırmanın",
  description = "Dijitalfiir ile AI destekli SEO çözümleriyle Google'da zirveye tırmanın. %34 daha hızlı sonuç garantili teknik SEO, içerik optimizasyonu ve backlink hizmetleri.",
  image = "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
  url = "https://dijitalfiir.com"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dijitalfiir",
    "description": description,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": `${url}/logo.png`
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-555-123-4567",
      "contactType": "customer service",
      "availableLanguage": "Turkish"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Maslak Mah. Büyükdere Cad. No:123",
      "addressLocality": "İstanbul",
      "postalCode": "34485",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://www.facebook.com/dijitalfiir",
      "https://www.twitter.com/dijitalfiir",
      "https://www.linkedin.com/company/dijitalfiir"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};