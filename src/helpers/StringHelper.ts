
export class StringHelper {
    /**Metodo che ritorna true se la stirnga passata come parametro contiene soli numeri, false altrimenti */
     static hasOnlyNumbers(param): boolean {
        const hasnums = /^\d+$/.test(param);
        return hasnums;
    }

    /** Method deleting the last char of the given word. */ 
    static deleteLastChar(word: string): string {
        word = word.substring(0, word.length-1)
        return word;
    }
}
