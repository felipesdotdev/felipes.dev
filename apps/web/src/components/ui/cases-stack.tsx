'use client';

import Link from 'next/link';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight01 } from '../icons/arrow-right-01';
import { CheckList } from '../icons/check-list';
import { Rocket } from '../icons/rocket';
import { ServerStack01 } from '../icons/server-stack-01';
import { Tick01 } from '../icons/tick-01';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MAX_FEATURES_TO_SHOW = 6;

const cases = [
  {
    id: 'petroend',
    company: 'PetroEND',
    title: 'Transformação Digital Completa',
    problem:
      'Site desatualizado com baixa conversão, sem otimização para dispositivos móveis e dificuldade para os clientes encontrarem informações sobre os serviços.',
    solution:
      'Desenvolvimento completo de um novo site responsivo com foco em conversão, otimização SEO avançada e integração com ferramentas de análise de performance.',
    results: [{ metric: '+150%', label: 'Aumento em Conversões' }],
    showPerformance: true,
  },
  {
    id: 'invoicce',
    company: 'Invoicce',
    title: 'Sistema de IA para Ligações Automatizadas',
    problem:
      'Empresas precisavam de uma solução completa de inteligência artificial para automatizar ligações, com integração total entre chamadas, WhatsApp e gestão de clientes.',
    solution:
      'Desenvolvimento 100% solo de uma plataforma SaaS completa: sistema de IA conversacional, gerenciamento de usuários, pagamentos, fluxos por nós, integração WhatsApp, dashboard analytics e arquitetura escalável.',
    results: [
      { metric: '100%', label: 'Desenvolvido Solo' },
      { metric: 'Full-Stack', label: 'IA + Backend + Frontend' },
    ],
    showPerformance: false,
    features: [
      'Sistema de IA conversacional para ligações',
      'Gerenciamento completo de usuários e permissões',
      'Sistema de pagamentos e planos (Stripe/PagSeguro)',
      'Editor de fluxos por nós (drag & drop)',
      'Integração WhatsApp para mensagens durante chamadas',
      'Dashboard com analytics em tempo real',
      'Arquitetura escalável (microserviços)',
      'Sistema de webhooks e APIs REST',
    ],
  },
  {
    id: 'fantazy',
    company: 'Fantazy',
    title: 'Template PHP customizado, integrações financeiras e segurança',
    problem:
      'Necessidade de monetização com assinaturas/boletos, Pix e entrega de mídia com controle de acesso, evitando pirataria de conteúdo.',
    solution:
      'Customização segura de template PHP com integrações Asaas (boletos/assinaturas), API de Pix, webhooks e validações. Implementação de proteção contra pirataria e entrega de mídia avançada com controle de acesso.',
    results: [
      { metric: 'Segurança', label: 'Proteção antipirataria' },
      { metric: 'Integrações', label: 'Asaas, Pix, Webhooks' },
    ],
    showPerformance: false,
  },
  {
    id: 'agenda-facil',
    company: 'Agenda Fácil',
    title:
      'Sistema de agendamento full‑stack em Next.js 16 + Hono + PostgreSQL',
    problem:
      'Escritórios contábeis precisavam de uma solução simples e rápida para marcação de horários com foco em performance e experiência do desenvolvedor.',
    solution:
      'Construído em 3 horas com arquitetura enxuta: Next.js 16, TypeScript, Hono no backend e PostgreSQL. Deploy na Vercel com otimizações de performance.',
    results: [
      { metric: '3 horas', label: 'Tempo de desenvolvimento' },
      { metric: 'DX/Performance', label: 'Arquitetura enxuta na Vercel' },
    ],
    showPerformance: true,
  },
];

