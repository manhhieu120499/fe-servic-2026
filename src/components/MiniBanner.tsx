import React from "react";
import Button from "../ui/Button";

export default function MiniBanner() {
  return (
    <div className="w-full h-[600px] bg-[url('/images/mini-banner.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <div className="w-[836px] text-center">
        <h1 className="text-7xl text-white">Đặt lịch hẹn chữa lành</h1>
        <p className="text-2xl text-white/80 mt-4">
          Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ
          những điều nhỏ nhất và lan tỏa đến cả tâm hồn.
        </p>
        <Button title="TRẢI NGHIỆM NGAY" classNames="px-4 py-3 bg-white mt-6" />
      </div>
    </div>
  );
}
