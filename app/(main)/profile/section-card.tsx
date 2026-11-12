import type { ReactNode } from "react";

interface SectionCardProps {
  icon: ReactNode;
  title: string;
  description?: ReactNode;
  /** Shown at the top right of the card, e.g. a count. */
  aside?: ReactNode;
  children?: ReactNode;
}

/** The dark panel the profile tabs use, with an orange icon and a title. */
export const SectionCard = ({
  icon,
  title,
  description,
  aside,
  children,
}: SectionCardProps) => (
  <section
    aria-label={title}
    className="rounded-xl bg-[#8ECAE6]/10 px-5 py-5 sm:px-6"
  >
    <header className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-[#FCFCFC]">
          <span className="text-[#FB8500]" aria-hidden="true">
            {icon}
          </span>
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-[#A9A9A9]">{description}</p>
        )}
      </div>
      {aside && <div className="shrink-0 text-xs text-[#A9A9A9]">{aside}</div>}
    </header>
    {children && <div className="mt-5">{children}</div>}
  </section>
);

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  text: ReactNode;
  action?: ReactNode;
}

/** Message for a tab that has nothing to show yet. */
export const EmptyState = ({ icon, title, text, action }: EmptyStateProps) => (
  <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-white/10 px-6 py-12 text-center">
    <span
      className="mb-1 grid size-12 place-items-center rounded-full bg-[#FB8501]/10 text-[#FB8500]"
      aria-hidden="true"
    >
      {icon}
    </span>
    <p className="text-base font-semibold text-[#FCFCFC]">{title}</p>
    <p className="max-w-md text-sm text-[#A9A9A9]">{text}</p>
    {action && <div className="mt-3">{action}</div>}
  </div>
);
