import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.krebsgruppe.de',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.rodopi.de',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
        return [
            // Redirect old URLs to new pages
            { source: '/:locale(en|de)/bildnachwesis', destination: '/:locale/news', permanent: true },
            { source: '/:locale(en|de)/bildnachweis', destination: '/:locale/news', permanent: true },
            { source: '/:locale(en|de)/datenschutz', destination: '/:locale/privacyPolicy', permanent: true },
            { source: '/:locale(en|de)/downloads', destination: '/:locale/news', permanent: true },
            { source: '/:locale(en|de)/fertigung-von-wka-komponenten', destination: '/:locale/services/skilled_teams', permanent: true },
            { source: '/:locale(en|de)/hr-dienstleistungen-und-personalmanagement', destination: '/:locale/industries/factory_support', permanent: true },
            { source: '/:locale(en|de)/impressum', destination: '/:locale/legalNotice', permanent: true },
            { source: '/:locale(en|de)/job-openings', destination: '/:locale/careers', permanent: true },
            { source: '/:locale(en|de)/karriere', destination: '/:locale/careers', permanent: true },
            { source: '/:locale(en|de)/kontakt', destination: '/:locale/contact', permanent: true },
            { source: '/:locale(en|de)/korrosionsschutz-fuer-metallstrukturen', destination: '/:locale/services/corrosion_protection', permanent: true },
            { source: '/:locale(en|de)/leistungen', destination: '/:locale/services', permanent: true },
            { source: '/:locale(en|de)/luftfahrt-personaldienstleistungen', destination: '/:locale/industries/specialized_services', permanent: true },
            { source: '/:locale(en|de)/metallbearbeitung-in-eigener-beschichtungshalle', destination: '/:locale/services/corrosion_protection', permanent: true },
            { source: '/:locale(en|de)/photovoltaik-installation-und-wartung', destination: '/:locale/services/solar_projects', permanent: true },
            { source: '/:locale(en|de)/privacy-policy', destination: '/:locale/privacyPolicy', permanent: true },
            { source: '/:locale(en|de)/rodopi-academy-gwo-zertifizierte-schulungen', destination: '/:locale/services/rodopi_academy', permanent: true },
            { source: '/:locale(en|de)/unsere-zertifizierungen', destination: '/:locale/about', permanent: true },
            { source: '/:locale(en|de)/unternehmen', destination: '/:locale/about', permanent: true },
            { source: '/:locale(en|de)/wartung-reparatur-von-wka', destination: '/:locale/industries/wind_energy', permanent: true },
        ];
    },
};

export default withNextIntl(nextConfig);