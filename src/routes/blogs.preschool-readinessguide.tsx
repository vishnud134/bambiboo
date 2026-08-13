import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/blogs/preschool-readinessguide")({
  component: Redirect,
});

function Redirect() {
  useEffect(() => {
    window.location.replace("/blogs/preschool-readiness-guide");
  }, []);
  return null;
}
