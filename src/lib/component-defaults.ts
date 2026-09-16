import type { Event } from "@/hooks/useEvents";
import type { EventModule } from "@/hooks/useEventModules";
import type { FormField } from "@/hooks/useFormFields";
import type { Profile } from "@/hooks/useProfile";
import type { MyTicket, BrowseEvent } from "@/hooks/useMyTickets";
import type { Registration } from "@/hooks/useRegistrations";
import { LANDING_DEFAULTS } from "@/lib/landing-defaults";

/** Shared preview values so pages and components can mount without live data. */
export const DEFAULT_BRAND_COLOR = "#7C3AED";
export const DEFAULT_FORMATTED_DATE = "Sat, Oct 12 · 6:00 PM";
export const DEFAULT_EVENT_NAME = "Summer Showcase";
export const DEFAULT_EVENT_SLUG = "summer-showcase";
export const DEFAULT_EVENT_DESCRIPTION =
  "An evening of talks, music, and connection with the community.";

const PREVIEW_AT = "2026-10-12T18:00:00.000Z";

export const DEFAULT_EVENT: Event = {
  id: "preview-event",
  user_id: "preview-user",
  name: DEFAULT_EVENT_NAME,
  slug: DEFAULT_EVENT_SLUG,
  description: DEFAULT_EVENT_DESCRIPTION,
  event_date: PREVIEW_AT,
  event_end_date: "2026-10-12T22:00:00.000Z",
  event_type: "conference",
  status: "live",
  template: "split",
  primary_color: DEFAULT_BRAND_COLOR,
  color_mode: "light",
  logo_url: null,
  background_image_url: null,
  background_image_position: null,
  background_image_scale: null,
  registration_limit: null,
  registration_deadline: null,
  registration_opens_at: null,
  timezone: "America/New_York",
  location_type: "physical",
  location_value: "Brooklyn, NY",
  ticket_price: 0,
  ticket_tiers: [
    { id: "preview-ga", name: "General Admission", description: "Standard entry", price: 0, currency: "USD", capacity: null, is_vip: false },
    { id: "preview-vip", name: "VIP", description: "Front-row access", price: 75, currency: "USD", capacity: 20, is_vip: true },
  ],
  requires_approval: false,
  capacity: 200,
  waitlist_enabled: false,
  created_at: PREVIEW_AT,
  updated_at: PREVIEW_AT,
  email_intro: null,
  email_signature: null,
  send_confirmation_email: true,
  send_reminder_1h: true,
  send_reminder_24h: true,
};

export const DEFAULT_EVENTS: Event[] = [
  DEFAULT_EVENT,
  {
    ...DEFAULT_EVENT,
    id: "preview-event-2",
    name: "Founders Brunch",
    slug: "founders-brunch",
    event_type: "meetup",
    status: "draft",
    event_date: "2026-11-08T15:00:00.000Z",
    location_type: "hybrid",
    location_value: "The Hoxton, Williamsburg",
  },
];

export const DEFAULT_MODULE: EventModule = {
  id: "preview-why-attend",
  event_id: DEFAULT_EVENT.id,
  type: "why_attend",
  position: 0,
  enabled: true,
  content: {
    heading: "Why attend",
    bullets: ["Learn from industry leaders", "Network with peers", "Hands-on workshops"],
  },
  created_at: PREVIEW_AT,
  updated_at: PREVIEW_AT,
};

export const DEFAULT_MODULES: EventModule[] = [
  DEFAULT_MODULE,
  {
    id: "preview-schedule",
    event_id: DEFAULT_EVENT.id,
    type: "schedule",
    position: 1,
    enabled: true,
    content: {
      heading: "What to expect",
      items: [
        { time: "09:00", title: "Doors open & coffee" },
        { time: "10:00", title: "Opening keynote" },
        { time: "12:30", title: "Lunch & networking" },
      ],
    },
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
  },
];

export const DEFAULT_FORM_FIELDS: FormField[] = [
  { id: "preview-name", event_id: DEFAULT_EVENT.id, label: "Full Name", field_type: "text", placeholder: "Jamie Chen", position: 0, required: true },
  { id: "preview-email", event_id: DEFAULT_EVENT.id, label: "Email", field_type: "email", placeholder: "you@example.com", position: 1, required: true },
];

