"use client";
import { Box, Container, Section } from "@radix-ui/themes";
import BackgroundSelector, { Background } from "../common/BackgroundSelector";
import PreviewToolbar from "../common/PreviewToolbar";
import TextEditor, { TextProp } from "../common/TextEditor";
import { useState } from "react";

export default function Page() {
  const [background, setBackground] = useState<Background>({
    type: "color",
    color: "#000000",
    image: null,
  });
  const [text, setText] = useState<TextProp>({
    text: "",
    color: "#ffffff",
  });

  return (
    <Box>
      <Box >
        <Box >
          <BackgroundSelector
            background={background}
            setBackground={setBackground}
          />
          <TextEditor text={text} setText={setText} />
        </Box>
        <Box className="flex items-center justify-center">
          <Box
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
          </Box>
        </Box>
      </Box>
      <PreviewToolbar background={background} text={text} />
    </Box>
  );
}
