import { FileText, Settings, ShieldAlert, User2 } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Property",
    link: "/property",
  },
  {
    id: 4,
    title: "Agent",
    link: "/agent",
  },
  {
    id: 5,
    title: "About",
    link: "/about",
  },
  {
    id: 6,
    title: "Contact Us",
    link: "/contact-us",
  },
];

export const DROPDOWN_NAV_ITEMS = [
  {
    title: "Personal Information",
    link: "/settings/personal-information",
    icon: User2,
  },
  {
    title: "Account Settings",
    link: "/settings/account-security",
    icon: Settings,
  },
  {
    title: "Support",
    link: "/support",
    icon: ShieldAlert,
  },
  {
    title: "KYC Verification",
    link: "/settings/kyc-verification",
    icon: FileText,
  },
];
