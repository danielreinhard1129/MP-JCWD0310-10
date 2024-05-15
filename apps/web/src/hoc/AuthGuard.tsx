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
        <h1 className="container flex h-screen justify-center px-4 pt-24 text-4xl font-extrabold ">
          Loading......
        </h1>
      );
    }

    return <Component {...props} />;
  };
}
