import Home from "../pages/Home";
import Service from "../pages/Service";

export const ROUTES = [
  {
    path: "/",
    element: Home,
    name: "Trang chủ",
  },
  {
    path: "/introduce",
    element: "",
    name: "Giới thiệu",
  },
  {
    path: "/service",
    element: Service,
    name: "Dịch vụ",
  },
  {
    path: "/news",
    element: "",
    name: "Tin tức",
  },
  {
    path: "/contact",
    element: "",
    name: "Liên hệ",
  },
];
