import { education, experiences, projects } from "./definitions";

export const handleCardFocus = (cardType, index) => {

  if (cardType === "experience") {
    experiences.forEach((exp, i) => {
      const currentCard = document.getElementById(`${cardType}-${i}`);
      const currentLinkIcon = document.getElementById(`${cardType}-link-${index}`)

      if (i === index) {
        currentCard.classList.add("hover:shadow-inner");
        currentCard?.classList.add("transition-opacity");
        currentLinkIcon?.classList.add("scale-125");
      } else {
        currentCard.classList.add("opacity-50");
      }
    });
  } else if (cardType === "project") {
    projects.forEach((project, i) => {
      const currentCard = document.getElementById(`${cardType}-${i}`);
      const currentLinkIcon = document.getElementById(`${cardType}-link-${index}`)

      if (i === index) {
        currentCard.classList.add("hover:shadow-inner");
        currentCard?.classList.add("transition-opacity");
        currentLinkIcon?.classList.add("scale-125");

      } else {
        currentCard.classList.add("opacity-50");
      }
    });
  } else {
    education.forEach((edu, i) => {
      const currentCard = document.getElementById(`${cardType}-${i}`);
      const currentLinkIcon = document.getElementById(`${cardType}-link-${index}`)

      if (i === index) {
        currentCard.classList.add("hover:shadow-inner");
        currentCard?.classList.add("transition-opacity");
        currentLinkIcon?.classList.add("scale-125");

      } else {
        currentCard.classList.add("opacity-50");
      }
    });
  }
};

export const handleCardUnfocus = () => {
  experiences.forEach((exp, i) => {
    const currentCard = document.getElementById(`experience-${i}`);
    const currentLinkIcon = document.getElementById(`experience-link-${i}`)

    currentCard.classList.remove("hover:shadow-inner");
    currentCard.classList.remove("opacity-50");
    currentLinkIcon?.classList.remove("scale-125");

  });

  projects.forEach((project, i) => {
    const currentCard = document.getElementById(`project-${i}`);
    const currentLinkIcon = document.getElementById(`project-link-${i}`)

    currentCard.classList.remove("hover:shadow-inner");
    currentCard.classList.remove("opacity-50");
    currentLinkIcon?.classList.remove("scale-125");

  });

  education.forEach((edu, i) => {
    const currentCard = document.getElementById(`education-${i}`);
    const currentLinkIcon = document.getElementById(`education-link-${i}`)

    currentCard.classList.remove("hover:shadow-inner");
    currentCard.classList.remove("opacity-50");
    currentLinkIcon?.classList.remove("scale-125");

  });
};
