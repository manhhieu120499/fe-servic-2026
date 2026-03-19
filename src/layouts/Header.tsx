
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import { ShoppingCart } from "lucide-react";
import { ROUTES } from "../routes/route";
import CartSidebar from "../components/CartSidebar";
import { useCart } from "../hooks/useCart";

function Header() {
  let location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { cartCount } = useCart();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/** Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${
          isScrolled ? "translate-y-0 shadow-lg" : "-translate-y-full"
        } bg-[#3A2E22]`}
      >
        <div className="w-full flex items-center justify-between py-2 px-[96px]">
          {/** logo left */}
          <div className="flex gap-4 items-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <p className="text-left leading-tight">
              <span className="text-[20px] text-white">THE OM</span>
              <br />
              <span className="text-[12px] text-white/80 uppercase tracking-widest">
                LOUNGE
              </span>
            </p>
          </div>

          {/** nav center */}
          <nav className="flex items-center justify-center gap-[40px] text-white/90">
            {ROUTES.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-center font-medium text-[15px] pb-1 ${
                  location.pathname === route.path
                    ? "text-[#E1C084] border-b-2 border-[#E1C084]"
                    : "hover:text-[#E1C084] transition-colors"
                }`}
              >
                <span>{route.name}</span>
              </Link>
            ))}
          </nav>

          {/** language & cart right */}
          <div className="flex items-center gap-[40px]">
            <p className="text-sm text-white font-medium">ENGLISH</p>
            <div onClick={() => setIsCartOpen(true)}>
              <Button
                title="GIỎ HÀNG"
                leftIcon={<ShoppingCart color="#824C08" size={20} />}
                rightIcon={
                  <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#824C08]">
                    <span className="text-xs text-white font-medium">{cartCount}</span>
                  </div>
                }
                classNames="flex items-center gap-[8px] bg-[#FCE48C] py-[8px] px-[16px] text-sm text-[#824C08] font-bold cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-[url('/images/banner.png')] h-[600px] bg-cover bg-center">
        <div className="w-full h-full bg-linear-to-t from-black/80 to-transparent">
          <header className="w-full h-[170px] bg-transparent">
            {/** default header */}
            <div className="w-full flex flex-col gap-[12px] ">
              {/** header top */}
              <div className="w-full flex items-center justify-between py-[24px] px-[96px]">
                <p className="text-base text-white w-[193px]">ENGLISH</p>
                {/** logo */}
                <div className="flex gap-2 items-center justify-center">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="w-[60px] h-[60px] object-cover rounded-full"
                  />
                  <p className="text-center leading-tight">
                    <span className="text-[36px] text-white">THE OM</span>
                    <br />
                    <span className="text-[18px] text-white uppercase tracking-widest">
                      LOUNGE
                    </span>
                  </p>
                </div>

                <div onClick={() => setIsCartOpen(true)}>
                  <Button
                    title="GIỎ HÀNG"
                    leftIcon={<ShoppingCart color="white" size={24} />}
                    rightIcon={
                      <div className="w-[24px] h-[24px] rounded-full bg-[#E5E3DC] flex items-center justify-center">
                        <span className="text-base text-[#824C08] font-medium">
                          {cartCount}
                        </span>
                      </div>
                    }
                    classNames="flex items-center gap-[12px] bg-[#824C08] py-[12px] px-[20px] text-base text-white cursor-pointer hover:bg-[#6a3e07] transition-colors"
                  />
                </div>
              </div>
              <nav className="w-full flex items-center justify-center gap-[62px] text-white">
                {ROUTES.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`text-center font-semibold text-[20px] pb-1 ${
                      location.pathname === route.path
                        ? "text-[#E1C084] border-b-2 border-[#E1C084]"
                        : "hover:text-[#E1C084] transition-colors"
                    }`}
                  >
                    <span>{route.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <p className="text-[128px] absolute bottom-0 left-0 right-0 text-center text-white z-10 leading-none">
            {ROUTES.filter((r) => r.path === location.pathname)[0]?.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
