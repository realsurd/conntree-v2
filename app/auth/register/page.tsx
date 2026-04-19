"use client";

import { useEffect, useMemo, useState } from "react";
import RotatingBackground from "@/components/rotating-background";
import { WalletConnectModal } from "@/components/wallet-connect-modal";
import { useWallet } from "@txnlab/use-wallet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Eye,
  EyeOff,
  ImageUp,
  Lock,
  Mail,
  User,
  Wallet,
  ArrowLeft,
  Cat,
} from "lucide-react";

function RegisterPage() {
  const router = useRouter();
  const { activeAccount } = useWallet();

  const [currentStep, setCurrentStep] = useState(1);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const [walletConnected, setWalletConnected] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const [avatarTab, setAvatarTab] = useState<"avatar" | "upload">("avatar");
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([
    "content-creators",
    "gamefi",
  ]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    username: "",
    dob: "12/12/2000",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (activeAccount) {
      setWalletConnected(true);
      if (!accountCreated) setCurrentStep(2);
    } else {
      setWalletConnected(false);
      setCurrentStep(1);
      setAccountCreated(false);
    }
  }, [activeAccount, accountCreated]);

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateAccount = () => {
    if (!walletConnected) return;
    setAccountCreated(true);
    setCurrentStep(3);
  };

  const handleGoogleContinue = () => {
    if (!walletConnected) return;
    setAccountCreated(true);
    setCurrentStep(3);
  };

  const handleContinueFromAvatar = () => {
    setCurrentStep(4);
  };

  const steps = useMemo(
    () => [
      {
        id: 1,
        label: "Connect Wallet",
        complete: walletConnected,
        active: currentStep === 1,
      },
      {
        id: 2,
        label: "Create Account",
        complete: accountCreated,
        active: currentStep === 2,
      },
      {
        id: 3,
        label: "Choose Avatar",
        complete: currentStep > 3,
        active: currentStep === 3,
      },
      {
        id: 4,
        label: "Join Communities",
        complete: false,
        active: currentStep === 4,
      },
    ],
    [walletConnected, accountCreated, currentStep]
  );

  const avatarOptions = [
    "https://api.dicebear.com/7.x/adventurer/png?seed=Avery",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Milo",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Luna",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Kai",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Zoe",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Leo",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Ivy",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Nova",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Jude",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Ruby",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Ezra",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Skye",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Aiden",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Aria",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Rex",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Nina",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Theo",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Hazel",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Orion",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Isla",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Axel",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Jasper",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Elena",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Noah",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Asha",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Kian",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Layla",
    "https://api.dicebear.com/7.x/adventurer/png?seed=Oscar",
  ];

  const communityOptions = [
    {
      id: "content-creators",
      title: "Content Creators",
      description: "Share and monetize your creative work",
      members: "12.5k",
    },
    {
      id: "web3-developers",
      title: "Web3 Developers",
      description: "Build and discuss web3 technologies",
      members: "5.4k",
    },
    {
      id: "gamefi",
      title: "GameFi",
      description: "Play to earn gaming community",
      members: "6.9k",
    },
    {
      id: "defi-enthusiast",
      title: "DeFi Enthusiast",
      description: "Discuss decentralized finance",
      members: "1.2k",
    },
    {
      id: "digital-artist",
      title: "Digital Artist",
      description: "Showcase and sell digital art",
      members: "2.3k",
    },
  ];

  const renderStepIndicator = () => (
    <div className="mt-[530px] pl-4 space-y-10 relative z-10">
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex items-center gap-4">
          <div className="relative w-10 flex justify-center">
            {index < steps.length - 1 && (
              <div className="absolute top-8 h-10 border-l border-dashed border-[#FB8500]/50" />
            )}

            {step.complete ? (
              <div className="w-5 h-5 rounded-full bg-[#FB8500] flex items-center justify-center">
                <span className="text-[10px] text-white font-bold">✓</span>
              </div>
            ) : step.active ? (
              <div className="w-5 h-5 rounded-full border border-[#FB8500] bg-transparent flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FB8500]" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full border border-[#64748B] bg-transparent flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#64748B]/70" />
              </div>
            )}
          </div>

          <span
            className={`font-sans text-[16px] leading-none ${
              step.complete || step.active ? "text-white" : "text-[#6E7D8C]"
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );

  const renderIntroCard = (title: string, description: string) => (
    <div className="text-center space-y-4 w-full">
      <h2 className="text-[28px] md:text-[32px] font-bold leading-tight">
        {title}
      </h2>

      <div className="bg-[#28282880] rounded-[22px] px-5 py-4">
        <p className="text-white font-sans text-[14px] leading-[1.5]">
          {description}
        </p>
      </div>
    </div>
  );

  const inputClass =
    "w-full h-[46px] rounded-[8px] bg-[#102131]/80 border border-[#1B3248] pl-11 pr-4 text-white placeholder:text-[#B4BDC7] outline-none text-[14px] font-sans";

  const renderRightPanel = () => {
    if (currentStep === 1) {
      return (
        <>
          {renderIntroCard(
            "Connect Your Wallet to Get started",
            "A social platform where creators own their content and earn rewards for every like, comment, and share. Built for the Web3 era."
          )}

          <div className="w-full space-y-4">
            <button
              className={`font-sans w-full h-[46px] rounded-[10px] border text-[14px] font-medium ${
                activeAccount
                  ? "bg-[#FB85011A] border-[#FF8135] text-[#FF8135]"
                  : "bg-[#FB85011A] border-[#FB8500] text-[#FB8500]"
              }`}
              onClick={() => {
                if (!activeAccount) setShowWalletModal(true);
              }}
            >
              {activeAccount
                ? `${formatAddress(activeAccount.address)}`
                : "Connect Wallet"}
            </button>

            <button
              disabled={!walletConnected}
              onClick={handleGoogleContinue}
              className={`font-sans w-full h-[46px] rounded-[10px] text-[14px] flex items-center justify-center gap-3 ${
                walletConnected
                  ? "bg-white text-gray-700"
                  : "bg-[#C9CED3] text-[#7A7F85] cursor-not-allowed"
              }`}
            >
              <span className="text-base">G</span>
              Continue with Google
            </button>

            <div className="text-center font-sans text-[13px] pt-2">
              <span className="text-[#A0A8B2]">Already have an account? </span>
              <Link href="/auth/signin" className="text-[#FB8500] font-semibold">
                Sign in
              </Link>
            </div>
          </div>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          {renderIntroCard(
            "Create your account",
            "Tell us a bit about yourself to personalize your experience"
          )}

          <div className="w-full space-y-5 font-sans">
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C3CBD3]"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email"
                className={inputClass}
              />
            </div>

            <div className="relative">
              <User
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C3CBD3]"
              />
              <input
                type="text"
                value={form.username}
                onChange={(e) => handleChange("username", e.target.value)}
                placeholder="Username"
                className={inputClass}
              />
            </div>

            <p className="text-[10px] text-[#A8B2BC] -mt-1 leading-4">
              Your profile will be available at: conntree.app/
              <span className="text-[#FB8500]">
                {form.username || "username"}
              </span>
            </p>

            <div className="relative">
              <Calendar
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C3CBD3]"
              />
              <input
                type="text"
                value={form.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                placeholder="12/12/2000"
                className={inputClass}
              />
            </div>

            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C3CBD3]"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Password"
                className={`${inputClass} pr-11`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9EABB8]"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <p className="text-[10px] leading-4 text-[#A8B2BC] -mt-1">
              Password must be at least{" "}
              <span className="text-[#B5ED30]">8 Characters</span> and must
              contain at least a{" "}
              <span className="text-[#FB8500]">Capital Letter</span>, a{" "}
              <span className="text-[#B5ED30]">Number</span> and a{" "}
              <span className="text-[#FB8500]">Special Character</span>.
            </p>

            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C3CBD3]"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
                placeholder="Confirm Password"
                className={`${inputClass} pr-11`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9EABB8]"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <div className="relative">
              <Wallet
                size={16}
                className="absolute left-4 top-[17px] text-[#FB8500]"
              />
              <div className="w-full rounded-[8px] bg-[#16120D]/80 border border-[#FB8500] pl-11 pr-4 py-[8px] text-left font-sans">
                <div className="text-[10px] text-[#A8B2BC] leading-4">
                  Connected wallet
                </div>
                <div className="text-[#FB8500] text-[13px] leading-5">
                  {activeAccount ? formatAddress(activeAccount.address) : "—"}
                </div>
              </div>
            </div>

            <button
              onClick={handleCreateAccount}
              className="w-full h-[46px] rounded-[10px] bg-[#FB8500] text-white font-medium text-[14px]"
            >
              Create Account
            </button>

            <button
              onClick={handleGoogleContinue}
              className="w-full h-[46px] rounded-[10px] bg-white text-gray-700 flex items-center justify-center gap-3 font-sans text-[14px]"
            >
              <span className="text-base">G</span>
              Continue with Google
            </button>

            <div className="text-center text-[13px] pt-1">
              <span className="text-[#A0A8B2]">Already have an account? </span>
              <Link href="/auth/signin" className="text-[#FB8500] font-semibold">
                Sign in now
              </Link>
            </div>
          </div>
        </>
      );
    }

    if (currentStep === 3) {
      return (
        <>
          <div className="w-full flex justify-start font-sans">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-2 text-[#C5CDD6] text-[13px]"
            >
              <ArrowLeft size={14} />
              Back
            </button>
          </div>

          {renderIntroCard(
            "Customize Your Metaverse Identity",
            "Choose how you appear in Conntree! Personalize your avatar with unique styles."
          )}

          <div className="w-full font-sans">
            <div className="flex items-center justify-start gap-12 border-b border-[#21384C] mb-4">
              <button
                onClick={() => setAvatarTab("avatar")}
                className={`flex items-center gap-2 pb-3 text-[13px] ${
                  avatarTab === "avatar"
                    ? "text-white border-b-2 border-[#FBB500]"
                    : "text-[#9AA7B4]"
                }`}
              >
                <Cat size={14} />
                Avatar
              </button>

              <button
                onClick={() => setAvatarTab("upload")}
                className={`flex items-center gap-2 pb-3 text-[13px] ${
                  avatarTab === "upload"
                    ? "text-white border-b-2 border-[#FBB500]"
                    : "text-[#9AA7B4]"
                }`}
              >
                <ImageUp size={14} />
                Upload
              </button>
            </div>

            {avatarTab === "avatar" ? (
              <div className="space-y-5">
                <div className="grid grid-cols-7 gap-3 place-items-center">
                  {avatarOptions.map((avatar, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAvatar(index)}
                      className={`w-11 h-11 rounded-full overflow-hidden border transition ${
                        selectedAvatar === index
                          ? "border-[#FB8500]"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={avatar}
                        alt={`Avatar ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="w-full rounded-[10px] bg-[#102131]/80 border border-[#1B3248] p-3">
                  <p className="text-[10px] text-[#A8B2BC] mb-2">Preview</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={avatarOptions[selectedAvatar]}
                      alt="Selected avatar preview"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white text-[13px] font-semibold">
                        {form.username || "Your Name"}
                      </p>
                      <p className="text-[11px] text-[#8EA0AF]">
                        @{form.username || "username"}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleContinueFromAvatar}
                  className="w-full h-[46px] rounded-[10px] bg-[#FB8500] text-white font-medium text-[14px]"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="w-full rounded-[10px] border border-[#738596] bg-[#10213180] p-4">
                  <div className="w-full h-40 rounded-[10px] bg-[#2B3D4A4D] flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1C2E3D] flex items-center justify-center">
                      <User size={20} className="text-[#8EA0AF]" />
                    </div>
                    <button className="px-7 h-[38px] rounded-[10px] border border-[#7E91A3] text-white text-[14px]">
                      Upload
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleContinueFromAvatar}
                  className="w-full h-[46px] rounded-[10px] bg-[#FB8500] text-white font-medium text-[14px]"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </>
      );
    }

    if (currentStep === 4) {
      return (
        <>
          <div className="w-full flex justify-start font-sans">
            <button
              onClick={() => setCurrentStep(3)}
              className="flex items-center gap-2 text-[#C5CDD6] text-[13px]"
            >
              <ArrowLeft size={14} />
              Back
            </button>
          </div>

          {renderIntroCard(
            "Join Communities",
            "Select communities you're interested in to personalize your feed"
          )}

          <div className="w-full font-sans space-y-5">
            <div className="grid grid-cols-2 gap-3">
              {communityOptions.map((community) => {
                const isSelected = selectedCommunities.includes(community.id);

                return (
                  <button
                    key={community.id}
                    type="button"
                    onClick={() => {
                      setSelectedCommunities((prev) =>
                        prev.includes(community.id)
                          ? prev.filter((id) => id !== community.id)
                          : [...prev, community.id]
                      );
                    }}
                    className={`relative rounded-[14px] border p-3 text-left transition-all min-h-[92px] ${
                      isSelected
                        ? "border-[#FB8500] bg-[#1D2B37]"
                        : "border-[#203647] bg-[#142330]/90"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full border border-[#0A1117] bg-[#243746]" />
                        <div className="w-7 h-7 rounded-full border border-[#0A1117] bg-[#30485C]" />
                        <div className="w-7 h-7 rounded-full border border-[#0A1117] bg-[#3D5970]" />
                      </div>

                      <span className="px-2 py-1 rounded-full bg-[#2A3B4C] text-[10px] text-[#D7E2EC]">
                        {community.members}
                      </span>
                    </div>

                    <div className="space-y-1 pr-4">
                      <p className="text-white text-[14px] font-semibold leading-4">
                        {community.title}
                      </p>
                      <p className="text-[11px] text-[#8EA0AF] leading-4">
                        {community.description}
                      </p>
                    </div>

                    {isSelected && (
                      <div className="absolute bottom-0 right-0 w-14 h-14 overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[56px] border-l-transparent border-b-[56px] border-b-[#FB8500]" />
                        <span className="absolute bottom-2 right-2 text-white text-[12px]">
                          ✓
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              disabled={selectedCommunities.length === 0}
              onClick={() => router.push("/")}
              className={`w-full h-[46px] rounded-[10px] text-white font-medium text-[14px] ${
                selectedCommunities.length === 0
                  ? "bg-[#7A5A2A] cursor-not-allowed"
                  : "bg-[#FB8500]"
              }`}
            >
              Complete Setup
            </button>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
          {renderStepIndicator()}
        </div>

        <div className="flex flex-col items-center justify-center font-goodtiming text-white px-[100px]">
          <div className="w-full max-w-[430px] space-y-6">
            {renderRightPanel()}
          </div>
        </div>
      </div>

      {showWalletModal && (
        <WalletConnectModal onClose={() => setShowWalletModal(false)} />
      )}
    </div>
  );
}

export default RegisterPage;