import EventDetail from "./EventDetail";
import { DEFAULT_EVENT } from "@/lib/component-defaults";
import { useParams } from "react-router-dom";

/** Legacy /edit URL — show the event editor with a default event when none is in the route. */
export function EventDetailEditRedirect({
  eventId = DEFAULT_EVENT.id,
}: {
  eventId?: string;
}) {
  const { id } = useParams();
  return <EventDetail eventId={id || eventId} />;
}

export default EventDetailEditRedirect;
