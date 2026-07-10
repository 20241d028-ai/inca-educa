import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-surface-2 border-b border-border">
      <div className="container-page py-20 md:py-28 max-w-4xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-balance">{title}</h1>
        {description && <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
