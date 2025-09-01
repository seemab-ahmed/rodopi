import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { notFound } from 'next/navigation';
import BlogDetail from '@/components/BlogDetail';
export async function generateStaticParams() {
  return [
    { newsId: 'rodopi-ccs-partnership' },
  ];
}

export default async function BlogDetailPage({ params }) {
  const { locale = 'en', newsId } = params || {};
  const messages = locale === 'de' ? de : en;
  const NewsData = messages?.news;

  if (!NewsData) {
    notFound();
  }

  return <BlogDetail blog={NewsData[newsId]} allBlogs={NewsData} />;
}

