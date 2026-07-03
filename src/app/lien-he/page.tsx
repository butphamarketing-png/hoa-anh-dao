import { Phone, Mail, MapPin } from "lucide-react";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Liên hệ",
  description: "Liên hệ Trường Mầm Non Hoa Anh Đào tại Quận 8, TP.HCM. Hotline: 0937 933 702.",
  path: "/lien-he",
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Liên hệ", url: "/lien-he" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <LocalizedPageHero
        page="contact"
        breadcrumb={[{ label: "Liên hệ" }]}
        image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight">Thông tin liên hệ</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] bg-primary-green/10">
                    <MapPin className="h-5 w-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="font-heading font-bold">Địa chỉ</p>
                    <p className="mt-1 font-body text-foreground/70">{SITE_CONFIG.address.full}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] bg-primary-green/10">
                    <Phone className="h-5 w-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="font-heading font-bold">Hotline</p>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                      className="mt-1 font-body text-primary-green"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] bg-primary-green/10">
                    <Mail className="h-5 w-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="font-heading font-bold">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="mt-1 font-body text-primary-green"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-10 overflow-hidden rounded-[20px] shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6658!3d10.7402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ0JzI0LjciTiAxMDbCsDM5JzU2LjkiRQ!5e0!3m2!1svi!2s!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ Trường Mầm Non Hoa Anh Đào"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
