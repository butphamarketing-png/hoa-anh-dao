import { VisitPopup } from "@/components/shared/visit-popup";
import { VISIT_FORM_IMAGE } from "@/lib/constants";

export async function VisitPopupWrapper() {
  return <VisitPopup image={VISIT_FORM_IMAGE} />;
}
