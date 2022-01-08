import axios from 'axios';
import { ENDPOINT_PLAYERS } from './constants';
import { ClientConfig, PlayerInterface } from "./models"
import { Player } from './player';

export class TribalWarsClient {

  initialized = false;
  config: ClientConfig;
  baseUrl: string = '';

  constructor(config: ClientConfig) {
    this.config = config;
    this.constructBaseUrl();
  }

  public async init() {

    // TO:DO check if storage has saved data

    await this.getPlayers();

    this.initialized = true;
  }

  async getPlayers(): Promise<Player[]> {
    const result = await axios.get<string>(`${this.baseUrl}${ENDPOINT_PLAYERS}`);
    return result.data.split('\n')
      .map<PlayerInterface>(row => {
        const player = row.split(',');
        return new Player({
          player_id: player[0],
          name: player[1],
          tribe_id: player[2],
          villages: player[3],
          points: player[4],
          rank: player[5],
        } as PlayerInterface);
      });
  }

  private constructBaseUrl() {
    this.baseUrl = `https://${this.config.countryCode}${this.config.world}.tribalwars.com.${this.config.countryCode}`
  }
}