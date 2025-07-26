"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { ModeToggle } from "../ModeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import BackgroundSelector from "./common/BackgroundSelector";
import TextEditor from "./common/TextEditor";
import PreviewToolbar from "./common/PreviewToolbar";

export default function HomeIndex() {
  const t = useTranslations("Index");
  const f = useTranslations("Footer");

  const [background, setBackground] = useState({
    type: "color",
    value: "#ffffff",
  });
  const [text, setText] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Header */}
      <header className="w-full border-b backdrop-blur-sm bg-background/95 flex-shrink-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-between">
            <div>
              <span className="font-bold text-base sm:text-lg lg:text-xl">
                {t("appName")}
              </span>
            </div>
            <nav className="flex gap-2 sm:gap-3 lg:gap-4">
              <LanguageSwitcher />
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t("heroSubtitle")}
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              {t("getStarted")}
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("featuresTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{t("feature1Title")}</h3>
                <p className="text-gray-600">{t("feature1Desc")}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{t("feature2Title")}</h3>
                <p className="text-gray-600">{t("feature2Desc")}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{t("feature3Title")}</h3>
                <p className="text-gray-600">{t("feature3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("testimonialsTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">"{t("testimonial1Text")}"</p>
                <p className="font-semibold">- {t("testimonial1Author")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">"{t("testimonial2Text")}"</p>
                <p className="font-semibold">- {t("testimonial2Author")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">{t("ctaTitle")}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">{t("ctaSubtitle")}</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              {t("ctaButton")}
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("faqTitle")}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">{t("faqQuestion1")}</h3>
                <p className="text-gray-600">{t("faqAnswer1")}</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">{t("faqQuestion2")}</h3>
                <p className="text-gray-600">{t("faqAnswer2")}</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold mb-2">{t("faqQuestion3")}</h3>
                <p className="text-gray-600">{t("faqAnswer3")}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {isPreview ? (
            <div className="flex items-center justify-center h-[80vh]">
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  backgroundColor:
                    background.type === "color" ? background.value : undefined,
                  backgroundImage:
                    background.type === "image"
                      ? `url(${background.value})`
                      : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {text && (
                  <p className="text-4xl font-bold text-center p-8">{text}</p>
                )}
              </div>
            </div>
          ) : (
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
                      background.type === "color"
                        ? background.value
                        : undefined,
                    backgroundImage:
                      background.type === "image"
                        ? `url(${background.value})`
                        : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {text && (
                    <p className="text-2xl font-bold text-center p-4">{text}</p>
                  )}
                </div>
              </div>
            </div>
          )}
          <PreviewToolbar
            isPreview={isPreview}
            setIsPreview={setIsPreview}
            background={background}
            text={text}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t backdrop-blur-sm bg-background/95 py-4">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            {f("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  );
}
