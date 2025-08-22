
import React, { useState } from "react";
import Image from "next/image";

import Blogimg1 from "../../public/service-hero-bg.jpg";
import FeaturedPost from "../../public/service-hero-bg.jpg";
import Link from "next/link";

const BlogCard = ({ image, title, date, readTime, excerpt, slug }) => (
  <div className="flex flex-col lg:flex-row items-start gap-8 border-b-2 border-[#D6D6D6] pb-6 group hover:shadow-xl transition-all ease-in-out duration-400 md:pr-3 ">
    <Image
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
        <Link href={`/blog/${slug}`} className="bg-[#8CC43f] text-white text-[14px] font-[Inter] font-medium px-4 py-2 rounded-[8px]  transition-all ease-in-out duration-500 hover:bg-[##8CC43f] ">
          Read more
        </Link>
        {/* <ul className="flex gap-2 items-center"> 
          <li>
            <Link href={"/"} className="text-[#707070] hover:text-[##8CC43f] transition-all ease-in-out duration-500">
              <svg width="54" height="20" viewBox="0 0 54 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 12.3798C10.0567 12.3798 9.66 12.5548 9.35667 12.829L5.1975 10.4082C5.22667 10.274 5.25 10.1398 5.25 9.99984C5.25 9.85984 5.22667 9.72567 5.1975 9.5915L9.31 7.194C9.625 7.48567 10.0392 7.6665 10.5 7.6665C11.4683 7.6665 12.25 6.88484 12.25 5.9165C12.25 4.94817 11.4683 4.1665 10.5 4.1665C9.53167 4.1665 8.75 4.94817 8.75 5.9165C8.75 6.0565 8.77333 6.19067 8.8025 6.32484L4.69 8.72234C4.375 8.43067 3.96083 8.24984 3.5 8.24984C2.53167 8.24984 1.75 9.0315 1.75 9.99984C1.75 10.9682 2.53167 11.7498 3.5 11.7498C3.96083 11.7498 4.375 11.569 4.69 11.2773L8.84333 13.704C8.81417 13.8265 8.79667 13.9548 8.79667 14.0832C8.79667 15.0223 9.56083 15.7865 10.5 15.7865C11.4392 15.7865 12.2033 15.0223 12.2033 14.0832C12.2033 13.144 11.4392 12.3798 10.5 12.3798ZM10.5 5.33317C10.8208 5.33317 11.0833 5.59567 11.0833 5.9165C11.0833 6.23734 10.8208 6.49984 10.5 6.49984C10.1792 6.49984 9.91667 6.23734 9.91667 5.9165C9.91667 5.59567 10.1792 5.33317 10.5 5.33317ZM3.5 10.5832C3.17917 10.5832 2.91667 10.3207 2.91667 9.99984C2.91667 9.679 3.17917 9.4165 3.5 9.4165C3.82083 9.4165 4.08333 9.679 4.08333 9.99984C4.08333 10.3207 3.82083 10.5832 3.5 10.5832ZM10.5 14.6782C10.1792 14.6782 9.91667 14.4157 9.91667 14.0948C9.91667 13.774 10.1792 13.5115 10.5 13.5115C10.8208 13.5115 11.0833 13.774 11.0833 14.0948C11.0833 14.4157 10.8208 14.6782 10.5 14.6782Z" fill="currentColor"/>
              <path d="M23.7082 7.36364C23.6486 6.85985 23.4066 6.46875 22.9824 6.19034C22.5582 5.91193 22.0378 5.77273 21.4213 5.77273C20.9706 5.77273 20.5761 5.84564 20.2381 5.99148C19.9033 6.13731 19.6415 6.33783 19.4526 6.59304C19.267 6.84825 19.1742 7.13826 19.1742 7.46307C19.1742 7.73485 19.2388 7.96851 19.368 8.16406C19.5006 8.3563 19.6697 8.51705 19.8751 8.64631C20.0806 8.77225 20.2961 8.87666 20.5215 8.95952C20.7468 9.03906 20.954 9.10369 21.1429 9.15341L22.177 9.43182C22.4421 9.50142 22.7371 9.59754 23.0619 9.72017C23.3901 9.8428 23.7033 10.0102 24.0016 10.2223C24.3032 10.4311 24.5518 10.6996 24.7473 11.0277C24.9429 11.3558 25.0406 11.7585 25.0406 12.2358C25.0406 12.786 24.8965 13.2831 24.6081 13.7273C24.3231 14.1714 23.9055 14.5244 23.3553 14.7862C22.8084 15.0481 22.1439 15.179 21.3617 15.179C20.6325 15.179 20.0011 15.0613 19.4675 14.826C18.9372 14.5907 18.5196 14.2625 18.2146 13.8416C17.913 13.4207 17.7423 12.9318 17.7026 12.375H18.9753C19.0084 12.7595 19.1377 13.0777 19.3631 13.3295C19.5918 13.5781 19.8801 13.7637 20.2281 13.8864C20.5795 14.0057 20.9573 14.0653 21.3617 14.0653C21.8323 14.0653 22.2549 13.9891 22.6294 13.8366C23.0039 13.6809 23.3006 13.4654 23.5193 13.1903C23.7381 12.9119 23.8474 12.5871 23.8474 12.2159C23.8474 11.8778 23.753 11.6027 23.5641 11.3906C23.3751 11.1785 23.1266 11.0062 22.8183 10.8736C22.5101 10.741 22.177 10.625 21.819 10.5256L20.5662 10.1676C19.7707 9.93892 19.141 9.61245 18.677 9.18821C18.213 8.76397 17.981 8.20881 17.981 7.52273C17.981 6.95265 18.1351 6.45549 18.4433 6.03125C18.7549 5.60369 19.1725 5.27225 19.6962 5.03693C20.2232 4.7983 20.8115 4.67898 21.4611 4.67898C22.1173 4.67898 22.7007 4.79664 23.2111 5.03196C23.7215 5.26397 24.1259 5.58215 24.4242 5.98651C24.7258 6.39086 24.8849 6.8499 24.9014 7.36364H23.7082ZM27.802 10.4062V15H26.6287V4.81818H27.802V8.55682H27.9014C28.0804 8.16241 28.3489 7.84919 28.7068 7.61719C29.0681 7.38187 29.5487 7.2642 30.1486 7.2642C30.669 7.2642 31.1247 7.36861 31.5158 7.57741C31.9069 7.78291 32.2101 8.09943 32.4256 8.52699C32.6443 8.95123 32.7537 9.49148 32.7537 10.1477V15H31.5804V10.2273C31.5804 9.62074 31.423 9.15175 31.1081 8.82031C30.7966 8.48556 30.364 8.31818 29.8105 8.31818C29.4261 8.31818 29.0814 8.39938 28.7764 8.56179C28.4748 8.72419 28.2362 8.96117 28.0605 9.27273C27.8882 9.58428 27.802 9.96212 27.802 10.4062ZM36.8674 15.179C36.3834 15.179 35.9443 15.0878 35.5499 14.9055C35.1555 14.7199 34.8423 14.4531 34.6102 14.1051C34.3782 13.7538 34.2622 13.3295 34.2622 12.8324C34.2622 12.3949 34.3484 12.0402 34.5208 11.7685C34.6931 11.4934 34.9235 11.2779 35.2118 11.1222C35.5002 10.9664 35.8183 10.8504 36.1664 10.7741C36.5177 10.6946 36.8707 10.6316 37.2253 10.5852C37.6893 10.5256 38.0655 10.4808 38.3539 10.451C38.6455 10.4179 38.8576 10.3632 38.9902 10.2869C39.1261 10.2107 39.1941 10.0781 39.1941 9.8892V9.84943C39.1941 9.3589 39.0598 8.97775 38.7914 8.70597C38.5262 8.43419 38.1235 8.2983 37.5833 8.2983C37.0231 8.2983 36.584 8.42093 36.2658 8.66619C35.9476 8.91146 35.7239 9.1733 35.5946 9.4517L34.481 9.05398C34.6799 8.58996 34.945 8.22869 35.2764 7.97017C35.6112 7.70833 35.9758 7.52604 36.3702 7.4233C36.7679 7.31723 37.159 7.2642 37.5435 7.2642C37.7888 7.2642 38.0705 7.29403 38.3887 7.35369C38.7102 7.41004 39.02 7.5277 39.3183 7.70668C39.62 7.88565 39.8702 8.15578 40.0691 8.51705C40.2679 8.87831 40.3674 9.36222 40.3674 9.96875V15H39.1941V13.9659H39.1344C39.0549 14.1316 38.9223 14.3089 38.7367 14.4979C38.5511 14.6868 38.3041 14.8475 37.9959 14.9801C37.6877 15.1127 37.3115 15.179 36.8674 15.179ZM37.0463 14.125C37.5103 14.125 37.9014 14.0339 38.2196 13.8516C38.5411 13.6693 38.7831 13.4339 38.9455 13.1456C39.1112 12.8572 39.1941 12.554 39.1941 12.2358V11.1619C39.1443 11.2216 39.035 11.2763 38.8659 11.326C38.7002 11.3724 38.508 11.4138 38.2892 11.4503C38.0738 11.4834 37.8633 11.5133 37.6578 11.5398C37.4557 11.563 37.2916 11.5829 37.1656 11.5994C36.8607 11.6392 36.5757 11.7038 36.3105 11.7933C36.0487 11.8795 35.8366 12.0104 35.6742 12.1861C35.5151 12.3584 35.4355 12.5937 35.4355 12.892C35.4355 13.2997 35.5863 13.608 35.8879 13.8168C36.1929 14.0223 36.579 14.125 37.0463 14.125ZM42.2289 15V7.36364H43.3624V8.51705H43.4419C43.5811 8.1392 43.833 7.83262 44.1976 7.5973C44.5622 7.36198 44.9732 7.24432 45.4306 7.24432C45.5167 7.24432 45.6245 7.24597 45.7537 7.24929C45.883 7.2526 45.9808 7.25758 46.047 7.2642V8.45739C46.0073 8.44744 45.9161 8.43253 45.7736 8.41264C45.6344 8.38944 45.4869 8.37784 45.3311 8.37784C44.9599 8.37784 44.6285 8.45573 44.3368 8.61151C44.0485 8.76397 43.8198 8.97609 43.6507 9.24787C43.485 9.51634 43.4022 9.82292 43.4022 10.1676V15H42.2289ZM50.1271 15.1591C49.3913 15.1591 48.7566 14.9967 48.223 14.6719C47.6927 14.3438 47.2834 13.8864 46.995 13.2997C46.71 12.7098 46.5675 12.0237 46.5675 11.2415C46.5675 10.4593 46.71 9.76989 46.995 9.1733C47.2834 8.57339 47.6844 8.10606 48.1982 7.77131C48.7152 7.43324 49.3184 7.2642 50.0078 7.2642C50.4055 7.2642 50.7983 7.33049 51.1861 7.46307C51.5739 7.59564 51.9268 7.81108 52.245 8.10938C52.5632 8.40436 52.8168 8.79545 53.0057 9.28267C53.1946 9.76989 53.2891 10.3698 53.2891 11.0824V11.5795H47.4027V10.5653H52.0959C52.0959 10.1345 52.0097 9.75 51.8374 9.41193C51.6683 9.07386 51.4264 8.80705 51.1115 8.61151C50.8 8.41596 50.4321 8.31818 50.0078 8.31818C49.5405 8.31818 49.1361 8.43419 48.7947 8.66619C48.4567 8.89489 48.1965 9.19318 48.0142 9.56108C47.8319 9.92898 47.7408 10.3234 47.7408 10.7443V11.4205C47.7408 11.9972 47.8402 12.486 48.0391 12.8871C48.2412 13.2848 48.5213 13.5881 48.8793 13.7969C49.2372 14.0024 49.6532 14.1051 50.1271 14.1051C50.4354 14.1051 50.7138 14.062 50.9624 13.9759C51.2143 13.8864 51.4313 13.7538 51.6136 13.5781C51.7959 13.3991 51.9368 13.1771 52.0362 12.9119L53.1697 13.2301C53.0504 13.6146 52.8499 13.9527 52.5682 14.2443C52.2865 14.5327 51.9384 14.758 51.5241 14.9205C51.1098 15.0795 50.6442 15.1591 50.1271 15.1591Z" fill="currentColor"/>
              </svg>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-[#707070] hover:text-[##8CC43f] transition-all ease-in-out duration-500" >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.2272 0H0.7728C0.3458 0 0 0.3458 0 0.7728V13.2272C0 13.6542 0.3458 14 0.7728 14H7.4774V8.5785H5.6532V6.4659H7.4774V4.907C7.4774 3.0982 8.582 2.114 10.1955 2.114C10.9683 2.114 11.6319 2.1714 11.8258 2.1973V4.0873H10.7072C9.8294 4.0873 9.66 4.5045 9.66 5.1163V6.4652H11.7523L11.4793 8.5778H9.6593V14H13.2272C13.6542 14 14 13.6542 14 13.2272V0.7728C14 0.3458 13.6542 0 13.2272 0Z" fill="currentColor"/>
              </svg>

            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-[#707070] hover:text-[##8CC43f] transition-all ease-in-out duration-500">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 -0.145996C0.896875 -0.145996 0 0.769564 0 1.89567V12.104C0 13.2301 0.896875 14.1457 2 14.1457H12C13.1031 14.1457 14 13.2301 14 12.104V1.89567C14 0.769564 13.1031 -0.145996 12 -0.145996H2ZM11.2844 2.53369L8.04062 6.31716L11.8562 11.466H8.86875L6.53125 8.34287L3.85313 11.466H2.36875L5.8375 7.41774L2.17812 2.53369H5.24062L7.35625 5.38883L9.8 2.53369H11.2844ZM10.1031 10.56L4.79375 3.39183H3.90937L9.27812 10.56H10.1H10.1031Z" fill="currentColor"/>
              </svg>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-[#707070] hover:text-[##8CC43f] transition-all ease-in-out duration-500">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1111 0C11.1425 0 12.1317 0.409721 12.861 1.13903C13.5903 1.86834 14 2.85749 14 3.88889V10.1111C14 11.1425 13.5903 12.1317 12.861 12.861C12.1317 13.5903 11.1425 14 10.1111 14H3.88889C2.85749 14 1.86834 13.5903 1.13903 12.861C0.409721 12.1317 0 11.1425 0 10.1111V3.88889C0 2.85749 0.409721 1.86834 1.13903 1.13903C1.86834 0.409721 2.85749 0 3.88889 0H10.1111ZM7 3.88889C6.17488 3.88889 5.38356 4.21667 4.80011 4.80011C4.21667 5.38356 3.88889 6.17488 3.88889 7C3.88889 7.82512 4.21667 8.61644 4.80011 9.19989C5.38356 9.78333 6.17488 10.1111 7 10.1111C7.82512 10.1111 8.61644 9.78333 9.19989 9.19989C9.78333 8.61644 10.1111 7.82512 10.1111 7C10.1111 6.17488 9.78333 5.38356 9.19989 4.80011C8.61644 4.21667 7.82512 3.88889 7 3.88889ZM7 5.44444C7.41256 5.44444 7.80822 5.60833 8.09994 5.90006C8.39167 6.19178 8.55556 6.58744 8.55556 7C8.55556 7.41256 8.39167 7.80822 8.09994 8.09994C7.80822 8.39167 7.41256 8.55556 7 8.55556C6.58744 8.55556 6.19178 8.39167 5.90006 8.09994C5.60833 7.80822 5.44444 7.41256 5.44444 7C5.44444 6.58744 5.60833 6.19178 5.90006 5.90006C6.19178 5.60833 6.58744 5.44444 7 5.44444ZM10.5 2.72222C10.2937 2.72222 10.0959 2.80417 9.95003 2.95003C9.80417 3.09589 9.72222 3.29372 9.72222 3.5C9.72222 3.70628 9.80417 3.90411 9.95003 4.04997C10.0959 4.19583 10.2937 4.27778 10.5 4.27778C10.7063 4.27778 10.9041 4.19583 11.05 4.04997C11.1958 3.90411 11.2778 3.70628 11.2778 3.5C11.2778 3.29372 11.1958 3.09589 11.05 2.95003C10.9041 2.80417 10.7063 2.72222 10.5 2.72222Z" fill="currentColor"/>
              </svg>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-[#707070] hover:text-[##8CC43f] transition-all ease-in-out duration-500">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4444 0C12.857 0 13.2527 0.163888 13.5444 0.455612C13.8361 0.747335 14 1.143 14 1.55556V12.4444C14 12.857 13.8361 13.2527 13.5444 13.5444C13.2527 13.8361 12.857 14 12.4444 14H1.55556C1.143 14 0.747335 13.8361 0.455612 13.5444C0.163888 13.2527 0 12.857 0 12.4444V1.55556C0 1.143 0.163888 0.747335 0.455612 0.455612C0.747335 0.163888 1.143 0 1.55556 0H12.4444ZM12.0556 12.0556V7.93333C12.0556 7.26086 11.7884 6.61593 11.3129 6.14042C10.8374 5.66492 10.1925 5.39778 9.52 5.39778C8.85889 5.39778 8.08889 5.80222 7.71556 6.40889V5.54556H5.54556V12.0556H7.71556V8.22111C7.71556 7.62222 8.19778 7.13222 8.79667 7.13222C9.08546 7.13222 9.36242 7.24694 9.56663 7.45115C9.77083 7.65536 9.88556 7.93232 9.88556 8.22111V12.0556H12.0556ZM3.01778 4.32444C3.36433 4.32444 3.69668 4.18678 3.94173 3.94173C4.18678 3.69668 4.32444 3.36433 4.32444 3.01778C4.32444 2.29444 3.74111 1.70333 3.01778 1.70333C2.66917 1.70333 2.33483 1.84182 2.08833 2.08833C1.84182 2.33483 1.70333 2.66917 1.70333 3.01778C1.70333 3.74111 2.29444 4.32444 3.01778 4.32444ZM4.09889 12.0556V5.54556H1.94444V12.0556H4.09889Z" fill="currentColor"/>
              </svg>
            </Link>
          </li>
        </ul> */}
      </div>
     
    </div>
  </div>
);

