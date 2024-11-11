# Jotai 

Effortless State Management in React: Clear & Complete Guide with **Jotai**
By Invlìolve in innovation.
YouTube [playlist](https://www.youtube.com/watch?v=0uM16sAWm_Q)

## Vite project

```sh
pnpm create vite jotai-vite
pnpm add jotai
pnpm install
pnpm dev
```

```ts 
// atoms.ts
import { atom } from "jotai";

export const sideLengthAtom = atom(0);
```