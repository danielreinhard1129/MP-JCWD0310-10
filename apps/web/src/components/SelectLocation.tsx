import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectLocation() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Lokasi" className="font-bold" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Semua Lokasi</SelectLabel>
          <SelectItem value="Yogyakarta">Yogyakarta</SelectItem>
          <SelectItem value="Medan">Medan</SelectItem>
          <SelectItem value="Jakarta">Jakarta</SelectItem>
          <SelectItem value="Bandung">Bandung</SelectItem>
          <SelectItem value="Tangerang">Tangerang</SelectItem>
          <SelectItem value="Surabaya">Surabaya</SelectItem>
          <SelectItem value="Makassar">Makassar</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
