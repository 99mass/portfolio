import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://portfolio-samba-diop.vercel.app/sitemap.xml",
    host: "https://portfolio-samba-diop.vercel.app",
  };
}
