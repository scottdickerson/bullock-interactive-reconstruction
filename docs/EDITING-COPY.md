# Editing on-screen copy

This document explains where to edit the text that appears in the Bullock Interactive Reconstruction app and what to do after you change it.

---

## Where the copy lives

All on-screen text is driven by **translation files** in the project. There are two files—one per language:

| File | Language |
|------|----------|
| [src/translations/en.ts](../src/translations/en.ts) | English |
| [src/translations/es.ts](../src/translations/es.ts) | Spanish |

Edit the string values inside these files. The app uses them at runtime, so any change you make will show up after you **rebuild** and refresh (or redeploy).

---

## Structure of the translation files

Both `en.ts` and `es.ts` export an object with the same keys. Main sections:

- **`common`** — Buttons and shared labels: START, BACK, HOME, ESPAÑOL / ENGLISH, KEEP READING.
- **`pullscreen`** — Landing screen: main title (“RECOUNTING RECONSTRUCTION”), subtitle, and body description.
- **`select`** — Category selection screen: title (“Reconstruction Era Texans”), description, and the line that asks the user to select a topic.
- **`categories`** — Category names: Agriculture, Community Leadership, Politics, Education, Entrepreneurship.
- **`content`** — Per-category, per-person content used on the detail screen:
  - **`content.<category>`** (e.g. `content.agriculture`, `content.communityLeadership`) — Each has:
    - **`name`** — Person’s name (e.g. “Ransom and Sarah Williams”).
    - **`description`** — Short intro paragraph for that person.
    - **`options`** — Three subsections:
      - **`newOpportunities`** — `title`, `description`, `content`, `image` (caption).
      - **`challengesAndDangers`** — Same shape.
      - **`viewArtifact`** — `title`, `image` (caption).
- **`inactivity`** — Inactivity / timeout modal: “Need more time?”, “Home”, “Keep reading”, etc.

Keep **English and Spanish in sync**: when you add or change a key in `en.ts`, update the same key in `es.ts` (and vice versa) so both languages stay correct.

---

## How to edit

1. Open **[src/translations/en.ts](../src/translations/en.ts)** and/or **[src/translations/es.ts](../src/translations/es.ts)** in your editor.
2. Find the string you want to change (e.g. `pullscreen.title`, `content.agriculture.options.newOpportunities.content`).
3. Edit only the **value** (the part after the colon, in quotes). Do not change the key names or the overall structure, or the app may break.
4. Save the file(s).

**Example** — changing the pullscreen subtitle in English:

```ts
// In src/translations/en.ts
pullscreen: {
  title: 'RECOUNTING RECONSTRUCTION',
  subtitle: 'Emancipation brought opportunity but it did not equal equality.',  // ← edit this string
  description: '...',
},
```

Do the same in `es.ts` for the Spanish version of that line.

---

## After editing: build the site

The app is a **static build**. Changing the translation files does not change the live site until you **rebuild** and then serve or deploy the new `dist` folder.

1. From the **project root**, run:
   ```bash
   npm run build
   ```
2. When the build finishes, the updated copy will be in the **`dist`** folder.
3. **Next steps** depend on how you run the site:
   - **Local:** Run your usual server (e.g. `npx serve dist -l 3000`) and refresh the browser. If you use the Windows startup tasks, restart the server or reboot so the new build is served.
   - **Deployment:** Deploy the new `dist` folder to your host (e.g. copy to the server, or push and let your CI/CD deploy).

For full Windows install and build steps, see **[INSTALL-WINDOWS.md](INSTALL-WINDOWS.md)** (especially Section 4 for building and Section 6 for serving).

---

## Optional: content spreadsheet

The repo also includes a spreadsheet of the same content (English and Spanish) with notes and status:

- **[src/data/Bullock Interactive Content - Reconstruction.csv](../src/data/Bullock%20Interactive%20Content%20-%20Reconstruction.csv)**

You can use it as a reference or for drafting, but the **source of truth for the app** is the TypeScript translation files above. If you edit only the CSV, the app will not change until you update `en.ts` and `es.ts` and run `npm run build`.
