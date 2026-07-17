# Trainer J Fitness asset manifest

Extracted from the public production site on **2026-07-16 18:23 PDT**. No authentication, access-control bypass, or protected endpoint was used.

## Scope and result

- Audited page: <https://trainerjfitness.com/> (`200 text/html`).
- Same-origin linked pages: none. All internal navigation is fragment-based on the homepage.
- Discovery endpoints: `/robots.txt` and `/sitemap.xml` both return Netlify's generic `404 text/html` page.
- Extracted design assets: **24 unique files / 697,317 bytes**.
  - **5 JPEG images / 428,533 bytes**
  - **1 Google Fonts CSS response / 9,664 bytes**
  - **18 WOFF2 font binaries / 259,120 bytes**
- SHA-256 deduplication: all 24 extracted files have distinct content hashes. Full hashes are in [`CHECKSUMS.sha256`](CHECKSUMS.sha256).
- Provenance snapshots: [`provenance/homepage.html`](provenance/homepage.html) is the acquired page source; [`provenance/netlify-404.html`](provenance/netlify-404.html) is the single deduplicated body returned by both missing discovery endpoints.

## Images

The site embeds every image directly in the homepage as a base64 `data:image/jpeg` URI. The source URL therefore identifies the containing public page; context records the exact `<img>` usage.

| Source URL | Local path | Media type | Bytes | Dimensions | Page / context discovered |
|---|---|---:|---:|---:|---|
| <https://trainerjfitness.com/> | `original/images/logo-trainer-j-fitness.jpg` | `image/jpeg` | 84,420 | 1196x1000 | Homepage navigation logo; `<img alt="Trainer J Fitness">`; embedded data URI |
| <https://trainerjfitness.com/> | `original/images/jacob-hernandez-hero.jpg` | `image/jpeg` | 107,079 | 600x900 | Homepage hero; `<img alt="Jacob Hernandez — Trainer J Fitness">`; embedded data URI |
| <https://trainerjfitness.com/> | `original/images/patty-transformation.jpg` | `image/jpeg` | 92,257 | 506x900 | Homepage `#results`, before/after card; `<img alt="Patty transformation">`; embedded data URI |
| <https://trainerjfitness.com/> | `original/images/weiss-transformation.jpg` | `image/jpeg` | 35,767 | 900x414 | Homepage `#results`, flipped before/after card; `<img alt="Weiss transformation">`; embedded data URI |
| <https://trainerjfitness.com/> | `original/images/jesse-transformation.jpg` | `image/jpeg` | 109,010 | 900x821 | Homepage `#results`, before/after card; `<img alt="Jesse transformation">`; embedded data URI |

## Font stylesheet

| Source URL | Local path | Media type | Bytes | Dimensions / duration | Page / context discovered |
|---|---|---:|---:|---:|---|
| <https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400;500&display=swap> | `original/fonts/google-fonts.css` | `text/css` | 9,664 | n/a | Homepage `<head>` stylesheet; requested families: Bebas Neue, Cormorant Garamond, DM Mono |

## Font binaries

These are the 18 unique WOFF2 URLs referenced by the acquired Google Fonts CSS. Google serves Cormorant Garamond normal weights 300 and 400 from the same five subset binaries, so those repeated CSS references were stored once.

