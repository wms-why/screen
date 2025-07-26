import { useRef } from "react";

export default function DownloadButton({
  background,
  text,
  size,
}: {
  background: { type: string; value: string };
  text: string;
  size: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const [width, height] = size.split("x").map(Number);
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 绘制背景
    if (background.type === "color") {
      ctx.fillStyle = background.value;
      ctx.fillRect(0, 0, width, height);
    } else if (background.type === "image") {
      const img = new Image();
      img.src = background.value;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
        drawText(ctx, width, height);
      };
    } else {
      drawText(ctx, width, height);
    }

    // 创建下载链接
    const link = document.createElement("a");
    link.download = `background-${size}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
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

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      下载背景
    </button>
  );
}
