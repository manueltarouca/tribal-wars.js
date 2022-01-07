import { TribalWarsClient } from "../src/client";


test('test client', async () => {
  const client = new TribalWarsClient({
    type: 'normal',
    world: 83,
    countryCode: 'pt',
  });
  const players = await client.getPlayers();
  console.log(players)
  expect(players).toBeDefined();
});