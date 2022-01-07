import axios from 'axios';
import { ENDPOINT_PLAYERS_SUFFIX } from './constants';
import { ClientConfig } from "./models"

export class TribalWarsClient {

  config: ClientConfig;
  baseUrl: string = '';
  
  constructor(config: ClientConfig){
    this.config = config;
    this.constructBaseUrl();
  }

  public async getPlayers(){
    const result = await axios.get<string>(`${this.baseUrl}${ENDPOINT_PLAYERS_SUFFIX}`);
    console.log(`${this.baseUrl}${ENDPOINT_PLAYERS_SUFFIX}`)
    return result.data.split('\n');
  }

  private constructBaseUrl(){
    this.baseUrl = `https://${this.config.countryCode}${this.config.world}.tribalwars.com.${this.config.countryCode}`
    console.log(this.baseUrl)
  }
}