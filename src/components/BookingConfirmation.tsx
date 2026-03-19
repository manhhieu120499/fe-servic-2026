import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useCart } from "../hooks/useCart";
import NotificationBooking from "./NotificationBooking";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
};

// Tạo 4 ngày kế tiếp từ hôm nay
function getUpcomingDays() {
  const dayNames = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const days = [];
  const today = new Date();
  for (let i = 0; i < 4; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayOfWeek = d.getDay();
    days.push({
      label: dayNames[dayOfWeek],
      date: `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`,
      key: i,
    });
  }
  return days;
}

const TIME_SLOTS = [
  { time: "09:00", period: "AM" },
  { time: "09:30", period: "AM" },
  { time: "10:00", period: "AM" },
  { time: "10:30", period: "AM" },
  { time: "11:00", period: "AM" },
  { time: "11:30", period: "AM" },
  { time: "12:00", period: "PM" },
  { time: "12:30", period: "PM", disabled: true },
  { time: "01:00", period: "PM" },
  { time: "01:30", period: "PM" },
  { time: "02:00", period: "PM" },
  { time: "02:30", period: "PM", disabled: true },
  { time: "03:00", period: "PM" },
  { time: "03:30", period: "PM" },
  { time: "04:00", period: "PM" },
  { time: "04:30", period: "PM" },
  { time: "05:00", period: "PM" },
  { time: "05:30", period: "PM" },
  { time: "06:00", period: "PM" },
  { time: "06:30", period: "PM" },
];

export default function BookingConfirmation({ isOpen, onClose }: Props) {
  const { clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    day?: string;
    time?: string;
  }>({});

  const days = getUpcomingDays();

  const handleBooking = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Vui lòng nhập tên khách hàng";
    }
    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    }
    if (selectedDay === null) {
      newErrors.day = "Vui lòng chọn ngày";
    }
    if (!selectedTime) {
      newErrors.time = "Vui lòng chọn khung giờ";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Clear cart, close panels, show success
    clearCart();
    onClose();
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setName("");
    setPhone("");
    setSelectedDay(null);
    setSelectedTime("");
    setErrors({});
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-55 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-[400px] bg-[#FAF8F5] z-60 flex flex-col transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="pt-8 pb-4 px-6 border-b border-[#E5E5E5]">
          <h2 className="text-3xl font-serif text-[#9D7646] italic text-center">
            Xác Nhận Đặt Lịch
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
          {/* Tên khách hàng */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[#8e8e8e]">Tên khách hàng</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name)
                  setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              className={`w-full pb-2 border-b bg-transparent text-[#3A2E22] text-base font-medium outline-none transition-colors ${
                errors.name
                  ? "border-red-400"
                  : "border-[#D4C5B0] focus:border-[#9D7646]"
              }`}
            />
            {errors.name && (
              <span className="text-xs text-red-500 mt-1">{errors.name}</span>
            )}
          </div>

          {/* Số điện thoại */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[#8e8e8e]">Số điện thoại</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone)
                  setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              className={`w-full pb-2 border-b bg-transparent text-[#3A2E22] text-base font-medium outline-none transition-colors ${
                errors.phone
                  ? "border-red-400"
                  : "border-[#D4C5B0] focus:border-[#9D7646]"
              }`}
            />
            {errors.phone && (
              <span className="text-xs text-red-500 mt-1">{errors.phone}</span>
            )}
          </div>

          {/* Chọn ngày */}
          <div className="flex flex-col gap-3">
            <label className="text-xs text-[#8e8e8e]">Chọn ngày</label>
            <div className="grid grid-cols-4 gap-2">
              {days.map((day) => (
                <button
                  key={day.key}
                  onClick={() => {
                    setSelectedDay(day.key);
                    if (errors.day)
                      setErrors((prev) => ({ ...prev, day: undefined }));
                  }}
                  className={`flex flex-col items-center py-3 rounded-lg text-center transition-all duration-200 cursor-pointer ${
                    selectedDay === day.key
                      ? "bg-[#E5A030] text-white"
                      : "border border-[#D4C5B0] text-[#3A2E22]"
                  }`}
                >
                  <span className="text-sm font-semibold">{day.label}</span>
                  <span
                    className={`text-xs mt-0.5 ${
                      selectedDay === day.key
                        ? "text-white/80"
                        : "text-[#8e8e8e]"
                    }`}
                  >
                    {day.date}
                  </span>
                </button>
              ))}
            </div>
            {errors.day && (
              <span className="text-xs text-red-500">{errors.day}</span>
            )}
          </div>

          {/* Chọn khung giờ */}
          <div className="flex flex-col gap-3">
            <label className="text-xs text-[#8e8e8e]">Chọn khung giờ</label>
            <div className="grid grid-cols-4 gap-2">
              {TIME_SLOTS.map((slot) => {
                const isSelected = selectedTime === slot.time;
                const isDisabled = slot.disabled;

                return (
                  <button
                    key={slot.time}
                    onClick={() => {
                      if (!isDisabled) {
                        setSelectedTime(slot.time);
                        if (errors.time)
                          setErrors((prev) => ({ ...prev, time: undefined }));
                      }
                    }}
                    disabled={isDisabled}
                    className={`flex flex-col items-center py-3 rounded-lg transition-all duration-200 ${
                      isSelected
                        ? "bg-[#6B5B3E] text-white cursor-pointer"
                        : isDisabled
                          ? "border border-[#E5E5E5] text-[#C8B68F] cursor-not-allowed"
                          : "border border-[#D4C5B0] text-[#3A2E22] hover:border-[#9D7646] cursor-pointer"
                    }`}
                  >
                    <span className="text-sm font-bold">{slot.time}</span>
                    <span
                      className={`text-[10px] mt-0.5 ${
                        isSelected
                          ? "text-white/80"
                          : isDisabled
                            ? "text-[#C8B68F]"
                            : "text-[#8e8e8e]"
                      }`}
                    >
                      {slot.period}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.time && (
              <span className="text-xs text-red-500">{errors.time}</span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-[#E5E5E5]">
          <button
            onClick={handleBooking}
            className="w-full bg-[#824C08] text-white py-4 rounded flex justify-between items-center px-6 hover:bg-[#683c06] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!name || !phone || !selectedTime || !selectedDay}
          >
            <span className="font-semibold text-sm">Đặt Lịch</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Success Modal */}
      <NotificationBooking isOpen={showSuccess} onClose={handleCloseSuccess} />
    </>
  );
}
