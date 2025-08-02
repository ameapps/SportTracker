export class BlobHelper {
    /**Method adding the base64 format before a string enconding an image. 
     * @param photo blob as string representation of a photo. */
    static asBlob64Format(photo) {
        return `data:image/png;base64,${photo}`;
    }

    /**Method getting the image from the specified dataurl. 
   * METODO DA PROVARE.*/
    static dataURLToBlob(dataurl) {
        let arr = dataurl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

    /**Convert BASE64 to BLOB
     * @param base64Image String representing Base64 image data to convert into the BLOB */
    static convertBase64ToBlob(base64Image) {
        // Split into two parts
        const parts = base64Image.split(';base64,');

        // Hold the content type
        const imageType = parts[0].split(':')[1];

        // Decode Base64 string
        const decodedData = window.atob(parts[1]);

        // Create UNIT8ARRAY of size same as row data length
        const uInt8Array = new Uint8Array(decodedData.length);

        // Insert all character code into uInt8Array
        for (let i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }

        // Return BLOB image after conversion
        return new Blob([uInt8Array], { type: imageType });
    }

    /**Method to convert a blob object to its binary format. */
    static async blobToBinary(blob) {
        const buffer = await blob.arrayBuffer();

        const view = new Int8Array(buffer);

        return [...view].map((n) => n.toString(2)).join(' ');
    };
}