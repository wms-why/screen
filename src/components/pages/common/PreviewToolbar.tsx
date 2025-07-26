"use client";
import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Eye, Download } from "lucide-react";

export default function PreviewToolbar({
  background,
  text,
}: {
  background: { type: string; value: string };
  text: string;
}) {
  const t = useTranslations("Index");
  const [downloadSize, setDownloadSize] = useState("1920x1080");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const [width, height] = downloadSize.split("x").map(Number);
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 绘制背景
    if (background.type === "color") {
      ctx.fillStyle = background.value;
      ctx.fillRect(0, 0, width, height);
      drawText(ctx, width, height);
    } else if (background.type === "image") {
      const img = new Image();
      img.src = background.value;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
        drawText(ctx, width, height);

        // 创建下载链接
        const link = document.createElement("a");
        link.download = `background-${downloadSize}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
    } else {
      drawText(ctx, width, height);

      // 创建下载链接
      const link = document.createElement("a");
      link.download = `background-${downloadSize}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const drawText = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    if (!text) return;

    ctx.fillStyle = "#000000";
    ctx.font = "48px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);
  };

  const handleFullScreen = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = window.screen.width;
    const height = window.screen.height;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 绘制背景
    if (background.type === "color") {
      ctx.fillStyle = background.value;
      ctx.fillRect(0, 0, width, height);
      drawText(ctx, width, height);
    } else if (background.type === "image") {
      const img = new Image();
      img.src = background.value;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
        drawText(ctx, width, height);
      };
      img.onerror = () => {
        drawText(ctx, width, height);
      };
    } else {
      drawText(ctx, width, height);
    }

    // 显示canvas并进入全屏
    canvas.classList.remove("hidden");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if ((document.documentElement as any).webkitRequestFullscreen) {
      (document.documentElement as any).webkitRequestFullscreen();
    } else if ((document.documentElement as any).msRequestFullscreen) {
      (document.documentElement as any).msRequestFullscreen();
    }

    // 退出全屏时隐藏canvas
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        canvas.classList.add("hidden");
        document.removeEventListener("fullscreenchange", onFullscreenChange);
      }
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 p-4 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm mt-6 transition-all">
      <button
        onClick={() => handleFullScreen()}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors shadow hover:shadow-md"
      >
        <Eye className="w-4 h-4" />
        {t("preview")}
      </button>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-muted-foreground">
            {t("downloadSize")}
          </label>
          <select
            value={downloadSize}
            onChange={(e) => setDownloadSize(e.target.value)}
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="1920x1080">1920x1080</option>
            <option value="1366x768">1366x768</option>
            <option value="1024x768">1024x768</option>
            <option value="800x600">800x600</option>
          </select>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow hover:shadow-md"
        >
          <Download className="w-4 h-4" />
          {t("downloadBackground")}
        </button>
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
