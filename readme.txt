
-----27/101/2021-----

ho notato che passando la variabile "isMenuComplete" in input al componente del tappeto, quando quest'ultimo la cambia, il padre non se ne accorge.
Devo far si che il componente cambi la variabile dal servizio. 

-----15/05/2022-----

TIMER: il timer ora funziona facendo computare tutoad un worker service. 
Lo scopo da raggiungere è fare in mood che il timer riprenda dal punto 
corretto quando su mobile viene interrotto perchè metto in pause(). 
Adesso il worker service avvia una interval usando i ms ricevuti (via messaggio dal 
thread principale). 
Ad ogni tick, l'app salva sul local storage un time stamp, che viene ripreso 
sempre ad ogni tick. In questo modo si può fare in modo che quando l'app va in 
pausa, alla sua ripresa, si possa sottrarre la differenza tra il timestamp
della data attuale e quello dell'ultima data salvata prima di andare in pause. 
Il problema è che non si riesce a modificare i ms quando l'esecuzione dell'app 
viene ripresa, perchè i millisecondi sono nella interval. 

-----29/05/2022-----

Dopo aver fatto qualche ricerca e dopo la spiegazione di Paolo su come funziona
ionic, ho capito che dovrei poter provare un background service. 
Questo perchè Ionic è un framework che, a differenza di natevescript, non può 
accedere da solo alle API dei sistemi operativi mobile (native). 
Per farlo necessita di librerie esterne, quali cordova e capacitor.
Mi è quindi venuto in mente che in android, per poter eseguire un operazione
in background, è necessario usare un service che esegua un 
background task. Dunque ho intuito che debba esistere un qualche componente 
in capacitor che permetta di avviare un background task in android/ios.
