import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function BlogDetail({ blog, allBlogs }) {
  return (
    <div className="">
      {/* <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500">
        By {blog.author} | {blog.date}
      </p>
      <p className="mt-4 text-base text-gray-700">{blog.content}</p> */}

      <div className="bg-gray-50 px-5 md:pt-[120px] pt-[80px] pb-[66px]">
        <div className="relative flex md:flex-row flex-col gap-10 justify-between sm:max-w-[540px] md:max-w-[720px]  lg:max-w-[960px] xl:max-w-[1170px]  m-auto">
          {/* Main Content */}
          <div className="md:max-w-[774px] lg:max-w-[890px] w-full flex flex-col gap-6">
            {/* Blog Title */}
            <h1 className="text-[#1E1E1E] md:text-[32px] text-[22px] font-semibold md:leading-[46px]">
              {blog.title}
            </h1>

            {/* blog main Image */}
            {/* data-aos="zoom-in" data-aos-duration="2000" */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={blog.image}
                alt="Tech Image"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 774px) 100vw, 774px"
                priority
              />
            </div>

            {/* Blog Content */}
            <div className="flex flex-col gap-6 border-b border-[#D1D1D1] pb-[40px]">
              {blog.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-[#1E1E1E] text-[16px] font-normal"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-[#1E1E1E] text-[18px] font-semibold"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul
                      key={index}
                      className="list-decimal ml-5 text-[#1E1E1E] text-[16px] font-normal"
                    >
                      {block.items.map((item, idx) => (
                        <li
                          key={idx}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:max-w-[242px]  w-full flex md:flex-col gap-6 md:flex-nowrap flex-wrap sticky top-0 h-fit">
            {/* Search Box */}
            <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-2xl transition-all ease-in-out duration-500 w-full">
              <h3 className="font-semibold text-[#1E1E1E] text-[18px] mb-5">
                Search
              </h3>
              <div className="flex justify-between gap-1">
                <div className="relative w-full md:max-w-xs">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-8 pr-2 py-2 border border-[#D6D6D6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B5795]"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3333 10.1709L13 12.8354M1 6.17418C1 7.58751 1.5619 8.94295 2.5621 9.94233C3.56229 10.9417 4.91885 11.5031 6.33333 11.5031C7.74782 11.5031 9.10438 10.9417 10.1046 9.94233C11.1048 8.94295 11.6667 7.58751 11.6667 6.17418C11.6667 4.76085 11.1048 3.40541 10.1046 2.40603C9.10438 1.40666 7.74782 0.845215 6.33333 0.845215C4.91885 0.845215 3.56229 1.40666 2.5621 2.40603C1.5619 3.40541 1 4.76085 1 6.17418Z"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <Link
                  href={"/"}
                  className="bg-[#8CC43f] text-white px-4 py-2 rounded-md hover:bg-[#8CC43f] transition-all ease-in-out duration-500"
                >
                  Search
                </Link>
              </div>
            </div>
            {/* Recent Posts */}
            <div className="bg-white shadow-sm p-3 rounded-lg hover:shadow-2xl transition-all ease-in-out duration-500 w-full">
              <h3 className="font-semibold text-[#1E1E1E] text-[18px] mb-5">
                Recent Posts
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-[#1E1E1E] text-[14px] font-normal">
                {Object.entries(allBlogs || {}).map(
                  ([newsId, blogItem], index) => (
                    <li key={index}>
                      <Link href={`/news/${newsId}`}>{blogItem.title}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Categories */}
          </div>
          {/* data-aos="zoom-in" data-aos-duration="2000" */}
        </div>
      </div>
    </div>
  );
}
