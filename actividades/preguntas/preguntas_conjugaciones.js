const questionBank = [
    {
        "sentence": "Ahora, él/ella _____ (jugar).",
        "engFull": "Now, he/she to play.",
        "missing": "juega",
        "options": [
            "jugarán",
            "jugará",
            "juega",
            "jugaremos"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Todos los días, yo _____ (caminar).",
        "engFull": "Every day, i to walk.",
        "missing": "camino",
        "options": [
            "caminaste",
            "caminarás",
            "caminará",
            "camino"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "El próximo año, yo _____ (hablar).",
        "engFull": "Next year, i to talk.",
        "missing": "hablaré",
        "options": [
            "hablaron",
            "hablo",
            "habla",
            "hablaré"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Todos los días, él/ella _____ (correr).",
        "engFull": "Every day, he/she to run.",
        "missing": "corre",
        "options": [
            "correrá",
            "corre",
            "corrió",
            "corremos"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "El año pasado, ellos _____ (correr).",
        "engFull": "Last year, they to run.",
        "missing": "corrieron",
        "options": [
            "corrieron",
            "correré",
            "correrás",
            "corrimos"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Todos los días, tú _____ (correr).",
        "engFull": "Every day, you to run.",
        "missing": "corres",
        "options": [
            "correremos",
            "corres",
            "corrimos",
            "corremos"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "El año pasado, ellos _____ (jugar).",
        "engFull": "Last year, they to play.",
        "missing": "jugaron",
        "options": [
            "jugaron",
            "jugamos",
            "jugó",
            "jugarán"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Pronto, ellos _____ (dormir).",
        "engFull": "Soon, they to sleep.",
        "missing": "dormirán",
        "options": [
            "durmió",
            "dormiré",
            "duermo",
            "dormirán"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "Hoy, tú _____ (hablar).",
        "engFull": "Today, you to talk.",
        "missing": "hablas",
        "options": [
            "hablas",
            "hablaron",
            "hablamos",
            "hablará"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Anoche, yo _____ (pensar).",
        "engFull": "Last night, i to think.",
        "missing": "pensé",
        "options": [
            "piensan",
            "pensé",
            "piensas",
            "pensamos"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Mañana, tú _____ (dormir).",
        "engFull": "Tomorrow, you to sleep.",
        "missing": "dormirás",
        "options": [
            "durmieron",
            "dormirás",
            "dormiré",
            "dormimos"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "El año pasado, yo _____ (dibujar).",
        "engFull": "Last year, i to draw.",
        "missing": "dibujé",
        "options": [
            "dibujarán",
            "dibujan",
            "dibujo",
            "dibujé"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Todos los días, nosotros _____ (aprender).",
        "engFull": "Every day, we to learn.",
        "missing": "aprendemos",
        "options": [
            "aprendes",
            "aprendiste",
            "aprendieron",
            "aprendemos"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Anoche, nosotros _____ (esperar).",
        "engFull": "Last night, we to wait.",
        "missing": "esperamos",
        "options": [
            "esperarán",
            "esperamos",
            "esperarás",
            "esperaron"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Hoy, ellos _____ (hablar).",
        "engFull": "Today, they to talk.",
        "missing": "hablan",
        "options": [
            "hablamos",
            "hablan",
            "hablé",
            "hablas"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    },
    {
        "sentence": "Anoche, tú _____ (esperar).",
        "engFull": "Last night, you to wait.",
        "missing": "esperaste",
        "options": [
            "espera",
            "esperamos",
            "esperarán",
            "esperaste"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "El año pasado, nosotros _____ (correr).",
        "engFull": "Last year, we to run.",
        "missing": "corrimos",
        "options": [
            "correremos",
            "corro",
            "corrimos",
            "corren"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Pronto, nosotros _____ (esperar).",
        "engFull": "Soon, we to wait.",
        "missing": "esperaremos",
        "options": [
            "esperarás",
            "esperé",
            "esperarán",
            "esperaremos"
        ],
        "exp": "Tense: Futuro. Subject: Nosotros."
    },
    {
        "sentence": "El próximo año, nosotros _____ (comer).",
        "engFull": "Next year, we to eat.",
        "missing": "comeremos",
        "options": [
            "como",
            "comí",
            "comeremos",
            "comerá"
        ],
        "exp": "Tense: Futuro. Subject: Nosotros."
    },
    {
        "sentence": "Hoy, yo _____ (esperar).",
        "engFull": "Today, i to wait.",
        "missing": "espero",
        "options": [
            "espera",
            "espero",
            "esperas",
            "esperarán"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Ayer, nosotros _____ (caminar).",
        "engFull": "Yesterday, we to walk.",
        "missing": "caminamos",
        "options": [
            "caminaron",
            "caminamos",
            "caminan",
            "caminarás"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Todos los días, yo _____ (hablar).",
        "engFull": "Every day, i to talk.",
        "missing": "hablo",
        "options": [
            "hablaré",
            "hablamos",
            "hablo",
            "hablarán"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Hoy, yo _____ (jugar).",
        "engFull": "Today, i to play.",
        "missing": "juego",
        "options": [
            "jugará",
            "juega",
            "juego",
            "jugaré"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Pronto, yo _____ (esperar).",
        "engFull": "Soon, i to wait.",
        "missing": "esperaré",
        "options": [
            "esperaste",
            "esperamos",
            "esperará",
            "esperaré"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Hoy, tú _____ (dormir).",
        "engFull": "Today, you to sleep.",
        "missing": "duermes",
        "options": [
            "duermo",
            "dormirán",
            "duermes",
            "dormirá"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Todos los días, nosotros _____ (pensar).",
        "engFull": "Every day, we to think.",
        "missing": "pensamos",
        "options": [
            "pensó",
            "pensaremos",
            "pensamos",
            "piensa"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Pronto, yo _____ (dormir).",
        "engFull": "Soon, i to sleep.",
        "missing": "dormiré",
        "options": [
            "durmieron",
            "dormiré",
            "dormimos",
            "duermo"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Ahora, nosotros _____ (jugar).",
        "engFull": "Now, we to play.",
        "missing": "jugamos",
        "options": [
            "juegas",
            "jugamos",
            "jugarás",
            "juego"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Ayer, yo _____ (hablar).",
        "engFull": "Yesterday, i to talk.",
        "missing": "hablé",
        "options": [
            "hablaré",
            "hablé",
            "habló",
            "hablaste"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Ahora, él/ella _____ (aprender).",
        "engFull": "Now, he/she to learn.",
        "missing": "aprende",
        "options": [
            "aprendí",
            "aprenderé",
            "aprende",
            "aprendemos"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Anoche, yo _____ (dibujar).",
        "engFull": "Last night, i to draw.",
        "missing": "dibujé",
        "options": [
            "dibujé",
            "dibuja",
            "dibujamos",
            "dibujarán"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Anoche, él/ella _____ (jugar).",
        "engFull": "Last night, he/she to play.",
        "missing": "jugó",
        "options": [
            "jugó",
            "jugaste",
            "jugaré",
            "juega"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Anoche, tú _____ (cantar).",
        "engFull": "Last night, you to sing.",
        "missing": "cantaste",
        "options": [
            "cantarás",
            "cantaste",
            "cantamos",
            "cantó"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "Ayer, ellos _____ (aprender).",
        "engFull": "Yesterday, they to learn.",
        "missing": "aprendieron",
        "options": [
            "aprenden",
            "aprende",
            "aprendió",
            "aprendieron"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Mañana, ellos _____ (esperar).",
        "engFull": "Tomorrow, they to wait.",
        "missing": "esperarán",
        "options": [
            "esperarán",
            "esperé",
            "esperas",
            "espera"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "Ahora, él/ella _____ (cantar).",
        "engFull": "Now, he/she to sing.",
        "missing": "canta",
        "options": [
            "cantaron",
            "canta",
            "canté",
            "cantaste"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Mañana, tú _____ (cantar).",
        "engFull": "Tomorrow, you to sing.",
        "missing": "cantarás",
        "options": [
            "cantamos",
            "canto",
            "cantará",
            "cantarás"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "El año pasado, él/ella _____ (esperar).",
        "engFull": "Last year, he/she to wait.",
        "missing": "esperó",
        "options": [
            "esperamos",
            "esperarás",
            "esperó",
            "esperará"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Pronto, ellos _____ (hablar).",
        "engFull": "Soon, they to talk.",
        "missing": "hablarán",
        "options": [
            "hablaré",
            "hablarán",
            "hablaste",
            "hablamos"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "El año pasado, nosotros _____ (comer).",
        "engFull": "Last year, we to eat.",
        "missing": "comimos",
        "options": [
            "comeremos",
            "comerá",
            "comieron",
            "comimos"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Todos los días, nosotros _____ (hablar).",
        "engFull": "Every day, we to talk.",
        "missing": "hablamos",
        "options": [
            "hablamos",
            "hablarás",
            "hablo",
            "hablarán"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Mañana, yo _____ (aprender).",
        "engFull": "Tomorrow, i to learn.",
        "missing": "aprenderé",
        "options": [
            "aprenden",
            "aprenderé",
            "aprendieron",
            "aprendes"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Mañana, él/ella _____ (comer).",
        "engFull": "Tomorrow, he/she to eat.",
        "missing": "comerá",
        "options": [
            "comió",
            "comemos",
            "comerá",
            "come"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Ahora, nosotros _____ (dibujar).",
        "engFull": "Now, we to draw.",
        "missing": "dibujamos",
        "options": [
            "dibujamos",
            "dibujará",
            "dibujarás",
            "dibuja"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Ahora, tú _____ (aprender).",
        "engFull": "Now, you to learn.",
        "missing": "aprendes",
        "options": [
            "aprendes",
            "aprendemos",
            "aprenden",
            "aprenderé"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Anoche, ellos _____ (aprender).",
        "engFull": "Last night, they to learn.",
        "missing": "aprendieron",
        "options": [
            "aprendieron",
            "aprendes",
            "aprenderé",
            "aprendo"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Pronto, ellos _____ (cantar).",
        "engFull": "Soon, they to sing.",
        "missing": "cantarán",
        "options": [
            "cantarán",
            "cantaron",
            "cantamos",
            "cantaremos"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "Ayer, yo _____ (esperar).",
        "engFull": "Yesterday, i to wait.",
        "missing": "esperé",
        "options": [
            "esperaré",
            "esperarás",
            "esperas",
            "esperé"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Hoy, yo _____ (cantar).",
        "engFull": "Today, i to sing.",
        "missing": "canto",
        "options": [
            "cantamos",
            "canto",
            "cantarán",
            "cantaste"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Ahora, tú _____ (dormir).",
        "engFull": "Now, you to sleep.",
        "missing": "duermes",
        "options": [
            "dormiré",
            "durmieron",
            "duermes",
            "duerme"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Todos los días, él/ella _____ (comer).",
        "engFull": "Every day, he/she to eat.",
        "missing": "come",
        "options": [
            "comerás",
            "comerá",
            "come",
            "comemos"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Anoche, tú _____ (pensar).",
        "engFull": "Last night, you to think.",
        "missing": "pensaste",
        "options": [
            "pensarás",
            "pensaste",
            "pensaremos",
            "pensarán"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "Todos los días, yo _____ (pensar).",
        "engFull": "Every day, i to think.",
        "missing": "pienso",
        "options": [
            "piensas",
            "pensaremos",
            "pienso",
            "pensarán"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Anoche, yo _____ (correr).",
        "engFull": "Last night, i to run.",
        "missing": "corrí",
        "options": [
            "corren",
            "corrí",
            "correré",
            "corrimos"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Todos los días, nosotros _____ (comer).",
        "engFull": "Every day, we to eat.",
        "missing": "comemos",
        "options": [
            "comerán",
            "comimos",
            "comemos",
            "como"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "El próximo año, nosotros _____ (esperar).",
        "engFull": "Next year, we to wait.",
        "missing": "esperaremos",
        "options": [
            "esperaron",
            "esperamos",
            "esperaremos",
            "espera"
        ],
        "exp": "Tense: Futuro. Subject: Nosotros."
    },
    {
        "sentence": "El próximo año, yo _____ (aprender).",
        "engFull": "Next year, i to learn.",
        "missing": "aprenderé",
        "options": [
            "aprendieron",
            "aprenderé",
            "aprendemos",
            "aprenderán"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Ayer, nosotros _____ (dormir).",
        "engFull": "Yesterday, we to sleep.",
        "missing": "dormimos",
        "options": [
            "duermes",
            "dormimos",
            "dormirá",
            "dormiremos"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "El año pasado, tú _____ (aprender).",
        "engFull": "Last year, you to learn.",
        "missing": "aprendiste",
        "options": [
            "aprendes",
            "aprendimos",
            "aprende",
            "aprendiste"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "Ayer, él/ella _____ (esperar).",
        "engFull": "Yesterday, he/she to wait.",
        "missing": "esperó",
        "options": [
            "esperó",
            "esperaron",
            "esperarán",
            "espero"
        ],
        "exp": "Tense: Pasado. Subject: Él/Ella."
    },
    {
        "sentence": "Hoy, nosotros _____ (pensar).",
        "engFull": "Today, we to think.",
        "missing": "pensamos",
        "options": [
            "pensaron",
            "pensaremos",
            "pensamos",
            "piensas"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Hoy, yo _____ (hablar).",
        "engFull": "Today, i to talk.",
        "missing": "hablo",
        "options": [
            "hablaron",
            "hablas",
            "hablo",
            "habló"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Todos los días, nosotros _____ (dibujar).",
        "engFull": "Every day, we to draw.",
        "missing": "dibujamos",
        "options": [
            "dibujaste",
            "dibujará",
            "dibujarán",
            "dibujamos"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Pronto, él/ella _____ (jugar).",
        "engFull": "Soon, he/she to play.",
        "missing": "jugará",
        "options": [
            "jugará",
            "jugaremos",
            "jugamos",
            "jugarán"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Pronto, él/ella _____ (cantar).",
        "engFull": "Soon, he/she to sing.",
        "missing": "cantará",
        "options": [
            "cantará",
            "canta",
            "cantaste",
            "canto"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Ahora, tú _____ (correr).",
        "engFull": "Now, you to run.",
        "missing": "corres",
        "options": [
            "corres",
            "corriste",
            "corrí",
            "corrió"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Mañana, nosotros _____ (caminar).",
        "engFull": "Tomorrow, we to walk.",
        "missing": "caminaremos",
        "options": [
            "caminas",
            "caminaremos",
            "camino",
            "caminamos"
        ],
        "exp": "Tense: Futuro. Subject: Nosotros."
    },
    {
        "sentence": "El próximo año, él/ella _____ (caminar).",
        "engFull": "Next year, he/she to walk.",
        "missing": "caminará",
        "options": [
            "caminará",
            "caminaste",
            "caminaré",
            "caminaron"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Hoy, nosotros _____ (caminar).",
        "engFull": "Today, we to walk.",
        "missing": "caminamos",
        "options": [
            "caminamos",
            "caminó",
            "caminarán",
            "caminará"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Ayer, tú _____ (dibujar).",
        "engFull": "Yesterday, you to draw.",
        "missing": "dibujaste",
        "options": [
            "dibujará",
            "dibujaste",
            "dibuja",
            "dibujaremos"
        ],
        "exp": "Tense: Pasado. Subject: Tú."
    },
    {
        "sentence": "Hoy, tú _____ (jugar).",
        "engFull": "Today, you to play.",
        "missing": "juegas",
        "options": [
            "jugará",
            "juego",
            "jugarán",
            "juegas"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "El año pasado, nosotros _____ (dibujar).",
        "engFull": "Last year, we to draw.",
        "missing": "dibujamos",
        "options": [
            "dibujaré",
            "dibujan",
            "dibujamos",
            "dibujas"
        ],
        "exp": "Tense: Pasado. Subject: Nosotros."
    },
    {
        "sentence": "Pronto, nosotros _____ (comer).",
        "engFull": "Soon, we to eat.",
        "missing": "comeremos",
        "options": [
            "comerás",
            "comes",
            "come",
            "comeremos"
        ],
        "exp": "Tense: Futuro. Subject: Nosotros."
    },
    {
        "sentence": "El próximo año, yo _____ (esperar).",
        "engFull": "Next year, i to wait.",
        "missing": "esperaré",
        "options": [
            "esperarán",
            "esperó",
            "esperan",
            "esperaré"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Todos los días, él/ella _____ (pensar).",
        "engFull": "Every day, he/she to think.",
        "missing": "piensa",
        "options": [
            "pensaré",
            "pensaron",
            "pensará",
            "piensa"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "El próximo año, él/ella _____ (cantar).",
        "engFull": "Next year, he/she to sing.",
        "missing": "cantará",
        "options": [
            "cantarán",
            "cantaré",
            "cantará",
            "cantaste"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Ayer, yo _____ (correr).",
        "engFull": "Yesterday, i to run.",
        "missing": "corrí",
        "options": [
            "corrí",
            "corre",
            "corrieron",
            "corremos"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "Hoy, él/ella _____ (caminar).",
        "engFull": "Today, he/she to walk.",
        "missing": "camina",
        "options": [
            "camino",
            "caminó",
            "caminamos",
            "camina"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Todos los días, tú _____ (dibujar).",
        "engFull": "Every day, you to draw.",
        "missing": "dibujas",
        "options": [
            "dibujará",
            "dibujarán",
            "dibujaron",
            "dibujas"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "Hoy, nosotros _____ (dormir).",
        "engFull": "Today, we to sleep.",
        "missing": "dormimos",
        "options": [
            "duermen",
            "duerme",
            "durmió",
            "dormimos"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "El año pasado, ellos _____ (pensar).",
        "engFull": "Last year, they to think.",
        "missing": "pensaron",
        "options": [
            "pensé",
            "pensó",
            "pensarás",
            "pensaron"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Ahora, yo _____ (dibujar).",
        "engFull": "Now, i to draw.",
        "missing": "dibujo",
        "options": [
            "dibujo",
            "dibujarás",
            "dibujaremos",
            "dibujamos"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Hoy, tú _____ (cantar).",
        "engFull": "Today, you to sing.",
        "missing": "cantas",
        "options": [
            "cantas",
            "cantarás",
            "cantaste",
            "cantará"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "El próximo año, ellos _____ (caminar).",
        "engFull": "Next year, they to walk.",
        "missing": "caminarán",
        "options": [
            "caminó",
            "caminarán",
            "caminarás",
            "caminas"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "El próximo año, él/ella _____ (pensar).",
        "engFull": "Next year, he/she to think.",
        "missing": "pensará",
        "options": [
            "pienso",
            "piensa",
            "pensará",
            "pensaron"
        ],
        "exp": "Tense: Futuro. Subject: Él/Ella."
    },
    {
        "sentence": "Ayer, ellos _____ (dormir).",
        "engFull": "Yesterday, they to sleep.",
        "missing": "durmieron",
        "options": [
            "dormiremos",
            "durmieron",
            "dormiré",
            "dormirá"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Todos los días, yo _____ (dibujar).",
        "engFull": "Every day, i to draw.",
        "missing": "dibujo",
        "options": [
            "dibujo",
            "dibujarán",
            "dibujamos",
            "dibuja"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Hoy, nosotros _____ (jugar).",
        "engFull": "Today, we to play.",
        "missing": "jugamos",
        "options": [
            "jugarán",
            "jugamos",
            "jugó",
            "jugarás"
        ],
        "exp": "Tense: Presente. Subject: Nosotros."
    },
    {
        "sentence": "Todos los días, yo _____ (dormir).",
        "engFull": "Every day, i to sleep.",
        "missing": "duermo",
        "options": [
            "duermo",
            "durmió",
            "durmieron",
            "dormirás"
        ],
        "exp": "Tense: Presente. Subject: Yo."
    },
    {
        "sentence": "Mañana, yo _____ (hablar).",
        "engFull": "Tomorrow, i to talk.",
        "missing": "hablaré",
        "options": [
            "hablo",
            "hablé",
            "hablamos",
            "hablaré"
        ],
        "exp": "Tense: Futuro. Subject: Yo."
    },
    {
        "sentence": "Ahora, él/ella _____ (comer).",
        "engFull": "Now, he/she to eat.",
        "missing": "come",
        "options": [
            "comes",
            "come",
            "comen",
            "como"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "Mañana, tú _____ (pensar).",
        "engFull": "Tomorrow, you to think.",
        "missing": "pensarás",
        "options": [
            "pensará",
            "pensé",
            "pensarás",
            "piensas"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "Hoy, él/ella _____ (hablar).",
        "engFull": "Today, he/she to talk.",
        "missing": "habla",
        "options": [
            "hablamos",
            "hablaremos",
            "hablará",
            "habla"
        ],
        "exp": "Tense: Presente. Subject: Él/Ella."
    },
    {
        "sentence": "El año pasado, yo _____ (dormir).",
        "engFull": "Last year, i to sleep.",
        "missing": "dormí",
        "options": [
            "dormí",
            "duermen",
            "dormirán",
            "dormimos"
        ],
        "exp": "Tense: Pasado. Subject: Yo."
    },
    {
        "sentence": "El próximo año, ellos _____ (hablar).",
        "engFull": "Next year, they to talk.",
        "missing": "hablarán",
        "options": [
            "hablas",
            "habló",
            "hablarán",
            "hablaron"
        ],
        "exp": "Tense: Futuro. Subject: Ellos."
    },
    {
        "sentence": "El año pasado, ellos _____ (hablar).",
        "engFull": "Last year, they to talk.",
        "missing": "hablaron",
        "options": [
            "hablaron",
            "hablarán",
            "habló",
            "hablará"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Mañana, tú _____ (dibujar).",
        "engFull": "Tomorrow, you to draw.",
        "missing": "dibujarás",
        "options": [
            "dibuja",
            "dibujarás",
            "dibujaremos",
            "dibujo"
        ],
        "exp": "Tense: Futuro. Subject: Tú."
    },
    {
        "sentence": "Hoy, tú _____ (esperar).",
        "engFull": "Today, you to wait.",
        "missing": "esperas",
        "options": [
            "espero",
            "esperas",
            "esperamos",
            "esperaremos"
        ],
        "exp": "Tense: Presente. Subject: Tú."
    },
    {
        "sentence": "El año pasado, ellos _____ (aprender).",
        "engFull": "Last year, they to learn.",
        "missing": "aprendieron",
        "options": [
            "aprenderán",
            "aprendo",
            "aprendí",
            "aprendieron"
        ],
        "exp": "Tense: Pasado. Subject: Ellos."
    },
    {
        "sentence": "Todos los días, ellos _____ (cantar).",
        "engFull": "Every day, they to sing.",
        "missing": "cantan",
        "options": [
            "canté",
            "cantará",
            "cantas",
            "cantan"
        ],
        "exp": "Tense: Presente. Subject: Ellos."
    }
];