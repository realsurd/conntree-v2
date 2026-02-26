"use client";

import { useState } from "react";
// import { Wallet } from "lucide-react";
import RotatingBackground from "@/components/rotating-background";

function SignIn() {
  const [currentStep, setCurrentStep] = useState(1);

  //  h-161.75

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du153mzwk/image/upload/v1772064920/photo_2026-02-26_01-13-34_bkhahr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-[#0A1117]/80" />

      <div className="relative z-10 w-full h-full px-24 py-10 grid md:grid-cols-[45%_55%] gap-6 items-center">
        <div className="bg-gradient-to-br from-[#0d2847] to-[#0a1e35] h-full rounded-3xl px-8 relative overflow-hidden flex flex-col justify-between">
          <RotatingBackground />

          <div className="space-y-6 mt-87.5 relative z-10">
            {/* <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-orange-500" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">1</span>
              </div>
              <button
                onClick={() => setCurrentStep(1)}
                className={`px-6 py-3 rounded-lg border-2 transition-all ${
                  currentStep >= 1
                    ? "border-orange-500 text-orange-500 bg-transparent"
                    : "border-gray-600 text-gray-500 bg-transparent"
                }`}
              >
                Connect Wallet
              </button>
            </div> */}

            {/* <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">2</span>
              </div>
              <button
                onClick={() => setCurrentStep(2)}
                className={`px-6 py-3 rounded-lg border-2 transition-all ${
                  currentStep >= 2
                    ? "border-green-500 text-green-500 bg-transparent"
                    : "border-gray-600 text-gray-500 bg-transparent"
                }`}
              >
                Create Account with Google
              </button>
            </div> */}

            {/* <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? "bg-blue-500" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">3</span>
              </div>
              <button
                onClick={() => setCurrentStep(3)}
                className={`px-6 py-3 rounded-lg border-2 transition-all ${
                  currentStep >= 3
                    ? "border-blue-500 text-blue-500 bg-transparent"
                    : "border-gray-600 text-gray-500 bg-transparent"
                }`}
              >
                Customize your Avatar
              </button>
            </div> */}
          </div>
          {/* 
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(100, 150, 200, 0.15) 0%, transparent 70%)",
            }}
          /> */}
        </div>

        <div className="flex flex-col items-center text-white space-y-8 pt-10 px-[100px]">
          <div className="text-center space-y-4">
            <h2 className="text-[38px] font-bold">Sign In</h2>

            <div className="">
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-[#1A202C] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#B5ED30] transition-colors mb-4"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg bg-[#1A202C] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#B5ED30] transition-colors mb-6"
                />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Password must be at least{" "}
                  <span className="text-[#B5ED30]"> 8 Characters</span> and must
                  contain at least a{" "}
                  <span className="text-[#B5ED30]"> Capital Letter</span> , a
                  Number and a{" "}
                  <span className="text-[#B5ED30]"> Special Character.</span>
                </p>

                <div className="py-10">Forgot Password? </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#FB8500] text-white font-semibold transition-colors"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="w-full py-3 rounded-lg bg-[White] text-black font-semibold mt-4 transition-colors"
                >
                  Sign In with Google
                </button>
              </form>
            </div>
          </div>

          <div className="text-center">
            <span className="text-gray-400">Don’t have an account? </span>
            <button
              className="text-orange-500 font-semibold hover:text-orange-400 transition-colors"
              onClick={() => alert("Sign in page coming soon!")}
            >
              Create now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
