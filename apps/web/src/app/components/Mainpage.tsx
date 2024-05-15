"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const Mainpage = () => {
  return (
    <div className="container mt-56 grid grid-cols-3">
      <div className="md:col-span-1 md:grid">
        <h1 className="text-3xl font-bold ">Jelajah</h1>
        
        <div></div>
      </div>
      <div className="md:col-span-2 md:grid">afak</div>
    </div>
  );
};

export default Mainpage;
