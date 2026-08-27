const questionBank = [
    {
        "time": "01:00",
        "isMorning": true,
        "correct": "Es la una en punto de la mañana.",
        "options": [
            "Es la una en punto de la mañana.",
            "Son las cinco menos cuarto de la mañana.",
            "Son las dos menos cuarto de la mañana.",
            "Son las once menos cuarto de la mañana."
        ],
        "exp": "01:00 am -> Es la una en punto de la mañana."
    },
    {
        "time": "01:00",
        "isMorning": false,
        "correct": "Es la una en punto de la tarde/noche.",
        "options": [
            "Son las once y media de la tarde/noche.",
            "Son las nueve menos cuarto de la tarde/noche.",
            "Son las cuatro y media de la tarde/noche.",
            "Es la una en punto de la tarde/noche."
        ],
        "exp": "01:00 pm -> Es la una en punto de la tarde/noche."
    },
    {
        "time": "01:15",
        "isMorning": true,
        "correct": "Es la una y cuarto de la mañana.",
        "options": [
            "Son las cuatro en punto de la mañana.",
            "Son las nueve menos cuarto de la mañana.",
            "Son las ocho y cuarto de la mañana.",
            "Es la una y cuarto de la mañana."
        ],
        "exp": "01:15 am -> Es la una y cuarto de la mañana."
    },
    {
        "time": "01:15",
        "isMorning": false,
        "correct": "Es la una y cuarto de la tarde/noche.",
        "options": [
            "Son las tres y media de la tarde/noche.",
            "Son las diez y cuarto de la tarde/noche.",
            "Es la una y cuarto de la tarde/noche.",
            "Son las once y cuarto de la tarde/noche."
        ],
        "exp": "01:15 pm -> Es la una y cuarto de la tarde/noche."
    },
    {
        "time": "01:30",
        "isMorning": true,
        "correct": "Es la una y media de la mañana.",
        "options": [
            "Son las tres y media de la mañana.",
            "Son las cinco en punto de la mañana.",
            "Es la una y media de la mañana.",
            "Son las cuatro en punto de la mañana."
        ],
        "exp": "01:30 am -> Es la una y media de la mañana."
    },
    {
        "time": "01:30",
        "isMorning": false,
        "correct": "Es la una y media de la tarde/noche.",
        "options": [
            "Es la una y media de la tarde/noche.",
            "Son las ocho menos cuarto de la tarde/noche.",
            "Son las doce y cuarto de la tarde/noche.",
            "Son las siete menos cuarto de la tarde/noche."
        ],
        "exp": "01:30 pm -> Es la una y media de la tarde/noche."
    },
    {
        "time": "01:45",
        "isMorning": true,
        "correct": "Son las dos menos cuarto de la mañana.",
        "options": [
            "Son las once y media de la mañana.",
            "Son las doce menos cuarto de la mañana.",
            "Son las dos y cuarto de la mañana.",
            "Son las dos menos cuarto de la mañana."
        ],
        "exp": "01:45 am -> Son las dos menos cuarto de la mañana."
    },
    {
        "time": "01:45",
        "isMorning": false,
        "correct": "Son las dos menos cuarto de la tarde/noche.",
        "options": [
            "Son las siete y cuarto de la tarde/noche.",
            "Son las dos y cuarto de la tarde/noche.",
            "Son las ocho y media de la tarde/noche.",
            "Son las dos menos cuarto de la tarde/noche."
        ],
        "exp": "01:45 pm -> Son las dos menos cuarto de la tarde/noche."
    },
    {
        "time": "02:00",
        "isMorning": true,
        "correct": "Son las dos en punto de la mañana.",
        "options": [
            "Son las cinco en punto de la mañana.",
            "Son las dos en punto de la mañana.",
            "Es la una y media de la mañana.",
            "Son las cinco menos cuarto de la mañana."
        ],
        "exp": "02:00 am -> Son las dos en punto de la mañana."
    },
    {
        "time": "02:00",
        "isMorning": false,
        "correct": "Son las dos en punto de la tarde/noche.",
        "options": [
            "Son las cuatro en punto de la tarde/noche.",
            "Son las seis en punto de la tarde/noche.",
            "Son las diez y cuarto de la tarde/noche.",
            "Son las dos en punto de la tarde/noche."
        ],
        "exp": "02:00 pm -> Son las dos en punto de la tarde/noche."
    },
    {
        "time": "02:15",
        "isMorning": true,
        "correct": "Son las dos y cuarto de la mañana.",
        "options": [
            "Son las dos y cuarto de la mañana.",
            "Son las siete en punto de la mañana.",
            "Son las once y cuarto de la mañana.",
            "Son las cuatro menos cuarto de la mañana."
        ],
        "exp": "02:15 am -> Son las dos y cuarto de la mañana."
    },
    {
        "time": "02:15",
        "isMorning": false,
        "correct": "Son las dos y cuarto de la tarde/noche.",
        "options": [
            "Son las dos y cuarto de la tarde/noche.",
            "Son las once y media de la tarde/noche.",
            "Son las nueve en punto de la tarde/noche.",
            "Son las doce menos cuarto de la tarde/noche."
        ],
        "exp": "02:15 pm -> Son las dos y cuarto de la tarde/noche."
    },
    {
        "time": "02:30",
        "isMorning": true,
        "correct": "Son las dos y media de la mañana.",
        "options": [
            "Son las dos y media de la mañana.",
            "Son las once y media de la mañana.",
            "Son las ocho en punto de la mañana.",
            "Son las nueve menos cuarto de la mañana."
        ],
        "exp": "02:30 am -> Son las dos y media de la mañana."
    },
    {
        "time": "02:30",
        "isMorning": false,
        "correct": "Son las dos y media de la tarde/noche.",
        "options": [
            "Son las dos y media de la tarde/noche.",
            "Es la una en punto de la tarde/noche.",
            "Son las once en punto de la tarde/noche.",
            "Son las cinco en punto de la tarde/noche."
        ],
        "exp": "02:30 pm -> Son las dos y media de la tarde/noche."
    },
    {
        "time": "02:45",
        "isMorning": true,
        "correct": "Son las tres menos cuarto de la mañana.",
        "options": [
            "Son las tres menos cuarto de la mañana.",
            "Es la una menos cuarto de la mañana.",
            "Son las tres en punto de la mañana.",
            "Son las siete y cuarto de la mañana."
        ],
        "exp": "02:45 am -> Son las tres menos cuarto de la mañana."
    },
    {
        "time": "02:45",
        "isMorning": false,
        "correct": "Son las tres menos cuarto de la tarde/noche.",
        "options": [
            "Son las ocho menos cuarto de la tarde/noche.",
            "Son las cinco y cuarto de la tarde/noche.",
            "Son las diez en punto de la tarde/noche.",
            "Son las tres menos cuarto de la tarde/noche."
        ],
        "exp": "02:45 pm -> Son las tres menos cuarto de la tarde/noche."
    },
    {
        "time": "03:00",
        "isMorning": true,
        "correct": "Son las tres en punto de la mañana.",
        "options": [
            "Son las cinco y media de la mañana.",
            "Son las tres en punto de la mañana.",
            "Son las ocho menos cuarto de la mañana.",
            "Son las cinco menos cuarto de la mañana."
        ],
        "exp": "03:00 am -> Son las tres en punto de la mañana."
    },
    {
        "time": "03:00",
        "isMorning": false,
        "correct": "Son las tres en punto de la tarde/noche.",
        "options": [
            "Son las cinco y cuarto de la tarde/noche.",
            "Son las cuatro y media de la tarde/noche.",
            "Son las tres en punto de la tarde/noche.",
            "Es la una en punto de la tarde/noche."
        ],
        "exp": "03:00 pm -> Son las tres en punto de la tarde/noche."
    },
    {
        "time": "03:15",
        "isMorning": true,
        "correct": "Son las tres y cuarto de la mañana.",
        "options": [
            "Son las once y media de la mañana.",
            "Son las tres y cuarto de la mañana.",
            "Son las nueve en punto de la mañana.",
            "Son las seis en punto de la mañana."
        ],
        "exp": "03:15 am -> Son las tres y cuarto de la mañana."
    },
    {
        "time": "03:15",
        "isMorning": false,
        "correct": "Son las tres y cuarto de la tarde/noche.",
        "options": [
            "Son las tres y cuarto de la tarde/noche.",
            "Son las cinco y media de la tarde/noche.",
            "Son las diez en punto de la tarde/noche.",
            "Son las cuatro y media de la tarde/noche."
        ],
        "exp": "03:15 pm -> Son las tres y cuarto de la tarde/noche."
    },
    {
        "time": "03:30",
        "isMorning": true,
        "correct": "Son las tres y media de la mañana.",
        "options": [
            "Son las doce y cuarto de la mañana.",
            "Son las seis y cuarto de la mañana.",
            "Son las tres y media de la mañana.",
            "Son las ocho y cuarto de la mañana."
        ],
        "exp": "03:30 am -> Son las tres y media de la mañana."
    },
    {
        "time": "03:30",
        "isMorning": false,
        "correct": "Son las tres y media de la tarde/noche.",
        "options": [
            "Son las seis y media de la tarde/noche.",
            "Son las cinco menos cuarto de la tarde/noche.",
            "Son las once en punto de la tarde/noche.",
            "Son las tres y media de la tarde/noche."
        ],
        "exp": "03:30 pm -> Son las tres y media de la tarde/noche."
    },
    {
        "time": "03:45",
        "isMorning": true,
        "correct": "Son las cuatro menos cuarto de la mañana.",
        "options": [
            "Son las cuatro menos cuarto de la mañana.",
            "Son las nueve y cuarto de la mañana.",
            "Son las tres en punto de la mañana.",
            "Son las ocho en punto de la mañana."
        ],
        "exp": "03:45 am -> Son las cuatro menos cuarto de la mañana."
    },
    {
        "time": "03:45",
        "isMorning": false,
        "correct": "Son las cuatro menos cuarto de la tarde/noche.",
        "options": [
            "Son las cuatro menos cuarto de la tarde/noche.",
            "Son las siete y media de la tarde/noche.",
            "Son las tres menos cuarto de la tarde/noche.",
            "Son las tres y media de la tarde/noche."
        ],
        "exp": "03:45 pm -> Son las cuatro menos cuarto de la tarde/noche."
    },
    {
        "time": "04:00",
        "isMorning": true,
        "correct": "Son las cuatro en punto de la mañana.",
        "options": [
            "Son las cuatro en punto de la mañana.",
            "Son las tres menos cuarto de la mañana.",
            "Son las nueve menos cuarto de la mañana.",
            "Son las doce en punto de la mañana."
        ],
        "exp": "04:00 am -> Son las cuatro en punto de la mañana."
    },
    {
        "time": "04:00",
        "isMorning": false,
        "correct": "Son las cuatro en punto de la tarde/noche.",
        "options": [
            "Son las once y cuarto de la tarde/noche.",
            "Son las cuatro en punto de la tarde/noche.",
            "Son las siete y cuarto de la tarde/noche.",
            "Son las ocho y media de la tarde/noche."
        ],
        "exp": "04:00 pm -> Son las cuatro en punto de la tarde/noche."
    },
    {
        "time": "04:15",
        "isMorning": true,
        "correct": "Son las cuatro y cuarto de la mañana.",
        "options": [
            "Son las once y media de la mañana.",
            "Son las cinco en punto de la mañana.",
            "Son las tres y media de la mañana.",
            "Son las cuatro y cuarto de la mañana."
        ],
        "exp": "04:15 am -> Son las cuatro y cuarto de la mañana."
    },
    {
        "time": "04:15",
        "isMorning": false,
        "correct": "Son las cuatro y cuarto de la tarde/noche.",
        "options": [
            "Son las ocho y cuarto de la tarde/noche.",
            "Son las tres y cuarto de la tarde/noche.",
            "Son las cuatro y cuarto de la tarde/noche.",
            "Son las nueve y cuarto de la tarde/noche."
        ],
        "exp": "04:15 pm -> Son las cuatro y cuarto de la tarde/noche."
    },
    {
        "time": "04:30",
        "isMorning": true,
        "correct": "Son las cuatro y media de la mañana.",
        "options": [
            "Son las once menos cuarto de la mañana.",
            "Son las cuatro y media de la mañana.",
            "Son las doce en punto de la mañana.",
            "Son las siete menos cuarto de la mañana."
        ],
        "exp": "04:30 am -> Son las cuatro y media de la mañana."
    },
    {
        "time": "04:30",
        "isMorning": false,
        "correct": "Son las cuatro y media de la tarde/noche.",
        "options": [
            "Son las cuatro menos cuarto de la tarde/noche.",
            "Son las nueve y media de la tarde/noche.",
            "Es la una y cuarto de la tarde/noche.",
            "Son las cuatro y media de la tarde/noche."
        ],
        "exp": "04:30 pm -> Son las cuatro y media de la tarde/noche."
    },
    {
        "time": "04:45",
        "isMorning": true,
        "correct": "Son las cinco menos cuarto de la mañana.",
        "options": [
            "Es la una y cuarto de la mañana.",
            "Son las siete y media de la mañana.",
            "Son las cinco menos cuarto de la mañana.",
            "Son las ocho menos cuarto de la mañana."
        ],
        "exp": "04:45 am -> Son las cinco menos cuarto de la mañana."
    },
    {
        "time": "04:45",
        "isMorning": false,
        "correct": "Son las cinco menos cuarto de la tarde/noche.",
        "options": [
            "Son las cinco menos cuarto de la tarde/noche.",
            "Son las seis menos cuarto de la tarde/noche.",
            "Son las diez y media de la tarde/noche.",
            "Son las ocho menos cuarto de la tarde/noche."
        ],
        "exp": "04:45 pm -> Son las cinco menos cuarto de la tarde/noche."
    },
    {
        "time": "05:00",
        "isMorning": true,
        "correct": "Son las cinco en punto de la mañana.",
        "options": [
            "Son las cinco y cuarto de la mañana.",
            "Son las cuatro en punto de la mañana.",
            "Son las nueve y media de la mañana.",
            "Son las cinco en punto de la mañana."
        ],
        "exp": "05:00 am -> Son las cinco en punto de la mañana."
    },
    {
        "time": "05:00",
        "isMorning": false,
        "correct": "Son las cinco en punto de la tarde/noche.",
        "options": [
            "Son las cinco menos cuarto de la tarde/noche.",
            "Son las tres en punto de la tarde/noche.",
            "Son las cinco en punto de la tarde/noche.",
            "Son las ocho menos cuarto de la tarde/noche."
        ],
        "exp": "05:00 pm -> Son las cinco en punto de la tarde/noche."
    },
    {
        "time": "05:15",
        "isMorning": true,
        "correct": "Son las cinco y cuarto de la mañana.",
        "options": [
            "Son las cinco y media de la mañana.",
            "Son las cuatro y media de la mañana.",
            "Son las cinco y cuarto de la mañana.",
            "Son las doce y media de la mañana."
        ],
        "exp": "05:15 am -> Son las cinco y cuarto de la mañana."
    },
    {
        "time": "05:15",
        "isMorning": false,
        "correct": "Son las cinco y cuarto de la tarde/noche.",
        "options": [
            "Son las doce menos cuarto de la tarde/noche.",
            "Son las cinco en punto de la tarde/noche.",
            "Son las cinco y cuarto de la tarde/noche.",
            "Son las doce en punto de la tarde/noche."
        ],
        "exp": "05:15 pm -> Son las cinco y cuarto de la tarde/noche."
    },
    {
        "time": "05:30",
        "isMorning": true,
        "correct": "Son las cinco y media de la mañana.",
        "options": [
            "Son las once menos cuarto de la mañana.",
            "Son las tres y media de la mañana.",
            "Son las seis y media de la mañana.",
            "Son las cinco y media de la mañana."
        ],
        "exp": "05:30 am -> Son las cinco y media de la mañana."
    },
    {
        "time": "05:30",
        "isMorning": false,
        "correct": "Son las cinco y media de la tarde/noche.",
        "options": [
            "Son las cuatro y cuarto de la tarde/noche.",
            "Son las tres en punto de la tarde/noche.",
            "Son las cinco y media de la tarde/noche.",
            "Son las dos y media de la tarde/noche."
        ],
        "exp": "05:30 pm -> Son las cinco y media de la tarde/noche."
    },
    {
        "time": "05:45",
        "isMorning": true,
        "correct": "Son las seis menos cuarto de la mañana.",
        "options": [
            "Son las diez menos cuarto de la mañana.",
            "Son las ocho menos cuarto de la mañana.",
            "Son las seis menos cuarto de la mañana.",
            "Es la una y media de la mañana."
        ],
        "exp": "05:45 am -> Son las seis menos cuarto de la mañana."
    },
    {
        "time": "05:45",
        "isMorning": false,
        "correct": "Son las seis menos cuarto de la tarde/noche.",
        "options": [
            "Son las diez y cuarto de la tarde/noche.",
            "Son las doce menos cuarto de la tarde/noche.",
            "Son las dos en punto de la tarde/noche.",
            "Son las seis menos cuarto de la tarde/noche."
        ],
        "exp": "05:45 pm -> Son las seis menos cuarto de la tarde/noche."
    },
    {
        "time": "06:00",
        "isMorning": true,
        "correct": "Son las seis en punto de la mañana.",
        "options": [
            "Son las nueve menos cuarto de la mañana.",
            "Son las nueve y media de la mañana.",
            "Es la una menos cuarto de la mañana.",
            "Son las seis en punto de la mañana."
        ],
        "exp": "06:00 am -> Son las seis en punto de la mañana."
    },
    {
        "time": "06:00",
        "isMorning": false,
        "correct": "Son las seis en punto de la tarde/noche.",
        "options": [
            "Son las dos menos cuarto de la tarde/noche.",
            "Son las seis y media de la tarde/noche.",
            "Son las seis en punto de la tarde/noche.",
            "Son las siete en punto de la tarde/noche."
        ],
        "exp": "06:00 pm -> Son las seis en punto de la tarde/noche."
    },
    {
        "time": "06:15",
        "isMorning": true,
        "correct": "Son las seis y cuarto de la mañana.",
        "options": [
            "Son las once en punto de la mañana.",
            "Son las doce menos cuarto de la mañana.",
            "Son las seis menos cuarto de la mañana.",
            "Son las seis y cuarto de la mañana."
        ],
        "exp": "06:15 am -> Son las seis y cuarto de la mañana."
    },
    {
        "time": "06:15",
        "isMorning": false,
        "correct": "Son las seis y cuarto de la tarde/noche.",
        "options": [
            "Son las seis menos cuarto de la tarde/noche.",
            "Son las once en punto de la tarde/noche.",
            "Son las seis y cuarto de la tarde/noche.",
            "Son las cinco y cuarto de la tarde/noche."
        ],
        "exp": "06:15 pm -> Son las seis y cuarto de la tarde/noche."
    },
    {
        "time": "06:30",
        "isMorning": true,
        "correct": "Son las seis y media de la mañana.",
        "options": [
            "Son las ocho en punto de la mañana.",
            "Son las siete en punto de la mañana.",
            "Son las doce en punto de la mañana.",
            "Son las seis y media de la mañana."
        ],
        "exp": "06:30 am -> Son las seis y media de la mañana."
    },
    {
        "time": "06:30",
        "isMorning": false,
        "correct": "Son las seis y media de la tarde/noche.",
        "options": [
            "Son las tres y media de la tarde/noche.",
            "Es la una y media de la tarde/noche.",
            "Es la una en punto de la tarde/noche.",
            "Son las seis y media de la tarde/noche."
        ],
        "exp": "06:30 pm -> Son las seis y media de la tarde/noche."
    },
    {
        "time": "06:45",
        "isMorning": true,
        "correct": "Son las siete menos cuarto de la mañana.",
        "options": [
            "Son las siete menos cuarto de la mañana.",
            "Son las diez menos cuarto de la mañana.",
            "Son las doce menos cuarto de la mañana.",
            "Son las once y media de la mañana."
        ],
        "exp": "06:45 am -> Son las siete menos cuarto de la mañana."
    },
    {
        "time": "06:45",
        "isMorning": false,
        "correct": "Son las siete menos cuarto de la tarde/noche.",
        "options": [
            "Son las siete menos cuarto de la tarde/noche.",
            "Son las once en punto de la tarde/noche.",
            "Son las doce menos cuarto de la tarde/noche.",
            "Son las once y media de la tarde/noche."
        ],
        "exp": "06:45 pm -> Son las siete menos cuarto de la tarde/noche."
    },
    {
        "time": "07:00",
        "isMorning": true,
        "correct": "Son las siete en punto de la mañana.",
        "options": [
            "Son las cinco en punto de la mañana.",
            "Son las siete en punto de la mañana.",
            "Son las tres y media de la mañana.",
            "Son las cinco menos cuarto de la mañana."
        ],
        "exp": "07:00 am -> Son las siete en punto de la mañana."
    },
    {
        "time": "07:00",
        "isMorning": false,
        "correct": "Son las siete en punto de la tarde/noche.",
        "options": [
            "Son las ocho y cuarto de la tarde/noche.",
            "Es la una y cuarto de la tarde/noche.",
            "Son las cinco menos cuarto de la tarde/noche.",
            "Son las siete en punto de la tarde/noche."
        ],
        "exp": "07:00 pm -> Son las siete en punto de la tarde/noche."
    },
    {
        "time": "07:15",
        "isMorning": true,
        "correct": "Son las siete y cuarto de la mañana.",
        "options": [
            "Es la una en punto de la mañana.",
            "Son las siete y cuarto de la mañana.",
            "Son las seis menos cuarto de la mañana.",
            "Son las once y media de la mañana."
        ],
        "exp": "07:15 am -> Son las siete y cuarto de la mañana."
    },
    {
        "time": "07:15",
        "isMorning": false,
        "correct": "Son las siete y cuarto de la tarde/noche.",
        "options": [
            "Son las doce y cuarto de la tarde/noche.",
            "Son las siete y cuarto de la tarde/noche.",
            "Es la una y media de la tarde/noche.",
            "Son las seis menos cuarto de la tarde/noche."
        ],
        "exp": "07:15 pm -> Son las siete y cuarto de la tarde/noche."
    },
    {
        "time": "07:30",
        "isMorning": true,
        "correct": "Son las siete y media de la mañana.",
        "options": [
            "Son las cuatro menos cuarto de la mañana.",
            "Es la una menos cuarto de la mañana.",
            "Son las ocho y cuarto de la mañana.",
            "Son las siete y media de la mañana."
        ],
        "exp": "07:30 am -> Son las siete y media de la mañana."
    },
    {
        "time": "07:30",
        "isMorning": false,
        "correct": "Son las siete y media de la tarde/noche.",
        "options": [
            "Son las siete y media de la tarde/noche.",
            "Son las seis y cuarto de la tarde/noche.",
            "Son las cinco en punto de la tarde/noche.",
            "Son las siete en punto de la tarde/noche."
        ],
        "exp": "07:30 pm -> Son las siete y media de la tarde/noche."
    },
    {
        "time": "07:45",
        "isMorning": true,
        "correct": "Son las ocho menos cuarto de la mañana.",
        "options": [
            "Son las nueve y cuarto de la mañana.",
            "Son las doce menos cuarto de la mañana.",
            "Son las ocho menos cuarto de la mañana.",
            "Son las seis menos cuarto de la mañana."
        ],
        "exp": "07:45 am -> Son las ocho menos cuarto de la mañana."
    },
    {
        "time": "07:45",
        "isMorning": false,
        "correct": "Son las ocho menos cuarto de la tarde/noche.",
        "options": [
            "Son las diez y media de la tarde/noche.",
            "Son las cinco en punto de la tarde/noche.",
            "Son las doce y media de la tarde/noche.",
            "Son las ocho menos cuarto de la tarde/noche."
        ],
        "exp": "07:45 pm -> Son las ocho menos cuarto de la tarde/noche."
    },
    {
        "time": "08:00",
        "isMorning": true,
        "correct": "Son las ocho en punto de la mañana.",
        "options": [
            "Son las dos y media de la mañana.",
            "Son las once y cuarto de la mañana.",
            "Son las seis y media de la mañana.",
            "Son las ocho en punto de la mañana."
        ],
        "exp": "08:00 am -> Son las ocho en punto de la mañana."
    },
    {
        "time": "08:00",
        "isMorning": false,
        "correct": "Son las ocho en punto de la tarde/noche.",
        "options": [
            "Son las cuatro menos cuarto de la tarde/noche.",
            "Son las ocho en punto de la tarde/noche.",
            "Son las once en punto de la tarde/noche.",
            "Son las cinco menos cuarto de la tarde/noche."
        ],
        "exp": "08:00 pm -> Son las ocho en punto de la tarde/noche."
    },
    {
        "time": "08:15",
        "isMorning": true,
        "correct": "Son las ocho y cuarto de la mañana.",
        "options": [
            "Son las tres en punto de la mañana.",
            "Son las ocho y cuarto de la mañana.",
            "Son las diez menos cuarto de la mañana.",
            "Son las cuatro en punto de la mañana."
        ],
        "exp": "08:15 am -> Son las ocho y cuarto de la mañana."
    },
    {
        "time": "08:15",
        "isMorning": false,
        "correct": "Son las ocho y cuarto de la tarde/noche.",
        "options": [
            "Son las seis menos cuarto de la tarde/noche.",
            "Son las cinco y cuarto de la tarde/noche.",
            "Son las tres y media de la tarde/noche.",
            "Son las ocho y cuarto de la tarde/noche."
        ],
        "exp": "08:15 pm -> Son las ocho y cuarto de la tarde/noche."
    },
    {
        "time": "08:30",
        "isMorning": true,
        "correct": "Son las ocho y media de la mañana.",
        "options": [
            "Son las ocho y cuarto de la mañana.",
            "Son las ocho y media de la mañana.",
            "Son las once en punto de la mañana.",
            "Son las diez en punto de la mañana."
        ],
        "exp": "08:30 am -> Son las ocho y media de la mañana."
    },
    {
        "time": "08:30",
        "isMorning": false,
        "correct": "Son las ocho y media de la tarde/noche.",
        "options": [
            "Es la una y cuarto de la tarde/noche.",
            "Son las seis en punto de la tarde/noche.",
            "Son las ocho y media de la tarde/noche.",
            "Son las cuatro menos cuarto de la tarde/noche."
        ],
        "exp": "08:30 pm -> Son las ocho y media de la tarde/noche."
    },
    {
        "time": "08:45",
        "isMorning": true,
        "correct": "Son las nueve menos cuarto de la mañana.",
        "options": [
            "Son las cinco menos cuarto de la mañana.",
            "Son las dos y cuarto de la mañana.",
            "Son las nueve menos cuarto de la mañana.",
            "Son las cuatro menos cuarto de la mañana."
        ],
        "exp": "08:45 am -> Son las nueve menos cuarto de la mañana."
    },
    {
        "time": "08:45",
        "isMorning": false,
        "correct": "Son las nueve menos cuarto de la tarde/noche.",
        "options": [
            "Son las cuatro y cuarto de la tarde/noche.",
            "Son las ocho y media de la tarde/noche.",
            "Son las seis en punto de la tarde/noche.",
            "Son las nueve menos cuarto de la tarde/noche."
        ],
        "exp": "08:45 pm -> Son las nueve menos cuarto de la tarde/noche."
    },
    {
        "time": "09:00",
        "isMorning": true,
        "correct": "Son las nueve en punto de la mañana.",
        "options": [
            "Son las siete menos cuarto de la mañana.",
            "Son las nueve en punto de la mañana.",
            "Son las doce menos cuarto de la mañana.",
            "Son las tres en punto de la mañana."
        ],
        "exp": "09:00 am -> Son las nueve en punto de la mañana."
    },
    {
        "time": "09:00",
        "isMorning": false,
        "correct": "Son las nueve en punto de la tarde/noche.",
        "options": [
            "Son las siete y cuarto de la tarde/noche.",
            "Son las dos menos cuarto de la tarde/noche.",
            "Son las diez y media de la tarde/noche.",
            "Son las nueve en punto de la tarde/noche."
        ],
        "exp": "09:00 pm -> Son las nueve en punto de la tarde/noche."
    },
    {
        "time": "09:15",
        "isMorning": true,
        "correct": "Son las nueve y cuarto de la mañana.",
        "options": [
            "Son las doce menos cuarto de la mañana.",
            "Son las nueve y media de la mañana.",
            "Son las nueve y cuarto de la mañana.",
            "Son las once en punto de la mañana."
        ],
        "exp": "09:15 am -> Son las nueve y cuarto de la mañana."
    },
    {
        "time": "09:15",
        "isMorning": false,
        "correct": "Son las nueve y cuarto de la tarde/noche.",
        "options": [
            "Son las tres menos cuarto de la tarde/noche.",
            "Son las ocho menos cuarto de la tarde/noche.",
            "Son las nueve y cuarto de la tarde/noche.",
            "Son las once y media de la tarde/noche."
        ],
        "exp": "09:15 pm -> Son las nueve y cuarto de la tarde/noche."
    },
    {
        "time": "09:30",
        "isMorning": true,
        "correct": "Son las nueve y media de la mañana.",
        "options": [
            "Son las tres y cuarto de la mañana.",
            "Son las diez menos cuarto de la mañana.",
            "Son las nueve en punto de la mañana.",
            "Son las nueve y media de la mañana."
        ],
        "exp": "09:30 am -> Son las nueve y media de la mañana."
    },
    {
        "time": "09:30",
        "isMorning": false,
        "correct": "Son las nueve y media de la tarde/noche.",
        "options": [
            "Son las nueve en punto de la tarde/noche.",
            "Son las nueve y media de la tarde/noche.",
            "Son las siete y cuarto de la tarde/noche.",
            "Son las diez y cuarto de la tarde/noche."
        ],
        "exp": "09:30 pm -> Son las nueve y media de la tarde/noche."
    },
    {
        "time": "09:45",
        "isMorning": true,
        "correct": "Son las diez menos cuarto de la mañana.",
        "options": [
            "Son las once y cuarto de la mañana.",
            "Son las ocho y cuarto de la mañana.",
            "Son las nueve y cuarto de la mañana.",
            "Son las diez menos cuarto de la mañana."
        ],
        "exp": "09:45 am -> Son las diez menos cuarto de la mañana."
    },
    {
        "time": "09:45",
        "isMorning": false,
        "correct": "Son las diez menos cuarto de la tarde/noche.",
        "options": [
            "Son las ocho y media de la tarde/noche.",
            "Son las diez menos cuarto de la tarde/noche.",
            "Son las once y media de la tarde/noche.",
            "Son las cuatro y media de la tarde/noche."
        ],
        "exp": "09:45 pm -> Son las diez menos cuarto de la tarde/noche."
    },
    {
        "time": "10:00",
        "isMorning": true,
        "correct": "Son las diez en punto de la mañana.",
        "options": [
            "Es la una y media de la mañana.",
            "Son las once y media de la mañana.",
            "Son las doce y media de la mañana.",
            "Son las diez en punto de la mañana."
        ],
        "exp": "10:00 am -> Son las diez en punto de la mañana."
    },
    {
        "time": "10:00",
        "isMorning": false,
        "correct": "Son las diez en punto de la tarde/noche.",
        "options": [
            "Son las doce y media de la tarde/noche.",
            "Son las diez en punto de la tarde/noche.",
            "Son las seis y media de la tarde/noche.",
            "Son las siete en punto de la tarde/noche."
        ],
        "exp": "10:00 pm -> Son las diez en punto de la tarde/noche."
    },
    {
        "time": "10:15",
        "isMorning": true,
        "correct": "Son las diez y cuarto de la mañana.",
        "options": [
            "Son las diez y cuarto de la mañana.",
            "Son las once menos cuarto de la mañana.",
            "Son las tres y media de la mañana.",
            "Son las dos y media de la mañana."
        ],
        "exp": "10:15 am -> Son las diez y cuarto de la mañana."
    },
    {
        "time": "10:15",
        "isMorning": false,
        "correct": "Son las diez y cuarto de la tarde/noche.",
        "options": [
            "Son las diez en punto de la tarde/noche.",
            "Son las dos y media de la tarde/noche.",
            "Son las diez y cuarto de la tarde/noche.",
            "Es la una y cuarto de la tarde/noche."
        ],
        "exp": "10:15 pm -> Son las diez y cuarto de la tarde/noche."
    },
    {
        "time": "10:30",
        "isMorning": true,
        "correct": "Son las diez y media de la mañana.",
        "options": [
            "Son las ocho en punto de la mañana.",
            "Son las seis y cuarto de la mañana.",
            "Son las diez y media de la mañana.",
            "Son las doce en punto de la mañana."
        ],
        "exp": "10:30 am -> Son las diez y media de la mañana."
    },
    {
        "time": "10:30",
        "isMorning": false,
        "correct": "Son las diez y media de la tarde/noche.",
        "options": [
            "Son las doce en punto de la tarde/noche.",
            "Son las dos y cuarto de la tarde/noche.",
            "Son las ocho y cuarto de la tarde/noche.",
            "Son las diez y media de la tarde/noche."
        ],
        "exp": "10:30 pm -> Son las diez y media de la tarde/noche."
    },
    {
        "time": "10:45",
        "isMorning": true,
        "correct": "Son las once menos cuarto de la mañana.",
        "options": [
            "Son las cinco y media de la mañana.",
            "Son las seis y cuarto de la mañana.",
            "Son las once menos cuarto de la mañana.",
            "Son las ocho y media de la mañana."
        ],
        "exp": "10:45 am -> Son las once menos cuarto de la mañana."
    },
    {
        "time": "10:45",
        "isMorning": false,
        "correct": "Son las once menos cuarto de la tarde/noche.",
        "options": [
            "Es la una menos cuarto de la tarde/noche.",
            "Son las nueve y cuarto de la tarde/noche.",
            "Son las dos y cuarto de la tarde/noche.",
            "Son las once menos cuarto de la tarde/noche."
        ],
        "exp": "10:45 pm -> Son las once menos cuarto de la tarde/noche."
    },
    {
        "time": "11:00",
        "isMorning": true,
        "correct": "Son las once en punto de la mañana.",
        "options": [
            "Son las cuatro menos cuarto de la mañana.",
            "Son las ocho y cuarto de la mañana.",
            "Son las dos en punto de la mañana.",
            "Son las once en punto de la mañana."
        ],
        "exp": "11:00 am -> Son las once en punto de la mañana."
    },
    {
        "time": "11:00",
        "isMorning": false,
        "correct": "Son las once en punto de la tarde/noche.",
        "options": [
            "Son las ocho menos cuarto de la tarde/noche.",
            "Son las doce menos cuarto de la tarde/noche.",
            "Son las once en punto de la tarde/noche.",
            "Es la una en punto de la tarde/noche."
        ],
        "exp": "11:00 pm -> Son las once en punto de la tarde/noche."
    },
    {
        "time": "11:15",
        "isMorning": true,
        "correct": "Son las once y cuarto de la mañana.",
        "options": [
            "Son las dos menos cuarto de la mañana.",
            "Son las ocho y cuarto de la mañana.",
            "Son las once y cuarto de la mañana.",
            "Son las tres menos cuarto de la mañana."
        ],
        "exp": "11:15 am -> Son las once y cuarto de la mañana."
    },
    {
        "time": "11:15",
        "isMorning": false,
        "correct": "Son las once y cuarto de la tarde/noche.",
        "options": [
            "Son las siete y media de la tarde/noche.",
            "Son las dos menos cuarto de la tarde/noche.",
            "Son las tres en punto de la tarde/noche.",
            "Son las once y cuarto de la tarde/noche."
        ],
        "exp": "11:15 pm -> Son las once y cuarto de la tarde/noche."
    },
    {
        "time": "11:30",
        "isMorning": true,
        "correct": "Son las once y media de la mañana.",
        "options": [
            "Son las once y media de la mañana.",
            "Son las seis y media de la mañana.",
            "Son las siete menos cuarto de la mañana.",
            "Son las diez menos cuarto de la mañana."
        ],
        "exp": "11:30 am -> Son las once y media de la mañana."
    },
    {
        "time": "11:30",
        "isMorning": false,
        "correct": "Son las once y media de la tarde/noche.",
        "options": [
            "Son las once menos cuarto de la tarde/noche.",
            "Son las once y media de la tarde/noche.",
            "Son las diez y cuarto de la tarde/noche.",
            "Son las siete menos cuarto de la tarde/noche."
        ],
        "exp": "11:30 pm -> Son las once y media de la tarde/noche."
    },
    {
        "time": "11:45",
        "isMorning": true,
        "correct": "Son las doce menos cuarto de la mañana.",
        "options": [
            "Son las seis en punto de la mañana.",
            "Son las dos en punto de la mañana.",
            "Son las doce menos cuarto de la mañana.",
            "Son las cinco en punto de la mañana."
        ],
        "exp": "11:45 am -> Son las doce menos cuarto de la mañana."
    },
    {
        "time": "11:45",
        "isMorning": false,
        "correct": "Son las doce menos cuarto de la tarde/noche.",
        "options": [
            "Son las tres y cuarto de la tarde/noche.",
            "Es la una en punto de la tarde/noche.",
            "Son las doce menos cuarto de la tarde/noche.",
            "Son las doce y cuarto de la tarde/noche."
        ],
        "exp": "11:45 pm -> Son las doce menos cuarto de la tarde/noche."
    },
    {
        "time": "12:00",
        "isMorning": true,
        "correct": "Son las doce en punto de la mañana.",
        "options": [
            "Son las siete menos cuarto de la mañana.",
            "Son las doce en punto de la mañana.",
            "Son las seis y cuarto de la mañana.",
            "Son las diez en punto de la mañana."
        ],
        "exp": "12:00 am -> Son las doce en punto de la mañana."
    },
    {
        "time": "12:00",
        "isMorning": false,
        "correct": "Son las doce en punto de la tarde/noche.",
        "options": [
            "Son las ocho menos cuarto de la tarde/noche.",
            "Son las doce en punto de la tarde/noche.",
            "Son las nueve y cuarto de la tarde/noche.",
            "Son las seis menos cuarto de la tarde/noche."
        ],
        "exp": "12:00 pm -> Son las doce en punto de la tarde/noche."
    },
    {
        "time": "12:15",
        "isMorning": true,
        "correct": "Son las doce y cuarto de la mañana.",
        "options": [
            "Son las doce y cuarto de la mañana.",
            "Es la una en punto de la mañana.",
            "Son las siete menos cuarto de la mañana.",
            "Son las cuatro y cuarto de la mañana."
        ],
        "exp": "12:15 am -> Son las doce y cuarto de la mañana."
    },
    {
        "time": "12:15",
        "isMorning": false,
        "correct": "Son las doce y cuarto de la tarde/noche.",
        "options": [
            "Son las once menos cuarto de la tarde/noche.",
            "Son las doce y cuarto de la tarde/noche.",
            "Son las siete y media de la tarde/noche.",
            "Son las cuatro menos cuarto de la tarde/noche."
        ],
        "exp": "12:15 pm -> Son las doce y cuarto de la tarde/noche."
    },
    {
        "time": "12:30",
        "isMorning": true,
        "correct": "Son las doce y media de la mañana.",
        "options": [
            "Es la una y cuarto de la mañana.",
            "Son las dos y media de la mañana.",
            "Son las diez menos cuarto de la mañana.",
            "Son las doce y media de la mañana."
        ],
        "exp": "12:30 am -> Son las doce y media de la mañana."
    },
    {
        "time": "12:30",
        "isMorning": false,
        "correct": "Son las doce y media de la tarde/noche.",
        "options": [
            "Son las doce y media de la tarde/noche.",
            "Son las cinco menos cuarto de la tarde/noche.",
            "Son las ocho y media de la tarde/noche.",
            "Son las nueve y cuarto de la tarde/noche."
        ],
        "exp": "12:30 pm -> Son las doce y media de la tarde/noche."
    },
    {
        "time": "12:45",
        "isMorning": true,
        "correct": "Es la una menos cuarto de la mañana.",
        "options": [
            "Son las seis y media de la mañana.",
            "Son las cuatro y media de la mañana.",
            "Son las doce y media de la mañana.",
            "Es la una menos cuarto de la mañana."
        ],
        "exp": "12:45 am -> Es la una menos cuarto de la mañana."
    },
    {
        "time": "12:45",
        "isMorning": false,
        "correct": "Es la una menos cuarto de la tarde/noche.",
        "options": [
            "Es la una menos cuarto de la tarde/noche.",
            "Son las seis en punto de la tarde/noche.",
            "Son las seis y media de la tarde/noche.",
            "Son las siete y cuarto de la tarde/noche."
        ],
        "exp": "12:45 pm -> Es la una menos cuarto de la tarde/noche."
    }
];