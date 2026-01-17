# Pixel Whisk TOC

A lightweight, attribute‑based Table of Contents library built for Webflow.

No styles. No dependencies. Predictable behavior.

---

## ⚠️ IMPORTANT (Read This First)

### Required CSS (Must be added once per site)

Add this CSS in **Page Settings → Inside** or your global CSS embed:

```css
html {
  scroll-behavior: auto !important;
}

```

**Why this is required:**

- Prevents conflicts with native smooth scrolling
- Ensures Pixel Whisk TOC controls scrolling behavior consistently
- Required for reliable offset handling

---

## 1️⃣ Basic Setup (Minimum Required)

### 1. Wrapper (Required)

This is the main container for the TOC system.

```html
<div data-pw-toc="wrapper">

```

Everything related to the TOC must live inside this wrapper.

---

### 2. Content Area (Required)

This is where your actual page content exists (rich text, CMS, static content).

```html
<div data-pw-toc="content">
  <!-- Your headings live here (h2, h3, etc.) -->
</div>

```

📌 **Important:**

- Headings must be real HTML headings (`h2`, `h3`, etc.)
- Works perfectly with **Webflow Rich Text** and **CMS content**

---

### 3. TOC List (Required)

This is where the generated TOC items will appear.

```html
<div data-pw-toc="list">
  <a data-pw-toc="item">
    <span data-pw-toc="text"></span>
  </a>
</div>

```

📌 **How this works:**

- `[data-pw-toc="item"]` is used as a template
- It will be cloned for each heading
- You can style it freely in Webflow

---

## 2️⃣ Active State Styling (Webflow Friendly)

Pixel Whisk TOC automatically adds/removes an active class.

### Default active class

```
.is-active

```

Add this as a **combo class** on your TOC item and style it normally in Webflow.

### Custom active class (Optional)

```html
data-pw-toc-active-class="is-current"

```

📌 Add this attribute **only on the wrapper**.

---

## 3️⃣ Sticky / Fixed Navbar Support (Optional)

If your site uses a sticky or fixed navbar, add this:

```html
data-pw-toc-sticky-nav=".navbar"

```

📌 **Where to add:**

- Add this attribute **only on the wrapper**
- Value must be a valid CSS selector

📌 **What it does:**

- Automatically calculates navbar height
- Prevents headings from hiding behind the navbar
- Updates correctly on resize

---

## 4️⃣ Custom Heading Levels (Optional)

By default, Pixel Whisk TOC uses:

```
h2, h3

```

To customize:

```html
data-pw-toc-headings="h2,h3,h4"

```

📌 Add this attribute **only on the wrapper**.

---

## 5️⃣ Debug Mode (Highly Recommended While Building)

Enable debug mode to see helpful console messages:

```html
data-pw-toc-debug

```

### What debug mode shows:

- Missing required elements
- Wrong selectors
- No headings found
- Initialization status

📌 Debug mode:

- Never affects functionality
- Never throws errors
- Safe to remove in production

---

## 6️⃣ Attribute Placement Summary

| Attribute | Where to Add |
| --- | --- |
| `data-pw-toc="wrapper"` | Parent container |
| `data-pw-toc="content"` | Content section |
| `data-pw-toc="list"` | TOC list container |
| `data-pw-toc="item"` | TOC item template |
| `data-pw-toc="text"` | Text inside item |
| `data-pw-toc-active-class` | Wrapper only |
| `data-pw-toc-sticky-nav` | Wrapper only |
| `data-pw-toc-headings` | Wrapper only |
| `data-pw-toc-debug` | Wrapper only |

---

## 7️⃣ Common Mistakes (Read This)

❌ Forgetting the required CSS

❌ Adding attributes outside the wrapper

❌ Using non-heading elements (`div`, `p`) instead of `h2/h3`

❌ Expecting styles to be included (Pixel Whisk TOC is style‑agnostic)

---

## 8️⃣ Versioning & Safety

Pixel Whisk TOC is **versioned**.

- Older projects will never break
- New features are added via new versions
- You control when to upgrade

---

## Final Notes

Pixel Whisk TOC is designed to:

- Feel native to Webflow
- Require minimal setup
- Avoid surprises

If something doesn’t work, enable **debug mode first**.

---

**Pixel Whisk TOC — Simple. Predictable. Webflow‑first.**
