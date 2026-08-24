import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send, Calendar, ChevronDown, Loader2 } from "lucide-react";

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwEX2ByE0m3PDLOYzkXrNPrQvJJ6IXsaReZQzntNoP-QadNVuUerpbQ0oS1QTCFPhKd/exec";

const schema = z.object({
  parentName: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  childName: z.string().trim().min(1, "Child's name required").max(80),
  childDob: z.string().min(1, "Select date of birth"),
  programme: z.string().min(1, "Choose a programme"),
  startDate: z.string().optional(),
  message: z.string().max(600).optional(),
});

type FormValues = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormValues, string>>;

const programmes = [
  "Parent-Toddler Program (6m - 2 yrs)",
  "Play-Group (1.5 to 2.5 yrs)",
  "Pre-School",
  "LKG (Lower Kindergarten)",
  "UKG (Upper Kindergarten)",
  "Nursery",
  "Daycare (6m to 6 yrs)",
  "Bambiboo Hobby Center",
];

const fieldWrapper =
  "group relative rounded-[22px] bg-white border border-[#430E6C]/25 " +
  "transition-all duration-75 ease-out " +
  "shadow-2xs hover:border-[#430E6C]/60 " +
  "focus-within:border-[#430E6C] focus-within:ring-2 focus-within:ring-[#430E6C]/20";

const floatingLabelBase =
  "pointer-events-none absolute left-4 text-[#430E6C] bg-transparent " +
  "transition-all duration-50 ease-out " +
  "will-change-transform transform-gpu backface-hidden";

