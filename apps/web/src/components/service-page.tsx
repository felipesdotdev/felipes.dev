import {
  ArrowDown,
  ArrowRight,
  Check,
  Factory,
  Lightbulb,
  PanelsTopLeft,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceHeader } from '@/components/service-header';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl } from '@/lib/site-config';

type ServiceKey = 'strategy' | 'prototype' | 'industrial';

const services = {
  strategy: {
    eyebrow: 'Estratégia digital',
    icon: Lightbulb,
    image: '/servicos/estrategia-digital.png',
    title: 'Ideias claras. Produtos digitais com direção.',
    intro:
      'Transformo desafios de negócio em conceitos digitais consistentes, com prioridades bem definidas e um caminho realista para tirar cada ideia do papel.',
    imageAlt:
      'Mesa de estúdio com esboços de produto e computador sob luz natural',
    aboutTitle: 'Comece pelo problema certo',
    about:
      'Antes de escolher ferramentas ou escrever código, entendemos o contexto: quem precisa da solução, o que está impedindo o avanço e como o sucesso será percebido. A partir daí, construímos uma direção que conecta objetivos de negócio às necessidades das pessoas.',
    cards: [
      [
        'Imersão e descoberta',
        'Conversas, análise do cenário atual e mapeamento das oportunidades que realmente importam.',
      ],
      [
        'Conceito e posicionamento',
        'Uma proposta de valor clara, alinhada ao público, ao mercado e à identidade do seu negócio.',
      ],
      [
        'Plano de ação',
        'Escopo priorizado, próximos passos e recomendações práticas para validar e evoluir a solução.',
      ],
    ],
    steps: [
      [
        '01',
        'Entender',
        'Alinhamos objetivos, público, restrições e sinais de sucesso.',
      ],
      [
        '02',
        'Explorar',
        'Mapeamos oportunidades e comparamos caminhos possíveis.',
      ],
      [
        '03',
        'Priorizar',
        'Definimos o que validar primeiro e o que pode esperar.',
      ],
      [
        '04',
        'Direcionar',
        'Você recebe uma visão clara para avançar com segurança.',
      ],
    ],
    deliverables: [
      'Diagnóstico do produto e do contexto',
      'Mapa de oportunidades e prioridades',
      'Proposta de valor e posicionamento',
      'Roadmap inicial com próximos passos',
    ],
    cta: 'Vamos dar forma à sua ideia?',
    message:
      'Olá! Gostaria de conversar sobre estratégia e criação de conceitos digitais.',
  },
  prototype: {
    eyebrow: 'Design de produto · UX/UI',
    icon: PanelsTopLeft,
    image: '/servicos/prototipagem-ux.png',
    title: 'Experiências digitais simples de entender e usar.',
    intro:
      'Desenho interfaces e protótipos navegáveis que ajudam sua equipe a validar fluxos, reduzir incertezas e construir o produto com uma experiência mais consistente.',
    imageAlt:
      'Tablet e celular exibindo protótipos de interface em uma mesa escura',
    aboutTitle: 'Valide a experiência antes de desenvolver',
    about:
      'Um bom produto torna tarefas importantes mais fáceis. Organizamos a informação, desenhamos jornadas e testamos as interações para encontrar fricções cedo — quando ajustar ainda é simples e barato.',
    cards: [
      [
        'Pesquisa e arquitetura',
        'Entrevistas, jornadas e estrutura de conteúdo para entender o que as pessoas precisam fazer.',
      ],
      [
        'Interface e sistema visual',
        'Telas cuidadosas e componentes reutilizáveis que dão unidade ao produto em todos os dispositivos.',
      ],
      [
        'Protótipo e validação',
        'Fluxos clicáveis para compartilhar, testar com usuários e ajustar antes da implementação.',
      ],
    ],
    steps: [
      ['01', 'Investigar', 'Entendemos usuários, tarefas e pontos de atrito.'],
      [
        '02',
        'Estruturar',
        'Organizamos conteúdo, jornadas e prioridades da interface.',
      ],
      [
        '03',
        'Prototipar',
        'Criamos telas e fluxos navegáveis para explorar a solução.',
      ],
      [
        '04',
        'Validar',
        'Coletamos feedback e refinamos o que será desenvolvido.',
      ],
    ],
    deliverables: [
      'Fluxos e arquitetura de informação',
      'Wireframes e interface de alta fidelidade',
      'Protótipo navegável para testes',
      'Biblioteca de componentes e especificações',
    ],
    cta: 'Vamos melhorar a experiência do seu produto?',
    message:
      'Olá! Gostaria de conversar sobre design de produto, UX e prototipagem.',
  },
  industrial: {
    eyebrow: 'Soluções digitais para indústria',
    icon: Factory,
    image: '/servicos/design-industrial.png',
    title: 'Tecnologia que acompanha o ritmo da operação.',
    intro:
      'Desenvolvo ferramentas digitais para conectar processos, simplificar rotinas e dar mais visibilidade às decisões em ambientes industriais.',
    imageAlt:
      'Braço robótico trabalhando com componentes metálicos em uma fábrica moderna',
    aboutTitle: 'Digitalize processos com propósito',
    about:
      'Cada operação tem sistemas, rotinas e restrições próprias. Mapeamos como o trabalho acontece hoje e desenhamos soluções que se integram ao contexto existente, apoiando as equipes sem acrescentar complexidade desnecessária.',
    cards: [
      [
        'Sistemas sob medida',
        'Aplicações internas e portais que organizam informação e apoiam tarefas operacionais.',
      ],
      [
        'Integração e automação',
        'Conexão entre ferramentas e redução de etapas manuais em fluxos repetitivos.',
      ],
      [
        'Dados para decidir',
        'Dashboards objetivos para acompanhar indicadores, identificar gargalos e agir com contexto.',
      ],
    ],
    steps: [
      [
        '01',
        'Mapear',
        'Documentamos processos, sistemas envolvidos e necessidades da equipe.',
      ],
      [
        '02',
        'Desenhar',
        'Definimos a solução e os pontos de integração com a operação.',
      ],
      [
        '03',
        'Construir',
        'Implementamos em etapas, priorizando valor e continuidade do trabalho.',
      ],
      [
        '04',
        'Evoluir',
        'Acompanhamos o uso e ajustamos a solução conforme a operação muda.',
      ],
    ],
    deliverables: [
      'Mapeamento dos processos e requisitos',
      'Aplicações web para fluxos específicos',
      'Integrações entre sistemas e serviços',
      'Painéis e indicadores operacionais',
    ],
    cta: 'Tem um processo que pode funcionar melhor?',
    message:
      'Olá! Gostaria de conversar sobre uma solução digital para minha operação industrial.',
  },
} satisfies Record<
  ServiceKey,
  {
    eyebrow: string;
    icon: typeof Lightbulb;
    image: string;
    title: string;
    intro: string;
    imageAlt: string;
    aboutTitle: string;
    about: string;
    cards: [string, string][];
    steps: [string, string, string][];
    deliverables: string[];
    cta: string;
    message: string;
  }
