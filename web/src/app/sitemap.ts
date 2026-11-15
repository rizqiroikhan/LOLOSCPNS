import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const urlDasar = "https://loloscpns.id";
  const waktuSekarang = new Date();

  return [
    {
      url: urlDasar,
      lastModified: waktuSekarang,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${urlDasar}/simulasi/skd/paket-perdana-gratis`,
      lastModified: waktuSekarang,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlDasar}/pembayaran`,
      lastModified: waktuSekarang,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
