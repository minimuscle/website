const SeedMorph = ({ seeds }: { seeds: readonly number[] }) => {
    const samplesPerSeed = 8;
    const weights = seeds.map((_, seedIndex) => {
        const samples = Array.from({ length: seeds.length * samplesPerSeed }, (_, sample) => {
            const segment = Math.floor(sample / samplesPerSeed);
            const t = (sample % samplesPerSeed) / samplesPerSeed;
            const controlWeights = [
                ((1 - t) ** 3) / 6,
                (3 * t ** 3 - 6 * t ** 2 + 4) / 6,
                (-3 * t ** 3 + 3 * t ** 2 + 3 * t + 1) / 6,
                t ** 3 / 6
            ];

            return controlWeights.reduce((weight, controlWeight, controlIndex) => {
                const controlSeed = (segment + controlIndex - 1 + seeds.length) % seeds.length;
                return controlSeed === seedIndex ? weight + controlWeight : weight;
            }, 0);
        });

        return [...samples, samples[0]].map(weight => weight.toFixed(4)).join(";");
    });

    return (
        <>
            {seeds.map((seed, index) => (
                <feTurbulence
                    key={seed}
                    result={`noise-${index}`}
                    type="fractalNoise"
                    baseFrequency=".012"
                    numOctaves="4"
                    seed={seed}
                />
            ))}
            {weights.map((values, index) => (
                <feComponentTransfer key={values} in={`noise-${index}`} result={`weighted-noise-${index}`}>
                    <feFuncR type="linear">
                        <animate attributeName="slope" values={values} dur="15s" repeatCount="indefinite" />
                    </feFuncR>
                    <feFuncG type="linear">
                        <animate attributeName="slope" values={values} dur="15s" repeatCount="indefinite" />
                    </feFuncG>
                    <feFuncB type="linear">
                        <animate attributeName="slope" values={values} dur="15s" repeatCount="indefinite" />
                    </feFuncB>
                    <feFuncA type="linear">
                        <animate attributeName="slope" values={values} dur="15s" repeatCount="indefinite" />
                    </feFuncA>
                </feComponentTransfer>
            ))}
            {seeds.slice(1).map((_, offset) => {
                const index = offset + 1;
                return (
                    <feComposite
                        key={index}
                        in={index === 1 ? "weighted-noise-0" : `summed-noise-${index - 1}`}
                        in2={`weighted-noise-${index}`}
                        operator="arithmetic"
                        k2="1"
                        k3="1"
                        result={index === seeds.length - 1 ? "morphed-noise" : `summed-noise-${index}`}
                    />
                );
            })}
        </>
    );
};

const CloudFilter = ({ id, seeds, scale }: { id: string; seeds: readonly number[]; scale: number }) => (
    <filter id={id}>
        <SeedMorph seeds={seeds} />
        <feDisplacementMap in="SourceGraphic" in2="morphed-noise" scale={scale} />
    </filter>
);

export const TitleClouds = () => {
    const cloudSeeds = [4, 61, 368, 9, 217, 433, 211, 183, 476, 124];


    return (
        <>
            <div className="TitlePage__cloud" id="cloud-back" />
            <div className="TitlePage__cloud" id="cloud-mid" />
            <div className="TitlePage__cloud" id="cloud-front" />


            <svg width="0" height="0">
                <CloudFilter id="filter-back" seeds={cloudSeeds} scale={170} />
                <CloudFilter id="filter-mid" seeds={cloudSeeds} scale={150} />
                <CloudFilter id="filter-front" seeds={cloudSeeds} scale={100} />
            </svg>

        </>
    );
};
