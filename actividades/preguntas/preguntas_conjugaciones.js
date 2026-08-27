const questionBank = [
    {
        "sentence": "Todos los días, él/ella _____ (pensar).",
        "engFull": "Every day, he/she thinks.",
        "missing": "piensa",
        "options": [
            "pensamos",
            "pensaron",
            "piensa",
            "pensaste"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Pronto, nosotros _____ (pensar).",
        "engFull": "Soon, we will think.",
        "missing": "pensaremos",
        "options": [
            "pienso",
            "pensamos",
            "pensaremos",
            "piensa"
        ],
        "exp": "Tense: Futuro. Subject: Nosotros."
    },
    {
        "sentence": "Pronto, yo _____ (correr).",
        "engFull": "Soon, I will run.",
        "missing": "correré",
        "options": [
            "correré",
            "correremos",
            "corro",
            "corriste"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Hoy, tú _____ (esperar).",
        "engFull": "Today, you wait.",
        "missing": "esperas",
        "options": [
            "esperaré",
            "esperan",
            "espera",
            "esperas"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Anoche, él/ella _____ (dibujar).",
        "engFull": "Last night, he/she drew.",
        "missing": "dibujó",
        "options": [
            "dibujarán",
            "dibujamos",
            "dibujó",
            "dibujaré"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Hoy, ellos _____ (aprender).",
        "engFull": "Today, they learn.",
        "missing": "aprenden",
        "options": [
            "aprenderás",
            "aprendemos",
            "aprenderá",
            "aprenden"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    },
    {
        "sentence": "Ahora, nosotros _____ (dibujar).",
        "engFull": "Now, we draw.",
        "missing": "dibujamos",
        "options": [
            "dibujaron",
            "dibujó",
            "dibujamos",
            "dibujé"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Hoy, nosotros _____ (dibujar).",
        "engFull": "Today, we draw.",
        "missing": "dibujamos",
        "options": [
            "dibujaré",
            "dibujamos",
            "dibujó",
            "dibujé"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Todos los días, tú _____ (jugar).",
        "engFull": "Every day, you play.",
        "missing": "juegas",
        "options": [
            "jugó",
            "juegas",
            "jugué",
            "juegan"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Ayer, ellos _____ (dibujar).",
        "engFull": "Yesterday, they drew.",
        "missing": "dibujaron",
        "options": [
            "dibujaron",
            "dibujo",
            "dibujará",
            "dibujó"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Todos los días, yo _____ (dibujar).",
        "engFull": "Every day, I draw.",
        "missing": "dibujo",
        "options": [
            "dibuja",
            "dibujo",
            "dibujó",
            "dibujarán"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Ahora, él/ella _____ (cantar).",
        "engFull": "Now, he/she sings.",
        "missing": "canta",
        "options": [
            "cantaron",
            "cantan",
            "canté",
            "canta"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Pronto, nosotros _____ (cantar).",
        "engFull": "Soon, we will sing.",
        "missing": "cantaremos",
        "options": [
            "cantaremos",
            "cantamos",
            "cantaron",
            "canté"
        ],
        "exp": "Tense: Futuro. Subject: Nosotros."
    },
    {
        "sentence": "Ayer, tú _____ (esperar).",
        "engFull": "Yesterday, you waited.",
        "missing": "esperaste",
        "options": [
            "esperamos",
            "espero",
            "esperé",
            "esperaste"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "El próximo año, yo _____ (correr).",
        "engFull": "Next year, I will run.",
        "missing": "correré",
        "options": [
            "correrá",
            "correré",
            "corrimos",
            "correrás"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Pronto, ellos _____ (dibujar).",
        "engFull": "Soon, they will draw.",
        "missing": "dibujarán",
        "options": [
            "dibujarán",
            "dibujamos",
            "dibujaron",
            "dibujaremos"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "Todos los días, ellos _____ (cantar).",
        "engFull": "Every day, they sing.",
        "missing": "cantan",
        "options": [
            "cantará",
            "cantaremos",
            "cantan",
            "cantaron"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    },
    {
        "sentence": "Ahora, nosotros _____ (comer).",
        "engFull": "Now, we eat.",
        "missing": "comemos",
        "options": [
            "como",
            "comemos",
            "comí",
            "comeré"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "El próximo año, tú _____ (dibujar).",
        "engFull": "Next year, you will draw.",
        "missing": "dibujarás",
        "options": [
            "dibuja",
            "dibujarás",
            "dibujarán",
            "dibujo"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "Mañana, tú _____ (comer).",
        "engFull": "Tomorrow, you will eat.",
        "missing": "comerás",
        "options": [
            "comerás",
            "comeré",
            "como",
            "comieron"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "Hoy, él/ella _____ (aprender).",
        "engFull": "Today, he/she learns.",
        "missing": "aprende",
        "options": [
            "aprendiste",
            "aprenden",
            "aprendió",
            "aprende"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "El año pasado, tú _____ (esperar).",
        "engFull": "Last year, you waited.",
        "missing": "esperaste",
        "options": [
            "esperó",
            "esperaste",
            "esperaré",
            "esperamos"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "Ayer, tú _____ (hablar).",
        "engFull": "Yesterday, you talked.",
        "missing": "hablaste",
        "options": [
            "hablará",
            "hablaron",
            "hablaste",
            "habló"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "El año pasado, ellos _____ (esperar).",
        "engFull": "Last year, they waited.",
        "missing": "esperaron",
        "options": [
            "esperamos",
            "esperas",
            "espero",
            "esperaron"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Anoche, nosotros _____ (comer).",
        "engFull": "Last night, we ate.",
        "missing": "comimos",
        "options": [
            "comimos",
            "comen",
            "comeremos",
            "comerán"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Anoche, él/ella _____ (hablar).",
        "engFull": "Last night, he/she talked.",
        "missing": "habló",
        "options": [
            "hablaré",
            "hablamos",
            "hablan",
            "habló"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "El año pasado, ellos _____ (correr).",
        "engFull": "Last year, they ran.",
        "missing": "corrieron",
        "options": [
            "correremos",
            "corrió",
            "correrá",
            "corrieron"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Ayer, ellos _____ (pensar).",
        "engFull": "Yesterday, they thought.",
        "missing": "pensaron",
        "options": [
            "pensé",
            "pensaron",
            "pensamos",
            "pensará"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "El año pasado, nosotros _____ (pensar).",
        "engFull": "Last year, we thought.",
        "missing": "pensamos",
        "options": [
            "pensarán",
            "pensó",
            "pensaron",
            "pensamos"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Ayer, nosotros _____ (dormir).",
        "engFull": "Yesterday, we slept.",
        "missing": "dormimos",
        "options": [
            "dormí",
            "dormiste",
            "dormimos",
            "duerme"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Todos los días, yo _____ (comer).",
        "engFull": "Every day, I eat.",
        "missing": "como",
        "options": [
            "comeremos",
            "como",
            "comemos",
            "comerá"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "El año pasado, él/ella _____ (cantar).",
        "engFull": "Last year, he/she sang.",
        "missing": "cantó",
        "options": [
            "cantaron",
            "cantan",
            "cantará",
            "cantó"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Todos los días, yo _____ (jugar).",
        "engFull": "Every day, I play.",
        "missing": "juego",
        "options": [
            "juega",
            "jugamos",
            "juego",
            "jugaron"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Pronto, ellos _____ (hablar).",
        "engFull": "Soon, they will talk.",
        "missing": "hablarán",
        "options": [
            "hablo",
            "hablarán",
            "habló",
            "hablamos"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "El próximo año, él/ella _____ (comer).",
        "engFull": "Next year, he/she will eat.",
        "missing": "comerá",
        "options": [
            "comerán",
            "comí",
            "comerá",
            "comeré"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Ahora, ellos _____ (correr).",
        "engFull": "Now, they run.",
        "missing": "corren",
        "options": [
            "corren",
            "corro",
            "corres",
            "corrí"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    },
    {
        "sentence": "El próximo año, tú _____ (dormir).",
        "engFull": "Next year, you will sleep.",
        "missing": "dormirás",
        "options": [
            "dormimos",
            "dormí",
            "dormiste",
            "dormirás"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "Todos los días, yo _____ (cantar).",
        "engFull": "Every day, I sing.",
        "missing": "canto",
        "options": [
            "cantó",
            "cantaré",
            "canto",
            "cantarás"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Ahora, yo _____ (dormir).",
        "engFull": "Now, I sleep.",
        "missing": "duermo",
        "options": [
            "duerme",
            "dormiremos",
            "duermo",
            "dormiré"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Todos los días, nosotros _____ (cantar).",
        "engFull": "Every day, we sing.",
        "missing": "cantamos",
        "options": [
            "cantamos",
            "canto",
            "cantaré",
            "cantaron"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Todos los días, ellos _____ (hablar).",
        "engFull": "Every day, they talk.",
        "missing": "hablan",
        "options": [
            "hablan",
            "habla",
            "hablaremos",
            "hablará"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    },
    {
        "sentence": "Ahora, ellos _____ (dormir).",
        "engFull": "Now, they sleep.",
        "missing": "duermen",
        "options": [
            "dormirás",
            "duermen",
            "dormiremos",
            "dormirán"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    },
    {
        "sentence": "Anoche, yo _____ (dormir).",
        "engFull": "Last night, I slept.",
        "missing": "dormí",
        "options": [
            "duermo",
            "dormí",
            "dormirás",
            "duermen"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Hoy, yo _____ (caminar).",
        "engFull": "Today, I walk.",
        "missing": "camino",
        "options": [
            "caminará",
            "caminamos",
            "caminó",
            "camino"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Hoy, ellos _____ (caminar).",
        "engFull": "Today, they walk.",
        "missing": "caminan",
        "options": [
            "caminan",
            "caminamos",
            "caminaste",
            "camina"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    },
    {
        "sentence": "Anoche, ellos _____ (hablar).",
        "engFull": "Last night, they talked.",
        "missing": "hablaron",
        "options": [
            "hablas",
            "hablan",
            "hablaron",
            "hablaste"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "El próximo año, ellos _____ (aprender).",
        "engFull": "Next year, they will learn.",
        "missing": "aprenderán",
        "options": [
            "aprende",
            "aprenderemos",
            "aprendí",
            "aprenderán"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "Hoy, nosotros _____ (dormir).",
        "engFull": "Today, we sleep.",
        "missing": "dormimos",
        "options": [
            "duermen",
            "dormirán",
            "dormirá",
            "dormimos"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "El próximo año, yo _____ (hablar).",
        "engFull": "Next year, I will talk.",
        "missing": "hablaré",
        "options": [
            "hablarán",
            "hablaré",
            "hablé",
            "hablaste"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Hoy, yo _____ (comer).",
        "engFull": "Today, I eat.",
        "missing": "como",
        "options": [
            "comiste",
            "comieron",
            "comeremos",
            "como"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Hoy, nosotros _____ (correr).",
        "engFull": "Today, we run.",
        "missing": "corremos",
        "options": [
            "corremos",
            "correremos",
            "correrás",
            "corre"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "El año pasado, él/ella _____ (pensar).",
        "engFull": "Last year, he/she thought.",
        "missing": "pensó",
        "options": [
            "piensas",
            "pensaste",
            "pensamos",
            "pensó"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "El año pasado, yo _____ (dibujar).",
        "engFull": "Last year, I drew.",
        "missing": "dibujé",
        "options": [
            "dibujé",
            "dibujo",
            "dibujan",
            "dibujamos"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Todos los días, él/ella _____ (comer).",
        "engFull": "Every day, he/she eats.",
        "missing": "come",
        "options": [
            "como",
            "come",
            "comió",
            "comiste"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Mañana, tú _____ (jugar).",
        "engFull": "Tomorrow, you will play.",
        "missing": "jugarás",
        "options": [
            "juego",
            "jugarás",
            "juegas",
            "jugó"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "Ayer, tú _____ (correr).",
        "engFull": "Yesterday, you ran.",
        "missing": "corriste",
        "options": [
            "corremos",
            "correrá",
            "corren",
            "corriste"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "Pronto, él/ella _____ (correr).",
        "engFull": "Soon, he/she will run.",
        "missing": "correrá",
        "options": [
            "correrá",
            "corro",
            "corrí",
            "correremos"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "El año pasado, yo _____ (jugar).",
        "engFull": "Last year, I played.",
        "missing": "jugué",
        "options": [
            "jugaron",
            "jugué",
            "juegas",
            "jugó"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Anoche, nosotros _____ (pensar).",
        "engFull": "Last night, we thought.",
        "missing": "pensamos",
        "options": [
            "pensamos",
            "pensaremos",
            "pensó",
            "pensé"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Todos los días, tú _____ (esperar).",
        "engFull": "Every day, you wait.",
        "missing": "esperas",
        "options": [
            "esperan",
            "esperas",
            "esperamos",
            "esperaste"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Mañana, tú _____ (hablar).",
        "engFull": "Tomorrow, you will talk.",
        "missing": "hablarás",
        "options": [
            "hablaré",
            "habló",
            "hablaste",
            "hablarás"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "Mañana, ellos _____ (esperar).",
        "engFull": "Tomorrow, they will wait.",
        "missing": "esperarán",
        "options": [
            "esperamos",
            "esperarán",
            "esperaré",
            "esperarás"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "Ahora, tú _____ (esperar).",
        "engFull": "Now, you wait.",
        "missing": "esperas",
        "options": [
            "esperé",
            "esperaré",
            "esperó",
            "esperas"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "El año pasado, él/ella _____ (dormir).",
        "engFull": "Last year, he/she slept.",
        "missing": "durmió",
        "options": [
            "dormirás",
            "dormirán",
            "durmió",
            "duermen"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Ayer, ellos _____ (comer).",
        "engFull": "Yesterday, they ate.",
        "missing": "comieron",
        "options": [
            "comerán",
            "comimos",
            "comieron",
            "como"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Pronto, él/ella _____ (hablar).",
        "engFull": "Soon, he/she will talk.",
        "missing": "hablará",
        "options": [
            "hablará",
            "hablo",
            "hablan",
            "hablarán"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Anoche, él/ella _____ (correr).",
        "engFull": "Last night, he/she ran.",
        "missing": "corrió",
        "options": [
            "corrió",
            "corren",
            "corremos",
            "correrá"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Anoche, nosotros _____ (caminar).",
        "engFull": "Last night, we walked.",
        "missing": "caminamos",
        "options": [
            "caminará",
            "caminamos",
            "caminaré",
            "caminaron"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "El año pasado, yo _____ (esperar).",
        "engFull": "Last year, I waited.",
        "missing": "esperé",
        "options": [
            "esperaré",
            "espera",
            "esperará",
            "esperé"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Anoche, nosotros _____ (dormir).",
        "engFull": "Last night, we slept.",
        "missing": "dormimos",
        "options": [
            "durmieron",
            "duermes",
            "dormimos",
            "duermen"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Hoy, él/ella _____ (jugar).",
        "engFull": "Today, he/she plays.",
        "missing": "juega",
        "options": [
            "jugaremos",
            "jugarás",
            "juega",
            "jugaste"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Ahora, él/ella _____ (pensar).",
        "engFull": "Now, he/she thinks.",
        "missing": "piensa",
        "options": [
            "pensaré",
            "piensa",
            "pensaremos",
            "pensamos"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Anoche, yo _____ (cantar).",
        "engFull": "Last night, I sang.",
        "missing": "canté",
        "options": [
            "canto",
            "cantaste",
            "canté",
            "cantarán"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Mañana, él/ella _____ (aprender).",
        "engFull": "Tomorrow, he/she will learn.",
        "missing": "aprenderá",
        "options": [
            "aprenderá",
            "aprendimos",
            "aprenden",
            "aprendieron"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Hoy, nosotros _____ (caminar).",
        "engFull": "Today, we walk.",
        "missing": "caminamos",
        "options": [
            "caminamos",
            "caminaré",
            "camina",
            "caminarás"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "El año pasado, tú _____ (cantar).",
        "engFull": "Last year, you sang.",
        "missing": "cantaste",
        "options": [
            "cantarás",
            "cantarán",
            "cantamos",
            "cantaste"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "Pronto, ellos _____ (jugar).",
        "engFull": "Soon, they will play.",
        "missing": "jugarán",
        "options": [
            "jugaron",
            "juegas",
            "jugarán",
            "jugarás"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "Pronto, él/ella _____ (esperar).",
        "engFull": "Soon, he/she will wait.",
        "missing": "esperará",
        "options": [
            "esperarán",
            "esperó",
            "esperan",
            "esperará"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Ahora, tú _____ (pensar).",
        "engFull": "Now, you think.",
        "missing": "piensas",
        "options": [
            "piensa",
            "pensó",
            "piensas",
            "pensarás"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Hoy, tú _____ (caminar).",
        "engFull": "Today, you walk.",
        "missing": "caminas",
        "options": [
            "caminas",
            "caminaré",
            "camina",
            "caminarás"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Ahora, nosotros _____ (pensar).",
        "engFull": "Now, we think.",
        "missing": "pensamos",
        "options": [
            "pensé",
            "pensaste",
            "pensamos",
            "piensan"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Anoche, él/ella _____ (comer).",
        "engFull": "Last night, he/she ate.",
        "missing": "comió",
        "options": [
            "comió",
            "comes",
            "comerás",
            "comen"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "El año pasado, tú _____ (comer).",
        "engFull": "Last year, you ate.",
        "missing": "comiste",
        "options": [
            "comieron",
            "como",
            "comerán",
            "comiste"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "Pronto, él/ella _____ (pensar).",
        "engFull": "Soon, he/she will think.",
        "missing": "pensará",
        "options": [
            "pensamos",
            "pensará",
            "pensaré",
            "pensó"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Ayer, yo _____ (pensar).",
        "engFull": "Yesterday, I thought.",
        "missing": "pensé",
        "options": [
            "piensan",
            "piensa",
            "pensé",
            "pensamos"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Anoche, él/ella _____ (dormir).",
        "engFull": "Last night, he/she slept.",
        "missing": "durmió",
        "options": [
            "durmieron",
            "durmió",
            "dormirá",
            "dormí"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Hoy, tú _____ (dormir).",
        "engFull": "Today, you sleep.",
        "missing": "duermes",
        "options": [
            "dormiste",
            "duermes",
            "dormirán",
            "durmió"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "El próximo año, ellos _____ (comer).",
        "engFull": "Next year, they will eat.",
        "missing": "comerán",
        "options": [
            "comerás",
            "comerán",
            "comiste",
            "come"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "El próximo año, nosotros _____ (dibujar).",
        "engFull": "Next year, we will draw.",
        "missing": "dibujaremos",
        "options": [
            "dibujamos",
            "dibujaron",
            "dibuja",
            "dibujaremos"
        ],
        "exp": "Tense: Futuro. Subject: Nosotros."
    },
    {
        "sentence": "Pronto, ellos _____ (aprender).",
        "engFull": "Soon, they will learn.",
        "missing": "aprenderán",
        "options": [
            "aprenderán",
            "aprendí",
            "aprende",
            "aprenderás"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "Ayer, él/ella _____ (esperar).",
        "engFull": "Yesterday, he/she waited.",
        "missing": "esperó",
        "options": [
            "esperó",
            "esperan",
            "esperaste",
            "espero"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Mañana, yo _____ (jugar).",
        "engFull": "Tomorrow, I will play.",
        "missing": "jugaré",
        "options": [
            "jugaré",
            "jugará",
            "juego",
            "jugó"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Hoy, yo _____ (correr).",
        "engFull": "Today, I run.",
        "missing": "corro",
        "options": [
            "correrá",
            "corro",
            "correrás",
            "corrieron"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Anoche, él/ella _____ (cantar).",
        "engFull": "Last night, he/she sang.",
        "missing": "cantó",
        "options": [
            "cantaremos",
            "cantaré",
            "cantan",
            "cantó"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "El año pasado, nosotros _____ (comer).",
        "engFull": "Last year, we ate.",
        "missing": "comimos",
        "options": [
            "comió",
            "como",
            "comimos",
            "comiste"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "El año pasado, nosotros _____ (jugar).",
        "engFull": "Last year, we played.",
        "missing": "jugamos",
        "options": [
            "jugará",
            "jugaron",
            "juega",
            "jugamos"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Hoy, ellos _____ (cantar).",
        "engFull": "Today, they sing.",
        "missing": "cantan",
        "options": [
            "cantas",
            "cantó",
            "cantarás",
            "cantan"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    },
    {
        "sentence": "El año pasado, él/ella _____ (comer).",
        "engFull": "Last year, he/she ate.",
        "missing": "comió",
        "options": [
            "comió",
            "comerá",
            "comemos",
            "comerás"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Ahora, tú _____ (hablar).",
        "engFull": "Now, you talk.",
        "missing": "hablas",
        "options": [
            "hablaron",
            "hablas",
            "hablaré",
            "hablaste"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "El próximo año, ellos _____ (caminar).",
        "engFull": "Next year, they will walk.",
        "missing": "caminarán",
        "options": [
            "caminaremos",
            "caminé",
            "caminarán",
            "caminas"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    }
];