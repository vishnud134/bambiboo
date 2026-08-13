import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo-preschool-transparent.webp";

export function Logo({ className = "h-12 sm:h-14 lg:h-16 w-auto" }: { className?: string }) {
  return (
    <Link to="/" className="inline-flex items-center shrink-0">
      <img
        src={logoImg}
        alt="BambiBoo Preschool"
        className={className}
        width={240}
        height={64}
        fetchpriority="high"
      />
    </Link>
  );
}
