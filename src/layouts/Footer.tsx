import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#291E0A] px-[96px] py-[64px] flex flex-col gap-32 relative">
      {/** footer top */}
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[80px] h-[80px] object-cover rounded-full"
            />
            <p className="text-center">
              <span className="text-[36px] text-white">THE OM</span>
              <br />
              <span className="text-[18px] text-white">LOUNGUE</span>
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-24">
          {/** section top */}
          <div className="flex">
            {/** col 1 */}
            <div className="flex-1 flex flex-col gap-8">
              <p className="text-[10px] text-[#B19879]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#B19879] inline-block mr-1" />
                <span className="w-[8px] h-[8px] rounded-full bg-transparent border border-[#B19879]  inline-block mr-4" />
                SITE MAP
              </p>
              <ul className="list-none text-[28px] text-white tracking-wide">
                <Link to="/">
                  <li>Trang chủ</li>
                </Link>
                <Link to="/introduce">
                  <li>Giới thiệu</li>
                </Link>
                <Link to="/service">
                  <li>Dịch vụ</li>
                </Link>
              </ul>
            </div>

            {/** col 2 */}
            <div className="flex-1 flex flex-col gap-8">
              <span className="invisible">""</span>
              <ul className="list-none text-[28px] text-white tracking-wide">
                <Link to="/news">
                  <li>Tin tức</li>
                </Link>
                <Link to="/contact">
                  <li>Liên hệ</li>
                </Link>
              </ul>
            </div>
          </div>

          {/** section bottom */}
          <div className="flex">
            <div className="flex-1 flex flex-col gap-8">
              <p className="text-[10px] text-[#B19879]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#B19879] inline-block mr-1" />
                <span className="w-[8px] h-[8px] rounded-full bg-transparent border border-[#B19879]  inline-block mr-4" />
                LIÊN HỆ
              </p>
              <ul className="list-none text-[14px] text-white tracking-wide flex flex-col gap-2 w-[80%]">
                <li>+84 89 812 12 97</li>
                <li>
                  6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh (gần Crescent Mall)
                </li>
                <li className="flex gap-2">
                  <div>
                    <p>Thứ 2 - Thứ 6:</p>
                    <p>Thứ 7 - Chủ Nhật:</p>
                  </div>
                  <div>
                    <p>09:00 - 19:00</p>
                    <p>09:00 - 20:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex-1 relative">
              <div className="bg-[url('/images/shape.png')] bg-cover bg-center w-[256px] h-[169px] absolute -top-6">
                <button className="text-[14px] font-semibold text-[#FCE48C] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Đặt lịch ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** footer bottom */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-7">
          <img src="/images/mage_facebook.png" alt="" />
          <img src="/images/ri_tiktok-fill.png" alt="" />
          <img src="/images/zalo.png" alt="" />
        </div>
        <p className="text-[#625B5A] text-[10px] font-medium">
          © 2025 — Copyright The OM Lounge. All rights reserved.
        </p>
      </div>

      {/** image conner */}
      <img
        src="/images/flower.png"
        className="w-[189px] h-[180px] object-cover absolute right-0 top-0"
      />
    </footer>
  );
}

export default Footer;