| Source URL | Local path | Media type | Bytes | Dimensions / duration | CSS context discovered |
|---|---|---:|---:|---:|---|
| <https://fonts.gstatic.com/s/bebasneue/v16/JTUSjIg69CK48gW7PXoo9WdhyyTh89ZNpQ.woff2> | `original/fonts/JTUSjIg69CK48gW7PXoo9WdhyyTh89ZNpQ.woff2` | `font/woff2` | 5,664 | n/a | Bebas Neue; normal 400; latin-ext |
| <https://fonts.gstatic.com/s/bebasneue/v16/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2> | `original/fonts/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2` | `font/woff2` | 8,596 | n/a | Bebas Neue; normal 400; latin |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-hdM8A_6pUKz9ugk.woff2> | `original/fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-hdM8A_6pUKz9ugk.woff2` | `font/woff2` | 14,236 | n/a | Cormorant Garamond; italic 300; cyrillic-ext |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-jNM8A_6pUKz9ugk.woff2> | `original/fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-jNM8A_6pUKz9ugk.woff2` | `font/woff2` | 12,348 | n/a | Cormorant Garamond; italic 300; cyrillic |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-h9M8A_6pUKz9ugk.woff2> | `original/fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-h9M8A_6pUKz9ugk.woff2` | `font/woff2` | 6,204 | n/a | Cormorant Garamond; italic 300; vietnamese |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-htM8A_6pUKz9ugk.woff2> | `original/fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-htM8A_6pUKz9ugk.woff2` | `font/woff2` | 19,144 | n/a | Cormorant Garamond; italic 300; latin-ext |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-iNM8A_6pUKz9.woff2> | `original/fonts/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5rDD-iNM8A_6pUKz9.woff2` | `font/woff2` | 22,468 | n/a | Cormorant Garamond; italic 300; latin |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpHtKky2F7i6C.woff2> | `original/fonts/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpHtKky2F7i6C.woff2` | `font/woff2` | 23,408 | n/a | Cormorant Garamond; normal 300/400; cyrillic-ext |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYrXtKky2F7i6C.woff2> | `original/fonts/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYrXtKky2F7i6C.woff2` | `font/woff2` | 21,132 | n/a | Cormorant Garamond; normal 300/400; cyrillic |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpntKky2F7i6C.woff2> | `original/fonts/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpntKky2F7i6C.woff2` | `font/woff2` | 11,264 | n/a | Cormorant Garamond; normal 300/400; vietnamese |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYp3tKky2F7i6C.woff2> | `original/fonts/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYp3tKky2F7i6C.woff2` | `font/woff2` | 33,740 | n/a | Cormorant Garamond; normal 300/400; latin-ext |
| <https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtKky2F7g.woff2> | `original/fonts/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtKky2F7g.woff2` | `font/woff2` | 37,776 | n/a | Cormorant Garamond; normal 300/400; latin |
| <https://fonts.gstatic.com/s/dmmono/v16/aFTR7PB1QTsUX8KYvrGyEY2tbYf-Vlh3uA.woff2> | `original/fonts/aFTR7PB1QTsUX8KYvrGyEY2tbYf-Vlh3uA.woff2` | `font/woff2` | 5,696 | n/a | DM Mono; normal 300; latin-ext |
| <https://fonts.gstatic.com/s/dmmono/v16/aFTR7PB1QTsUX8KYvrGyEYOtbYf-Vlg.woff2> | `original/fonts/aFTR7PB1QTsUX8KYvrGyEYOtbYf-Vlg.woff2` | `font/woff2` | 8,632 | n/a | DM Mono; normal 300; latin |
| <https://fonts.gstatic.com/s/dmmono/v16/aFTU7PB1QTsUX8KYthSQBK6PYK3EXw.woff2> | `original/fonts/aFTU7PB1QTsUX8KYthSQBK6PYK3EXw.woff2` | `font/woff2` | 5,700 | n/a | DM Mono; normal 400; latin-ext |
| <https://fonts.gstatic.com/s/dmmono/v16/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2> | `original/fonts/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2` | `font/woff2` | 8,688 | n/a | DM Mono; normal 400; latin |
| <https://fonts.gstatic.com/s/dmmono/v16/aFTR7PB1QTsUX8KYvumzEY2tbYf-Vlh3uA.woff2> | `original/fonts/aFTR7PB1QTsUX8KYvumzEY2tbYf-Vlh3uA.woff2` | `font/woff2` | 5,700 | n/a | DM Mono; normal 500; latin-ext |
| <https://fonts.gstatic.com/s/dmmono/v16/aFTR7PB1QTsUX8KYvumzEYOtbYf-Vlg.woff2> | `original/fonts/aFTR7PB1QTsUX8KYvumzEYOtbYf-Vlg.woff2` | `font/woff2` | 8,724 | n/a | DM Mono; normal 500; latin |

## Not present, remote-only, and failures

- No public asset references were left remote-only: every discovered image and referenced font binary downloaded successfully.
- No `<video>`, `<source>`, `poster`, `srcset`, SVG, favicon, standalone icon, external script, CSS `url(...)` in the page, Open Graph image, Twitter card image, or JSON-LD/schema asset reference exists in the acquired homepage HTML.
- No same-origin page links exist beyond homepage fragments (`#results`, `#about`, `#services`, `#reviews`, `#contact`).
- `/robots.txt`: HTTP 404; no crawl directives available.
- `/sitemap.xml`: HTTP 404; no URL inventory available.
- External destinations were not copied because they are actions/pages rather than site design assets: Calendly booking, Instagram profile, and the `mailto:` contact link.
- No download failures occurred for the 24 manifest assets.
