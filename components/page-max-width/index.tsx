import classNames from "classnames";

interface PageMaxWidthProps {
  children: React.ReactNode;
  className?: string;
}

export function PageMaxWidth({ children, className }: PageMaxWidthProps) {
  return (
    <div
      className={classNames(
        "w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col relative",
        className,
      )}
    >
      {children}
    </div>
  );
}
