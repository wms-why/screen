"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function PreviewToolbar({
  isPreview,
  setIsPreview,
  background,
  text,
}: {
  isPreview: boolean;
  setIsPreview: (preview: boolean) => void;
  background: { type: string; value: string };
  text: string;
}) {
  const t = useTranslations("Index");
  const [downloadSize, setDownloadSize] = useState("1920x1080");

  const handleDownload = () => {
    // 这里实现下载逻辑
    alert(t("downloadAlert", { size: downloadSize }));
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-between mt-6">
      <button
        onClick={() => setIsPreview(!isPreview)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isPreview ? t("backToEdit") : t("preview")}
      </button>

      {!isPreview && (
        <div className="flex items-center gap-2">
          <label>{t("downloadSize")}:</label>
          <select
            value={downloadSize}
            onChange={(e) => setDownloadSize(e.target.value)}
            className="border rounded p-1"
          >
            <option value="1920x1080">1920x1080</option>
            <option value="1366x768">1366x768</option>
            <option value="1024x768">1024x768</option>
            <option value="800x600">800x600</option>
          </select>
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {t("downloadBackground")}
          </button>
        </div>
      )}
    </div>
  );
}
