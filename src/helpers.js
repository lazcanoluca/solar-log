export const MeanOrbit = (perihelion, aphelion) => (
    (perihelion + aphelion)/2
);

export const Millions = (number) => (
    Math.round(number / 1000000)
);