export const particlesConfig = {
  background: {
    color: "#ffffff", 
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ["#FFD700", "#FFC300", "#FFB800", "#E6BE8A"], 
    },
    shape: {
      type: "char",
      character: {
        value: ["₿", "Ξ", "₮", "₳", "$", "◎", "⧫", "𝕏"],
        font: "Courier New",
        style: "",
        weight: "bold",
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: 0.3,
        sync: false,
      },
    },
    size: {
      value: 16,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 10,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 180,
      color: "#DAA520", // goldenrod lines
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.4,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 3000,
        rotateY: 3000,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["grab", "bubble"],
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 250,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 22,
        duration: 2,
        opacity: 1,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
    },
  },
  retina_detect: true,
};
 