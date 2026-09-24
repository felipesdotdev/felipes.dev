import Link from 'next/link';

const footerLinks = [
  { label: 'Projetos', href: '/#projects' },
  { label: 'Serviços', href: '/#services' },
  { label: 'Contato', href: '/#contact' },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-20 flex w-full max-w-[1200px] flex-col gap-5 border-t border-border/70 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <Link aria-label="Luis Felipe Ribeiro da Silva, início" className="font-mono font-semibold text-foreground" href="/">
        felipes.dev<span className="text-primary">/</span>
      </Link>
      <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-6 gap-y-2">
        {footerLinks.map((item) => (
          <Link className="transition-colors hover:text-primary" href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} Luis Felipe Ribeiro da Silva</p>
    </footer>
  );
}
