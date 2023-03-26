import AppRoutes from "../routes/Routes";
import { TabElement } from "./types";

export const myTabs: TabElement[] = [
  {
    name: "Trang chủ",
    route: AppRoutes.home,
  },
  {
    name: "Giới thiệu",
    route: AppRoutes.about,
  },
  {
    name: "Dịch vụ",
    route: AppRoutes.services,
  },
  {
    name: "Sản phẩm",
    route: AppRoutes.categories,
  },
  {
    name: "Liên hệ",
    route: AppRoutes.contact,
  },
];