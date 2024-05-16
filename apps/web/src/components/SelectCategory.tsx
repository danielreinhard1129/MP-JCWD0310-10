
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function SelectCategory() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Kategori" className="font-bold" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Semua Kategori</SelectLabel>
          <SelectItem value="Musik"> Musik</SelectItem>
          <SelectItem value="CheckBox"> Olahraga</SelectItem>
          <SelectItem value="Pameran"> Pameran</SelectItem>
          <SelectItem value="Seni"> Seni</SelectItem>
          <SelectItem value="Teater"> Teater</SelectItem>
          <SelectItem value="Wisata"> Wisata</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
