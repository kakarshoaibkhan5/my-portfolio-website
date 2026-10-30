"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          مجھ سے رابطہ کرنے کے لیے نیچے کلک کریں
        </p>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <a
            href="mailto:kakarshoaibkhan5@gmail.com"
            className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                📧
              </span>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-semibold break-all">
                  kakarshoaibkhan5@gmail.com
                </p>
              </div>
            </div>
            <span aria-hidden="true">→</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+923108200734"
            className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                📞
              </span>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone / Call
                </p>
                <p className="font-semibold">+92 310 8200734</p>
              </div>
            </div>
            <span aria-hidden="true">→</span>
          </a>

          {/* WhatsApp - سب سے اہم */}
          <a
            href="https://wa.me/923108200734?text=Assalamualaikum%20Shoaib%20bhai%2C%20maine%20aapki%20portfolio%20dekhi%20hai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                💬
              </span>
              <div>
                <p className="text-sm text-green-100">WhatsApp</p>
                <p className="font-bold">+92 310 8200734 - Chat Now</p>
              </div>
            </div>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
