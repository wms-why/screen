"use client";
import { Flex } from "@radix-ui/themes";
import BackgroundSelector, {
  Background,
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
    <Flex direction={"column"}>
      <Flex gap={"2"}>
        <Flex direction={"column"} className="w-128" gap={"2"}>
          <BackgroundSelector
            background={background}
            setBackground={setBackground}
          />
          <TextEditor text={text} setText={setText} />
        </Flex>
        <Flex justify={"center"} align={"center"} className="w-128 border rounded-lg"
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
        </Flex>
      </Flex>
      <PreviewToolbar background={background} text={text} />
    </Flex>
  );
}
