import { useEffect, useState } from "react";
import { X, Minus, Plus, ChevronRight, ArrowRight } from "lucide-react";
import { useCart } from "../hooks/useCart";
import BookingConfirmation from "./BookingConfirmation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartSidebar({ isOpen, onClose }: Props) {
  const { cartItems, updateQty, removeFromCart, totalPrice } = useCart();
  const [showBooking, setShowBooking] = useState(false);

  const handleClose = () => {
    setShowBooking(false);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-55 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-[400px] bg-[#FAF8F5] z-60 flex flex-col transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="py-6 px-6 text-center border-b border-[#E5E5E5]">
          <h2 className="text-3xl font-serif text-[#9D7646]">Giỏ Hàng</h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
          {cartItems.length === 0 && (
            <p className="text-center text-gray-400 mt-8">Giỏ hàng trống</p>
          )}

          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              {/* Main item */}
              <div className="flex gap-4 items-center">
                <div className="w-[60px] h-[60px] rounded-md overflow-hidden bg-gray-200 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <h4 className="text-[#3A2E22] font-semibold text-sm">
                        {item.name}
                      </h4>
                      {item.time && (
                        <div className="flex items-center gap-1 text-[#8e8e8e] text-[12px]">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {item.time}
                        </div>
                      )}
                    </div>
                    <button
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-[#8e8e8e] text-[13px]">
                      {item.price.toLocaleString()} đ
                    </p>
                    <div className="flex items-center gap-3 px-3 py-1 border border-[#9D7646] rounded-full">
                      <button onClick={() => updateQty(item.id, -1)}>
                        <Minus size={12} className="text-gray-500" />
                      </button>
                      <span className="text-sm text-[#3A2E22] font-medium min-w-[12px] text-center">
                        {item.qty}
                      </span>
                      <button onClick={() => updateQty(item.id, 1)}>
                        <Plus size={12} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-services (bonus) */}
              {item.subService && item.subService.length > 0 && (
                <div className="flex flex-col gap-3 pl-[80px] py-2">
                  {item.subService.map((sub) => (
                    <div key={sub.id} className="flex gap-3 items-center">
                      <div className="w-[40px] h-[40px] rounded-md overflow-hidden bg-gray-200 shrink-0">
                        <img
                          src={sub.image}
                          alt={sub.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 flex items-center justify-between">
                        <h4 className="text-[#3A2E22] font-medium text-[13px] leading-tight">
                          {sub.name}
                        </h4>
                        <div className="flex items-center gap-3 px-3 py-1 border border-[#9D7646] rounded-full">
                          <button>
                            <Minus size={12} className="text-gray-500" />
                          </button>
                          <span className="text-sm text-[#3A2E22] font-medium min-w-[12px] text-center">
                            {sub.qty}
                          </span>
                          <button>
                            <Plus size={12} className="text-gray-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-[#E5E5E5] flex flex-col gap-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Kỹ thuật viên</span>
            <button className="flex items-center gap-2 text-[#3A2E22] font-medium">
              <img
                src="/images/avatar-1.png"
                alt="Tech"
                className="w-[24px] h-[24px] rounded-full object-cover"
              />
              Vũ Thị Bích Phượng
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-[#3A2E22]">Tổng thanh toán</span>
            <span className="text-[#E55B3C] font-semibold text-lg">
              {totalPrice.toLocaleString()} đ
            </span>
          </div>

          <button
            onClick={() => setShowBooking(true)}
            className="w-full bg-[#824C08] text-white py-4 rounded flex justify-between items-center px-6 mt-2 hover:bg-[#683c06] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!cartItems.length}
          >
            <span className="font-semibold text-sm">Tiếp Tục</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Booking Confirmation */}
      <BookingConfirmation
        isOpen={showBooking}
        onClose={handleClose}
        onBack={() => setShowBooking(false)}
      />
    </>
  );
}