>;

export function ServicePage({ service }: { service: ServiceKey }) {
  const item = services[service];
  const Icon = item.icon;
  return (
    <>
      <ServiceHeader />
      <main className="pt-24 pb-20 sm:pt-28">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <section className="relative isolate flex min-h-[440px] items-end overflow-hidden rounded-[28px] bg-neutral-950 px-6 py-10 sm:min-h-[520px] sm:px-12 sm:py-14 lg:px-16">
            <Image
              alt={item.imageAlt}
              className="-z-20 object-cover"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              src={item.image}
            />
            <div className="-z-10 absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
            <div className="max-w-3xl text-white">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm text-white/90 backdrop-blur">
                <Icon className="size-4" />
                {item.eyebrow}
              </span>
              <h1 className="max-w-3xl text-balance font-semibold text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {item.title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base text-white/75 leading-7 sm:text-lg sm:leading-8">
                {item.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full" size="lg">
                  <Link
                    href={getWhatsAppUrl(item.message)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Conversar sobre o projeto{' '}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <a
                  className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  href="#como-funciona"
                >
                  Conheça o processo <ArrowDown className="size-4" />
                </a>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 py-16 sm:py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="font-medium text-primary text-sm uppercase tracking-[0.18em]">
                Uma boa solução começa com contexto
              </p>
              <h2 className="mt-4 text-balance font-semibold text-3xl tracking-tight sm:text-4xl">
                {item.aboutTitle}
              </h2>
            </div>
            <p className="text-pretty text-lg text-muted-foreground leading-8">
              {item.about}
            </p>
          </section>

          <section className="border-y py-14 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-9 max-w-2xl">
                <p className="font-medium text-primary text-sm uppercase tracking-[0.18em]">
                  Como posso ajudar
                </p>
                <h2 className="mt-3 font-semibold text-3xl tracking-tight sm:text-4xl">
                  Um trabalho pensado para gerar avanço real.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {item.cards.map(([title, text], i) => (
                  <article
                    className="rounded-2xl border bg-card p-6 sm:p-8"
                    key={title}
                  >
                    <span className="font-medium text-primary text-sm">
                      0{i + 1}
                    </span>
                    <h3 className="mt-7 font-semibold text-xl">{title}</h3>
                    <p className="mt-3 text-muted-foreground leading-7">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="mx-auto max-w-6xl scroll-mt-24 py-16 sm:py-24"
            id="como-funciona"
          >
            <div className="mb-9 max-w-2xl">
              <p className="font-medium text-primary text-sm uppercase tracking-[0.18em]">
                Do primeiro alinhamento à entrega
              </p>
              <h2 className="mt-3 font-semibold text-3xl tracking-tight sm:text-4xl">
                Um processo claro, feito em conjunto.
              </h2>
            </div>
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {item.steps.map(([number, title, text]) => (
                <article className="border-t py-6 pr-6 sm:mr-6" key={number}>
                  <span className="font-medium text-primary text-sm">
                    {number}
                  </span>
                  <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                  <p className="mt-2 text-muted-foreground leading-7">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 rounded-3xl bg-muted/50 p-6 sm:p-10 md:grid-cols-[1fr_1fr] md:gap-16">
            <div>
              <p className="font-medium text-primary text-sm uppercase tracking-[0.18em]">
                O que você recebe
              </p>
              <h2 className="mt-3 font-semibold text-3xl tracking-tight">
                Clareza para seguir em frente.
              </h2>
              <p className="mt-4 text-muted-foreground leading-7">
                As entregas são ajustadas ao escopo e ao momento do seu projeto.
                O foco é deixar sua equipe com decisões e materiais úteis para a
                próxima etapa.
              </p>
            </div>
            <ul className="grid content-center gap-4">
              {item.deliverables.map((deliverable) => (
                <li
                  className="flex items-start gap-3 leading-6"
                  key={deliverable}
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </section>

          <section className="mx-auto mt-16 flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-primary px-6 py-9 text-primary-foreground sm:mt-24 sm:flex-row sm:items-center sm:px-10 sm:py-11">
            <div>
              <p className="font-semibold text-2xl tracking-tight sm:text-3xl">
                {item.cta}
              </p>
              <p className="mt-2 text-primary-foreground/75">
                Conte um pouco do desafio. A gente conversa sobre o próximo
                passo.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-full"
              size="lg"
              variant="secondary"
            >
              <Link
                href={getWhatsAppUrl(item.message)}
                rel="noopener noreferrer"
                target="_blank"
              >
                Falar pelo WhatsApp <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
}
