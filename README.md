# Numbers — Museum of 1, 2, and 3

A static, interactive museum about numbers. **Gallery 001 (1)**, **Gallery 002 (2)**, and **Gallery 003 (3)** are now open.

The homepage contains an algorithmic, zoomable number atlas that represents the real-number line and dynamically labels visible values. Numbers 1, 2, and 3 are interactive open exhibits; future numbers can be added without pretending that the real continuum can be exhaustively listed.

## Pages

### Museum shell
- `index.html` — Museum entrance + interactive number atlas
- `sources.html` — References and fact-checking notes for all open exhibits

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

## Visual system

The museum uses locally stored SVG artwork rather than fragile hotlinks. Each number has a deliberately distinct exhibition identity:

- **1** — gold, magenta, cyan, monumental identity imagery and glyph constellations.
- **2** — mirrored cyan/orange lighting, binary branching, paired geometry, an Even Prime Reactor, and a √2 chamber.
- **3** — ultraviolet, acid-lime, coral, triangular architecture, a Triangle Reactor, Ternary Cathedral, Triplet Universe, glyph atlas, and Three-Body Chamber.

## Interactive atlas

The atlas is not a finite list. The real numbers are uncountable, so the interface behaves like a mathematical instrument: it renders the visible interval, generates suitable ticks dynamically, and highlights only numbers whose museum galleries are currently open. Double-clicking 1, 2, or 3 enters that number's exhibit.

## Run locally

Because the site is fully static, you can open `index.html` directly or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Design principle

There cannot be a literal finite list of “all real numbers”: the real numbers are uncountable. The atlas therefore behaves like a mathematical instrument rather than a database dump. It renders whatever portion of the number line you inspect and generates suitable tick marks as you zoom.

## Expansion rule

Add new number exhibits without deleting or collapsing existing galleries. Each number can receive multiple museum rooms, its own interactive laboratory, its own locally stored artwork, and a distinct visual identity; the atlas exposes each exhibit as it opens. Wording that reports the number of currently open galleries should be updated as the museum expands, but earlier exhibit content should remain intact.