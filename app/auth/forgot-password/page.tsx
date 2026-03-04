"use client";

import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import RotatingBackground from "@/components/rotating-background";
import { PasswordUpdatedModal } from "@/components/password-update-modal";
import { useRouter } from "next/navigation";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPasswordUpdated, setShowPasswordUpdated] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  // Called when password reset is confirmed/completed — triggers the modal
  const handlePasswordUpdateSuccess = () => {
    setShowPasswordUpdated(true);
  };

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
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-[#0d2847] to-[#0a1e35] h-full rounded-3xl px-8 relative overflow-hidden flex flex-col justify-between">
          <RotatingBackground />
        </div>

        {/* Right Panel */}
        <div className="flex flex-col items-center text-white space-y-8 pt-10 px-[100px]">
          {/* Back Button */}
          <div className="w-full flex items-start">
            <button
              onClick={() => window.history.back()}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-gray-300" />
            </button>
          </div>

          <div className="w-full text-center space-y-4">
            <h2 className="font-goodtiming font-bold text-2xl leading-none tracking-normal text-center align-middle">
              Forgot Password
            </h2>

            {!submitted ? (
              <div className="">
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-6">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </span>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#1A202C] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#B5ED30] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#FB8500] text-white font-semibold transition-colors hover:bg-[#e07800]"
                  >
                    Send Request Link
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-300 bg-[#28282880] p-5 rounded-full text-[20px] leading-relaxed">
                  Enter the code sent to{" "}
                  <span className="text-[#B5ED30]">{email}</span> to reset your
                  password.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-3 rounded-lg bg-[#B5ED30] text-white font-semibold transition-colors"
                >
                  Resend Link
                </button>

                {/* Confirm password was updated — triggers the modal */}
                <button
                  onClick={handlePasswordUpdateSuccess}
                  className="w-full py-3 rounded-lg bg-[#FB8500] text-white font-semibold transition-colors"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PasswordUpdatedModal — same pattern as WalletConnectModal in register/page.tsx */}
      {showPasswordUpdated && (
        <PasswordUpdatedModal
          onClose={() => setShowPasswordUpdated(false)}
          onGoToSignIn={() => router.push("/auth/signin")}
        />
      )}
    </div>
  );
}

export default ForgotPassword;
