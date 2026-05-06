"use client";
import BlogList from '@/components/Bloglist';
import BlogSearch from '@/components/BlogSearch';
import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NewsPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const messages = locale === 'de' ? de : en;
  const NewsData = messages?.news;

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <BlogSearch
        description="Are you interested in the latest developments at the RODOPI Group? This page provides access to our newest press releases and company news. Stay up to date on major announcements, corporate events, and our group’s latest achievements."
        onSearch={handleSearch}
      />
     <div class="sk-ww-linkedin-page-post" data-embed-id="25678471"></div>
     <script src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js" defer></script>
    </>
  );
}