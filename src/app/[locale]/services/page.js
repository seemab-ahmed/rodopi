import Link from 'next/link';
import servicesData from '@/data/servicesData';

export default function ServicesMainPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {servicesData.map(service => (
          <li key={service.id}>
            <Link href={`/services/${service.id}`}>{service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}