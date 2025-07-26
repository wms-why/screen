"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function TextEditor({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) {
  const t = useTranslations("Index");
  const [fontSize, setFontSize] = useState(24);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    // 初始化默认文本
    if (!text) {
      setText(t("defaultText"));
    }
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(e.target.value));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">{t("textEditor")}</h3>
      <textarea
        value={text}
        onChange={handleTextChange}
        className="w-full p-2 border rounded"
        rows={4}
        style={{ fontSize: `${fontSize}px`, color }}
      />
      <div className="space-y-2">
        <label className="block text-sm">
          {t("fontSize", { size: fontSize })}
        </label>
        <input
          type="range"
          min="12"
          max="72"
          value={fontSize}
          onChange={handleFontSizeChange}
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm">{t("textColor")}</label>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-full h-10"
        />
      </div>
    </div>
  );
}
