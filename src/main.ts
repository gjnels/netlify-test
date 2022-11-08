import "./style.css";

// const root = document.querySelector<HTMLDivElement>("#app")!;
const fetchBtn = document.querySelector<HTMLButtonElement>("#fetch-btn")!;
const responseText =
  document.querySelector<HTMLParagraphElement>("#response-output")!;

fetchBtn.addEventListener("click", async () => {
  const response = await fetch("/.netlify/functions/hello-world").then((res) =>
    res.json()
  );
  responseText.innerText = JSON.stringify(response);
});

const fetchPokedexBtn = document.getElementById("fetch-pokedex-btn");
fetchPokedexBtn?.addEventListener("click", async () => {
  const response = await fetch("/.netlify/functions/pokedex").then((res) =>
    res.json()
  );
  responseText.innerText = JSON.stringify(response);
});

const fetchKantoBtn = document.getElementById("fetch-kanto-btn")!;
const fetchHoennBtn = document.getElementById("fetch-hoenn-btn")!;

fetchKantoBtn.addEventListener("click", async () => {
  const response = await fetch("/.netlify/functions/pokedex", {
    method: "POST",
    body: JSON.stringify({
      region: "kanto",
    }),
  }).then((response) => response.json());

  responseText.innerText = JSON.stringify(response);
});

fetchHoennBtn.addEventListener("click", async () => {
  const response = await fetch("/.netlify/functions/pokedex", {
    method: "POST",
    body: JSON.stringify({
      region: "hoenn",
    }),
  }).then((response) => response.json());

  responseText.innerText = JSON.stringify(response);
});
