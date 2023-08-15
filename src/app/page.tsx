import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  return (
    <div>
      <Button variant={"primary"}>
        Button
        <ShoppingCart />
      </Button>
      <Sheet>
        <SheetTrigger><Menu className="grid justify-center"/></SheetTrigger>
        <SheetContent>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
