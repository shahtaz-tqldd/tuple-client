import React from "react";
import bitcoin from "@/assets/images/bitcoin.png";
import { FooterLogo } from "@/components/logo/nav-logo";
import { arrow } from "@/assets/icons/svgIcons";

const AuthPage = ({ children }) => {
  return (
    <div className="flex gap-5 h-screen w-screen p-6 bg-bg50">
      <div className="bg-primary rounded-2xl center w-[50%] p-6 relative">
        <img
          src={bitcoin}
          alt="bitcoin"
          className="h-full w-2/3 object-contain mb-24"
        />
        <div className="bg-white/15 rounded-xl p-6 absolute bottom-6 left-6 right-6">
          <div className="fl">
            <span className="block border border-white/75 rounded-full h-14 w-14"></span>
            <div className="-ml-5 py-3 px-8 rounded-full border border-white/75 text-lg text-white flex-1">
              Stay Informed: Real-Time Market Updates
            </div>
            <div className="fl gap-3 ml-4">
              <span className="h-16 w-16 center bg-white/10 rounded-full">{arrow}</span>
              <span className="h-16 w-16 center bg-white/10 rounded-full rotate-180">{arrow}</span>
            </div>
          </div>
          <p className="mt-6 text-[#FCC7B0] text-sm">
            Access up-to-the-minute market insights, live prices, and trends
            right at your fingertips. Stay informed about the crypto landscape
            and make informed decisions effortlessly. Welcome to a dashboard
            that keeps you ahead in the crypto game!
          </p>
        </div>
      </div>
      <div className="flex-1 w-full h-full center bg-white rounded-2xl ">
        <div className="max-w-[480px] w-full mx-auto">
          <FooterLogo />
          <h2 className="text-2xl mt-3">Welcome Back!</h2>
          <p className="text-sm text-black/40 mb-8 mt-2">
            Let's navigate the tradeverse together — Restro FX is ready to
            launch you into a world of limitless possibilities.
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
