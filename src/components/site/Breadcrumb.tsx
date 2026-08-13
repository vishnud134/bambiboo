import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

type Item = { label: string; to?: string };

export function Breadcrumb({
  items,
  className = "",
}: {
  items: Item[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm pl-0">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1 opacity-85 hover:opacity-100 transition"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              {isLast || !item.to ? (
                <span className="opacity-90" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="opacity-85 hover:opacity-100 transition"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
