"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AdmissionForm } from "./AdmissionForm";

export function AdmissionDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg overflow-hidden bg-[#F6E8D3] border border-[#E8D5B8] rounded-[32px] p-5 sm:p-6 shadow-2xl">
        <DialogHeader className="mb-1">
          <DialogTitle className="text-xl sm:text-2xl font-extrabold text-[#2C0A4B]">
            Book your visit
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm font-medium text-[#430E6C]/80">
            Tell us about your little one and we will get back within one working day.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-1">
          <AdmissionForm variant="dialog" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
