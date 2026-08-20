import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "../portfolio/body.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farel Maulana Yusuf | Portofolio Interaktif" },
      {
        name: "description",
        content:
          "Portofolio interaktif Farel Maulana Yusuf: Administration Staff, Data Scientist/Analyst, dan Digital Marketing/SEO Specialist.",
      },
      { property: "og:title", content: "Farel Maulana Yusuf | Portofolio Interaktif" },
      {
        property: "og:description",
        content:
          "Tiga fokus karir dalam satu portofolio: administrasi, data, dan digital marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      { rel: "stylesheet", href: "/styles/style.css" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/scripts/main.js";
    script.async = false;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return <div id="portfolio-root" dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
