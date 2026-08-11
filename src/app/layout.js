import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Khondoker Tawsif Jahangir | Video Editor & Motion Designer Portfolio",
  description:
    "Portfolio of Khondoker Tawsif Jahangir — Junior Video Editor & Motion Designer crafting cinematic edits, motion graphics, and narrative short-form content with Premiere Pro & After Effects.",
  keywords: [
    "Khondoker Tawsif Jahangir",
    "Video Editor",
    "Motion Designer",
    "Premiere Pro",
    "After Effects",
    "Cinematic Portfolio",
    "Noir Media Studio",
  ],
  openGraph: {
    title: "Khondoker Tawsif Jahangir — Video Editor & Motion Designer",
    description:
      "Turning raw footage into stories worth watching. Specialized in Premiere Pro and After Effects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} dark scroll-smooth`}
    >
      <body className="bg-[#080808] text-[#F2F2F2] font-sans antialiased selection:bg-white selection:text-black min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
