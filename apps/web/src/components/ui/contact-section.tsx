import Link from 'next/link';
import { ArrowRight01 } from '../icons/arrow-right-01';
import { Linkedin01 } from '../icons/linkedin-01';
import { Mail01 } from '../icons/mail-01';
import { Man } from '../icons/man';
import { Whatsapp } from '../icons/whatsapp';
import { getFormattedWhatsAppNumber, getWhatsAppUrl } from '@/lib/site-config';

const contactLinkClass =
  'group flex items-center gap-3 xs:gap-4 rounded-2xl border border-border/60 bg-secondary p-3 xs:p-4 shadow-[0_0_0_0.5px_rgba(0,0,0,0.18),inset_0_0_0_1px_rgba(255,255,255,0.035),inset_0_1px_0_rgba(255,255,255,0.04),0_1px_2px_rgba(0,0,0,0.12),0_3px_6px_rgba(0,0,0,0.07)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_0_0_0.5px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.045),inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.14),0_8px_18px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary active:translate-y-0';

export default function ContactSection() {
  return (
    <section
      className="mt-12 xs:mt-16 w-full overflow-hidden sm:mt-20 md:mt-24 lg:mt-32"
      id="contact"
      style={{ opacity: 1, transform: 'none' }}
    >
      {/* Header */}
      <div className="mb-8 xs:mb-10 text-center sm:mb-12 md:mb-16">
        <Man className="mx-auto mb-3 xs:mb-4 h-10 xs:h-12 w-10 xs:w-12 sm:h-15 sm:w-15" />
        <p className="mb-2 font-medium text-foreground/40 text-sm xs:text-base uppercase tracking-wider">
          VAMOS CONVERSAR
        </p>
        <h2 className="font-medium text-3xl text-foreground xs:text-4xl leading-tight sm:text-5xl lg:text-[52px]">
          Pronto para transformar
          <br />
          <span className="text-primary">seu negócio?</span>
        </h2>
      </div>

      {/* Main Contact Card */}
      <div className="mb-8 xs:mb-10 overflow-hidden rounded-2xl bg-secondary p-4 xs:p-6 sm:mb-12 sm:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Contact Info */}
          <div className="space-y-4 xs:space-y-6">
            <div>
              <h3 className="mb-3 xs:mb-4 font-medium text-foreground text-xl xs:text-2xl sm:text-3xl">
                Entre em contato
              </h3>
              <p className="text-foreground/70 text-sm xs:text-base leading-relaxed">
                Vamos conversar sobre como posso ajudar seu negócio a crescer
                com tecnologia de alta performance. Respondo em até 24 horas.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 xs:space-y-4">
              {/* WhatsApp */}
              <Link
                className={contactLinkClass}
                href={getWhatsAppUrl('Olá! Gostaria de conversar sobre desenvolvimento web.')}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex h-10 xs:h-12 w-10 xs:w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Whatsapp className="h-5 xs:h-6 w-5 xs:w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm xs:text-base">
                    WhatsApp
                  </h4>
                  <p className="text-foreground/60 text-xs xs:text-sm">
                    {getFormattedWhatsAppNumber()}
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-secondary/70 text-foreground/50 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                  <ArrowRight01 className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>

              {/* Email */}
              <Link
                className={contactLinkClass}
                href="mailto:contato@felipes.dev?subject=Interesse em desenvolvimento web"
              >
                <div className="flex h-10 xs:h-12 w-10 xs:w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Mail01 className="h-5 xs:h-6 w-5 xs:w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm xs:text-base">
                    Email
                  </h4>
                  <p className="text-foreground/60 text-xs xs:text-sm">
                    luisfelipe.rs08x@gmail.com
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-secondary/70 text-foreground/50 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                  <ArrowRight01 className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>

              {/* LinkedIn */}
              <Link
                className={contactLinkClass}
                href="https://linkedin.com/in/felipesdev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex h-10 xs:h-12 w-10 xs:w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Linkedin01 className="h-5 xs:h-6 w-5 xs:w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm xs:text-base">
                    LinkedIn
                  </h4>
                  <p className="text-foreground/60 text-xs xs:text-sm">
                    Vamos nos conectar
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-secondary/70 text-foreground/50 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                  <ArrowRight01 className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* CTA Side */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-primary/10 to-primary/5 p-4 xs:p-6 sm:p-8">
            <div className="-right-5 -top-5 absolute z-10 h-32 w-32 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
            <div className="relative z-10">
              <h3 className="mb-4 xs:mb-6 font-bold text-foreground text-xl xs:text-2xl leading-tight sm:text-3xl">
                Vamos criar algo
                <br />
                <span className="text-primary">incrível juntos?</span>
              </h3>
              <p className="mb-6 text-foreground/70 text-sm xs:text-base leading-relaxed">
                Seja um site institucional, e-commerce ou sistema complexo,
                estou pronto para transformar sua ideia em realidade.
              </p>

              <div className="mb-6 space-y-3 xs:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 xs:h-8 w-6 xs:w-8 items-center justify-center rounded-full bg-primary/20">
                    <svg
                      className="h-3 xs:h-4 w-3 xs:w-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <title>Check Icon</title>
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground/80 text-xs xs:text-sm">
                    Consulta gratuita de 30 minutos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 xs:h-8 w-6 xs:w-8 items-center justify-center rounded-full bg-primary/20">
                    <svg
                      className="h-3 xs:h-4 w-3 xs:w-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <title>Check Icon</title>
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground/80 text-xs xs:text-sm">
                    Proposta personalizada
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 xs:h-8 w-6 xs:w-8 items-center justify-center rounded-full bg-primary/20">
                    <svg
                      className="h-3 xs:h-4 w-3 xs:w-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <title>Check Icon</title>
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground/80 text-xs xs:text-sm">
                    Suporte pós-entrega
                  </span>
                </div>
              </div>

              <Link
                className="inline-flex items-center gap-2 xs:gap-3 rounded-full bg-primary px-4 xs:px-6 py-2.5 xs:py-3 font-semibold text-primary-foreground text-sm xs:text-base transition-all duration-300 hover:scale-105 hover:bg-primary/90"
                href={getWhatsAppUrl('Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.')}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Whatsapp className="h-4 xs:h-5 w-4 xs:w-5" />
                Agendar Consulta
                <ArrowRight01 className="h-4 xs:h-5 w-4 xs:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
