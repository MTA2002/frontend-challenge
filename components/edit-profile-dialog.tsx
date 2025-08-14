import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { XIcon } from "lucide-react";

const EditProfileDialog = () => (
  <Sheet>
    <SheetTrigger className="bg-white border text-[#18181B] hover:bg-gray-100 hover:border-gray-300 hover:text-[#18181B] cursor-pointer rounded px-3 py-[6px] font-medium text-sm">
      Edit
    </SheetTrigger>

    <SheetContent className="top-2 right-2 bottom-2 w-[508px] rounded">
      <SheetHeader className="px-8 pt-4 flex-row justify-between items-center">
        <SheetTitle className="text-xl font-semibold">Edit Security</SheetTitle>
        <SheetClose className="">
          <XIcon className="size-6" />
        </SheetClose>
      </SheetHeader>
      <div className="flex flex-col gap-6 p-8 border grow">
        <div className="flex flex-col gap-1">
          <Label htmlFor="sheet-demo-first-name" className="font-medium">
            First Name
          </Label>
          <Input
            id="sheet-demo-first-name"
            defaultValue="John"
            className="rounded bg-[#FAFAFA] py-3 px-4"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="sheet-demo-last-name" className="font-medium">
            Last Name
          </Label>
          <Input
            id="sheet-demo-last-name"
            defaultValue="Doe"
            className="rounded bg-[#FAFAFA] py-3 px-4"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="sheet-demo-first-name" className="font-medium">
            Email
          </Label>
          <Input
            id="sheet-demo-first-name"
            defaultValue="jhondoe@gmail.com"
            className="rounded bg-[#FAFAFA] py-3 px-4"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="sheet-demo-last-name" className="font-medium">
            Phone
          </Label>
          <Input
            id="sheet-demo-last-name"
            defaultValue="-"
            className="rounded bg-[#FAFAFA] py-3 px-4"
          />
        </div>
      </div>

      <SheetFooter className="flex-row justify-end">
        <SheetClose asChild>
          <Button variant="outline" className="rounded">
            Close
          </Button>
        </SheetClose>

        <Button
          type="submit"
          className="bg-[#2186EB] hover:bg-[#1B6EC2] rounded"
        >
          Change Edit
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default EditProfileDialog;