export default function CasesStack() {
  return (
    <div className="relative w-full overflow-hidden px-4 xs:px-6 sm:px-0">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        cardsEffect={{
          slideShadows: true,
          rotate: true,
          perSlideOffset: 8,
          perSlideRotate: 0.5,
        }}
        className="h-auto w-full max-w-[85vw] sm:max-w-[1000px]"
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {cases.map((caseItem) => (
          <SwiperSlide key={caseItem.id}>
            <div className="overflow-hidden rounded-2xl bg-secondary p-4 xs:p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] sm:p-8 md:p-10">
              <div className="grid grid-cols-1 gap-4 xs:gap-6 sm:gap-8 lg:grid-cols-2">
                {/* Conteúdo Principal */}
                <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/20 p-2">
                      <CheckList className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-medium text-primary text-sm uppercase tracking-wider">
                      CASE DE SUCESSO
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-2xl text-foreground xs:text-3xl leading-tight sm:text-4xl">
                      {caseItem.company}
                    </h3>
                    <p className="font-medium text-foreground/80 text-lg xs:text-xl leading-relaxed sm:text-2xl">
                      {caseItem.title}
                    </p>
                  </div>

                  {/* Resumo do Case */}
                  <div className="space-y-3 xs:space-y-4">
                    <p className="text-foreground/80 text-sm xs:text-base leading-relaxed">
                      {caseItem.problem}
                    </p>

                    <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      {caseItem.results.map((result) => (
                        <div
                          className="rounded-lg bg-secondary/50 p-2 xs:p-3 text-center sm:p-4"
                          key={result.label}
                        >
                          <div className="font-bold text-lg text-primary xs:text-xl sm:text-2xl">
                            {result.metric}
                          </div>
                          <div className="text-foreground/60 text-xs xs:text-sm">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features técnicas para Invoicce */}
                  {caseItem.id === 'invoicce' && (
                    <div className="space-y-2 xs:space-y-3">
                      <h4 className="flex items-center gap-2 xs:gap-3 font-semibold text-base text-foreground xs:text-lg">
                        <div className="rounded-full bg-primary/20 p-2">
                          <ServerStack01 className="h-5 w-5 text-primary" />
                        </div>
                        Stack Técnica Completa
                      </h4>
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 xs:gap-2">
                        {caseItem.features
                          ?.slice(0, MAX_FEATURES_TO_SHOW)
                          .map((feature) => (
                            <div
                              className="flex items-start gap-2"
                              key={feature}
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                              <span className="text-foreground/70 text-xs xs:text-sm leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Botões */}
                  <div className="flex xs:flex-row flex-col gap-3 xs:gap-4">
                    <Link
                      className="flex items-center justify-center gap-2 rounded-lg border border-foreground/20 px-4 xs:px-6 py-2.5 xs:py-3 font-semibold text-foreground text-sm xs:text-base transition-all duration-300 hover:bg-secondary"
                      href="/#contact"
                    >
                      <ArrowRight01 className="h-4 w-4" />
                      Conversar sobre projeto
                    </Link>
                  </div>
                </div>

                {/* Coluna da Direita - Conteúdo Visual */}
                <div className="flex items-center justify-center">
                  <div className="rounded-2xl bg-secondary/50 p-4 xs:p-6 sm:p-8">
                    <div className="text-center">
                      <div className="mx-auto mb-3 xs:mb-4 flex h-12 xs:h-16 w-12 xs:w-16 items-center justify-center rounded-full bg-primary/20">
                        <Rocket className="h-6 xs:h-8 w-6 xs:w-8 text-primary" />
                      </div>
                      <h3 className="mb-2 font-medium text-base text-foreground xs:text-lg">
                        {caseItem.company}
                      </h3>
                      <p className="mb-3 xs:mb-4 text-foreground/60 text-xs xs:text-sm">
                        Projeto desenvolvido com foco em performance e
                        resultados
                      </p>
                      {caseItem.showPerformance && (
                        <div className="inline-flex items-center gap-2 rounded-lg bg-secondary p-2">
                          <Tick01 className="h-4 w-4 text-primary" />
                          <span className="font-medium text-primary text-xs">
                            100/100 Performance
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Hidden on mobile */}
      <div className="swiper-button-prev-custom -translate-y-1/2 lg:-left-12 absolute top-1/2 left-2 z-10 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary/80 backdrop-blur-sm transition-all duration-300 hover:bg-secondary sm:flex">
        <ArrowRight01 className="h-5 w-5 rotate-180 text-foreground" />
      </div>
      <div className="swiper-button-next-custom -translate-y-1/2 lg:-right-12 absolute top-1/2 right-2 z-10 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary/80 backdrop-blur-sm transition-all duration-300 hover:bg-secondary sm:flex">
        <ArrowRight01 className="h-5 w-5 text-foreground" />
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 flex justify-center">
        <div className="swiper-pagination" />
      </div>
    </div>
  );
}
