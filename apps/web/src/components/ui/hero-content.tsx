import DesignElement from './design-element';

export default function HeroContent() {
  return (
    <div className="relative max-w-2xl">
      <h1 className="font-semibold text-4xl text-foreground xs:text-3xl leading-[1.04] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[58px] xl:text-6xl">
        <span className="block">Transformo ideias</span>
        <span className="block">em <span className="relative inline-block text-primary">produtos<DesignElement /></span></span>
        <span className="block text-primary">digitais melhores.</span>
      </h1>
      <p className="mt-5 max-w-xl text-base text-muted-foreground leading-7 sm:text-lg">
        Crio sites e sistemas rápidos, acessíveis e preparados para resolver problemas reais do negócio.
      </p>
    </div>
  );
}
