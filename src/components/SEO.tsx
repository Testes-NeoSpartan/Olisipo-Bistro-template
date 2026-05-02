import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
}

export function SEO({ 
  title = "Olisipo Bistro | Modern Portuguese Dining in Lisbon", 
  description = "Discover authentic Portuguese cuisine with a modern twist at Olisipo Bistro. Located in the heart of Lisbon's historical Alfama.",
  type = "website"
}: SEOProps) {
  const siteUrl = "https://olisipobistro.com"; // Placeholder or Vercel URL
  
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Olisipo Bistro",
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+351210123456",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Largo de São Rafael",
      "addressLocality": "Lisbon",
      "postalCode": "1100-340",
      "addressCountry": "PT"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "12:30",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "19:30",
        "closes": "00:00"
      }
    ],
    "servesCuisine": "Portuguese",
    "priceRange": "$$$"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content="@olisipobistro" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}
