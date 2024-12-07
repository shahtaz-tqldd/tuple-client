import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemWithNavigate,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "../ui/switch";

import { ChevronRight, Ellipsis, LogOut, Moon, Sun } from "lucide-react";
import { DEMO_USER } from "@/assets/data/user";
import { DROPDOWN_NAV_ITEMS } from "../navbar/data";

const user = DEMO_USER;

const ProfileDropdown = () => {
  const storedMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    storedMode === "true" ? true : false
  );
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", false);
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = (e) => {
    console.log("logout");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <img
          src={user?.img?.url}
          className="h-8 w-8 object-cover rounded-full"
          alt={user?.fullName}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-3">
        <div className="border rounded-xl p-3 flex gap-3 mb-2">
          <img
            src={user?.img?.url}
            className="h-12 w-12 object-cover rounded-full"
            alt={user?.fullName}
          />
          <div className="flex-1">
            <h3 className="dark:text-white text-black">{user?.fullName}</h3>
            <div className="flbx text-xs gap-5 mt-2">
              {user.isVerified ? (
                <span className="text-green-500">Verified</span>
              ) : (
                <span className="text-red-400">Not Verified</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {DROPDOWN_NAV_ITEMS?.map((item, index) => (
            <DropdownMenuItemWithNavigate
              key={index}
              to={item?.link}
              className="bg-bg50 rounded-lg"
            >
              <div className="flbx w-full group py-1 px-2 rounded-lg">
                <div className="fl gap-3">
                  <item.icon className="h-4 w-4 text-black/50" />
                  <span className="text-base">{item.title}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-black/50 group-hover:translate-x-1 tr" />
              </div>
            </DropdownMenuItemWithNavigate>
          ))}

          <DropdownMenuItem
            onClick={(e) => e.preventDefault()}
            className="flbx py-2 px-4 rounded-lg bg-bg50"
          >
            <div className="fl gap-3">
              {darkMode ? (
                <Moon className="h-4 w-4 text-black/50" />
              ) : (
                <Sun className="h-4 w-4 text-black/50" />
              )}
              <span className="text-base">Dark Mode</span>
            </div>
            <Switch
              checked={darkMode}
              onCheckedChange={() => setDarkMode(!darkMode)}
            />
          </DropdownMenuItem>
        </div>

        <DropdownMenuItem
          onClick={handleLogout}
          className="flbx py-2 px-4 rounded-lg hover:bg-red-500/10 tr text-red-500 mt-4 group"
        >
          <span className="text-base group-hover:text-red-500 tr">Logout</span>
          <LogOut className="h-4 w-4 group-hover:translate-x-1 group-hover:text-red-500 tr" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
