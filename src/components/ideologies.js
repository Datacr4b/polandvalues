const ideologies = [
    {
        "name": "Anarcho-Communism",
        "stats": {
            "econ": 100,
            "legal": 100,
            "global": 50,
            "social": 10
        },
        "description": "placeholder"
    },
    {
        "name": "Libertarian Communism",
        "stats": {
            "econ": 100,
            "legal": 70,
            "global": 70,
            "social": 10
        },
        "description": "placeholder"
    },
    {
        "name": "Trotskyism",
        "stats": {
            "econ": 100,
            "legal": 60,
            "global": 100,
            "social": 20
        },
        "description": "placeholder"
    },
    {
        "name": "Marxism",
        "stats": {
            "econ": 100,
            "legal": 40,
            "global": 40,
            "social": 20
        },
        "description": "placeholder"
    },
    {
        "name": "Stalinism",
        "stats": {
            "econ": 100,
            "legal": 10,
            "global": 10,
            "social": 50
        },
        "description": "placeholder"
    },
    {
        "name": "Maoism",
        "stats": {
            "econ": 100,
            "legal": 0,
            "global": 0,
            "social": 50
        },
        "description": "placeholder"
    },
    {
        "name": "Nazism",
        "stats": {
            "econ": 80,
            "legal": 0,
            "global": 0,
            "social": 90
        },
        "description": "placeholder"
    },
    {
        "name": "Fascism",
        "stats": {
            "econ": 50,
            "legal": 0,
            "global": 15,
            "social": 80
        },
        "description": "placeholder"
    },
    {
        "name": "Theocratic Socialism",
        "stats": {
            "econ": 100,
            "legal": 50,
            "global": 50,
            "social": 90
        },
        "description": "placeholder"
    },
    {
        "name": "Democratic Socialism",
        "stats": {
            "econ": 80,
            "legal": 70,
            "global": 50,
            "social": 20
        },
        "description": "placeholder"
    },
    {
        "name": "Libertarian Socialism",
        "stats": {
            "econ": 80,
            "legal": 80,
            "global": 80,
            "social": 20
        },
        "description": "placeholder"
    },
    {
        "name": "MAGA Socialism",
        "stats": {
            "econ": 80,
            "legal": 30,
            "global": 30,
            "social": 80
        },
        "description": "placeholder"
    },
    {
        "name": "Liberalism",
        "stats": {
            "econ": 60,
            "legal": 60,
            "global": 70,
            "social": 30
        },
        "description": "placeholder"
    },
    {
        "name": "Social Democracy",
        "stats": {
            "econ": 60,
            "legal": 65,
            "global": 80,
            "social": 20
        },
        "description": "placeholder"
    },
    {
        "name": "Religious Democracy",
        "stats": {
            "econ": 60,
            "legal": 50,
            "global": 60,
            "social": 65
        },
        "description": "placeholder"
    },
    {
        "name": "Progressivism",
        "stats": {
            "econ": 60,
            "legal": 70,
            "global": 80,
            "social": 0
        },
        "description": "placeholder"
    },
    {
        "name": "Imperialist",
        "stats": {
            "econ": 50,
            "legal": 0,
            "global": 100,
            "social": 50
        },
        "description": "placeholder"
    },
    {
        "name": "Moderate",
        "stats": {
            "econ": 50,
            "legal": 50,
            "global": 50,
            "social": 50
        },
        "description": "placeholder"
    },
    {
        "name": "Moderate Conservative",
        "stats": {
            "econ": 40,
            "legal": 50,
            "global": 50,
            "social": 60
        },
        "description": "placeholder"
    },
    {
        "name": "Conservatism",
        "stats": {
            "econ": 40,
            "legal": 50,
            "global": 50,
            "social": 70
        },
        "description": "placeholder"
    },
    {
        "name": "Trumpism",
        "stats": {
            "econ": 50,
            "legal": 30,
            "global": 30,
            "social": 70
        },
        "description": "placeholder"
    },
    {
        "name": "Religious Fundamentalist",
        "stats": {
            "econ": 50,
            "legal": 30,
            "global": 50,
            "social": 80
        },
        "description": "placeholder"
    },
    {
        "name": "Libertarianism",
        "stats": {
            "econ": 30,
            "legal": 70,
            "global": 50,
            "social": 50
        },
        "description": "placeholder"
    },
    {
        "name": "Anarcho-Capitalism",
        "stats": {
            "econ": 0,
            "legal": 100,
            "global": 50,
            "social": 50
        },
        "description": "placeholder"
    },
    {
        "name": "Capitalist Fascism",
        "stats": {
            "econ": 0,
            "legal": 0,
            "global": 50,
            "social": 70
        },
        "description": "placeholder"
    },
    {
        "name": "Capitalist Liberalism",
        "stats": {
            "econ": 0,
            "legal": 0,
            "global": 50,
            "social": 30
        },
        "description": "placeholder"
    },
    {
        "name": "Secular Fascism",
        "stats": {
            "econ": 50,
            "legal": 0,
            "global": 50,
            "social": 0
        },
        "description": "placeholder"
    },
    {
        "name": "Neo-Liberalism",
        "stats": {
            "econ": 30,
            "legal": 50,
            "global": 70,
            "social": 40
        },
        "description": "placeholder"
    },
    {
        "name": "Minarchism",
        "stats": {
            "econ": 10,
            "legal": 90,
            "global": 50,
            "social": 50
        },
        "description": "placeholder"
    },
    {
        "name": "Neo-Conservatism",
        "stats": {
            "econ": 30,
            "legal": 40,
            "global": 70,
            "social": 60
        },
        "description": "placeholder"
    },
    {
        "name": "Global Anarcho-Communism",
        "stats": {
            "econ": 100,
            "legal": 100,
            "global": 100,
            "social": 0
        },
        "description": "placeholder"
    },
    {
        "name": "Global Anarcho-Capitalism",
        "stats": {
            "econ": 0,
            "legal": 100,
            "global": 100,
            "social": 50
        },
        "description": "placeholder"
    },
    {
        "name": "Global Theocracy",
        "stats": {
            "econ": 50,
            "legal": 50,
            "global": 100,
            "social": 90
        },
        "description": "placeholder"
    },
    {
        "name": "Global Secular Liberalism",
        "stats": {
            "econ": 60,
            "legal": 50,
            "global": 100,
            "social": 30
        },
        "description": "placeholder"
    }
];

export default ideologies;