interface Appereances {
  game1: string;
  game2: string;
  game3: string;
 }
 
 export interface Character {
  id: number;
  name: string;
  race: string;
  gender: string;
  voiceActor: string;
  profession: string;
  image: string;
 appereances: Appereances;
 }