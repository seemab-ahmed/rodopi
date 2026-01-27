import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { notFound, redirect } from 'next/navigation';
import BlogDetail from '@/components/BlogDetail';

// List of old blog post slugs that should redirect to /news
const LEGACY_BLOG_SLUGS = [
  'rodopi-announced-as-european-distribution-service-partner-for-carmel-corrosion-systems-ccs',
  'rodopi-academy-verstaerkt-on-site-schulungsangebot-nach-gwo-re-zertifizierung',
  'zoom-im-interview-mit-unserem-geschaeftsfuehrer-ercan-kara-osman',
  'rodopi-auf-der-husum-wind-2023',
  'durchstarten-mit-sonnenenergie-photovoltaik-grundlagenschulung-in-der-rodopi-academy',
  'rodopi-marine-uebernimmt-duerener-korrosionsschutz-gmbh',
  'drt-roll-out-event-in-xanthi-griechenland',
  'spende-hilfe-fuer-die-menschen-in-der-tuerkei-syrien',
  'rodopi-sponsert-das-democritus-racing-team-fuer-die-formula-student-saison-2023',
  'argo-awards-2022-rodopi-erhaelt-auszeichnung-von-griechischer-praesidentin-katerina-sakellaropoulou',
  'rodopi-wind-service-erfolgreicher-einstand-auf-der-windenergy-2022',
  'wir-sind-dabei-windenergy-hamburg-und-h2-expo-conference-2022',
  'rodopi-academy-trainingszentrum-fuer-mitarbeiter-der-windindustrie',
  'korrosionsschutzarbeiten-an-offshore-anlage',
  'rostschutz-fuer-kathedrale-der-industriekultur-durch-die-rodopi-marine',
  'rodopi-mitarbeiter-erhalten-nace-zertifikat',
  'rodopi-bezieht-neue-bueroraeume-in-duesseldorf',
  'kaveh-etemadi-verstaerkt-die-geschaeftsfuehrung-der-robur-rodopi',
  'corona-krise-rodopi-verteilt-40-000-schutzmasken',
  'rodopi-bekommt-zuschlag-fuer-weitere-offshore-projekte',
  'rodopi-hanseatic-erneut-als-dienstleistungspartner-bestaetigt',
  'moderne-zugangsloesungen-fuer-windkraftanlagen',
  'umfassende-sanierungsarbeiten-am-gasometer-oberhausen',
  'umfangreiche-sanierungsarbeiten-an-der-neuen-nationalgalerie-berlin',
  'rodopi-begruesst-seine-ersten-mitarbeiter-aus-portugal',
  'auftrag-ueber-monopile-beschichtung-fuer-einen-der-weltweit-groessten-offshore-windparks-gesichert',
  'kostenlose-hotspots-in-rodopi-mitarbeiterunterkuenften-eingerichtet',
  'weitere-rodopi-mitarbeiter-erhalten-frosio-zertifikat',
  'rodopi-als-fachbetrieb-nach-wasserhaushaltsgesetz-zertifiziert-iso-zertifizierung-erneut-bestaetigt',
  'achim-schroeder-zweigardt-wird-neuer-geschaeftsfuehrer-der-rodopi-hanseatic-und-der-rodopi-marine',
  'sicherheits-und-rettungsschulung-der-rodopi-mitarbeiter',
  'neue-mitarbeiterunterkuenfte-in-rostock',
  'wka-blade-service-und-rodopi-blades-gruenden-joint-venture',
];

export function generateStaticParams() {
  const enNewsIds = Object.keys(en.news || {});
  const deNewsIds = Object.keys(de.news || {});
  return [
    ...enNewsIds.map(newsId => ({ locale: 'en', newsId })),
    ...deNewsIds.map(newsId => ({ locale: 'de', newsId })),
  ];
}

export default async function BlogDetailPage({ params }) {
  const { locale = 'en', newsId } = params || {};
  
  // Redirect legacy blog slugs to /news page
  if (LEGACY_BLOG_SLUGS.includes(newsId)) {
    redirect(`/${locale}/news`);
  }
  
  const messages = locale === 'de' ? de : en;
  const NewsData = messages?.news;

  if (!NewsData) {
    notFound();
  }

  // Check if the blog post exists
  const blog = NewsData[newsId];
  if (!blog) {
    notFound();
  }

  return <BlogDetail blog={blog} allBlogs={NewsData} />;
}

