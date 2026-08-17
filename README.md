# Zhiying Li — Academic Website

Bilingual academic personal website for `zhiyingli-leo.github.io`.

## Update content

Most visible content is stored in `app/page.tsx`:

- `text.en` contains English text.
- `text.zh` contains Chinese text.
- `publications` contains publication records and DOI links.

The visual style is stored in `app/globals.css`.

## Local preview

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Publish on GitHub Pages

Create a public repository named `ZhiyingLi-Leo.github.io`, upload this project, and push it to the `main` branch. The included GitHub Actions workflow builds and publishes the site automatically.

In the repository settings, open **Pages** and set **Source** to **GitHub Actions** if it is not selected automatically.
