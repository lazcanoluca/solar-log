export const MeanOrbit = (perihelion, aphelion) => (
    (perihelion + aphelion)/2
);

export const Billions = (number) => (
    (number / 1000000000).toPrecision(3)
);

export const Millions = (number) => (
    (number / 1000000).toPrecision(3)
);

export const Thousands = (number) => (
    (number / 1000).toPrecision(2)
);