import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com'
const canonical = `${siteUrl}/author/chimaobi-david-ibe`

export const metadata: Metadata = {
  title: 'Chimaobi David Ibe | Founder & CEO | Require Technologies',
  description: 'Profile of Chimaobi David Ibe, Founder & CEO of Require Technologies. Engineering secure, scalable, AI-powered platforms for enterprises across West Africa.',
  alternates: { canonical },
  openGraph: {
    title: 'Chimaobi David Ibe | Founder & CEO | Require Technologies',
    description: 'Engineering secure, scalable, AI-powered platforms for enterprises across West Africa.',
    url: canonical,
    images: ['/images/team/chimaobi-david-ibe.JPG']
  }
}

export default function AuthorPage() {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chimaobi David Ibe',
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'Require Technologies Limited',
      url: siteUrl,
    },
    url: canonical,
    image: `${siteUrl}/images/team/chimaobi-david-ibe.JPG`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG'
    },
    sameAs: [
      'https://www.linkedin.com/',
      'https://github.com/',
      'https://x.com/'
    ]
  }

  return (
    <div className="min-h-screen">
      <section className="py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/backgrounds/hero-main.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chimaobi David Ibe</h1>
          <p className="text-lg text-white/90">Founder & CEO, Require Technologies Limited</p>
        </div>
      </section>

      <section className="py-12 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white/90 space-y-4">
            <p>
              Chimaobi David Ibe leads Require Technologies, delivering enterprise-grade platforms across AI,
              custom software, cloud, cybersecurity, and data for organizations in West Africa.
            </p>
            <p>
              With a focus on secure architectures, regulatory compliance, and measurable outcomes, he partners with
              banks, enterprises, and growth-stage companies to build resilient, scalable digital systems.
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
    </div>
  )
}


