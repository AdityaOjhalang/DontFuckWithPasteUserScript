// ==UserScript==
// @name         Enhanced Don't Fuck With Paste
// @namespace    EnhancedDontFuckWithPaste@AdityaOjha
// @version      0.2
// @description  Paste in any input field! Don't let stupid web design stop you. Code "borrowed" from the "Don't Fuck With Paste" webextension by Aaron Raimist and enhanced with additional features.
// @author       Aditya Ojha
// @include      *
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // List of URLs to exclude from the script
  const exclude = [
    "https?://.*?\\.facebook\\.com/.*",
    "https?://.*?\\.messenger\\.com/.*",
    "https?://.*?\\.google\\.com/.*",
    "https?://.*?\\.github\\.com/.*",
    "https?://imgur\\.com/.*",
  ];

  // Include pattern for URLs
  const include = ".*";

  // Function to allow copy, paste, cut, and dragstart events
  const allowCopyAndPaste = function (e) {
    e.stopImmediatePropagation();
    return true;
  };

  // Combine exclude patterns into a single regular expression
  const excludes = new RegExp(exclude.join("|"));
  const includes = new RegExp(include);

  // Get the current URL
  const location = window.location.href;

  // Apply the script if the current URL matches the include pattern and does not match the exclude pattern
  if (includes.test(location) && !excludes.test(location)) {
    document.addEventListener("copy", allowCopyAndPaste, true);
    document.addEventListener("paste", allowCopyAndPaste, true);
    document.addEventListener("cut", allowCopyAndPaste, true);
    document.addEventListener("dragstart", allowCopyAndPaste, true);

    console.log("Enhanced Don't Fuck With Paste is active on this page.");
  }
})();
