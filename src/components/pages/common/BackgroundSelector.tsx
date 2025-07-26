"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function BackgroundSelector({
  background,
  setBackground,
}: {
  background: { type: string; value: string };
  setBackground: (bg: { type: string; value: string }) => void;
}) {
  const t = useTranslations("Index");
  const [imagePreview, setImagePreview] = useState("");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackground({ type: "color", value: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImagePreview(result);
        setBackground({ type: "image", value: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">{t("backgroundSettings")}</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="color-bg"
            name="background-type"
            checked={background.type === "color"}
            onChange={() => setBackground({ type: "color", value: "#ffffff" })}
          />
          <label htmlFor="color-bg">{t("colorBackground")}</label>
        </div>
        {background.type === "color" && (
          <input
            type="color"
            value={background.value}
            onChange={handleColorChange}
            className="w-full h-10"
          />
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="image-bg"
            name="background-type"
            checked={background.type === "image"}
            onChange={() =>
              setBackground({ type: "image", value: imagePreview || "" })
            }
          />
          <label htmlFor="image-bg">{t("imageBackground")}</label>
        </div>
        {background.type === "image" && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
        )}
      </div>
    </div>
  );
}
