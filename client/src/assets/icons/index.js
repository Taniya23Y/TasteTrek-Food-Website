/* eslint-disable no-unused-vars */
// Sidebar imports
import {
  UilBars,
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

import {
  FaHome,
  FaEnvelope,
  FaLock,
  FaCloudUploadAlt,
  FaCheck,
  FaArrowLeft,
  FaUserCheck,
} from "react-icons/fa";

import { FcAbout, FcGoogle, FcClearFilters } from "react-icons/fc";
import { MdShoppingCart, MdLogout, MdSearch, MdDelete } from "react-icons/md";
import { BsToggles2, BsExclamationTriangleFill } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { BiChevronsRight, BiSolidReport } from "react-icons/bi";
import { CiSquareInfo } from "react-icons/ci";
import { HiCurrencyRupee } from "react-icons/hi2";
import {
  IoFastFoodSharp,
  IoBarChartSharp,
  IoPieChartSharp,
} from "react-icons/io5";
import { MdInfoOutline, MdRestaurantMenu } from "react-icons/md";
import { RiFolderInfoFill } from "react-icons/ri";
import {
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpandFilled,
} from "react-icons/tb";

// Recent Card Imports
import img1 from "../../assets/kitchenSecrets.jpg";
import img2 from "../../assets/kitchenSecrets.jpg";
import img3 from "../../assets/kitchenSecrets.jpg";

export {
  UilBars,
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilUsdSquare,
  UilMoneyWithdrawal,
  FaUserCheck,
  FaHome,
  FaEnvelope,
  FaLock,
  FaCloudUploadAlt,
  FaCheck,
  FaArrowLeft,
  FcGoogle,
  FcAbout,
  FcClearFilters,
  MdShoppingCart,
  MdLogout,
  MdSearch,
  MdDelete,
  BsToggles2,
  BiSolidReport,
  BsExclamationTriangleFill,
  CiSquareInfo,
  IoFastFood,
  BiChevronsRight,
  HiCurrencyRupee,
  IoFastFoodSharp,
  IoBarChartSharp,
  IoPieChartSharp,
  MdInfoOutline,
  MdRestaurantMenu,
  RiFolderInfoFill,
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpandFilled,
};

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    id: "1",
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    id: "2",
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    id: "3",
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
