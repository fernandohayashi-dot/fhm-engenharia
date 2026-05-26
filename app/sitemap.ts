import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.fhmengenharia.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.fhmengenharia.com/servicos",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.fhmengenharia.com/cases",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.fhmengenharia.com/contato",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}