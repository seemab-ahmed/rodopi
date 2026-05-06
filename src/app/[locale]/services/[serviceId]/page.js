import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import { HeroBannerSection } from '@/components/BannerSection';
import { GeneralContractorSection } from '@/components/GeneralContractor';
import { RodopiApproachSection } from '@/components/RodopiApproach';
import { ContactTeam } from '@/components/ContactTeam';
import MapRodopi from '@/components/MapRodopi';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function ServicePage({ params }) {
  
  const { serviceId, locale } = params;
  const messages = locale === 'de' ? de : en;
  const service = messages?.services[serviceId];
  const serviceContent = service?.ServiceBaner;
  
  if (!service) return <div>Service not found</div>;

  // support optional videos similar to industries
  const topVideos = service?.videosTop || [];
  const bottomVideos = service?.videosBottom || [];

  // Create externalCta object conditionally
  const externalCta = serviceContent?.external_btn_text && serviceContent?.external_link 
    ? {
        label: serviceContent.external_btn_text,
        link: serviceContent.external_link
      }
    : undefined;

  return (
    <>
      <HeroBannerSection
        backgroundImage={serviceContent.bgImage}
        badgeText={serviceContent.badgeText}
        title={serviceContent.title}
        subtitle={serviceContent.subtitle}
        primaryCta={{
          label: `${serviceContent.label}`,
        }}
        secondaryCta={{
          label: serviceContent.cta_button,
        }}
        externalCta={externalCta}
      />


      <GeneralContractorSection data={service?.GeneralContractor} />

      {topVideos.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-8">
          {topVideos.map((v, i) => (
            <VideoPlayer key={i} thumbnail={v.thumbnail} videoUrl={v.videoUrl} />
          ))}
        </div>
      )}

      <RodopiApproachSection service={service} />
      {/* <BenefitsServices data={service?.BenefitsServices} /> */}
      <ContactTeam data={service?.ContactTeam} />

      {bottomVideos.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-8">
          {bottomVideos.map((v, i) => (
            <VideoPlayer key={i} thumbnail={v.thumbnail} videoUrl={v.videoUrl} />
          ))}
        </div>
      )}

      <MapRodopi />
      {/* <KrebsGroupSection data={service?.KrebsGroup} /> */}
    </>
  )
}


// {
//           "name": "Cagri Tuncay",
//           "role": "Team Lead Düsseldorf",
//           "description": "Cagri Tuncay is an experienced Project Manager at RODOPI with over 10 years of expertise in rope access operations and renewable energy projects. Holding both IRATA and SPRAT Level 3 certifications, he has led complex operations across water dams, stadiums, skyscrapers, and wind energy facilities. With a background in Computer Science from Hacettepe University, Cagri combines strong technical knowledge with advanced project coordination and management capabilities. He specializes in wind turbine blade repair, safety compliance, team leadership, and international project execution, working closely with global OEMs and multidisciplinary teams. His hands‑on field experience, strategic planning skills, and multilingual communication abilities enable him to successfully deliver high‑quality, safety‑driven solutions across international markets.",
//           "email": "c.tuncay@rodopi.de",
//           "phone": "+90 532 735 8072",
//           "language": "English, Turkish",
//           "image": "/images/Cagri Tuncay.png"
//         }, {
//           "name": "Mafalda Viana",
//           "role": "Talent Acquisition Specialist",
//           "description": "Mafalda Viana is the Talent Acquisition Specialist at RODOPI, based in Portugal. Since joining in 2021, she has progressed internally from HR Office Assistant to HR Business Partner and into her current role in 2024. She builds talent pipelines, sources candidates through LinkedIn and ATS platforms, and supports major blade factory projects across Europe. Fluent in Portuguese, English, German and Spanish, she also contributes to cross-border collaboration, including supporting technical training initiatives. Through structured recruitment and a hands-on approach, Mafalda helps strengthen RODOPI’s international workforce.",
//           "email": "m.viana@rodopi.de",
//           "phone": "",
//           "image": "/images/Mafalda.jpg",
//           "language": "Portuguese, English, German, Spanish"

//         },{
//           "name": "Sofia Symeonidou",
//           "role": "Assoc. CIPD ",
//           "description": "Sofia Symeonidou is the HR Team Lead at Rodopi, bringing a people-first mindset and a strong foundation in Human Resource Management, backed by an MA in the field. With a background in HR strategy, Recruitment, Employee Relations and Learning & Development, she is passionate about building HR processes that are both practical and impactful. She thrives in dynamic, project-based environments and has a proven track record of supporting teams across Europe. Known for her ability to connect with people and align HR practices with business goals, she focuses on creating inclusive, high-performing workplace cultures where people can truly grow and succeed. ",
//           "phone": "+49 162 1575567 ",
//           "image": "/images/sofia-symeonidou.jpg",
//           "email": "sofiasymeonidou@rodopi.de",
//           "language": "English, German, Greek"
//         },{
//           "name": "Christian Csellich",
//           "role": "Business Unit Manager – Corrosion Protection On-Site Services ",
//           "description": "Christian Csellich is a Project Manager in the field of corrosion protection at Rodopi Corrosion Protection. He oversees complex bridge and industrial projects as well as international large-scale sites and serves as the primary point of contact for clients, ensuring technical implementation, quality assurance and project coordination. In addition, he leads the development of the department responsible for the erection of onshore wind turbines, managing both the technical and strategic direction in this area. With over 15 years of experience and certifications as a FROSIO Level 3 Inspector, state-certified corrosion protection technician, lecturer and certified Train the Painter instructor, Christian combines deep technical knowledge with strong leadership and a sharp eye for efficiency and quality. He is known for his hands-on, solution-oriented approach, clear communication and consistent delivery of sustainable results. His mission is to execute corrosion protection projects at the highest technical and economic standards, continuously reinforcing Rodopi’s position as a reliable partner in the industry.",
//           "phone": " +49 1523 4178053 ",
//           "image": "/images/c.jpeg",
//           "language": "English, German",
//           "email": "c.csellich@rodopi.de"
//         },