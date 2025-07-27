import { useTranslations } from "next-intl";
import { useEffect } from "react";

export interface TextProp {
  text: string;
  color: string;
}
export default function TextEditor({
  text,
  setText,
}: {
  text: TextProp;
  setText: (text: TextProp) => void;
}) {
  const t = useTranslations("TextEditor");

  useEffect(() => {
    // 初始化默认文本
    if (text.text == "default") {
      setText({ text: t("defaultText"), color: text.color });
    }
  }, [text, setText, t]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText({ text: e.target.value, color: text.color });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText({ text: text.text, color: e.target.value });
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="font-medium text-lg">{t("title")}</h3>
      <textarea
        value={text.text}
        onChange={handleTextChange}
        className="w-full p-3 border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        rows={4}
      />
      <div className="space-y-2">
        <label className="block text-sm text-muted-foreground">
          {t("textColor")}
        </label>
        <input
          type="color"
          value={text.color}
          onChange={handleColorChange}
          className="w-full h-10 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
}
