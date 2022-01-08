# tribal-wars.js

## Installation 

`npm i tribal-wars.js`

## Examples

```ts
import { TribalWarsClient } from "tribal-wars.js";

const client = new TribalWarsClient({
  type: 'normal',
  world: 83,
  countryCode: 'pt',
});

(async () => {
  const players = await client.getPlayers();
  console.log(players.find(p => p.name === 'matm'));
})();
```