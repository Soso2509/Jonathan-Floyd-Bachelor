# The Floyd Web Project - BO24-G37

## Kjøre webapplikasjonen lokalt
Fordi den er bygget med Next.js krever den Node.js, og dens inkluderte npm, for å kjøre.\
Det kreves også API-nøkkel for å hente innhold fra CMS.

I mappen med den innleverte kodebasen er det lagt en *.env.local* fil med de nødvendige nøklene som lar applikasjonen hente innholdet.\
Det skal ikke gjøres noe med filen, den skal kun ligge på samme nivå som *package.json* filen.\
Koden henter allerede ut de nødvendige verdiene.

1\) I terminalen, sørg for å være plassert i prosjektmappen (samme mappenivå som *package.json* filen)

2\) Kjør **npm install** for å installere de forskjellige pakkene applikasjonen er avhengig av

3.a) Deretter kjør **npm run dev** som starter en development server som automatisk laster inn på nytt når det skjer endringer i koden.

***ELLER***

3.b) Kjør **npm run build** som bygger applikasjonen optimalisert for produksjon. Deretter **npm run start** som starter applikasjonen i produksjonsmodus, som ikke automatisk lastes inn på nytt med endringer i koden.


I begge tilfeller burde da webapplikasjonen starte hos http://localhost:3000/ i en nettleser.\
URL hvor applikasjonen starter vises også i terminalen.