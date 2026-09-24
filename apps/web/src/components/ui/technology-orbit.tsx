const orbitingTechnologies = [
  { label: 'React', icon: 'react', size: 58 },
  { label: 'Bun', icon: 'bun', size: 44 },
  { label: 'Tailwind CSS', icon: 'tailwind', size: 58 },
  { label: 'TypeScript', icon: 'typescript', size: 44 },
  { label: 'AWS', icon: 'aws', size: 58 },
  { label: 'Node.js', icon: 'nodedotjs', size: 44 },
  { label: 'Next.js', icon: 'nextjs', size: 58 },
  { label: 'PostgreSQL', icon: 'postgresql', size: 44 },
  { label: 'Hono', icon: 'hono', size: 52 },
];

const ORBIT_DURATION = 64;

function orbitPath(index: number) {
  const angle = (index / orbitingTechnologies.length) * Math.PI * 2;
  const x = 158 * Math.cos(angle);
  const y = 92 * Math.sin(angle);

  return `M ${x} ${y} A 158 92 0 1 1 ${-x} ${-y} A 158 92 0 1 1 ${x} ${y}`;
}

export default function TechnologyOrbit() {
  return (
    <svg
      aria-label={`Tecnologias que utilizo: ${orbitingTechnologies.map((technology) => technology.label).join(', ')}`}
      className="technology-orbit h-auto w-full"
      role="img"
      viewBox="0 0 420 241"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image
        aria-hidden="true"
        height="241"
        href="/technologies/background.svg"
        width="420"
        x="0"
        y="0"
      />
      {orbitingTechnologies.map((technology, index) => {
        const offset = technology.size / 2;
        return (
          <g key={technology.icon} transform="translate(210 132)">
            <g>
              <animateMotion
                className="technology-orbit__motion"
                calcMode="linear"
                dur={`${ORBIT_DURATION}s`}
                path={orbitPath(index)}
                repeatCount="indefinite"
                rotate="0"
              />
              <image
                aria-hidden="true"
                height={technology.size}
                href={`/technologies/icons/${technology.icon}.svg`}
                width={technology.size}
                x={-offset}
                y={-offset}
              />
            </g>
          </g>
        );
      })}
      <image
        aria-hidden="true"
        height="241"
        href="/technologies/foreground.svg"
        width="420"
        x="0"
        y="0"
      />
    </svg>
  );
}
