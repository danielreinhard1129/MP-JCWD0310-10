import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWaktu() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Waktu" className="font-bold" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Semua Harga">Semua Harga</SelectItem>
          <SelectItem value="Berbayar">Berbayar</SelectItem>
          <SelectItem value="Gratis">Gratis</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
