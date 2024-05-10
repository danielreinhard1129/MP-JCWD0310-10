import { User } from "@/types/user.type";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";

interface RegisterArgs extends Omit<User, "id"> {
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  const register = async (payload: RegisterArgs) => {
    try {
      const { data } = await axiosInstance.post("/auth/register", payload);
      alert("Register Success");
      router.push(`/auth/login`);
      console.log(data);
    } catch (error) {
      // console.log(error);
      alert("Email already exists");
    }
  };
  return { register };
};
export default useRegister;
