
"use client"
import BlogList from '@/components/Bloglist';
import BlogSearch from '@/components/BlogSearch';
import { useState } from 'react';

export default function page (){
 const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    console.log(term);
    setSearchTerm(term);
  };

  return (
    <>
    <BlogSearch
     description="Are you interested in the latest developments at the RODOPI Group? This page provides access to our newest press releases and company news. Stay up to date on major announcements, corporate events, and our group’s latest achievements."
     onSearch={handleSearch} />
    <BlogList searchTerm={searchTerm} />
    </>
  );
}
