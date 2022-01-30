export class AlgorithmHelper {

    /**
     * Method getting the highest value included into the specified
     * series of objects.
     * @param objects series of objects from where getting the highest value
     * @param keyName field name of the values to check.
     * @returns highest value included into the specified series of objects
     */
    static getHighestObjValue(objects, keyName) {
        let highest = -1;
        if (Array.isArray(objects)) {
            objects.forEach(object => {
                const value = object[keyName];
                highest = highest > value ? highest : value;
            });
        }
        return highest;
    }

    /**
    * Method getting the shortest value included into the specified
    * series of objects.
    * @param objects series of objects from where getting the shortest value
    * @param keyName field name of the values to check.
    * @returns highest value included into the specified series of objects
    */
    static getShortestObjValue(objects, keyName) {
        let highest = -1;
        if (Array.isArray(objects)) {
            objects.forEach(object => {
                const value = object[keyName];
                highest = highest < value ? highest : value;
            });
        }
        return highest;
    }
}
