/**
 * Class helpin querying the browser's indexed
 * database.
 */
export class IndexedDbHelper {

    /* Method returning a promise to resolve. */
    static async openDb(name) {
        if (!window.indexedDB) {
            console.log("Your browser doesn't support a stable version of IndexedDB.");
            return null;
        }

        /* request type is IDBOpenDBRequest */
        var request = window.indexedDB.open(name, 3); 

        let el = null;
        const myPromise = new Promise((resolve, reject) => { 
            request.onsuccess = function(event) {
                el = Object.assign(event.target).result;
                resolve(el);
            };
            request.onerror = function() {
                reject();
            }
        });

        return myPromise;
    }

    /**
     * Method getting the geys from the given database
     * @param database IDBDatabase object. It has the same format: 
            name: "PHOTO_STORAGE"
            objectStoreNames: DOMStringList 
            [..]
     * @returns an word array representing the database keys (folders).
     */
    static getDbKeys(database) {
        console.log('success');
        const keys = [];
        const result = database;
        if (result != null) {
            keys.push(result.name);
        }
        return keys;
    };

    static getTable(idTable) {

    }
}