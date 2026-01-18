# Pixel Whisk TOC

A lightweight, attribute-based **Table of Contents library for Webflow**.

No styles. No dependencies. Predictable behavior.

---

## ✨ Features

* Attribute-based (Webflow-friendly)
* Zero CSS opinions
* Works with Rich Text & CMS
* Sticky / fixed navbar support
* Smooth scrolling (library-controlled)
* Active state handling via combo classes
* Debug mode for easy setup
* Versioned & CDN-safe

---

## 🚀 Quick Start

### 1. Add the CDN

```html
<!-- Pixel Whisk TOC v1.0.1 -->
<script defer src="https://cdn.jsdelivr.net/gh/devankitbose/pixel-whisk-toc@v1.0.1/dist/1.0.1/pw-toc.min.js"></script>
```


---

### 2. Required CSS (Important)

Add this once per site (Page Settings → Inside `<head>`):

```css
html {
  scroll-behavior: auto !important;
}
```

This prevents conflicts with native smooth scrolling and ensures consistent behavior.

---

### 3. Basic Markup

```html
<div data-pw-toc="wrapper">

  <div data-pw-toc="content">
    <h2>Heading One</h2>
    <h3>Sub Heading</h3>
  </div>

  <div data-pw-toc="list">
    <a data-pw-toc="item">
      <span data-pw-toc="text"></span>
    </a>
  </div>

</div>
```

---

## 🎯 Active State Styling

Pixel Whisk TOC automatically toggles an active class.

**Default:**

```text
.is-active
```

Style it as a **combo class** in Webflow.

### Custom class (optional)

```html
data-pw-toc-active-class="is-current"
```

Add this on the wrapper.

---

## 📌 Sticky / Fixed Navbar Support

If your site has a sticky or fixed navbar:

```html
data-pw-toc-sticky-nav=".navbar"
```

* Automatically calculates navbar height
* Prevents headings from hiding behind the nav
* Updates on resize

---

## 🧠 Debug Mode (Highly Recommended)

```html
data-pw-toc-debug
```

Logs helpful messages to the console:

* Missing attributes
* Wrong structure
* No headings found
* Initialization status

Safe to remove in production.

---

## 📦 Versioning Strategy

Pixel Whisk TOC follows **strict versioning**:

* Each version lives in its own folder
* Older projects never break
* New features = new versions

**Example:**

```text
@v1.0.1 → stable
@v1.1.0 → future updates
```

Never use `@main` in production.

---

## ❌ Common Mistakes

* Forgetting required CSS
* Adding attributes outside the wrapper
* Using non-heading elements (`div`, `p`)
* Expecting built-in styles

---

## 🧩 Roadmap (Planned)

* Nested TOC levels (h2 / h3)
* Multiple TOCs per page
* Optional spacing control
* Accessibility improvements

---

## 💙 Built by Pixel Whisk

Crafted for real Webflow projects.

Simple. Predictable. Webflow-first.
