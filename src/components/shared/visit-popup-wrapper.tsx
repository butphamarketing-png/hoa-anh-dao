import { VisitPopup } from "@/components/shared/visit-popup";
import { getSiteSettings } from "@/lib/data";

export async function VisitPopupWrapper() {
  const settings = await getSiteSettings();

  return <VisitPopup image={settings.hero_image} />;
}
