import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Nunito, Be_Vietnam_Pro } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MainWrapper } from "@/components/layout/main-wrapper";
import { VisitPopupWrapper } from "@/components/shared/visit-popup-wrapper";
import { LanguageProvider, getLangFromCookie } from "@/contexts/language-context";
import { LANG_COOKIE } from "@/i18n";
import { generateOrganizationSchema, generatePageMetadata } from "@/lib/seo";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  ...generatePageMetadata({}),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();
  const cookieStore = await cookies();
  const initialLang = getLangFromCookie(cookieStore.get(LANG_COOKIE)?.value);

  return (
    <html lang={initialLang === "en" ? "en" : "vi"} className={`${nunito.variable} ${beVietnam.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <LanguageProvider initialLang={initialLang}>
          <Header />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
          <VisitPopupWrapper />
        </LanguageProvider>
      </body>
    </html>
  );
}
