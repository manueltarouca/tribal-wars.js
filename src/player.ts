import { PlayerInterface } from "./models";

export class Player {
  player_id: string;
  name: string;
  tribe_id: string;
  villages: string;
  points: string;
  rank: string;
  constructor(player: PlayerInterface){
    this.player_id = player.player_id;
    this.name = player.name;
    this.tribe_id = player.tribe_id;
    this.villages = player.villages;
    this.points = player.points;
    this.rank = player.rank;
  }
}