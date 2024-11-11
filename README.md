# Jotai 

Effortless State Management in React: Clear & Complete Guide with **Jotai**
By Invlìolve in innovation.
YouTube [playlist](https://www.youtube.com/watch?v=0uM16sAWm_Q)
Jotai [site](https://jotai.org/)

## Vite project

```sh
pnpm create vite jotai-vite
pnpm add jotai
pnpm install
pnpm dev
```

## Atoms

```ts 
// atoms.ts
import { atom } from "jotai";

export const sideLengthAtom = atom<number>(0);
export const priceAtom = atom<number>(0);

// derived readonly atom
export const fenceCostAtom = atom(
  get => get(sideLengthAtom) * 4 * get(priceAtom)
);
```