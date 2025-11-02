"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";

const Header = () => {
  const { data: session } = authClient.useSession();
  return (
    <header className="flex items-center justify-between bg-gray-100 p-4">
      <Link href="/">
        <Image src="/logo.svg" alt="BEWEAR" width={100} height={26.16} />
      </Link>

      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mr-4" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="px-5">
              {session?.user ? (
                <>
                  <div className="mb-4 flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={session?.user.image || undefined} />
                        <AvatarFallback>
                          {session?.user.name?.split(" ")?.[0]?.[0]}
                          {session?.user.name?.split(" ")?.[1]?.[0]}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold">
                          {session?.user?.name}{" "}
                        </h3>
                        <span className="text-muted-foreground block text-xs">
                          {session?.user?.email}
                        </span>
                      </div>
                    </div>
                    <Button  size="icon" 
                    variant="outline" 
                    onClick={() => authClient.signOut() }
                    >
                     
                     <LogOutIcon />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="mb-4 flex justify-between">
                  <h2 className="font-semibold">Olá faça o seu login!</h2>
                  <Button asChild size="icon" variant="outline">
                    <Link href="/authentication">
                      <LogInIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
