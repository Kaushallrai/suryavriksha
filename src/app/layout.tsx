import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero8-header";
import { ReactLenis } from "@/lib/lenis";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuryaVriksha ",
  icons: {
    icon: "/assets/logo1.png",
    type: "image/png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <HeroHeader />
            {children}
            <WhatsAppButton
              phoneOptions={[
                { label: "Sales Team", phoneNumber: "+977 9851114767" },
                { label: "Support Team", phoneNumber: "+91 9557237365" },
              ]}
            />
            <FooterSection />
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
