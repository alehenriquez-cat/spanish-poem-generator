function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "a488e2130c3et2d5ao1ef3ffc71e4b14";

  let context =
    "You are a poem generator that creates poems in Spanish. Your task is to generate a 4 line Spanish poem in basic html format without including any html references in the output. Sign the poem with 'Tu poeta IA' at the end between <strong> tags. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a poem in Spanish about ${userInput.value}.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