export function AdmissionForm({
  variant = "card",
  compact = false,
  includeMessage = false,
}: {
  variant?: "card" | "dialog";
  compact?: boolean;
  includeMessage?: boolean;
}) {
  const [values, setValues] = useState<FormValues>({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childDob: "",
    programme: "",
    startDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const isDialog = variant === "dialog";
  const isCompact = compact || isDialog;

  const set = <K extends keyof FormValues>(k: K, v: FormValues[K]) =>
    setValues((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrs: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!fieldErrs[key]) fieldErrs[key] = issue.message;
      }
      setErrors(fieldErrs);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setSubmitting(true);

    const payload = {
      parentName: values.parentName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      childName: values.childName.trim(),
      childDOB: values.childDob,
      programme: values.programme,
      preferredStartDate: values.startDate || "",
    };

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 0 || response.type === "opaque") {
        try {
          const data = await response.json();
          if (data && data.success === false) {
            setSubmitError("Something went wrong. Please try again.");
            setSubmitting(false);
            return;
          }
        } catch {
          // If response cannot be parsed as JSON, HTTP 200/302 was received and processed
        }
        setSubmitted(true);
        setValues({
          parentName: "",
          email: "",
          phone: "",
          childName: "",
          childDob: "",
          programme: "",
          startDate: "",
          message: "",
        });
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      // Fallback with no-cors if CORS restriction occurs in restrictive browsers
      try {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });
        setSubmitted(true);
        setValues({
          parentName: "",
          email: "",
          phone: "",
          childName: "",
          childDob: "",
          programme: "",
          startDate: "",
          message: "",
        });
      } catch {
        setSubmitError("Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[32px] border border-[#430E6C]/20 bg-slate-50 p-8 text-center shadow-lg">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#430E6C]" />
        <h3 className="mt-4 text-2xl font-black text-[#2C0A4B]">Enquiry received</h3>
        <p className="mt-2 text-[#430E6C]/80 font-medium">
          Thank you! Your enquiry has been submitted successfully. Our admissions team will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSubmitError(null);
            setValues({
              parentName: "",
              email: "",
              phone: "",
              childName: "",
              childDob: "",
              programme: "",
              startDate: "",
              message: "",
            });
          }}
          className="mt-6 rounded-full border border-[#430E6C] px-6 py-2.5 text-xs font-bold text-[#430E6C] hover:bg-[#430E6C] hover:text-white transition-all shadow-xs cursor-pointer"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={
        isDialog
          ? "bg-transparent w-full"
          : isCompact
          ? "max-w-xl w-full rounded-3xl border border-border/80 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-purple-950/10 overflow-hidden"
          : "max-w-2xl w-full rounded-2xl sm:rounded-[36px] border border-border/80 bg-white/95 backdrop-blur-md p-4.5 sm:p-8 md:p-10 shadow-2xl shadow-purple-950/10 overflow-hidden"
      }
    >
      {!isDialog && (
        <div className={isCompact ? "mb-3 sm:mb-4" : "mb-5 sm:mb-6"}>
          <p className="text-[11px] uppercase tracking-widest text-[#430E6C] font-extrabold">ADMISSION ENQUIRY</p>
          <h3 className={isCompact ? "mt-0.5 text-lg sm:text-xl font-extrabold text-[#2C0A4B]" : "mt-1 text-xl sm:text-3xl font-extrabold text-[#2C0A4B]"}>Tell us about your little one</h3>
          <p className="mt-0.5 text-xs sm:text-xs text-[#430E6C]/80 font-medium leading-relaxed">
            Fill this in and we'll get back within one working day.
          </p>
        </div>
      )}

      <div className={`grid ${isCompact ? "gap-2.5 sm:gap-3" : "gap-3.5 sm:gap-4.5"} sm:grid-cols-2`}>
        <FloatingField label="Parent name" value={values.parentName} onChange={(v) => set("parentName", v)} error={errors.parentName} compact={isCompact} />
        <FloatingField label="Phone" type="tel" value={values.phone} onChange={(v) => set("phone", v)} error={errors.phone} compact={isCompact} />
        <div className="sm:col-span-2">
          <FloatingField label="Email" type="email" value={values.email} onChange={(v) => set("email", v)} error={errors.email} compact={isCompact} />
        </div>
        <FloatingField label="Child's name" value={values.childName} onChange={(v) => set("childName", v)} error={errors.childName} compact={isCompact} />
        <FloatingField label="Child's date of birth" type="date" value={values.childDob} onChange={(v) => set("childDob", v)} error={errors.childDob} alwaysFloat isDate compact={isCompact} />
        <div className="sm:col-span-2">
          <FloatingSelect
            label="Programme of interest"
            value={values.programme}
            onChange={(v) => set("programme", v)}
            options={programmes}
            error={errors.programme}
            compact={isCompact}
          />
        </div>
        <div className="sm:col-span-2">
          <FloatingField label="Preferred start date (optional)" type="date" value={values.startDate || ""} onChange={(v) => set("startDate", v)} alwaysFloat isDate compact={isCompact} />
        </div>
        {includeMessage && (
          <div className="sm:col-span-2">
            <FloatingTextarea label="Anything we should know? (optional)" value={values.message || ""} onChange={(v) => set("message", v)} />
          </div>
        )}
      </div>

      {submitError && (
        <div className="mt-3 p-2.5 rounded-2xl bg-red-50 border border-red-200 text-center text-xs font-bold text-red-600">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={`${
          isCompact ? "mt-3.5 h-[44px]" : "mt-6 h-[52px]"
        } inline-flex w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold text-white transition-all duration-250 ease-out hover:brightness-110 active:scale-[0.99] shadow-lg shadow-purple-900/25 hover:shadow-purple-900/40 hover:-translate-y-0.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed`}
        style={{
          backgroundColor: "#8326B5",
        }}
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send enquiry
          </>
        )}
      </button>
    </form>
  );
}

