## HASH NELL'URL DEL SITO 
L'hash serve a fare in modo che il browser non faccia richieste reali al server per ogni rotta, ma che tutto venga gestito interamente dal client Angular.
useHash: false: https://example.com/about
useHash: true: https://example.com/#/about
*cioè*
usare l’hash serve a farein modo che il routing non sia gestito dal server web, ma sia gestito dall'app angular. 

## COME PUBBLICARE SU GITHUB 
- controllare nell'app routing ci sia la voce per l'hash per la gestione delle rotte 
- usare comanod cosi fatto: ng build --configuration=production --output-path docs --base-href /CustomCv/ 
Dove: 
- configuration production è necessaria 
- --output-path docs serve a dare il nome 'doc' alla cartella di pubblicazione generata da angular (normalmente si chiama dist)
- --base-href /CustomCv/ assegna al href dell'index.html il nome del branch in uso. Senza di questo, il server web di github non riesce a trovare i file del sito, perchè li cerca sempre al path 
https://nome-utente-github.github.io/nome-branch
ES LINK FUNZIONANTE: https://stefanoyoyo.github.io/CustomCv/#/homepage