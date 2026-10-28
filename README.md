# Onalenna Jewels

## Student Information
- **Name:** Onalenna Sebela
- **Module:** WEDE5020 - Web Development (Introduction)
- **Module Code:** WEDE5020


## Project Overview
Onalenna Jewels is a handcrafted South African jewellery brand based in Johannesburg, with a pop-up store in Cape Town. This website serves as the brand's professional online presence. It showcases the jewellery collection, shares the brand story, allows customers to submit custom jewellery enquiries, and provides contact details for both studio locations.

The website is built with HTML5, CSS3, and JavaScript. It is fully responsive and deployed on Netlify.

## Live Website
**Deployed URL:** https://onalennajewels.netlify.app


## Website Goals and Objectives
- Provide a professional and elegant online presence for Onalenna Jewels.
- Showcase products with images, descriptions, and prices in South African Rands (ZAR).
- Allow customers to request custom pieces via a validated enquiry form.
- Share the brand story, mission, vision, and core values.
- Make it easy for customers to contact the Johannesburg and Cape Town studios.
- Rank well on search engines through on-page SEO best practices.

## Key Features and Functionality

### Pages
- **Home** (`index.html`) - Hero image, welcome message, benefits, order process, customer testimonial.
- **About Us** (`about.html`) - Brand story, mission, vision, core values with tab switching, founder profile, sustainability commitments.
- **Our Collection** (`products.html`) - Four jewellery products with dynamic loading from JSON, search filter, sort dropdown, comparison table, and gallery with lightbox.
- **Custom Enquiry** (`enquiry.html`) - Full form with JavaScript validation, price estimate response, and AJAX submission.
- **Contact** (`contact.html`) - Two studio locations, opening hours table, contact details, contact form with validation and AJAX submission, Leaflet interactive map.

### JavaScript Features
- Enquiry form validation and price estimate calculation.
- Contact form validation and AJAX submission via FormSubmit.
- Product search filter that updates as the user types.
- Sort dropdown for Price Low to High, Price High to Low, and Name A to Z.
- Dynamic product loading from `products.json` using `fetch()`.
- Gallery lightbox that opens clicked images in an overlay.
- Tab switcher for Mission, Vision, and Core Values on the About page.
- Leaflet interactive map with a marker on the Johannesburg studio.

### SEO Implementation
- Unique descriptive `<title>` tag on every page.
- Meta description on every page.
- Meta keywords on every page.
- Meta author tag on every page.
- Proper heading hierarchy (h1, h2, h3) throughout.
- Descriptive alt text on all images.
- Internal linking between all pages.
- Clean URL structure.
- `robots.txt` instructs search engines on what to crawl.
- `sitemap.xml` helps search engines understand the site structure.
- Mobile-friendly responsive design.
- Optimised page speed through minimal dependencies.

### Responsive Design
- Desktop layout uses CSS Grid for the product cards.
- Tablet breakpoint at 768px.
- Mobile breakpoint at 480px.
- Navigation, typography, layout, and images all adapt at each breakpoint.

## File and Folder Structure
<img width="739" height="349" alt="image" src="https://github.com/user-attachments/assets/f87d1cba-1f54-482a-bf89-1a76cf9b897e" />

## Timeline and Milestones
- **Week 1** - Research Onalenna Jewels and gather content.
- **Week 2** - Finalise proposal, sitemap and wireframes.
- **Week 3** - Develop five HTML pages.
- **Week 4** - Test HTML pages and navigation.
- **Week 5** - Develop CSS styling.
- **Week 6** - Improve responsive layout for mobile and desktop.
- **Week 7** - Add JavaScript functionality and validation.
- **Week 8** - Final testing, SEO checks and corrections.
- **Week 9** - Prepare GitHub repository and documentation.

## Changelog

### Part 1 - Project Initiation and Planning (2026-08-14)
- Created the five HTML pages (`index.html`, `about.html`, `products.html`, `enquiry.html`, `contact.html`).
- Added HTML5 semantic structure: `<header>`, `<nav>`, `<main>`, `<footer>`.
- Implemented consistent navigation across all five pages.
- Added logo placeholder and six product images.
- Added business content: brand story, mission, vision, values, product descriptions, prices in ZAR.
- Set up GitHub repository and pushed initial code.
- Created README.md with project overview, goals, and initial documentation.

