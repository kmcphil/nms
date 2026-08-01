# Website UI kit

Click-through recreation of the Natalie Micale Schultz marketing site, built from `kmcphil/nms` (`src/pages/HomePage.tsx`, `src/styles/home.css`, `src/styles/layout.css`) and the client `Homepage.pdf` comp.

| Screen | File | Source |
|---|---|---|
| Home | `HomeScreen.jsx` | `src/pages/HomePage.tsx` + `src/styles/home.css` + Homepage.pdf |
| About | `AboutScreen.jsx` | Homepage.pdf "Meet Natalie" + `reference/language-notes.md` (page is a placeholder upstream) |
| Ways to Work Together | `ServicesScreen.jsx` | Homepage.pdf "04 — Ways In" (page is a placeholder upstream) |
| Start the Conversation | `ContactScreen.jsx` | `src/components/forms/ContactForm.tsx` |

Only Home is built upstream; About / Services / Contact are assembled from the same section vocabulary and the brief's copy. No invented offers, prices or testimonials.

Open `index.html`. Header nav and in-page links switch screens.
