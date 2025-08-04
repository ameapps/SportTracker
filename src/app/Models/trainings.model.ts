export class Trainings {
  id: number;
  type: string; // Tapis roulant, Cyclette, etc.
  data: TapisRoulantData | CycletteData; // Data specific to the training type
}

export class TapisRoulantData {
  choosenSpeed: string;
  definedTime: string;
}

export class CycletteData {
  choosenResistance: string;
  choosenPosition: string;
  consumedKcal: number;
  definedTime: string;
}
