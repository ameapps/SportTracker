/**Classe che mette a disposizione metodi di utility da applicare ad un oggetto */
export class ObjectHelper {

    /**
     * Method running a deep copy of the specified object. 
     * @param {*} param 
     * @returns 
     */
    static getCopy(param) {
        return JSON.parse(JSON.stringify(param));
    }

    /**
     * Method getting the number of fields included in a object.
     * @param {*} obj 
     */
    static objectFieldsNumber(obj) {
        let length = 0;
        if (obj != null) {
            length = Object.keys(obj).length;
        }
        return length;
    }
}
