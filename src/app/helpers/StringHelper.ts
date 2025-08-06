export class StringHelper {
  /**
   * Converte una data in stringa UTC in formato locale "dd/MM/yy"
   *
   * @param utcString - La data in formato UTC (es. "2025-08-03T20:30:00Z")
   * @returns La data formattata in ora locale (es. "03/08/25")
   */
  static convertUtcToLocalDateString(utcString: string): string {
    const date = new Date(utcString); // automaticamente interpretata come UTC
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  /**Metodo che ritorna true se la stirnga passata come parametro contiene soli numeri, false altrimenti */
  static hasOnlyNumbers(param): boolean {
    const hasnums = /^\d+$/.test(param);
    return hasnums;
  }

  /** Method deleting the last char of the given word. */
  static deleteLastChar(word: string): string {
    word = word.substring(0, word.length - 1);
    return word;
  }

  /**
   * Method building a string containing the equivalent
   * time specified from the given milliseconds.
   * @param ms specified milliseconds
   * @returns formatted string
   */
  static msToTime(milliseconds) {
    //Get hours from milliseconds
    var hours = milliseconds / (1000 * 60 * 60);
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Get remainder from hours and convert to minutes
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    return h + ':' + m + ':' + s;
  }

  static getReadableFileName(): string {
    const readableDate = StringHelper.getReadableDate();
    return `${readableDate}.jpeg`;
  }

  static getReadableDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const readableDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return readableDate;
  }

  static getCurrentUtcDateString(): string {
    const now = new Date();

    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  }
}
