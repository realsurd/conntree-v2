


"use client";

import { BackgroundOverlay } from "../background-overlay";
// import styles from "./index.module.scss";
// import SignIn from "@/app/auth/signin/page";
interface Props {
  onClose: () => void;
  onGoToSignIn: () => void;
}

export const PasswordUpdatedModal = ({ onClose, onGoToSignIn }: Props) => {
  return (
    <BackgroundOverlay onClose={onClose}>
      <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-auto flex flex-col items-center gap-6">

        {/* Green check icon */}
       <div className="w-full flex justify-center">
  {/* Faint outer ring */}
  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
    {/* Inner green circle */}
    <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-9 h-9 stroke-white stroke-[3] fill-none stroke-linecap-round stroke-linejoin-round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
</div>

        {/* Title — matches <h4> used in WalletConnectModal */}
        <h4 className="text-[24px] font-goodtiming text-center text-black leading-tight">
          Password Successfully <br /> Updated
        </h4>

        {/* Subtitle — matches <h5> used in WalletConnectModal */}
        <h5 className="text-black text-[15px] text-center leading-relaxed font-normal">
          You are now able to sign in using your new password
        </h5>

        {/* CTA Button */}
        <button
          onClick={onGoToSignIn}
          className="w-full py-4 rounded-xl bg-[#FB8500] hover:bg-[#e07800] transition-colors text-white font-semibold text-lg"
        >
          Go to Sign In
        </button>

      </div>
    </BackgroundOverlay>
  );
};

export default PasswordUpdatedModal;