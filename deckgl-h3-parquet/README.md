# Deck.gl and H3 visualization

The goal is to render a layer on the map from a parquet file. This file is a H3 data, then using Deck.gl and the H3 Layer class we will be able to render the layer on the map.

This example is using Next as framework because it provides support for Web Assembly, it needed for the library `parquet-wasm`.

## When to use

* SPA, where there is no an API and we have to store a visualization in a single file
* Not recommended for global visualization and high precision
* Static sites, and there is no a server available

## Props

* Store big data in a single file
* Reduce the download time as the file is compressed
* Good performance

## Cons

* Time of rendering depends on your GPU and CPU
* It's not recommended for big files, maybe a limit of 20MB
* In H3 resolutions above 5 could be problematic performance wise, only recommended for specific locations visualizations
* Web Assembly support is needed, not a problem in case of Next

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
