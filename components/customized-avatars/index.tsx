"use client";

import { useState } from "react";

const hairStyles = ["Short", "Long", "Curly", "Bald"];
const skinTones = ["#F5CBA7", "#D2B48C", "#8D5524", "#3E1F0D"];
const clothingColors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F"];
const accessories = ["Glasses", "Hat", "Headphones", "None"];

export default function AvatarCustomizer() {
  const [hair, setHair] = useState(hairStyles[0]);
  const [skin, setSkin] = useState(skinTones[0]);
  const [clothing, setClothing] = useState(clothingColors[0]);
  const [accessory, setAccessory] = useState(accessories[3]);

  return (
    <div className="w-full flex flex-col items-center text-white space-y-6">
      <p className="text-center text-[20px] font-sans leading-relaxed">
        Choose how you appear in Conntree! Personalize your avatar with unique
        styles.
      </p>

      <div>Avatars Incoming</div>
    </div>
  );
}
