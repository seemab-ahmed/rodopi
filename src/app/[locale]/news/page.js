"use client";
import BlogList from '@/components/Bloglist';
import BlogSearch from '@/components/BlogSearch';
import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function NewsPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const messages = locale === 'de' ? de : en;
  const NewsData = messages?.news;

  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);

  useLoadSociableKit();

  // Simple fallback for broken images - no heavy observers
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for widget to render, then set up simple fallbacks
    const timer = setTimeout(() => {
      const imgs = container.querySelectorAll('img');
      imgs.forEach((img) => {
        img.onerror = function() {
          img.src = '/images/profile.jpeg';
        };
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [containerRef]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <BlogSearch
        onSearch={handleSearch}
      />
      <div ref={containerRef} className="sk-ww-linkedin-page-post" data-embed-id="25689920"></div>
    </>
  );
}

function useLoadSociableKit() {
  useEffect(() => {
    const src = 'https://widgets.sociablekit.com/linkedin-page-posts/widget.js';
    // If script already present, do nothing (it will initialize widgets)
    if (document.querySelector(`script[src="${src}"]`)) return;

    const s = document.createElement('script');
    s.src = src;
    s.defer = true;
    s.async = true;
    document.body.appendChild(s);

    return () => {
      // keep script if other pages may use it; remove only if we added it
      if (s.parentNode) s.parentNode.removeChild(s);
    };
  }, []);
}