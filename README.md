# Front-end UI Template

This is a personal front-end template I use to start projects quickly — for studies, experiments, small products, and portfolio pieces.

The focus is **speed, clarity, and visual consistency**, without turning the setup into something heavy or over-engineered.

## Stack

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

## Usage

```
# Generate components using predefined templates

npm run plop
```

```
# Install dependencies and run the project

npm install
npm run dev
```

---
<br />
<p align="center">
  This repository is shared for reference and personal use.
</p>