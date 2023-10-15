import { Chat24 } from "@/assets/icons/Chat24";
import { ChatFill24 } from "@/assets/icons/ChatFill24";
import { Clipboard24 } from "@/assets/icons/Clipboard24";
import { ClipboardFill24 } from "@/assets/icons/ClipboardFill24";
import { Document24 } from "@/assets/icons/Document24";
import { DocumentFill24 } from "@/assets/icons/DocumentFill24";
import { Home24 } from "@/assets/icons/Home24";
import { HomeFill24 } from "@/assets/icons/HomeFill24";
import { navLink } from "@/model";

export const NAV_LINKS: navLink[] = [
  {
    to: "/",
    hasSubmenu: false,
    icon: (isActive) => {
      if (isActive) return <HomeFill24 className="text-white" />;
      return <Home24 />;
    },
    label: "داشبورد",
    submenu: null,
  },
  {
    to: "/service",
    hasSubmenu: true,
    icon: (isActive) => {
      if (isActive) return <DocumentFill24 className="text-white" />;
      return <Document24 />;
    },
    label: "خدمات",
    submenu: [
      {
        to: "/service/premium",
        label: "اکانت‌های پرمیوم و تریال",
      },
      {
        to: "/service/game",
        label: "خرید اکانت بازی",
      },
      {
        to: "/service/student",
        label: "دانشجویی و آزمون بین‌المللی",
      },
      {
        to: "/service/immigration",
        label: "مسافرت و مهاجرت",
      },
      {
        to: "/service/reservation",
        label: "رزرو هتل و هاستل",
      },
      {
        to: "/service/server",
        label: "خرید سرور مجازی خارجی",
      },
    ],
  },
  {
    to: "/order",
    hasSubmenu: false,
    icon: (isActive) => {
      if (isActive) return <ClipboardFill24 className="text-white" />;
      return <Clipboard24 />;
    },
    label: "سفارشات",
    submenu: null,
  },
  {
    to: "/support",
    hasSubmenu: false,
    icon: (isActive) => {
      if (isActive) return <ChatFill24 className="text-white" />;
      return <Chat24 />;
    },
    label: "پشتیبانی",
    submenu: null,
  },
];