const BlogList = ({ searchTerm = '' }) => {
   const allPosts = [
    {
      slug: 'European-Distribution-Service-Partner',
      image: Blogimg1,
      title:
        "RODOPI Announced as European Distribution & Service Partner for Carmel Corrosion Systems (CCS)",
      date: "09. Juli 2024",
      readTime: "Pressemitteilung",
      
      excerpt:
        "RODOPI is excited to announce its new role as the European distribution and service partner for Carmel Corrosion Systems (CCS), a leader in corrosion protection technology. This partnership aims to establish CCS’s advanced corrosion protection solutions across Europe....",
    },
  {
      slug: 'European-Distribution-Service-Partner',
      image: Blogimg1,
      title:
        "RODOPI Announced as European Distribution & Service Partner for Carmel Corrosion Systems (CCS)",
      date: "09. Juli 2024",
      readTime: "Pressemitteilung",
      
      excerpt:
        "RODOPI is excited to announce its new role as the European distribution and service partner for Carmel Corrosion Systems (CCS), a leader in corrosion protection technology. This partnership aims to establish CCS’s advanced corrosion protection solutions across Europe....",
    },
  {
      slug: 'European-Distribution-Service-Partner',
      image: Blogimg1,
      title:
        "RODOPI Announced as European Distribution & Service Partner for Carmel Corrosion Systems (CCS)",
      date: "09. Juli 2024",
      readTime: "Pressemitteilung",
      
      excerpt:
        "RODOPI is excited to announce its new role as the European distribution and service partner for Carmel Corrosion Systems (CCS), a leader in corrosion protection technology. This partnership aims to establish CCS’s advanced corrosion protection solutions across Europe....",
    }];
  
  // const categories = [
  //   "Security culture", "Saas security", "Vulnerability management",
  //   "Data loss prevention", "Dora act", "Zero trust",
  //   "Fraud detection", "HIPAA compliance",
  // ];
  
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
              <Image src={FeaturedPost} alt="Cyber Threats 2025" className="w-full h-auto mb-[11px]" />
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
            <Image src={FeaturedPost} alt="Voice Phishing Alert" className="w-full h-auto mb-[11px]" />
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