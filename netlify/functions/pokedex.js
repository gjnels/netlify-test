import fetch from "node-fetch";

export const handler = async (event, context) => {
  // console.log({ event }, { context });
  const eventBody = event.body ? JSON.parse(event.body) : undefined;
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${
    eventBody?.region ?? "kanto"
  }`;

  const response = await fetch(POKE_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
};
