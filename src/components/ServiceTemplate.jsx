import Image from 'next/image';

export default function ServiceTemplate({ serviceData }) {
    console.log(serviceData);
    const { title, description, sections, image } = serviceData;
    return (
      <section className="service-template max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-6 text-lg">{description}</p>
        {image && (
          <div className="mb-8 w-full h-64 relative">
            <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        )}
        {sections && sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
            <p className="text-gray-700 whitespace-pre-line">{section.text}</p>
          </div>
        ))}
      </section>
    );
}
