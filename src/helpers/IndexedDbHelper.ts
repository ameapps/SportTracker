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
        var request = window.indexedDB.open(name, 1); 

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

    /**Method getting the specified objectstore from the specified database. 
     * @indexedDb database from which getting the specified objectstore 
     * @objectName name of the objectstore to get from the database.
    */
    static GetDbObjectstore(indexesDb, objectName) {
        const transaction = indexesDb.transaction([objectName]);
        const objectStore = transaction.objectStore(objectName);
        return objectStore;
    }

    /**Method allowing to get an element from an objectStore object
     * using the specified primary key. 
     * This methos incapsulates an async callback call when 
     * onsuccess event is triggered into a promise. 
     * This allows to resolve the promise in OOP style.
     * @objectStore database object from which getting data
     * @elementPrimaryKey string representing the primary key of the element to get from the object.
     */
    static async getObjectElement(objectStore, elementPrimaryKey) {
        var objectStore2 = objectStore.get(elementPrimaryKey);
        let element = null;
        const prom = new Promise((resolve, reject) => {
            objectStore2.onsuccess = function(event) {
                if(objectStore2.result) {
                  console.log('success message!');
                  element = objectStore2.result;
                  resolve(element);
                } else {
                  console.log('error message!');  
                  element = null;
                  resolve(element);
                }
             };
        });

        return prom;
    }

    /**
     * Method getting all the object from the specified objectstore 
     * available from the specified object name.
     * @param indexesDb database object 
     * @param objectName name of the objetstore included into the database to use
     * @returns an array of gotten elements
     */
    static async AllObjectstoreElements(indexesDb, objectName) {
        const values = [];
        const objectStore = IndexedDbHelper.GetDbObjectstore(indexesDb, objectName);
        
        const prom = new Promise((resolve, reject) => {
          objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
              values.push(cursor.value);
               cursor.continue();
            } else {
              resolve(values);
            }
         };
        });
    
        return prom;
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

    /**Method showing an example of how to use this class. */
    static async usageExample() {
        const indexesDb = await IndexedDbHelper.openDb('Disc') as any;
        var objectStore = IndexedDbHelper.GetDbObjectstore(indexesDb, 'FileStorage');
        const dbElement = await IndexedDbHelper.getObjectElement(objectStore, '/DATA/1636315998653.jpeg');
        const pictures = await IndexedDbHelper.AllObjectstoreElements(indexesDb, ['FileStorage']);
    }
}