"use client"
import { Button } from "@/components/ui/button";
import { ChevronRightIcon,LayoutIcon, ReloadIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={()=> console.log('Click')}>Click me</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button variant={"outline"}size={"icon"}>
        <ChevronRightIcon className="h-4 w-4"/>
      </Button>

      <Button>
        <LayoutIcon className="mr-2 h-4 w-4"/> login
      </Button>

      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/> login
      </Button>
    </div>
  );
}