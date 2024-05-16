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
          <SelectItem value="Minggu Ini">Minggu Ini</SelectItem>
          <SelectItem value="Minggu Depan">Minggu Depan</SelectItem>
          <SelectItem value="Bulan Ini">Bulan Ini</SelectItem>
          <SelectItem value="Bulan Depan">Bulan Depan</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
