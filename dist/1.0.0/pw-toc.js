(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", initTOC);

  const DEFAULT_TOP_GAP = 24; // px

  function initTOC() {
    const wrapper = document.querySelector('[data-pw-toc="wrapper"]');
    if (!wrapper) return;

    const debug = wrapper.hasAttribute("data-pw-toc-debug");
    const log = createLogger(debug);

    log("TOC initialized");

    const content = wrapper.querySelector('[data-pw-toc="content"]');
    const list = wrapper.querySelector('[data-pw-toc="list"]');
    const itemTemplate = wrapper.querySelector('[data-pw-toc="item"]');

    if (!content) {
      log(
        'Missing [data-pw-toc="content"] inside [data-pw-toc="wrapper"]',
        "error"
      );
      return;
    }

    if (!list) {
      log(
        'Missing [data-pw-toc="list"] inside [data-pw-toc="wrapper"]',
        "error"
      );
      return;
    }

    if (!itemTemplate) {
      log(
        'Missing [data-pw-toc="item"] template inside [data-pw-toc="list"]',
        "error"
      );
      return;
    }

    const headingSelector =
      wrapper.getAttribute("data-pw-toc-headings") || "h2,h3";

    log(`Using heading selector: ${headingSelector}`);

    const activeClass =
      wrapper.getAttribute("data-pw-toc-active-class") || "is-active";

    const stickyNavSelector =
      wrapper.getAttribute("data-pw-toc-sticky-nav");

    if (stickyNavSelector) {
      log(`Sticky nav selector: ${stickyNavSelector}`);
    }

    const headings = content.querySelectorAll(headingSelector);

    if (!headings.length) {
      log(
        `No headings found using selector: ${headingSelector}`,
        "warn"
      );
      return;
    }

    itemTemplate.style.display = "none";

    const items = [];

    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = generateID(heading.innerText, index);
        log(`Generated ID for heading: ${heading.id}`);
      }

      const item = itemTemplate.cloneNode(true);
      const textEl = item.querySelector('[data-pw-toc="text"]');

      item.removeAttribute("style");
      item.setAttribute("href", "#");

      if (textEl) {
        textEl.textContent = heading.innerText;
      } else {
        log(
          'Missing [data-pw-toc="text"] inside [data-pw-toc="item"]',
          "warn"
        );
      }

      item.addEventListener("click", function (e) {
        e.preventDefault();
        const offset = getScrollOffset(stickyNavSelector, log);
        scrollToHeading(heading, offset);
      });

      list.appendChild(item);
      items.push({ heading, item });
    });

    setupObserver(items, activeClass, stickyNavSelector, log);
  }

  /* -----------------------------------
     SCROLL
  ----------------------------------- */

  function scrollToHeading(heading, offset) {
    const targetY =
      heading.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }

  function getScrollOffset(stickyNavSelector, log) {
    if (!stickyNavSelector) {
      return DEFAULT_TOP_GAP;
    }

    const nav = document.querySelector(stickyNavSelector);

    if (!nav) {
      log(
        `Sticky nav not found for selector: ${stickyNavSelector}`,
        "warn"
      );
      return DEFAULT_TOP_GAP;
    }

    return nav.offsetHeight;
  }

  /* -----------------------------------
     ACTIVE STATE
  ----------------------------------- */

  function setupObserver(items, activeClass, stickyNavSelector, log) {
    const offset = getScrollOffset(stickyNavSelector, log);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          items.forEach(({ heading, item }) => {
            item.classList.toggle(
              activeClass,
              heading === entry.target
            );
          });
        });
      },
      {
        rootMargin: `-${offset}px 0px -70% 0px`,
        threshold: 0,
      }
    );

    items.forEach(({ heading }) => observer.observe(heading));

    log("Scroll spy initialized");
  }

  /* -----------------------------------
     DEBUG LOGGER
  ----------------------------------- */

  function createLogger(enabled) {
    if (!enabled) return () => {};

    return function (message, type = "info") {
      const prefix = "[TOC]";
      if (type === "error") {
        console.error(prefix, message);
      } else if (type === "warn") {
        console.warn(prefix, message);
      } else {
        console.log(prefix, message);
      }
    };
  }

  /* -----------------------------------
     HELPERS
  ----------------------------------- */

  function generateID(text, index) {
    return (
      "toc-" +
      text
        .toLowerCase()
        .trim()
        .replace(/[^\w]+/g, "-") +
      "-" +
      index
    );
  }
})();
