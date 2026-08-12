# Numbers — Museum of 1

A static, interactive museum about numbers, beginning with **1**.

This first release intentionally has museum exhibits only for the number 1. The homepage contains an algorithmic, zoomable number atlas that represents the real-number line and dynamically labels visible values; 1 is the only open exhibit.

## Pages

- `index.html` — Museum entrance + interactive number atlas
- `one.html` — Curator's overview of 1
- `mathematics.html` — Mathematical properties of 1
- `history.html` — History of the numeral and the idea of one
- `significance.html` — Why 1 matters across mathematics, science, computing, and language
- `lab.html` — Interactive experiments with 1
- `sources.html` — References and fact-checking notes

## Run locally

Because the site is fully static, you can open `index.html` directly or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Design principle

There cannot be a literal finite list of “all real numbers”: the real numbers are uncountable. The atlas therefore behaves like a mathematical instrument rather than a database dump. It renders whatever portion of the number line you inspect and generates suitable tick marks as you zoom.

## Future expansion

Add new number exhibits without changing the museum shell. New numbers can receive multiple pages (rather than one giant page per number), and the atlas can expose them as they open.
