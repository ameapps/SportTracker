
  export class ChartModel { 
    labels!: string[];
    data!: ChartDataModel[];
  }

  export class ChartDataModel {
    label: string;
    data: number[];
  }