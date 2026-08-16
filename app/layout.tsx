import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://maneeshaakash.dev"),
  title: "Maneesha Akash | AI Undergraduate & Aspiring AI Engineer",
  description:
    "Portfolio of Maneesha Akash, an Artificial Intelligence undergraduate and aspiring Software & AI Engineer interested in AI, Machine Learning, software development, and technology.",
  keywords: [
    "Artificial Intelligence",
    "AI Undergraduate",
    "Machine Learning",
    "Software Engineer",
    "Python",
    "Java",
    "SQL",
    "AI Projects",
    "SaaS",
    "Software Development",
  ],
  authors: [{ name: "Maneesha Akash" }],
  openGraph: {
    title: "Maneesha Akash | AI Undergraduate & Aspiring AI Engineer",
    description:
      "Portfolio of Maneesha Akash, an Artificial Intelligence undergraduate and aspiring Software & AI Engineer interested in AI, Machine Learning, software development, and technology.",
    url: "https://maneeshaakash.dev",
    siteName: "Maneesha Akash",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Maneesha Akash | AI Undergraduate & Aspiring AI Engineer",
    description:
      "Portfolio of Maneesha Akash, an Artificial Intelligence undergraduate and aspiring Software & AI Engineer.",
  },
};

// Prevents a flash of the wrong theme before hydration.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
