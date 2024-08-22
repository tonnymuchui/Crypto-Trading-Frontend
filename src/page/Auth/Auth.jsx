import React from "react";
import "./Auth.css";
import { useLocation, useNavigate } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";
import { Button } from "@/components/ui/button";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { SignInForm } from "./SignInForm";

export const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#03712] bg-opacity-50">
        <div className="bgBlure absolute top-1/4 left-1/2 transform -translate-x-1/2 -traslate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white px-10">
          <h1 className="text-6xl font-bold pb-6">Trading</h1>
          {location.pathname == "/signup" ? (
            <section className="w-full">
              <SignUpForm />
              <div className="flex items-center justify-center mt-5">
                <span>already have an account?</span>
                <Button className="ml-7" onClick={() => navigate("/signin")} variant="ghost">
                  Sign In
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section className="w-full">
              <ForgotPasswordForm />
              <div className="flex items-center justify-center mt-2">
                <span>back to Login?</span>
                <Button className="ml-7" onClick={() => navigate("/signin")} variant="ghost">
                  Sign In
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-full">
              <SignInForm />
              <div className="flex items-center justify-center mt-2">
                <span>don't have an account?</span>
                <Button className="ml-7" onClick={() => navigate("/signup")} variant="ghost">
                  Sign Up
                </Button>
              </div>
              <div className="mt-12">
                <Button onClick={() => navigate("/forgot-password")} variant="outline" className="w-full py-5">
                  Forgot Password?
                </Button>
              </div>
            </section>
            
          )}
        </div>
      </div>
    </div>
  );
};
