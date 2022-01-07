import { TribalWarsClient } from "./client";

(async () => {
  const client = new TribalWarsClient({
    type: 'normal',
    world: 83,
    countryCode: 'pt',
  });
  console.log(await client.getPlayers())
})()


