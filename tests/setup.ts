import { vi } from "vitest";

// next/font only works inside the Next compiler; stub it for unit tests.
const font = () => ({ variable: "font-var", className: "font-class", style: { fontFamily: "x" } });
vi.mock("next/font/google", () => ({ Inter: font, IBM_Plex_Mono: font, Cormorant_Garamond: font }));
