"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export const NavbarRoutes = () => {
  const pathName = usePathname();

  const isTeacherPage = pathName?.startsWith("/teacher");
  const isPlayerPage = pathName?.includes("/chapter");
  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton
        afterSignOutUrl="/"
      />
    </div>
  );
}