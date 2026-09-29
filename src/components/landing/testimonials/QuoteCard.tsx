import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function QuoteCard({
  quote = "",
  name = "",
  role = "",
  avatar = "",
}: {
  quote?: string;
  name?: string;
  role?: string;
  avatar?: string;
}) {
  return (
    <div className="box-border w-full max-w-[300px] min-w-0 basis-full bg-transparent font-sans transition-transform hover:-translate-y-1 sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]">
      <Card className="box-border flex h-full min-h-[307px] w-full max-w-[300px] min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-card text-card-foreground shadow-sm">
        <div className="h-[180px] w-full shrink-0 overflow-hidden">
          <img
            src={avatar}
            alt={name}
            className="block h-full w-full object-cover object-center"
          />
        </div>
        <CardContent className="box-border w-full min-w-0 flex-[1_0_auto] p-0 px-5 pt-[18px] pb-4">
          <p className="m-0 text-sm leading-relaxed text-foreground [overflow-wrap:anywhere]">
            "{quote}"
          </p>
        </CardContent>
        <CardFooter className="box-border flex w-full min-w-0 items-center justify-between gap-3 border-t border-border bg-card px-5 pt-3 pb-4">
          <div className="min-w-0 flex-1">
            <p className="m-0 text-sm font-display font-semibold text-foreground [overflow-wrap:anywhere]">
              {name}
            </p>
            <p className="m-0 mt-0.5 text-xs leading-[1.4] text-muted-foreground [overflow-wrap:anywhere]">
              {role}
            </p>
          </div>
          <div
            role="img"
            aria-label="Rating: 5 out of 5"
            className="flex shrink-0 items-center gap-1 text-sm font-medium leading-none text-foreground"
          >
            <span>5.0</span>
            <Star
              className="w-4 h-4 fill-primary text-primary"
              aria-hidden="true"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
