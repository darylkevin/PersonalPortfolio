import { education, experiences, projects } from "./definitions";

export const handleCardFocus = (cardType, index) => {
    if (cardType === 'experience') {
        experiences.forEach((exp, i) => {
            const currentCard = document.getElementById(`${cardType}-${i}`);

            if (i === index) {
                currentCard.classList.add("hover:shadow-inner");
                currentCard.classList.add("hover:rounded-xl");
                currentCard?.classList.add("transition-opacity");
            } else {
                currentCard.classList.add("blur-sm");
                currentCard.classList.add("opacity-50");
            }
        });
    } else if (cardType === 'project') {
        projects.forEach((project, i) => {
            const currentCard = document.getElementById(`${cardType}-${i}`);

            if (i === index) {
                currentCard.classList.add("hover:shadow-inner");
                currentCard.classList.add("hover:rounded-xl");
                currentCard?.classList.add("transition-opacity");
            } else {
                currentCard.classList.add("blur-sm");
                currentCard.classList.add("opacity-50");
            }
        });
    } else {
        education.forEach((edu, i) => {
            const currentCard = document.getElementById(`${cardType}-${i}`);

            if (i === index) {
                currentCard.classList.add("hover:shadow-inner");
                currentCard.classList.add("hover:rounded-xl");
                currentCard?.classList.add("transition-opacity");
            } else {
                currentCard.classList.add("blur-sm");
                currentCard.classList.add("opacity-50");
            }
        });
    }

};

export const handleCardUnfocus = () => {
    experiences.forEach((exp, i) => {
        const currentCard = document.getElementById(`experience-${i}`);

        currentCard.classList.remove("hover:shadow-inner");
        currentCard.classList.remove("hover:rounded-lg");
        currentCard.classList.remove("blur-sm");
        currentCard.classList.remove("opacity-50");
    });

    projects.forEach((project, i) => {
        const currentCard = document.getElementById(`project-${i}`);

        currentCard.classList.remove("hover:shadow-inner");
        currentCard.classList.remove("hover:rounded-lg");
        currentCard.classList.remove("blur-sm");
        currentCard.classList.remove("opacity-50");
    });

    education.forEach((edu, i) => {
        const currentCard = document.getElementById(`education-${i}`);

        currentCard.classList.remove("hover:shadow-inner");
        currentCard.classList.remove("hover:rounded-lg");
        currentCard.classList.remove("blur-sm");
        currentCard.classList.remove("opacity-50");
    })
};