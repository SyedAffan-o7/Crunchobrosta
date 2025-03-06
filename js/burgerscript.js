document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".top-bun", {
    y: "-100vw",
    opacity: 0,
    duration: 1,
    delay: 0.7,
    scrollTrigger: {
      trigger: ".burger",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".lettuce", {
    x: "-100vw",
    opacity: 0,
    duration: 1,
    delay: 0.6,
    scrollTrigger: {
      trigger: ".burger",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".bottom-bun", {
    x: "-100vh",
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".burger",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".tray", {
    y: "100vh",
    opacity: 0,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".burger",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".drink", {
    y: "100vh",
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".burger",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".fry", {
    y: "-100vh",
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".burger",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".Popcorn", {
    x: "-100vh", // Corrected from transform: rotate(-10deg);
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".burger",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
});
