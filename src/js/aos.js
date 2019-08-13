//
//
// aos.js
//
// Initialises the animate on scroll plugin

import AOS from "aos";
import("aos/src/sass/aos.scss").then(() => {
  AOS.init({ once: true });
});
