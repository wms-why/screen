import { MetadataRoute } from "next";

const host = process.env.NEXT_PUBLIC_HOST;
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = host!;
  const locales = ["en", "ar", "zh", "es", "jp"] as const;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
