This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Codebase tree:
```bash
.next/
app/
  ├── analysis/
  ├── api/
  ├── globals.css
  ├── icon.svg
  ├── layout.tsx
  ├── not-found.tsx
  ├── page.tsx
components/
  ├── header/
  ├── sidebar/
  ├── toggle/
  ├── ui/
data/
  ├── testData.json
  ├── week.ts
hooks/
  ├── use-mobile.tsx
lib/
  ├── utils.ts
provider/
  ├── theme-provider.tsx
public/
  ├── file.svg
  ├── globe.svg
  ├── next.svg
  ├── vercel.svg
  ├── window.svg
.gitignore
components.json
eslint.config.mjs
middleware.ts
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
```
External Libraries

This project uses the following external libraries:

    @radix-ui/react-dialog: ^1.1.4 - For dialog components.
    @radix-ui/react-select: ^2.1.4 - For select dropdowns.
    @radix-ui/react-separator: ^1.1.1 - For creating separators.
    @radix-ui/react-slot: ^1.1.1 - For component slots.
    @radix-ui/react-switch: ^1.1.2 - For switch components.
    @radix-ui/react-tabs: ^1.1.2 - For tabbed interfaces.
    @radix-ui/react-tooltip: ^1.1.6 - For tooltips.
    chart.js: ^4.4.7 - For charting solutions.
    class-variance-authority: ^0.7.1 - For handling className variance.
    clsx: ^2.1.1 - Utility for conditional classNames.
    lucide-react: ^0.473.0 - React icons library.
    next: 15.1.5 - Next.js framework.
    next-themes: ^0.4.4 - Theme management for Next.js.
    react: ^19.0.0 - React library.
    react-chartjs-2: ^5.3.0 - React wrapper for Chart.js.
    react-dom: ^19.0.0 - React DOM library.
    recharts: ^2.15.0 - For building charts and visualizations.
    tailwind-merge: ^2.6.0 - Tailwind utility for merging classes.
    tailwindcss-animate: ^1.0.7 - Animations for Tailwind CSS.

To install this dependenciec:
```bash
npm install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
