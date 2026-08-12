# Numbers — Museum of 1 and 2

A static, interactive museum about numbers. **Gallery 001 (1)** and **Gallery 002 (2)** are now open.

The homepage contains an algorithmic, zoomable number atlas that represents the real-number line and dynamically labels visible values. Both 1 and 2 are interactive open exhibits; future numbers can be added without pretending that the real continuum can be exhaustively listed.

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

## Visual system

The museum uses locally stored SVG artwork rather than fragile hotlinks. Gallery 001 and Gallery 002 intentionally have different visual identities. Gallery 002 uses mirrored cyan/orange lighting, binary branching, paired geometry, an Even Prime Reactor, a glyph atlas, and a √2 chamber.

## Run locally

Because the site is fully static, you can open `index.html` directly or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Design principle

There cannot be a literal finite list of “all real numbers”: the real numbers are uncountable. The atlas therefore behaves like a mathematical instrument rather than a database dump. It renders whatever portion of the number line you inspect and generates suitable tick marks as you zoom.

## Future expansion

Add new number exhibits without deleting or collapsing existing galleries. Each number can receive multiple museum rooms, its own interactive laboratory, and a distinct visual identity; the atlas exposes each exhibit as it opens.
