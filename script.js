const sentence =
  "Unlock Your Potential: Discover Endless Opportunities in Job Outsourcing.";
const sentenceContainer = document.getElementById("sentence-container");

function typeSentence() {
  //Clear the container before typing the sentence
  sentenceContainer.textContent = "";

  //Split the sentence into an array of individual letters

  const words = sentence.split("");

  //Iterate over each letter and create a span element for it
  words.forEach((word, wordIndex) => {
    const letters = word.split("");
    const wordSpan = document.createElement("span");
    wordSpan.classList.add("word");

    letters.forEach((letter, letterIndex) => {
      const letterSpan = document.createElement("span");
      letterSpan.textContent = letter;

      //Set a delay for each letter to create a sequential appreance effect
      letterSpan.style.animationDelay = `${
        wordIndex * 0.3 + letterIndex * 0.1
      }s`;

      //Append the letter to the sentence container
      wordSpan.appendChild(letterSpan);
    });
    sentenceContainer.appendChild(wordSpan);
  });
}

//Call the stypeSentence function initially
typeSentence();

//Call the typeSentence function again after the animation ends
sentenceContainer.addEventListener("animationend", typeSentence);
