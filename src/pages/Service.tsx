import React, { useState } from "react";
import MiniBanner from "../components/MiniBanner";
import { Search } from "lucide-react";
import ServiceSection from "../components/ServiceSection";
import { drinks, products } from "../data/products";
import { postFull } from "../data/posts";
import Post from "../components/Post";

function Service() {
  const [category, setCategory] = useState("COMBO");
  const [pageReview, setPageReview] = useState(1);

  const handdleChangeCategory = (category: string) => {
    setCategory(category);
  };

  const handleChangePageReview = (page: number) => setPageReview(page);

  console.log(pageReview);

  return (
    <div className="w-full h-full bg-[url('/images/bg-service.png')] bg-cover bg-center relative">
      {/** overlay */}
      <div className="w-full h-full bg-linear-to-t from-[#614F38] to-[#A47828]/80 pb-[48px] px-[96px]">
        {/** search */}
        <div className="flex pt-[140px] justify-between items-center">
          <div className="flex gap-6 text-white">
            <button
              onClick={() => handdleChangeCategory("COMBO")}
              className={`cursor-pointer ${category === "COMBO" ? "text-[#FCE48C]" : ""}`}
            >
              GÓI COMBO
            </button>
            <span>|</span>
            <button
              onClick={() => handdleChangeCategory("MEDICURE")}
              className={`cursor-pointer ${category === "MEDICURE" ? "text-[#FCE48C]" : ""}`}
            >
              MEDICURE
            </button>
            <span>|</span>
            <button
              onClick={() => handdleChangeCategory("PEDICURE")}
              className={`cursor-pointer ${category === "PEDICURE" ? "text-[#FCE48C]" : ""}`}
            >
              PEDICURE
            </button>
            <span>|</span>
            <button
              onClick={() => handdleChangeCategory("ANIMATION")}
              className={`cursor-pointer ${category === "ANIMATION" ? "text-[#FCE48C]" : ""}`}
            >
              HIỆU ỨNG
            </button>
          </div>

          <div className="flex items-center gap-2 border-b border-[#B19879] pb-3 text-white">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="outline-none focus:outline-none"
            />
            <Search color="white" size={24} />
          </div>
        </div>

        <div className="w-full ">
          <>
            {category !== "COMBO" ? (
              products
                .filter((p) => p.categoryType === category)
                .map((p, index) => (
                  <ServiceSection
                    key={p.categoryType}
                    title={p.categoryName}
                    content={p.services}
                    image={p.categoryImage}
                    isReverse={index % 2 === 1}
                  />
                ))
            ) : (
              <>
                {products.map((p, index) => (
                  <ServiceSection
                    key={p.categoryType}
                    title={p.categoryName}
                    content={p.services}
                    image={p.categoryImage}
                    isReverse={index % 2 === 1}
                  />
                ))}
                <ServiceSection
                  title={"Drinks"}
                  image="/images/drink.jpg"
                  drinks={drinks}
                />
              </>
            )}
          </>
        </div>
      </div>
      {/** poster section */}
      <div className="w-full bg-[url('/images/rating.png')] bg-cover bg-center">
        {/** overlay */}
        <div className="w-full h-full py-[96px] bg-linear-to-b from-[#81694B33] to-[#614F38] bg-opacity-90">
          <h1 className="text-3xl text-center text-white mb-4 uppercase tracking-[0.2em] font-light">
            Nhận xét từ
            <br />
            <span className="text-[120px] mt-4 inline-block font-serif normal-case tracking-normal">
              Khách Hàng
            </span>
          </h1>

          <div className="mt-16 px-[96px] w-full flex justify-center items-start gap-12">
            {postFull
              .slice((pageReview - 1) * 3, pageReview * 3)
              .map((p, index) => (
                <div
                  key={p.id}
                  className={`transition-all duration-300 w-[320px] ${index === 1 ? "w-[420px] z-10" : "mt-[160px] z-0"}`}
                >
                  <Post
                    postImage={p.postImage}
                    userAvatar={p.userAvatar}
                    userName={p.userName}
                    postContent={p.postContent}
                    classNames={index === 1 ? "line-clamp-4" : "line-clamp-3"}
                  />
                </div>
              ))}
          </div>

          <div className="mt-16 flex justify-center items-center gap-3">
            {[1, 2, 3, 4].map((i) =>
              i === pageReview ? (
                <button
                  className="w-6 h-6 rounded-full border border-white flex items-center justify-center cursor-pointer"
                  onClick={() => handleChangePageReview(i)}
                >
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </button>
              ) : (
                <button
                  className="w-2 h-2 rounded-full bg-white opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleChangePageReview(i)}
                ></button>
              ),
            )}
          </div>
        </div>
      </div>

      <MiniBanner />
    </div>
  );
}

export default Service;
