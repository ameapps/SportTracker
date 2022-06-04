# SportFoodTrack
Original android app rebuilded as an ionic one to be able to track users train sessions data

COMANDI USATI: 
 • npm install 
 • ionic build 
 • npm install -g @ionic/cli 
 • ionic capacitor add android 
 •	Apro la cartella android in android studio 
 •	Posso:
    o	Eseguire l'app 
    o	Troverò l'apk in app\android\app\build\outputs\apk\debug
    o	L’apk funzionerà solo sull’Android Virtual device (AVD)
    •	Signare l’apk andando in build\generate signed bundle or  apk\apk\compilando i campi per la firma da applicare (scelta da  prendere)
 
 -----01/06/2022-----

UPDATE: 
https://capacitorjs.com/docs/android
https://ionicframework.com/docs/cli/commands/capacitor-update
[ionic] [ionic come] [ionic come esportare in apk] [ionic come esportare in apk update]
IONIC COME ESPORTARE L'APPLICAZIONE PER ANDROID IN FORMATO APK: basta seguire la documentazione 
presente al link indicato.
Vale a dire: 
 • npm install @capacitor/android   **// Installazione per l'export android** 
 • npx cap add android              **// Esportazione come apk (unsigned)**
 • npx cap open android 	        **// Signo l'app per poterla installare sullo smartphone**