# SportFoodTrack

Original android app rebuilded as an ionic one to be able to track users train sessions data

COMANDI USATI:
• npm install
• ionic build
• npm install -g @ionic/cli
• ionic capacitor add android
• Apro la cartella android in android studio
• Posso:
o Eseguire l'app
o Troverò l'apk in app\android\app\build\outputs\apk\debug
o L’apk funzionerà solo sull’Android Virtual device (AVD)
• Signare l’apk andando in build\generate signed bundle or apk\apk\compilando i campi per la firma da applicare (scelta da prendere)

-----01/06/2022-----

UPDATE:
https://capacitorjs.com/docs/android
https://ionicframework.com/docs/cli/commands/capacitor-update
[ionic] [ionic come] [ionic come esportare in apk] [ionic come esportare in apk update]
IONIC COME ESPORTARE L'APPLICAZIONE PER ANDROID IN FORMATO APK: basta seguire la documentazione
presente al link indicato.
Vale a dire:
• npm install @capacitor/android **// Installazione per l'export android**
• npx cap add android **// Esportazione come apk (unsigned)**
• npx cap open android **// Signo l'app per poterla installare sullo smartphone**

**CONSOLE DI FIREBASE - REALTIME DATABASE**
https://console.firebase.google.com/u/1/project/sportmonitoring-8b00f/database/sportmonitoring-8b00f-default-rtdb/data/~2F

**COME FAR FUNZIONARE IL PROGETTO**
Attualmente il progetto gira con Angular 12. Per farlo funzionare serve: 

- eseguire nvm install 14.15.0
- eseguire nvm use 14.15.0
- controllare che npm sia v6.14.8, dovrebbe essersi già impostato da solo con nvm use