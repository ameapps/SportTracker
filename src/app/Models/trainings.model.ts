import { CycletteData } from "./cyclette.data.model";
import { TapisRoulantData } from "./tapis.roulant.data.model";

export class Trainings {
  id: number;
  type: string; // Tapis roulant, Cyclette, etc.
  data: TapisRoulantData | CycletteData; // Data specific to the training type
  photoName?: string; // Optional photo ID for the training
  dateTime: string; // Date and time of the training in UTC format
}