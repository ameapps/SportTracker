
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, Database } from "firebase/database";

/**
 * Class allowing to access firebase database. 
 * It permits to read and write data into it.
 */
export class FirebaseHelper {

    /**
     * https://firebase.google.com/docs/database/web/read-and-write?authuser=0
     * Method getting the specified object from the firebase database
     * using the credentials object.
     * EXAMPLE: 
     *          firebaseConfig = const firebaseConfig = 
     *                      {
     *                          apiKey: "apiKey",
     *                          authDomain: "authDomain.firebaseapp.com",
     *                          databaseURL: "https://urlstring",
     *                          projectId: "projectId",
     *                          storageBucket: "storageBucket",
     *                          messagingSenderId: "messagingSenderId",
     *                          appId: "appId",
     *                          measurementId: "measurementId"
     *                      };
     *  path = 'object name';
     *  var result = {result object}
     * @param credentials object including the firebase credentials.
     * @param path string representing the desired path name.
     * @returns the element located in the firebase database.
     */
    static async getData(credentials, path) {
        const app = initializeApp(credentials as FirebaseOptions);
        const db = getDatabase(app);
        const starCountRef = ref(db, path);

        const prom = new Promise((resolve, reject) => {
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data)
                resolve(data);
            });
        });
        return prom;

    }

    /**
     * https://firebase.google.com/docs/database/web/read-and-write?authuser=0
     * Method to write the specified object to the specified 
     * database object name. 
     * NOTE: firebase rule MUST allow writing to the database. 
     * NOTE: this method will REPLACE the object located at the 
     * specified path. All data of the replaced object will be 
     * lost.
     * EXAMPLE: 
     *      FirebaseHelper.writeUserData(arr, credentials, 'photoes');
     * @param objToUpload object to upload replacing the existing one. 
     * @param credentials object including the firebase credentials.
     * @param path string representing the desired path name.
     */
    static writeUserData(objToUpload, credentials, path) {
        console.log('firebase write')
        const app = initializeApp(credentials as FirebaseOptions);
        const db = getDatabase(app);
        set(ref(db, path), objToUpload);
    }

    /**
     * TODO: fare un metodo per aggiunerere un oggetto 
     * senza dover scaricare tutto l'array, aggiungerlo li
     * e farne ancora l'upload con l'elemento aggiunto
     */

    /**
     * TODO: fare l'aggiornamento di un oggetto sul database.
     * (evitando quanto speigato nell'altro todo)
     */

}