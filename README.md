# Numbers — Museum of 1, 2, 3, 4, and π

A static, interactive museum about numbers. **Gallery 001 (1)**, **Gallery 002 (2)**, **Gallery 003 (3)**, **Gallery 004 (4)**, and **Special Exhibit 001 (π)** are now open.

The project uses a repeating museum cadence: after every four regular natural-number exhibits, a **special exhibit** can open for a number outside that regular natural-number sequence. π is the first special exhibit.

The homepage contains an algorithmic, zoomable number atlas for the regular natural-number exhibits and separate theatrical portals for special exhibits. This avoids pretending that the real continuum can be exhaustively listed while still allowing irrational, transcendental, complex, infinite, or otherwise unusual mathematical objects to receive full museum wings.

## Discovery system

The museum has three connected ways to find material:

- **Global search** — the Search control in the header searches registered museum pages. `Ctrl+K` / `Cmd+K` opens it.
- **Exhibit search** — each numbered exhibit has a room-level search field. The π wing gets its own dedicated Special Exhibit search.
- **All Pages directory** — `directory.html` is the living museum floor plan, grouping regular galleries and special exhibits separately.

Regular galleries are registered in `app.js`. Special Exhibit π extends that registry through `pi-extension.js`, which also appends π to the directory and powers its interactive laboratory.

## Pages

### Museum shell
- `index.html` — Museum entrance + interactive number atlas + special-exhibit portal
- `directory.html` — All Pages / complete museum directory
- `sources.html` — Shared references and fact-checking notes for Galleries 001–004

### Gallery 001 — Number 1
- `one.html` — Curator's overview of 1
- `mathematics.html` — Mathematical properties of 1
- `history.html` — History of the numeral and the idea of one
- `significance.html` — Why 1 matters across mathematics, science, computing, and language
- `lab.html` — Interactive experiments with 1

### Gallery 002 — Number 2
- `two.html` — Curator's overview of 2
- `two-mathematics.html` — The unique even prime, parity, powers of 2, arithmetic functions, C₂, and √2
- `two-history.html` — Numeral history, Indian/Arabic transmission, and the carefully sourced history of incommensurability
- `two-significance.html` — Binary information, symmetry, 2D geometry, octave ratios, helium, two-body mechanics, and linguistic duals
- `two-lab.html` — Interactive pairing, parity, powers-of-two, binary, and √2 experiments

### Gallery 003 — Number 3
- `three.html` — Curator's overview of 3
- `three-mathematics.html` — Odd primality, triangular numbers, divisibility by 3, modular arithmetic, ternary, arithmetic functions, C₃, cubes, and roots of unity
- `three-history.html` — Numeral history plus separate histories of cubic equations and angle trisection
- `three-significance.html` — Triangle rigidity, 3D coordinates, RGB, genetic codons, ternary information, C₃ symmetry, lithium, and three-body dynamics
- `three-lab.html` — Interactive triplet grouping, digit-sum divisibility, powers of 3, ternary/balanced ternary, cube roots of unity, and triangle geometry

### Gallery 004 — Number 4
- `four.html` — Curator's overview of 4 as the smallest composite number, first even square, and fourfold structural object
- `four-mathematics.html` — 2² factorization, divisor functions, modulo 4, C₄ versus V₄, fourth roots of unity, quartics, and Lagrange's four-square theorem
- `four-history.html` — Numeral history plus Ferrari's quartic, Hamilton's quaternions, Lagrange's theorem, and the Four Color problem
- `four-significance.html` — DNA's four bases, tetrahedral and tesseract geometry, quaternions, map coloring, beryllium, quaternary information, and cultural conventions
- `four-lab.html` — Interactive divisibility-by-4, base-4 translation, roots of unity, four-square search, hypercube dimensions, powers of four, and map coloring

### Special Exhibit 001 — π
- `pi.html` — Curator's overview: circle ratio, radians, irrationality, transcendence, and the exhibit's conceptual map
- `pi-mathematics.html` — Archimedean bounds, radians, integrals, series, products, Euler's identity, zeta values, irrationality, transcendence, and normality caveats
- `pi-history.html` — Ancient approximations through Archimedes, Liu Hui, Zu Chongzhi, al-Kāshī, William Jones, Euler, Lambert, Lindemann, and electronic computation
- `pi-significance.html` — Probability, Gaussian statistics, Fourier analysis, waves, rotations, physics, higher-dimensional spheres, and Pi Day as cultural convention
- `pi-lab.html` — Circle console, polygon squeeze, Monte Carlo rain, Leibniz series, Buffon's needle, and searchable digit vault
- `pi-sources.html` — Dedicated sources and fact-checking notes for the special exhibit

## Visual system

The museum uses locally stored SVG artwork rather than fragile hotlinks. Each number has a deliberately distinct exhibition identity:

- **1** — gold, magenta, cyan, monumental identity imagery and glyph constellations.
- **2** — mirrored cyan/orange lighting, binary branching, paired geometry, an Even Prime Reactor, and a √2 chamber.
- **3** — ultraviolet, acid-lime, coral, triangular architecture, a Triangle Reactor, Ternary Cathedral, Triplet Universe, glyph atlas, and Three-Body Chamber.
- **4** — electric blue, violet, gold, and coral; nested squares, a Square Reactor, Quaternary Vault, Four Color installation, DNA Quartet, glyph atlas, and Tesseract Chamber.
- **π** — hot magenta, cyan, violet, and gold; circles, spiral fields, polygonal convergence, orbiting digits, a Pi Universe, History Orbit, Geometry Reactor, and Infinity Laboratory.

## Interactive atlas and special portals

The atlas is not a finite list. The real numbers are uncountable, so the interface behaves like a mathematical instrument: it renders the visible interval and highlights regular open exhibits. Double-clicking 1, 2, 3, or 4 enters those galleries. Special exhibits such as π use separate portals on the entrance page so they are visually and conceptually distinct from the regular four-number cadence.

## Run locally

Because the site is fully static, you can open `index.html` directly or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Expansion rule

Do not delete or collapse earlier galleries when adding new numbers. Add four regular natural-number exhibits, then a special exhibit, repeating the cadence. Each exhibit can receive multiple museum rooms, locally stored artwork, an interactive laboratory, and its own visual identity. Update museum-wide counts and discovery metadata as the museum expands while preserving earlier exhibit content.