import React from "react";
import { X } from "lucide-react";

type NOTIFICATIONBOOKINGPROPS = {
  onClose: () => void;
  isOpen: boolean;
};

function NotificationBooking({ isOpen, onClose }: NOTIFICATIONBOOKINGPROPS) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center">
      {/** overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/** modal */}
      <div className="relative bg-[#FAF5EB] shadow-2xl px-[36px] py-[24px] w-[646px] min-h-[330px] text-center z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex justify-center mb-5">
          <div className="relative bg-[#E4D7B4] rounded-full p-4">
            <div className="w-16 h-16 rounded-full bg-[#F5F0E8] flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9D7646"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </div>
            <div className="absolute bottom-1 right-0 w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
        </div>

        <h3 className="text-[40px] text-[#222732] mb-3 font-normal">
          Gửi Yêu Cầu Thành Công!
        </h3>

        <p className="text-2xl text-[#715E28] leading-relaxed font-normal">
          Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
          thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm nhất.
        </p>
      </div>
    </div>
  );
}

export default NotificationBooking;
