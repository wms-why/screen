"use client";
import BackgroundSelector, {
  Background,
  BackgroundType,
} from "../common/BackgroundSelector";
import PreviewToolbar from "../common/PreviewToolbar";
import TextEditor, { TextProp } from "../common/TextEditor";
import { useState } from "react";

/**
 * 全特性工具栏
 * @returns
 */
export default function Page() {
  const [background, setBackground] = useState<Background>({
    type: "color",
    color: "#ffffff",
    image: null,
  });
  const [text, setText] = useState<TextProp>({
    text: "default",
    color: "black",
  });

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <BackgroundSelector
            background={background}
            setBackground={setBackground}
          />
          <TextEditor text={text} setText={setText} />
        </div>
        <div className="flex items-center justify-center">
          <div
            className="w-full aspect-video flex items-center justify-center border rounded-lg"
            style={{
              backgroundColor:
                background.type === "color" ? background.color : undefined,
              backgroundImage:
                background.type === "image"
                  ? `url(${background.image})`
                  : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {text && (
              <p
                className="text-2xl text-center p-4"
                style={{ color: text.color }}
              >
                {text.text}
              </p>
            )}
          </div>
        </div>
      </div>
      <PreviewToolbar background={background} text={text} />
    </div>
  );
}