export const DEFAULT_PROFILE: Profile = {
  id: "preview-user",
  full_name: "Alex Rivera",
  company: "eventspark",
  company_description: "An event platform for organizers who care about the details.",
  company_slug: "eventspark",
  website: "https://example.com",
  avatar_url: null,
  social_links: [],
  created_at: PREVIEW_AT,
  updated_at: PREVIEW_AT,
};

export const DEFAULT_REGISTRATIONS: Registration[] = [
  {
    id: "preview-reg-1",
    event_id: DEFAULT_EVENT.id,
    status: "registered",
    data: { "Full Name": "Jamie Chen", Email: "jamie@example.com" },
    is_vip: false,
    notes: null,
    utm: null,
    checked_in_at: null,
    created_at: PREVIEW_AT,
    events: { name: DEFAULT_EVENT_NAME },
  },
  {
    id: "preview-reg-2",
    event_id: DEFAULT_EVENT.id,
    status: "checked_in",
    data: { "Full Name": "Sam Patel", Email: "sam@example.com" },
    is_vip: true,
    notes: null,
    utm: null,
    checked_in_at: PREVIEW_AT,
    created_at: "2026-10-01T18:00:00.000Z",
    events: { name: DEFAULT_EVENT_NAME },
  },
];

export const DEFAULT_STATS = {
  total: DEFAULT_REGISTRATIONS.length,
  activeEvents: 1,
  chartData: [
    { date: "Sep", registrations: 1 },
    { date: "Oct", registrations: 2 },
  ],
  registrations: DEFAULT_REGISTRATIONS.map((r) => ({
    created_at: r.created_at,
    event_id: r.event_id,
    status: r.status,
  })),
  events: [{ id: DEFAULT_EVENT.id, name: DEFAULT_EVENT.name, status: DEFAULT_EVENT.status }],
};

export const DEFAULT_MY_TICKETS: MyTicket[] = [
  {
    registration_id: "preview-reg-1",
    status: "registered",
    checked_in_at: null,
    created_at: PREVIEW_AT,
    attendee_name: "Jamie Chen",
    event_id: DEFAULT_EVENT.id,
    event_name: DEFAULT_EVENT_NAME,
    event_date: DEFAULT_EVENT.event_date,
    event_end_date: DEFAULT_EVENT.event_end_date,
    timezone: DEFAULT_EVENT.timezone,
    location_value: DEFAULT_EVENT.location_value,
    location_type: DEFAULT_EVENT.location_type,
    event_slug: DEFAULT_EVENT_SLUG,
    cover_image_url: null,
    primary_color: DEFAULT_BRAND_COLOR,
  },
];

export const DEFAULT_BROWSE_EVENTS: BrowseEvent[] = DEFAULT_EVENTS.map((e) => ({
  id: e.id,
  name: e.name,
  slug: e.slug,
  event_date: e.event_date,
  location_value: e.location_value,
  location_type: e.location_type,
  background_image_url: e.background_image_url,
  primary_color: e.primary_color,
  description: e.description,
}));

export const DEFAULT_TICKET = {
  id: "preview-reg-1",
  event_id: DEFAULT_EVENT.id,
  status: "registered",
  checked_in_at: null,
  attendee_name: "Jamie Chen",
  ticket_name: "General Admission",
  event_name: DEFAULT_EVENT_NAME,
  event_date: DEFAULT_EVENT.event_date,
  end_date: DEFAULT_EVENT.event_end_date,
  timezone: DEFAULT_EVENT.timezone,
  location: DEFAULT_EVENT.location_value,
  location_type: DEFAULT_EVENT.location_type,
  primary_color: DEFAULT_BRAND_COLOR,
  cover_image_url: null as string | null,
  event_slug: DEFAULT_EVENT_SLUG,
};

export const DEFAULT_LANDING = {
  content: LANDING_DEFAULTS,
  assets: {
    hero: [],
    popular_events: [],
    features: [],
    testimonials: [],
    cta: [],
  },
};

export const DEFAULT_EMAIL_CONFIG = {
  email_intro: null as string | null,
  email_signature: null as string | null,
  send_confirmation_email: true,
  send_reminder_24h: true,
  send_reminder_1h: true,
};

export const noop = (..._args: unknown[]) => {};
