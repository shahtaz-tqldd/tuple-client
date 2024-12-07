import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import SubmitButton from "@/components/buttons/SubmitButton";
import TextField from "@/components/input/TextField";
import Checkbox from "@/components/input/Checkbox";

import { useUserRegisterMutation } from "@/features/auth/authApiSlice";
import AuthPage from "..";
import {
  letter,
  link,
  password,
  soundwave,
  user,
} from "@/assets/icons/svgIcons";

const RegisterPage = () => {
  const { handleSubmit, register } = useForm();
  const [rememberMe, setRememberMe] = useState(false);

  const [userRegister, { isLoading }] = useUserRegisterMutation();
  const onSubmit = async (data) => {
    const res = await userRegister(data);
    console.log(res);
    if (res && res.data?.success) {
      toast.success("You are Successfully Registered.");
    } else {
      toast.error(res?.data?.error || "Sorry! A Network Error Occured!");
    }
  };
  return (
    <AuthPage>
      <>
        <p className="text-sm text-center text-black/40">
          Create a new Restro Account
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-8"
        >
          <TextField
            placeholder="Your Full Name"
            register={register}
            name="name"
            icon={user}
          />
          <TextField
            placeholder="Your Email Address"
            type="email"
            register={register}
            name="email"
            icon={letter}
          />
          <TextField
            placeholder="Type a strong password"
            type="password"
            register={register}
            name="password"
            icon={password}
          />
          <TextField
            placeholder="Referal ID (optional)"
            register={register}
            name="wheredoyou"
            icon={link}
          />

          <Checkbox
            name="rememberMe"
            value={rememberMe}
            setValue={setRememberMe}
          >
            Accept Privacy Policy and Terms of Conditions
          </Checkbox>

          <SubmitButton isLoading={isLoading} disabled={!rememberMe}>
            {isLoading ? "Creating your Account..." : "Create Account"}
          </SubmitButton>
        </form>
        <p className="mt-6 text-sm text-center text-black/40">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-primary">
            Sign In
          </Link>
        </p>
      </>
    </AuthPage>
  );
};

export default RegisterPage;
