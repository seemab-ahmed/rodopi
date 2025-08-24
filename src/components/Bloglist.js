"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import featureImage from "../../public/service-hero-bg.jpg";
import { usePathname } from "next/navigation";


const BlogCard = ({ image, title, date, readTime, excerpt, newsId, locale }) => (
  <div className="flex flex-col lg:flex-row items-start gap-8 border-b-2 border-[#D6D6D6] pb-6 group hover:shadow-xl transition-all ease-in-out duration-400 md:pr-3 ">
    <Image
      width={100}
      height={100}
      src={image}
      alt={title}
      className="w-full max-w-full lg:max-w-[242px] 2xl:max-w-[375px] h-48 2xl:h-52 object-cover rounded-lg group-hover:shadow-xl"
    />
    <div className="flex-1 justify-between flex flex-col h-full">
      <h2 className="text-[18px] leading-[26px] font-[Inter] font-semibold mb-3.5 line-clamp-2 ">
        {title}
      </h2>
      <div className="flex gap-10 items-center text-sm mb-2.5">
        <span className="flex items-center gap-1.5 text-[#707070] text-[14px] font-[Inter] font-normal ">
          📅 {date}
        </span>
        <span className="flex items-center gap-1.5 text-[#707070] text-[14px] font-[Inter] font-normal ">
          {readTime}
        </span>
      </div>
      <p className="text-[#707070] text-[16px] font-[Inter] font-normal mb-3 line-clamp-2 ">
        {excerpt}
      </p>
      <div className="flex gap-5 justify-between flex-wrap">
        <Link href={`/${locale}/news/${newsId}`} className="bg-[#8CC43f] text-white text-[14px] font-[Inter] font-medium px-4 py-2 rounded-[8px]  transition-all ease-in-out duration-500 hover:bg-[##8CC43f] ">
          Read more
        </Link>
      </div>
    </div>
  </div>
);

