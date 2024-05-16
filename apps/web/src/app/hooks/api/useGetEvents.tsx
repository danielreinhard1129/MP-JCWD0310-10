"use client";

import { axiosInstance } from "@/lib/axios";
import { Event } from "@/types/event.type";
import {
  IPageInationQueries,
  IpageInationMeta,
} from "@/types/pageInation.type";
import { useEffect, useState } from "react";

interface IGetBlogQuery extends IPageInationQueries {
  search?: string;
}

const useGetBlogs = (queries: IGetBlogQuery) => {
  const [data, setData] = useState<Event[]>([]);
  const [meta, setMeta] = useState<IpageInationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getBlogs = async () => {
    try {
      const { data } = await axiosInstance.get("/blogs", {
        params: queries,
      });

      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [queries?.page, queries?.search]);
  return { data, meta, isLoading };
};

export default useGetBlogs;
