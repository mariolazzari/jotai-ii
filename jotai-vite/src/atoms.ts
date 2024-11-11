import { atom } from "jotai";

export const sideLengthAtom = atom<number>(0);
export const priceAtom = atom<number>(0);

// derived readonly atom
export const fenceCostAtom = atom<number>(
  get => get(sideLengthAtom) * 4 * get(priceAtom)
);

// read only atoms
export const readOnlyPerimeter = atom<number>(get => get(sideLengthAtom) * 4);
export const readOnlyArea = atom<number>(get => get(sideLengthAtom) ** 2);
export const readOnlyVolume = atom<number>(get => get(sideLengthAtom) ** 3);
