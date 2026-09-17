import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] transition-transform hover:-translate-y-1">
      <Card className="h-full border-0 shadow-sm overflow-hidden rounded-2xl">
        <div className="h-[180px] overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover object-center" />
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 mb-5">
            <p className="text-foreground text-sm leading-relaxed flex-1">"{quote}"</p>
            <div className="flex items-center gap-1 shrink-0 text-sm font-medium text-foreground" aria-label="Rating: 5 out of 5">
              <span>5.0</span>
              <Star className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
            </div>
          </div>
          <div>
            <p className="font-display font-semibold text-sm text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
