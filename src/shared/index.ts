import AppRoutes from "../routes/Routes";
import { BreadcrumbItem, FooterElement, TabElement } from "./types";

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

export const myMisions: string[] = [
  "Uy tín - Chất lượng",
  "Chế độ bảo hành tốt nhất",
  "Giá cả hợp lý",
  "Đội ngũ nhân viên chuyên nghiệp",
];

export const myWorkingHours: string[] = [
  "Thứ 2 - Thứ 6: 8:00 - 17:00",
  "Thứ 7: 8:00 - 12:00",
  "Chủ nhật: Nghỉ",
];

export const myContacts: string[] = [
  "0908 779 519",
  "nguyenhoangkimlong2013@gmail.com",
  "17/7 Ấp Xuân Thới Đông 1, Xuân Thới Đông. Hóc Môn, Tp Hồ Chí Minh"
];

export const myFooterContent: FooterElement[] = [
  {
    title: "LKV",
    content: myMisions,
    type: "logo",
  },
  {
    title: "Đường dẫn",
    content: myTabs.slice(0, -1),
    type: "tab",
  },
  {
    title: "Thời gian làm việc",
    content: myWorkingHours,
    type: "text",
  },
  {
    title: "Liên hệ",
    content: myContacts,
    type: "text",
  }
]

export const myBreadcrumbs: BreadcrumbItem[] = [
  {
    title: "Trang chủ",
    href: AppRoutes.home,
  }
];

export const phoneNumber: string = "0909381333";