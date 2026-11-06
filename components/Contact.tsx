"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { content, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface ContactProps {
  lang: Lang;
}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type ErrorMessages = typeof content.contact.form.errors;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

function validate(
  values: FormValues,
  errors: ErrorMessages,
  lang: Lang
): FormErrors {
  const nextErrors: FormErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = errors.name[lang];
  } else if (values.name.trim().length < 2) {
    nextErrors.name = errors.nameShort[lang];
  }

  if (!values.email.trim()) {
    nextErrors.email = errors.emailRequired[lang];
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    nextErrors.email = errors.emailInvalid[lang];
  }

  if (!values.message.trim()) {
    nextErrors.message = errors.messageRequired[lang];
  } else if (values.message.trim().length < 10) {
    nextErrors.message = errors.messageShort[lang];
  }

  return nextErrors;
}

export default function Contact({ lang }: ContactProps) {
  const { contact } = content;
  const { form } = contact;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values, form.errors, lang);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setLoading(false);
    setSent(true);
    setValues(initialValues);
  };

  const inputClasses = (hasError: boolean) =>
    `w-full rounded-2xl border bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/45 focus:bg-white/10 focus:ring-2 ${
      hasError
        ? "border-error/70 focus:border-error focus:ring-error/25"
        : "border-white/12 focus:border-primary focus:ring-primary/25"
    }`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-night py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="07"
          title={contact.title[lang]}
          subtitle={contact.subtitle[lang]}
          dark
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="left">
            <ul className="space-y-4">
              {contact.details.map((detail) => {
                const Icon = detail.icon;
                const contentNode = (
                  <>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      {detail.label[lang]}
                    </p>
                    <p className="mt-1 text-[15px] text-white/85">
                      {detail.value}
                    </p>
                  </>
                );

                const cardClass =
                  "glass-dark flex items-center gap-4 rounded-3xl px-5 py-4 transition-colors duration-300";

                return (
                  <li key={detail.label.id}>
                    {detail.href ? (
                      <motion.a
                        href={detail.href}
                        target={
                          detail.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          detail.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        whileHover={{ x: 6 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}
                        className={`${cardClass} hover:border-primary/40 hover:bg-white/10`}
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/80 to-secondary/80 text-ink">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">{contentNode}</div>
                      </motion.a>
                    ) : (
                      <motion.div
                        whileHover={{ x: 6 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}
                        className={cardClass}
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/80 to-secondary/80 text-ink">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">{contentNode}</div>
                      </motion.div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-dark space-y-5 rounded-[2rem] p-6 shadow-night sm:p-8"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  {form.nameLabel[lang]}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder={form.namePlaceholder[lang]}
                  className={inputClasses(Boolean(errors.name))}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mt-1.5 text-xs text-error"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  {form.emailLabel[lang]}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder={form.emailPlaceholder[lang]}
                  className={inputClasses(Boolean(errors.email))}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mt-1.5 text-xs text-error"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  {form.messageLabel[lang]}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder={form.messagePlaceholder[lang]}
                  className={`${inputClasses(Boolean(errors.message))} resize-y`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mt-1.5 text-xs text-error"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-lift disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
              >
                {loading && (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                )}
                {loading ? form.loading[lang] : form.submit[lang]}
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-2.5 rounded-2xl border border-primary/30 bg-primary/15 px-4 py-3 text-sm text-white/85"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {form.success[lang]}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