const BlogList = ({ searchTerm = '', blogs }) => {
  console.log(blogs);

  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  // Get all blog posts from translations
  const allPosts = Object.entries(blogs).map(([newsId, blog]) => ({
    newsId,
    image: blog.image || "/service-hero-bg.jpg",
    title: blog.title,
    date: blog.date,
    readTime: blog.author,
    excerpt: blog.content?.[1]?.text || "",
    locale
  }));

  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search term (if it's 3 or more characters)
  const filteredPosts = searchTerm.length >= 3
    ? allPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : allPosts;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="px-5">
      <div className="sm:max-w-[540px] md:max-w-[720px]  lg:max-w-[960px] xl:max-w-[1170px] m-auto">
        <div className=" relative flex flex-col md:flex-row gap-10 border-t-2 border-[#D6D6D6] pt-[30px] md:pb-[100px] pb-[50px]">
          <div className="md:max-w-[774px] xl:max-w-[1050px] w-full flex flex-col gap-6">
            {currentPosts.length > 0 ? (
              currentPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))
            ) : (
              <div className="">
                <p className="text-[#707070] text-lg">No posts found matching your search.</p>
              </div>
            )}

            {filteredPosts.length > postsPerPage && (
              <div className="flex justify-center mt-6 gap-3">
                {(() => {
                  const visiblePages = 3;
                  let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
                  let endPage = startPage + visiblePages - 1;

                  if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = Math.max(endPage - visiblePages + 1, 1);
                  }

                  const pageNumbers = [];
                  for (let i = startPage; i <= endPage; i++) {
                    pageNumbers.push(i);
                  }

                  return (
                    <>
                      <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="hover:text-[##8CC43f] group  hover:bg-[#8CC43f] transition-all ease-in-out duration-500  w-[35px]  h-[35px] rounded-[50%] flex items-center justify-center border disabled:opacity-50"
                        disabled={currentPage === 1}
                      >
                        <svg className="cursor-pointer w-6 h-6 text-gray-800 dark:text-white group-hover:text-[#fff] transition-all ease-in-out duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                        </svg>
                      </button>
                      {pageNumbers.map((pageNum) => (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={` w-[35px]  h-[35px] rounded-[50%] border cursor-pointer hover:text-white hover:bg-[#8CC43f] transition-all ease-in-out duration-500 ${
                            currentPage === pageNum ? "bg-[#8CC43f] text-white" : ''
                          }`}
                        >
                          {pageNum}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className=" hover:bg-[#8CC43f] group hover:text-[##8CC43f] transition-all ease-in-out duration-500  w-[35px]  h-[35px] rounded-[50%] flex items-center justify-center border disabled:opacity-50"
                        disabled={currentPage === totalPages}
                      >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-[#fff] transition-all ease-in-out duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                        </svg>
                      </button>
                    </>
                  );
                })()}
              </div>
            )}
          </div>

        {/* Right sidebar remains unchanged */}
        <div className=" sticky top-0 h-fit right_main_col flex flex-wrap md:flex-col gap-6 md:max-w-[210px] lg:max-w-[300px]  2xl:max-w-[326px]  w-full">
          {/* Newsletter box */}
          {/* <div  className="bg-[#CED7FF4D] px-4 py-[14px] rounded-[8px] border-[#E3E3E3] border-[1px] text-center w-full sm:w-[48%] h-fit md:w-full transition-all ease-in-out duration-500 hover:shadow-xl">
            <div className="mx-auto rounded-full flex items-center justify-center">
              <span className="mb-2">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="#CED7FF"/>
                  <path d="M57.626 29.9545L53.1322 26.2106V17.7628C53.1322 16.8333 52.376 16.0772 51.4466 16.0772H40.9691L37.2767 13.001C35.9576 11.902 34.0425 11.902 32.7234 13.001L29.0309 16.0772H24.8031C24.0816 16.0772 23.4336 16.3498 22.9291 16.8655L17.6153 22.2985C17.1263 22.7983 16.8678 23.4321 16.8678 24.1314V26.2106L12.374 29.9545C11.5364 30.6522 11.0938 31.5971 11.0938 32.6872V54.2661C11.0938 56.2274 12.6894 57.823 14.6506 57.823H55.3494C57.3105 57.823 58.9062 56.2274 58.9062 54.2663L58.9062 32.6872C58.9062 31.5972 58.4636 30.6522 57.626 29.9545ZM57.2685 55.0048L44.0566 40.6842L57.4062 32.6953L57.4062 54.2663C57.4062 54.5266 57.357 54.7754 57.2685 55.0048ZM56.6659 31.107C56.7322 31.1622 56.7938 31.2198 56.8512 31.2796L53.1322 33.5051V28.1629L56.6659 31.107ZM33.6836 14.1534C34.4588 13.5076 35.5415 13.5076 36.3166 14.1534L38.6257 16.0772H31.3744L33.6836 14.1534ZM51.4466 17.5772C51.5472 17.5772 51.6322 17.6621 51.6322 17.7627V34.4027L36.0562 43.7237C35.3848 44.1256 34.615 44.1256 33.9437 43.7237L18.3678 34.4027V24.1313C18.3678 24.0771 18.372 24.0255 18.3782 23.9749H23.0142C23.98 23.9749 24.7657 23.1892 24.7657 22.2234V17.5788C24.7782 17.5785 24.7902 17.5772 24.8031 17.5772H51.4466ZM12.7315 55.0047C12.6429 54.7753 12.5938 54.5264 12.5938 54.2661V32.6952L25.9434 40.6841L12.7315 55.0047ZM23.2657 18.6665V22.2235C23.2657 22.3598 23.1506 22.475 23.0142 22.475H19.5408L23.2657 18.6665ZM13.3341 31.107L16.8678 28.1629V33.505L13.1488 31.2795C13.2063 31.2197 13.2678 31.1621 13.3341 31.107ZM14.6506 56.323C14.3273 56.323 14.0212 56.2477 13.7487 56.1142L27.2582 41.4709L33.1734 45.0108C33.7453 45.3531 34.3725 45.5242 34.9999 45.5242C35.6272 45.5242 36.2546 45.3532 36.8263 45.0109L42.7417 41.471L56.2513 56.1143C55.9788 56.2478 55.6727 56.3231 55.3494 56.3231H14.6506V56.323ZM24.4425 28.5353C23.9702 28.808 23.6322 29.2491 23.4906 29.7775C23.3647 30.2472 23.4087 30.7346 23.6115 31.169C23.0562 31.5861 22.6574 32.1739 22.474 32.8585C22.2572 33.6673 22.3673 34.5098 22.7836 35.2311C23.2 35.9524 23.8748 36.4689 24.6836 36.6857C24.9547 36.7583 25.2295 36.7942 25.5023 36.7942C25.9372 36.7942 26.3664 36.7013 26.7672 36.5218C27.0208 36.7817 27.339 36.9718 27.6998 37.0683C27.8766 37.1158 28.0558 37.1392 28.234 37.1392C28.4879 37.1391 28.7392 37.0907 28.9771 36.9967L31.1727 40.7996C31.4271 41.24 31.89 41.4865 32.3655 41.4865C32.5985 41.4865 32.8346 41.4272 33.0505 41.3027L34.175 40.6533C34.8312 40.2743 35.0569 39.4322 34.678 38.7758L32.5167 35.0321L40.889 33.1845C41.2369 33.6097 41.7543 33.8444 42.2842 33.8443C42.5893 33.8443 42.8985 33.7667 43.1812 33.6035C43.5967 33.3637 43.8942 32.9754 44.0188 32.5101C44.1435 32.0447 44.0801 31.5597 43.8402 31.1444L41.6375 27.329C41.981 26.9821 42.231 26.5497 42.3612 26.0636C42.5583 25.3281 42.4583 24.5618 42.0795 23.9058C41.7008 23.2499 41.0872 22.78 40.3516 22.583C39.8656 22.4527 39.3662 22.4531 38.8939 22.5771L36.6912 18.7618C36.1947 17.9022 35.0916 17.6065 34.2319 18.103C33.8165 18.3428 33.519 18.7311 33.3943 19.1963C33.2953 19.5659 33.3169 19.9472 33.4493 20.2969L27.5615 26.7349L24.4425 28.5353ZM40.0771 31.8273L32.4707 33.506L28.961 27.427L34.2179 21.6788L40.0771 31.8273ZM25.0718 35.2367C24.65 35.1236 24.2987 34.8553 24.0826 34.4809C23.8665 34.1066 23.8098 33.6683 23.9228 33.2465C24.0011 32.9542 24.1554 32.6972 24.3664 32.4942L25.9451 35.2285C25.6638 35.3098 25.364 35.3149 25.0718 35.2367ZM28.0881 35.6193C27.9467 35.5815 27.8291 35.4916 27.7567 35.3662L24.9929 30.5792C24.9206 30.4539 24.9015 30.3071 24.9394 30.1657C24.9773 30.0243 25.0672 29.9067 25.1925 29.8343L27.7623 28.3508L31.0714 34.0823L28.5017 35.5658C28.3763 35.6383 28.2295 35.6573 28.0881 35.6193ZM32.409 39.9407L30.2878 36.2667L31.195 35.7429L33.3162 39.417L32.409 39.9407ZM39.9634 24.0317C40.3119 24.125 40.602 24.3467 40.7804 24.6557C40.9588 24.9647 41.0056 25.3267 40.9123 25.6752C40.8897 25.7595 40.8593 25.8402 40.8223 25.9169L39.709 23.9887C39.794 23.995 39.8791 24.0091 39.9634 24.0317ZM34.8433 19.5843C34.8553 19.5391 34.8896 19.4551 34.9819 19.4018L34.982 19.4017C35.0344 19.3715 35.0859 19.3623 35.129 19.3623C35.1619 19.3623 35.1898 19.3677 35.2094 19.3729C35.2547 19.385 35.3387 19.4192 35.3921 19.5116L37.9191 23.8886C37.9192 23.8887 37.9192 23.8889 37.9193 23.889C37.9194 23.8891 37.9195 23.8892 37.9196 23.8893L40.0137 27.5163C40.0137 27.5164 40.0138 27.5165 40.0138 27.5166C40.0138 27.5167 40.0138 27.5167 40.0138 27.5168L42.5411 31.894C42.5943 31.9863 42.5819 32.0762 42.5698 32.1215C42.5577 32.1669 42.5235 32.2508 42.4311 32.3042C42.2903 32.3854 42.1023 32.3352 42.0209 32.1943L34.8719 19.8118C34.8188 19.7195 34.8312 19.6297 34.8433 19.5843ZM44.4936 25.1093H46.8837C47.2978 25.1093 47.6337 25.4451 47.6337 25.8593C47.6337 26.2735 47.2978 26.6093 46.8837 26.6093H44.4936C44.0794 26.6093 43.7436 26.2735 43.7436 25.8593C43.7436 25.4451 44.0794 25.1093 44.4936 25.1093ZM43.1343 22.4307L45.1846 21.2469C45.5434 21.0402 46.002 21.1628 46.2091 21.5215C46.4162 21.8802 46.2933 22.3389 45.9346 22.5461L43.8843 23.7298C43.7662 23.7979 43.6373 23.8303 43.51 23.8303C43.2508 23.8303 42.9987 23.6957 42.8597 23.4552C42.6527 23.0964 42.7756 22.6378 43.1343 22.4307ZM40.9452 20.4631L42.1402 18.3932C42.3473 18.0346 42.8058 17.9116 43.1647 18.1187C43.5234 18.3258 43.6463 18.7846 43.4392 19.1432L42.2442 21.2131C42.1052 21.4536 41.8531 21.5882 41.5939 21.5882C41.4667 21.5882 41.3378 21.5557 41.2196 21.4876C40.861 21.2805 40.7381 20.8218 40.9452 20.4631Z" fill="##8CC43f"/>
                </svg>
              </span>
            </div>
            <h3 className="text-sm font-semibold mb-[15px]  ">
              Sign up for our newsletter to find great value in your inbox
            </h3>
            <div className="flex items-center mt-3 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#F4F4F4] flex p-[10px] pr-9 w-full text-[14px] text-[#606060] leading-[20px] border border-[#DEDEDE] rounded-[8px] focus:outline-none"
              />
              <Link  href={"/"} className="absolute top-0 bottom-0 right-[3px] h-fit">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="34" height="100%" rx="6" fill="#8CC43f"/>
                  <path d="M10.3334 17H23.6667H10.3334ZM23.6667 17L18.6667 12L23.6667 17ZM23.6667 17L18.6667 22L23.6667 17Z" fill="white"/>
                  <path d="M10.3334 17H23.6667M23.6667 17L18.6667 12M23.6667 17L18.6667 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link >
            </div>
          </div> */}

          {/* Featured Post 1 */}
          <div   className="bg-[#F0F3FF] rounded-xl shadow-sm overflow-hidden w-full sm:w-[48%] h-fit md:w-full hover:shadow-xl ">
            <div className="relative">
              <Image width={100} height={100} src={featureImage} alt="Cyber Threats 2025" className="w-full h-auto mb-[11px]" />
              <span className="px-3 absolute top-[10px] left-[12px] bg-[##8CC43f] text-[12px]  py-0.5 rounded font-normal text-white ">
                Featured post
              </span>
            </div>
            <div className=" m-auto pb-[15px]">
              <h4 className=" px-4 text-[15px] text-[#1E1E1E] font-semibold mb-[11px] text-center group-hover:text-white  transition-all ease-in-out duration-500">
                Key Cyber Threats to Watch in 2025
              </h4>
              <Link href="/" className=" px-4 w-fit m-auto flex bg-[#8CC43f] text-white text-[14px] py-2 rounded hover:bg-[##8CC43f] transition-all ease-in-out duration-500">
                Read more
              </Link>
            </div>
          </div>

          {/* Featured Post 2 */}
          <div  className="bg-[#F0F3FF]  rounded-xl shadow-sm overflow-hidden p-1 w-full sm:w-[48%] h-fit md:w-full hover:shadow-xl ">
            <Image width={100} height={100} src={featureImage} alt="Voice Phishing Alert" className="w-full h-auto mb-[11px]" />
            <div className="pb-[12px]">
              <h4 className="px-4 text-[15px] text-[#1E1E1E] leading-[21px] font-semibold mb-2 text-center ">
                Voice Phishing Attacks: How to Prevent and Respond to Them
              </h4>
              <p className="px-4 text-[12px] text-[#707070] leading-[20px] font-normal mb-3 text-center  ">
                Have you ever received a call from an unknown number and wondered who could be on the other end? It could be a vishing scam.
              </p>
              <Link href="/" className="w-fit m-auto flex bg-[#8CC43f] text-white text-[14px] px-4 py-2 rounded hover:bg-[##8CC43f] transition-all ease-in-out duration-500">
                Read more
              </Link>
            </div>
          </div>

          {/* Categories */}
          {/* <div  className="w-full sm:w-[48%] h-fit md:w-full px-4">
            <h3 className="text-[18px] text-[#1E1E1E] leading-[26px] font-semibold mb-[10px]">More categories</h3>
            <div className="flex flex-wrap gap-[10px]">
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="bg-[#F2F2F2] transition-all ease-in-out duration-500 hover:bg-[##8CC43f] hover:text-[#fff]  text-[12px] text-[#1E1E1E] leading-[18px] font-normal px-[10px] py-[6px] rounded-[4px]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
   </div>
  );
};
// data-aos="zoom-in" data-aos-duration="2000"
export default BlogList;