/**Class providing the main REST operations. */
export class ApiHelper {

    static async post(url, header, data) {

        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: header,
            body: JSON.stringify(data),
        })
    }

    static async postBinary(url, header, data) {

        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: header,
            body: data,
        })
    }

}

