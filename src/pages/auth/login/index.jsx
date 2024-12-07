import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import SubmitButton from "@/components/buttons/SubmitButton";
import TextField from "@/components/input/TextField";
import Checkbox from "@/components/input/Checkbox";

import { useUserLoginMutation } from "@/features/auth/authApiSlice";
import { userLoggedIn } from "@/features/auth/authSlice";
import { Link } from "react-router-dom";
import AuthPage from "..";
import { letter, password } from "@/assets/icons/svgIcons";

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const [rememberMe, setRememberMe] = useState(false);

  const [userLogin, { isLoading }] = useUserLoginMutation();
  const onSubmit = async (data) => {
    const res = await userLogin(data);
    console.log(res);
    if (res && res.data?.success) {
      toast.success("You are Successfully Logged In.");
      userLoggedIn({
        token: res.data?.data?.token,
        user: res.data?.data?.user,
        rememberMe,
      });
    } else {
      toast.error(res?.data?.error || "Login Failed!");
    }
  };
  return (
    <AuthPage>
      <>
        <p className="text-sm text-center text-black/40">Login to your Restro Account</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-8"
        >
          <TextField
            placeholder="Your Email Address"
            type="email"
            register={register}
            name="email"
            icon={letter}
          />
          <TextField
            placeholder="Type your Password"
            register={register}
            name="password"
            icon={password}
          />

          <Checkbox
            name="rememberMe"
            value={rememberMe}
            setValue={setRememberMe}
          >
            Remeber Me
          </Checkbox>

          <SubmitButton isLoading={isLoading} className="mt-4">
            {isLoading ? "Logging In..." : "Login"}
          </SubmitButton>
        </form>
        <p className="mt-8 text-sm text-center text-black/50">
          New to Restro? Create{" "}
          <Link to="/create-account" className="text-primary">
            A New Account
          </Link>
        </p>
      </>
    </AuthPage>
  );
};

export default LoginPage;
