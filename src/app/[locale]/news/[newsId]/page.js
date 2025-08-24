import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { notFound } from 'next/navigation';
import BlogDetail from '@/components/BlogDetail';
export async function generateStaticParams() {
  return [
    { newsId: 'rodopi-ccs-partnership' },
  ];
}

export default async function BlogDetailPage(props) {
  const { locale, params } = props;
  const messages = locale === 'de' ? de : en;
      const NewsData = messages?.news;
  // Await params if it's a Promise
  const awaitedParams = typeof params?.then === 'function' ? await params : params;
  const { newsId } = awaitedParams;
  if (!NewsData) {
    notFound(); 
  }

  return <BlogDetail blog={NewsData[newsId]} allBlogs={NewsData} />;
}

