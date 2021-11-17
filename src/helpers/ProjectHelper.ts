export class ProjectHelper {
      /**Method detecting whether the website is running on localhost or not.  */
    static isRunningOnlocalhost() {
        let isLocalhost = false;
        const url = this.getUrl();
        if (url.includes('localhost') || url.includes('127.0.0.1')) {
        isLocalhost = true;
        }
        return isLocalhost;
    }

    /**Method getting the actual website url. */
    static getUrl(): string {
        return window.location.href;
    }
}