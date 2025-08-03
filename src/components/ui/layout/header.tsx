import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BriefcaseBusiness, Home, Menu, StickyNote, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
  // navigation links
  const navLinks = [
    { url: "/", label: "Home", icon: Home },
    { url: "/projects", label: "Projects", icon: BriefcaseBusiness },
    { url: "/blogs", label: "Blogs", icon: StickyNote },
    { url: "/about", label: "About", icon: User },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* For Desktop */}
      <div className="max-w-7xl mx-auto px-4 py-4 hidden sm:flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {navLinks.map((menu, index) => (
              <NavigationMenuItem key={index}>
                <Link
                  href={menu.url}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 flex text-sm items-center gap-1"
                >
                  <menu.icon size={15} />
                  {menu.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className=" mx-auto px-4 py-4 block sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size={18} />
          </SheetTrigger>
          <SheetContent className="w-[15%] justify-between  ">
            <SheetHeader>
              <SheetTitle className="sr-only">
                Are you absolutely sure?
              </SheetTitle>
              <SheetDescription asChild>
                <NavigationMenu>
                  <NavigationMenuList className="flex gap-6 mt-4 flex-col h-full justify-center items-center">
                    {navLinks.map((menu, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          href={menu.url}
                          className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
                        >
                          <menu.icon className="w-5 h-5" />
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
