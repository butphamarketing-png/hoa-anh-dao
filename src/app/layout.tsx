import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Nunito, Be_Vietnam_Pro, Baloo_2 } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MainWrapper } from "@/components/layout/main-wrapper";
import { VisitPopupWrapper } from "@/components/shared/visit-popup-wrapper";
import { LanguageProvider } from "@/contexts/language-context";
import { getLangFromCookieValue } from "@/lib/lang-cookie";
import { LANG_COOKIE } from "@/i18n";
import { generateOrganizationSchema, generatePageMetadata } from "@/lib/seo";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-fredoka",
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
  const initialLang = getLangFromCookieValue(cookieStore.get(LANG_COOKIE)?.value);

  return (
    <html lang={initialLang === "en" ? "en" : "vi"} className={`${nunito.variable} ${beVietnam.variable} ${baloo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <LanguageProvider initialLang={initialLang}>
          <VisitPopupWrapper>
            <Header />
            <MainWrapper>{children}</MainWrapper>
            <Footer />
          </VisitPopupWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
