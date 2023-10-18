import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";

import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

function Header() {
  return (
    <Card className="flex justify-between items-center p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-lg text-left font-semibold">Menu</SheetHeader>
          <div className="mt-2 flex flex-col gap-2">
            <Button className="w-ful justify-start gap-2" variant="outline"><LogInIcon /> Fazer Login</Button>
            <Button className="w-ful justify-start gap-2" variant="outline"><HomeIcon /> Inicio</Button>
            <Button className="w-ful justify-start gap-2" variant="outline"><PercentIcon /> Ofertas</Button>
            <Button className="w-ful justify-start gap-2" variant="outline"><ListOrderedIcon /> Catalogo</Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>
      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </ Card>
  );
}

export default Header;