### Part 2 - CSS Styling and Responsive Design (2026-09-15 to 2026-09-20)
- Implemented all Part 1 lecturer feedback. No outstanding items remained.
- Created `css/style.css` and linked it to all five HTML pages.
- Added a CSS reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`) for cross-browser consistency.
- Applied typography styles using Georgia for headings and Arial for body text.
- Added base styles for body, header, nav, main, footer and hr.
- Applied hover, focus, and active pseudo-classes to navigation links, buttons, form fields, and product cards.
- Created a product grid layout using CSS Grid so product cards sit side by side on desktop.
- Added media query for tablet at 768px, adjusting layout, font sizes, and image widths.
- Added media query for mobile at 480px, adjusting navigation, typography, forms, and tables.
- Added screenshot evidence of desktop, tablet, and mobile views to README.

### Part 3 - Enhancing Functionality and SEO (2026-10-14 to 2026-10-24)
- Implemented all Part 2 lecturer feedback fixes.
  - **Default style code (was 4/5):** Added full CSS reset and consistent base styles across all elements.
  - **Layout structure (was 4/5):** Product grid now uses CSS Grid with `auto-fit` for better alignment on all screen sizes.
  - **Decoration and colour (was 4/5):** Added deeper shadows, consistent border radius, and improved spacing.
  - **Image adjustments (was 3/5):** All images use `width: 100%` with `max-width` so they never overflow on smaller screens.
  - **README (was 4/5):** Expanded with detailed entries for each part.
  - **Changelog (was 4/5):** Now includes specific entries for every change made.
- Created `js/script.js` with the following functionality:
  - Enquiry form validation (name, email regex, phone regex, metal selection, date).
  - Enquiry form price estimate calculation based on product type, metal, and quantity.
  - Enquiry form AJAX submission via FormSubmit.
  - Contact form validation and AJAX submission.
  - Product search filter that updates as the user types.
  - Sort dropdown with Price Low to High, Price High to Low, and Name A to Z.
  - Dynamic product loading from `products.json` using `fetch()`.
  - Gallery lightbox that opens clicked images in an overlay.
  - Tab switcher for Mission, Vision, and Core Values on the About page.
  - Leaflet interactive map with a marker on the Contact page.
- Created `products.json` to store product data for dynamic loading.
- Added SEO meta description, meta keywords, and meta author tags to all five pages.
- Added unique descriptive page titles to all five pages.
- Added descriptive alt text on all images.
- Added gallery section with six images on the products page.
- Added search input and sort dropdown on the products page.
- Created `robots.txt` to instruct search engines.
- Created `sitemap.xml` to help search engines understand the site structure.
- Replaced Google Maps iframe with Leaflet interactive map using OpenStreetMap tiles.
- Deployed website to Netlify.

## References

### Technical References
- Mozilla Developer Network (MDN) (2025) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 14 October 2026).
- Mozilla Developer Network (MDN) (2025) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 14 October 2026).
- Mozilla Developer Network (MDN) (2025) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 14 October 2026).
- Mozilla Developer Network (MDN) (2025) *Using Fetch*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 14 October 2026).
- Mozilla Developer Network (MDN) (2025) *Media Queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries (Accessed: 14 October 2026).
- Mozilla Developer Network (MDN) (2025) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout (Accessed: 14 October 2026).

### Library and Service References
- Leaflet (2025) *Leaflet - a JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 14 October 2026).
- OpenStreetMap (2025) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 14 October 2026).
- FormSubmit (2025) *FormSubmit - Free HTML Form to Email Service*. Available at: https://formsubmit.co/ (Accessed: 14 October 2026).
- Netlify (2025) *Netlify - Develop and Deploy Modern Web Projects*. Available at: https://www.netlify.com/ (Accessed: 14 October 2026).

### Academic and Standard References
- World Wide Web Consortium (W3C) (2024) *Web Standards*. Available at: https://www.w3.org/standards/ (Accessed: 14 October 2026).
- Google (2025) *Search Engine Optimization (SEO) Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 14 October 2026).
- GeeksforGeeks (2023) *How to validate a phone number using regular expressions in Java*. Available at: https://www.geeksforgeeks.org/how-to-validate-a-phone-number-using-regular-expressions-in-java/ (Accessed: 14 October 2026).

### Image Sources
- All product and hero images sourced from **Pexels.com** (royalty-free stock photography). Available at: https://www.pexels.com/ (Accessed: 14 October 2026).
- Leaflet map tiles sourced from **OpenStreetMap contributors** under the Open Database License.

