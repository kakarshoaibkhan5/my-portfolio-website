"use client";
import { useEffect, useState } from "react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  file: string;
  verifyUrl: string;
};

const certificates: Certificate[] = [
  {
    title: "Google AI Essentials",
    issuer: "Google via Coursera",
    date: "Sep 2, 2025",
    file: "/certificates/google-ai-essentials.pdf",
    verifyUrl: "https://www.coursera.org/verify/specialization/DACYRS85LSY0",
  },
  {
    title: "Introduction to AI",
    issuer: "Google via Coursera",
    date: "Sep 2, 2025",
    file: "/certificates/introduction-to-ai.pdf",
    verifyUrl: "https://www.coursera.org/verify/D1IW5N7GU62R",
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Google via Coursera",
    date: "Sep 2, 2025",
    file: "/certificates/ai-maximize-productivity.pdf",
    verifyUrl: "https://www.coursera.org/verify/4R0WS87B16KM",
  },
  {
    title: "Innovating with Google Cloud AI",
    issuer: "Google Cloud via Coursera",
    date: "Sep 2, 2025",
    file: "/certificates/innovating-with-google-cloud-ai.pdf",
    verifyUrl: "https://www.coursera.org/verify/8TSK65XCOHT4",
  },
  {
    title: "How to Set Up a Facebook Ads Campaign",
    issuer: "Coursera",
    date: "Sep 12, 2024",
    file: "/certificates/facebook-ads-campaign.pdf",
    verifyUrl: "https://www.coursera.org/verify/DH2DDIG3OV1R",
  },
  {
    title: "Google Ads for Beginners",
    issuer: "Coursera",
    date: "Sep 16, 2024",
    file: "/certificates/google-ads-for-beginners.pdf",
    verifyUrl: "https://www.coursera.org/verify/IZMJFNKZ2KLN",
  },
  {
    title: "Create Your E-commerce Store with Shopify",
    issuer: "Coursera",
    date: "Sep 8, 2024",
    file: "/certificates/shopify-ecommerce-store.pdf",
    verifyUrl: "https://www.coursera.org/verify/SHZMW5K9PRWX",
  },
];

export default function CertificatesPage() {
  const [viewFile, setViewFile] = useState<string | null>(null);

  // Close on Escape + lock background scroll while the viewer is open
  useEffect(() => {
    if (!viewFile) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewFile(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [viewFile]);

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">📜 My Certificates</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2 mb-8">
        {certificates.length} verified certificates from Google &amp; Coursera -
        click to view
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((c, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 hover:shadow-xl transition bg-zinc-50 dark:bg-zinc-900 flex flex-col"
          >
            <div className="h-44 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl text-center p-4">
              {c.title}
            </div>
            <h3 className="font-bold mt-4">{c.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {c.issuer}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Issued {c.date}
            </p>

            <div className="mt-auto pt-4 flex flex-col gap-2">
              <button
                onClick={() => setViewFile(c.file)}
                className="w-full py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Certificate
              </button>
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2"
              >
                Verify credential ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Viewer - PDF ko image ki tarah dikhata hai */}
      {viewFile && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col p-4">
          <div className="flex justify-between items-center mb-4 gap-4">
            <h2 className="text-white font-bold">Certificate Viewer</h2>
            <div className="flex items-center gap-2">
              <a
                href={viewFile}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/30 px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors"
              >
                Open in new tab
              </a>
              <button
                onClick={() => setViewFile(null)}
                className="bg-white text-black px-4 py-2 rounded-lg"
              >
                ✕ Close
              </button>
            </div>
          </div>
          <iframe
            src={viewFile}
            title="Certificate PDF"
            className="flex-1 w-full bg-white rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