function FloatingField({
  label,
  value,
  onChange,
  type = "text",
  error,
  alwaysFloat = false,
  isDate = false,
  compact = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  alwaysFloat?: boolean;
  isDate?: boolean;
  compact?: boolean;
}) {
  const floated = alwaysFloat || value.length > 0;
  return (
    <div>
      <div className={`${fieldWrapper} ${compact ? "h-[46px]" : "h-[52px]"} ${error ? "border-destructive" : ""}`}>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={floated ? "" : label}
          className={`peer h-full w-full rounded-[22px] bg-transparent ${isDate ? "pl-4 pr-9" : "px-4"} text-[13.5px] font-semibold text-[#2C2C2C] outline-none ${
            floated ? (compact ? "pt-3.5 pb-0.5" : "pt-4 pb-1") : "py-2"
          } focus:pt-4 focus:pb-1 placeholder:text-gray-400 placeholder:font-normal`}
        />
        <label
          className={`${floatingLabelBase} ${
            floated
              ? compact
                ? "top-1 text-[10px] font-extrabold text-[#430E6C] opacity-100"
                : "top-1.5 text-[10.5px] font-extrabold text-[#430E6C] opacity-100"
              : "top-1/2 -translate-y-1/2 text-[13px] font-medium text-gray-400 opacity-0"
          } peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-[10.5px] peer-focus:font-extrabold peer-focus:text-[#430E6C] peer-focus:opacity-100`}
        >
          {label}
        </label>
        {isDate && (
          <Calendar className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        )}
      </div>
      {error && <span className="mt-0.5 ml-2 block text-[10.5px] font-bold text-destructive">{error}</span>}
    </div>
  );
}

function FloatingSelect({
  label,
  value,
  onChange,
  options,
  error,
  compact = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
  compact?: boolean;
}) {
  const floated = value.length > 0;
  return (
    <div>
      <div className={`${fieldWrapper} ${compact ? "h-[46px]" : "h-[52px]"} ${error ? "border-destructive" : ""}`}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`peer h-full w-full appearance-none rounded-[22px] bg-transparent pl-4 pr-9 text-[13.5px] font-semibold text-[#2C2C2C] outline-none cursor-pointer ${
            floated ? (compact ? "pt-3.5 pb-0.5" : "pt-4 pb-1") : "py-2"
          } focus:pt-4 focus:pb-1`}
        >
          <option value="" hidden>{label}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <label
          className={`${floatingLabelBase} ${
            floated
              ? compact
                ? "top-1 text-[10px] font-extrabold text-[#430E6C] opacity-100"
                : "top-1.5 text-[10.5px] font-extrabold text-[#430E6C] opacity-100"
              : "top-1/2 -translate-y-1/2 text-[13px] font-medium text-gray-400 opacity-0"
          } peer-focus-within:top-1.5 peer-focus-within:translate-y-0 peer-focus-within:text-[10.5px] peer-focus-within:font-extrabold peer-focus-within:text-[#430E6C] peer-focus-within:opacity-100`}
        >
          {label}
        </label>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#430E6C] transition-transform duration-200 ease-out group-focus-within:rotate-180" />
      </div>
      {error && <span className="mt-0.5 ml-2 block text-[10.5px] font-bold text-destructive">{error}</span>}
    </div>
  );
}

function FloatingTextarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const floated = value.length > 0;
  return (
    <div className={`${fieldWrapper} min-h-[90px]`}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={floated ? "" : label}
        className="peer min-h-[90px] w-full resize-y rounded-[22px] bg-transparent px-4 pt-5 pb-2 text-[13.5px] font-semibold text-[#2C2C2C] outline-none placeholder:text-gray-400 placeholder:font-normal"
      />
      <label
        className={`${floatingLabelBase} ${
          floated
            ? "top-1.5 text-[10.5px] font-extrabold text-[#430E6C] opacity-100"
            : "top-2.5 text-[13px] font-medium text-gray-400 opacity-0"
        } peer-focus:top-1.5 peer-focus:text-[10.5px] peer-focus:font-extrabold peer-focus:text-[#430E6C] peer-focus:opacity-100`}
      >
        {label}
      </label>
    </div>
  );
}
