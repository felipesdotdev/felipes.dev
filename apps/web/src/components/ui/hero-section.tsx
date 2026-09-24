import HeroButton from './hero-button';
import HeroContent from './hero-content';
import HeroImage from './hero-image';

export default function HeroSection() {
  return (
    <section
      className="mt-4 scroll-mt-28 xs:mt-6 sm:mt-8 md:mt-10"
      id="hero"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="relative isolate overflow-hidden rounded-2xl border border-border/70 bg-secondary p-4 xs:rounded-3xl xs:p-6 sm:p-8 md:p-10 lg:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 -z-10 size-96 rounded-full bg-primary/15 blur-[100px]" />
        <div className="flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:gap-14 xl:gap-16">
          <div className="w-full space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 lg:w-1/2 lg:space-y-12">
            <HeroContent />
            <div className="flex justify-start">
              <HeroButton />
            </div>
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
