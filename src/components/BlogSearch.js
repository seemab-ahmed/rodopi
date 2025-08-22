"use client"
import { useState } from 'react';

const BlogSearch = ({ onSearch, heading = "RODOPI News", description = "Are you interested in the latest developments at the RODOPI Group? This page provides access to our newest press releases and company news. Stay up to date on major announcements, corporate events, and our group’s latest achievements." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };
  
  return (
    <div className="max-w-[779px] mx-auto pt-[60px] pb-[30px] px-5">
      <div className="text-center mb-8">
        <h2 className="text-[30px] md:text-[44px] leading-[56px] font-semibold text-gray-900 mb-2">  {heading}</h2>
        <p className="text-[#707070] text-[16px] leading-[24px] font-normal">
            {description}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex w-full flex-col sm:flex-row gap-3.5 max-w-xl mx-auto">
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full pl-[44px] pr-9 py-3 text-[14px] text-[#606060] leading-[20px] border bg-[#F4F4F4] border-[##8CC43f] rounded-lg  focus:border-amber-600  outline-none transition-all"
            placeholder="Search blogs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search blogs"
          />
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 21.0002L16.657 16.6572M16.657 16.6572C17.3999 15.9143 17.9892 15.0324 18.3912 14.0618C18.7933 13.0911 19.0002 12.0508 19.0002 11.0002C19.0002 9.9496 18.7933 8.90929 18.3913 7.93866C17.9892 6.96803 17.3999 6.08609 16.657 5.34321C15.9141 4.60032 15.0322 4.01103 14.0616 3.60898C13.0909 3.20693 12.0506 3 11 3C9.94942 3 8.90911 3.20693 7.93848 3.60898C6.96785 4.01103 6.08591 4.60032 5.34302 5.34321C3.84269 6.84354 2.99982 8.87842 2.99982 11.0002C2.99982 13.122 3.84269 15.1569 5.34302 16.6572C6.84335 18.1575 8.87824 19.0004 11 19.0004C13.1218 19.0004 15.1567 18.1575 16.657 16.6572Z"
                stroke="#707070"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </div>
        </div>
        <button 
          type="submit" 
          className="bg-[#8CC43f]  text-white px-9 py-3 rounded-lg hover:bg-[#8CC43f] transition-all ease-in-out duration-500 cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;