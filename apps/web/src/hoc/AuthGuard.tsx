"use client";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthGuard(Component: any) {
  return function IsAuth(props: any) {
    const [isLoading, setIsLoading] = useState(true);

    const { id, role } = useAppSelector((state) => state.user);
    console.log(role, id);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);

    useEffect(() => {
      if (!id && !isLoading) {
        redirect(`/auth/login`);
      }
    }, [id, isLoading]);

    useEffect(() => {
      if (role !== "organizer" && !isLoading) {
        redirect(`/auth/register`);
      }
    }, [role, isLoading]);
    if (isLoading || !role) {
      return (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-white px-6 py-3 text-center text-lg font-semibold text-blue-900 shadow-lg dark:bg-gray-800 dark:text-blue-200">
          Loading. ..............
        </div>
      );
    }

    return <Component {...props} />;
  };
}
