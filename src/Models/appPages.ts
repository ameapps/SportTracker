/**
 * Class modelling a app page class
 */
export class AppPages {
    title: string;
     url: string;
    icon: string;

    constructor(title: string, url: string, icon: string)
    {
        this.title= title;
        this.url=url;
        this.icon = icon;
    }
}