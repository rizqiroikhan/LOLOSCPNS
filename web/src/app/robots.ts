import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/simulasi/", "/pembayaran"],
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://loloscpns.id/sitemap.xml",
  };
}
