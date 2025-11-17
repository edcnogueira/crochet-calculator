# Crochet Calculator

A simple web app to help crafters price crochet pieces.
It calculates the proportional cost of yarns used (based on the
consumed weight) and adds a configurable profit margin. You can add
multiple yarns/skeins, enter each one’s total weight and cost, specify how
much was used in the piece, and get a suggested final price with a cost summary.

Key features:
- Add multiple yarns/skeins and remove them individually
- Proportional cost calculation by weight used
- Configurable margin (%) to compose the final price
- Detailed summary: materials cost, margin, and suggested price
- Responsive, friendly interface

Tech stack:
- Bun (server and scripts)
- React 19
- Tailwind CSS 4 + shadcn/ui (components)
- Radix UI and Lucide Icons

## Future checklist (ideas and improvements)
- [ ] Persist data in the browser (localStorage) to avoid losing calculations
- [ ] Labor/working time cost field to factor into pricing
- [ ] Export/share quote (PDF or link)
- [ ] Support multiple currencies and regional formatting
- [ ] Persistent theme preferences (light/dark)
- [ ] Basic automated calculation tests
- [ ] Accessibility (a11y) tweaks

## Installation and running

Prerequisites: Bun (>= 1.2.22). Install from https://bun.sh

Install dependencies:

```bash
bun install
```

Development server (hot reload):

```bash
bun dev
```

Open: http://localhost:3000

Production build (optional):

```bash
bun run build
```

Run in production:

```bash
bun start
```

## How to use
1. Open the app in your browser (http://localhost:3000).
2. In the “Yarn Details” section, for each yarn used in the piece:
   - Enter the skein’s Total weight (e.g., 100 g).
   - Enter the Total cost paid for the skein.
   - Enter the Weight used in the piece (e.g., 35 g).
   - Add more yarns with “Add Yarn” when needed.
3. Set the “Profit Margin (%)” according to your goal.
4. In the side panel, check the Price Summary:
   - Proportionally calculated materials cost.
   - Applied margin.
   - Suggested final price for the piece.
5. Adjust the values until you reach an ideal price.

—

This project was started with Bun v1.2.22.
