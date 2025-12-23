# My Portfolio — Development

This repository contains the **development source** of my **personal portfolio** and reflects the structure and workflow I use as a UX/UI & Product Designer with front-end experience to design and build interface-driven products.

Focused on clarity and consistency, prioritizing practical product constraints over heavy abstractions or theoretical scalability.

**Live portfolio:** https://hasenkday.github.io/

---

## Project structure

```bash
src/
├── app/
│   ├── router.tsx          # application routing configuration
│   └── providers.tsx       # optional global providers (theme, query, auth, etc.)
│
├── pages/
│   ├── home/
│   │   ├── home.page.tsx   # page-level UI and logic
│   │   └── index.ts
│   ├── ...
│   └── not-found/
│       ├── not-found.page.tsx
│       └── index.ts
│
├── layouts/
│   └── main-layout.tsx     # shared layout structure (header, footer, outlet)
│
├── components/
│   ├── atoms/              # small, reusable UI pieces (Button, Badge, Text)
│   ├── molecules/          # composed components (Card, InputField, Modal)
│   ├── organisms/          # larger UI sections (Header, Footer, ProjectList)
│   └── ui/                 # raw shadcn/ui components (Dialog, Dropdown, Tooltip)
│
├── api/                    # API access layer (REST, GraphQL, mocks)
├── hooks/                  # reusable React hooks (data fetching, logic)
│
├── themes/                 # design tokens and theme definitions
├── lib/                    # shared utilities (cn, helpers)
└── App.tsx                 # application entry point (router orchestration)
```

<br/>

<h2 align="center">Stack</h2>

<p align="center">
  <code>Vite</code> ·
  <code>React</code> ·
  <code>TypeScript</code> ·
  <code>Tailwind CSS v4</code> ·
  <code>CSS Modules</code> · <br />
  <code>@theme tokens</code> ·
  <code>shadcn/ui</code> ·
  <code>Plop</code>
</p>
