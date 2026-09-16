import { createElement, type ComponentType } from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Logo } from "@/components/Logo";
import TemplatePreview from "@/components/TemplatePreview";
import { NavLink } from "@/components/NavLink";
import { OrganizerOnly } from "@/components/OrganizerOnly";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { RoleHomeRedirect } from "@/components/RoleHomeRedirect";
import Unsubscribe from "@/pages/Unsubscribe";
import EventDetailEditRedirect from "@/pages/dashboard/EventDetailEditRedirect";
import { MagicWandIcon } from "@/components/icons/MagicWandIcon";
import PolaroidIcon from "@/components/icons/PolaroidIcon";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { AuroraBackdrop, GlassCard } from "@/components/register/AuroraBackdrop";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PublicEventPage } from "@/components/event-public/PublicEventPage";
import { StickyRegisterBar } from "@/components/event-public/StickyRegisterBar";
import { Hero } from "@/components/event-public/Hero";
import { PublicModule } from "@/components/event-public/PublicModule";
import { TicketTiers } from "@/components/event-create/TicketTiers";
import { AICoverImageDialog } from "@/components/event-create/AICoverImageDialog";
import { AssetDropzone } from "@/components/landing-editor/AssetDropzone";
import EventPageBuilder from "@/components/event-detail/EventPageBuilder";
import SmartImageField from "@/components/event-detail/SmartImageField";
import EventDetailHeader from "@/components/event-detail/EventDetailHeader";
import TicketTiersManager from "@/components/event-detail/TicketTiersManager";
import { SectionTransition } from "@/components/event-detail/SectionTransition";
import EventQRCode from "@/components/event-detail/EventQRCode";
import EventOverview from "@/components/event-detail/EventOverview";
import EventQuickInfo from "@/components/event-detail/EventQuickInfo";
import EventModuleRenderer from "@/components/event-detail/EventModuleRenderer";
import EventSideNav from "@/components/event-detail/EventSideNav";
import EventPromotion from "@/components/event-detail/EventPromotion";
import CheckInScanner from "@/components/event-detail/CheckInScanner";
import EventAttendeesTable from "@/components/event-detail/EventAttendeesTable";
import SectionIcon from "@/components/event-detail/SectionIcon";
import { AddressAutocomplete } from "@/components/ui/address-autocomplete";
import { DateField } from "@/components/ui/date-field";
import { TimePicker } from "@/components/ui/time-picker";

const components: { name: string; Component: ComponentType; wrapSidebar?: boolean }[] = [
  { name: "Logo", Component: Logo },
  { name: "TemplatePreview", Component: TemplatePreview },
  { name: "NavLink", Component: NavLink },
  { name: "OrganizerOnly", Component: OrganizerOnly },
  { name: "ProtectedRoute", Component: ProtectedRoute },
  { name: "RoleHomeRedirect", Component: RoleHomeRedirect },
  { name: "Unsubscribe", Component: Unsubscribe },
  { name: "EventDetailEditRedirect", Component: EventDetailEditRedirect },
  { name: "MagicWandIcon", Component: MagicWandIcon },
  { name: "PolaroidIcon", Component: PolaroidIcon },
  { name: "Reveal", Component: Reveal },
  { name: "StaggerGroup", Component: StaggerGroup },
  { name: "StaggerItem", Component: StaggerItem },
  { name: "Magnetic", Component: Magnetic },
  { name: "SmoothScroll", Component: SmoothScroll },
  { name: "AuroraBackdrop", Component: AuroraBackdrop },
  { name: "GlassCard", Component: GlassCard },
  { name: "AppSidebar", Component: AppSidebar, wrapSidebar: true },
  { name: "DashboardLayout", Component: DashboardLayout },
  { name: "PublicEventPage", Component: PublicEventPage },
  { name: "StickyRegisterBar", Component: StickyRegisterBar },
  { name: "Hero", Component: Hero },
  { name: "PublicModule", Component: PublicModule },
  { name: "TicketTiers", Component: TicketTiers },
  { name: "AICoverImageDialog", Component: AICoverImageDialog },
  { name: "AssetDropzone", Component: AssetDropzone },
  { name: "EventPageBuilder", Component: EventPageBuilder },
  { name: "SmartImageField", Component: SmartImageField },
  { name: "EventDetailHeader", Component: EventDetailHeader },
  { name: "TicketTiersManager", Component: TicketTiersManager },
  { name: "SectionTransition", Component: SectionTransition },
  { name: "EventQRCode", Component: EventQRCode },
  { name: "EventOverview", Component: EventOverview },
  { name: "EventQuickInfo", Component: EventQuickInfo },
  { name: "EventModuleRenderer", Component: EventModuleRenderer },
  { name: "EventSideNav", Component: EventSideNav },
  { name: "EventPromotion", Component: EventPromotion },
  { name: "CheckInScanner", Component: CheckInScanner },
  { name: "EventAttendeesTable", Component: EventAttendeesTable },
  { name: "SectionIcon", Component: SectionIcon },
  { name: "AddressAutocomplete", Component: AddressAutocomplete },
  { name: "DateField", Component: DateField },
  { name: "TimePicker", Component: TimePicker },
];

function wrap(ui: React.ReactNode, wrapSidebar = false) {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  const tree = (
    <QueryClientProvider client={client}>
      <TooltipProvider>
        <MemoryRouter>
          {wrapSidebar ? <SidebarProvider>{ui}</SidebarProvider> : ui}
        </MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
  return tree;
}

describe("component isolation", () => {
  it.each(components)("$name renders with no props", ({ Component, wrapSidebar }) => {
    expect(() => render(wrap(createElement(Component), wrapSidebar))).not.toThrow();
  });
});
