import Link from 'next/link';
import en from '@/../messages/en.json';
import de from '@/../messages/de.json';

export default function ServicesMainPage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  const services = messages.services;
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {Object.entries(services).map(([id, service]) => (
          <li key={id}>
            <Link href={`/${locale}/services/${id}`}>{service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}