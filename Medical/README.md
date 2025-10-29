# MedicalShop Navbar

This small demo implements a responsive navbar for a medical shop.

Features:
- Top contact strip with phone and email links.
- Main navbar with logo, navigation links, and action buttons.
- Search icon that toggles an inline search bar (click the magnifier to open/close).
- Responsive hamburger menu for small screens.

Files created:
- `index.html` — markup for the demo page.
- `styles.css` — styles for the navbar and page.
- `script.js` — JavaScript to toggle the search bar and hamburger menu.
- `about.html` — simple About page linked from the navbar.
- `contact.html` — responsive Contact page with embedded map, Track Order demo, and WhatsApp link.

How to run locally:
1. Open `index.html` in your browser (double-click or open from your editor).

Banner features:
- The page includes a banner section immediately below the navbar. A default image (`banner-default.svg`) is shown on load.
- Click "Upload Image" to choose an image from your machine — it previews locally and replaces the banner for the session.
- Click "Choose Folder" to open a folder picker (Chromium-based browsers support folder selection via `webkitdirectory`).
- Click "Add Description" to write text that appears as the overlay on the banner.

Notes and next steps:
- You can replace the alert in `script.js` with a real search API call or route.
- Improve animations (width transitions) if you need smoother sizing.
- Integrate into your app's header component or framework (React/Vue/Angular) if required.

Enjoy!