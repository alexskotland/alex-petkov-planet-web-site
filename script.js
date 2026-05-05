//            Aleksandar Petkov

// Added JavaScript to allow for simple accessible functionality
document.addEventListener("DOMContentLoaded", () => {
  const factBtn = document.getElementById("funFactBtn");
  const factText = document.getElementById("fact");
//Created array of facts to randomize
  const facts = [
    "Our Milky Way galaxy is about 100,000 light years wide.",
    "A day on Venus is longer than a year on Venus!",
    "Jupiter has at least 79 moons discovered so far.",
    "In space, astronauts grow about 2 inches taller temporarily."
  ];
//Created click handler for button
  factBtn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    //Buttons display a random fun fact when clicked
    factText.textContent = randomFact;
    factText.hidden = false;
    //Updates aria-expanded for screen readers when button is clicked
    factBtn.setAttribute("aria-expanded", "true");
  });
});
