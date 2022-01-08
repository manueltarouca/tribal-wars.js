import { TribalWarsClient } from "../src";

test('test client', async () => {
  const client = new TribalWarsClient({
    type: 'normal',
    world: 83,
    countryCode: 'pt',
  });
  const players = await client.getPlayers();
  console.log(players.find(p => p.name === 'matm'));
  expect(players).toBeDefined();
});