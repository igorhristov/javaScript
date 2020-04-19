const _users = [
    {
        "id": 1,
        "friends": [
            47,
            59,
            33
        ],
        "birthYear": 1984,
        "firstName": "Reynolds",
        "lastName": "Ryan",
        "skill": "backend",
        "gender": "female",
        "salary": 34282.22,
        "bio": "Web aficionado. Zombie advocate. Communicator. Passionate entrepreneur. Food guru. Tv ninja.",
        "avatar": "https://i.pravatar.cc/64?u=1"
    },
    {
        "id": 2,
        "friends": [
            92,
            80,
            71,
            56,
            97,
            10,
            19
        ],
        "birthYear": 1989,
        "firstName": "Janis",
        "lastName": "Brooks",
        "skill": "frontend",
        "gender": "male",
        "salary": 22567.22,
        "bio": "Web trailblazer. Twitter evangelist. Beer guru. Explorer. Tv enthusiast. Award-winning troublemaker.",
        "avatar": "https://i.pravatar.cc/64?u=2"
    },
    {
        "id": 3,
        "friends": [
            84,
            87,
            85,
            89
        ],
        "birthYear": 1985,
        "firstName": "Lorena",
        "lastName": "Calhoun",
        "skill": "fullstack",
        "gender": "female",
        "salary": 29587.81,
        "bio": "Webaholic. Internet ninja. Alcohol enthusiast. Hardcore travel scholar. Zombie lover. Music aficionado. Beer nerd. Tv fanatic.",
        "avatar": "https://i.pravatar.cc/64?u=3"
    },
    {
        "id": 4,
        "friends": [
            46,
            57,
            78,
            61,
            15,
            57,
            29
        ],
        "birthYear": 1982,
        "firstName": "Rivas",
        "lastName": "Whitley",
        "skill": "fullstack",
        "gender": "female",
        "salary": 33236.32,
        "bio": "Analyst. Freelance bacon scholar. Thinker. Coffee geek. Devoted reader. Explorer. Music fanatic. Introvert. Zombie junkie. Extreme gamer.",
        "avatar": "https://i.pravatar.cc/64?u=4"
    },
    {
        "id": 5,
        "friends": [
            28,
            18,
            8
        ],
        "birthYear": 1982,
        "firstName": "Georgina",
        "lastName": "England",
        "skill": "fullstack",
        "gender": "female",
        "salary": 32893.22,
        "bio": "Food aficionado. Beeraholic. Avid gamer. Explorer. Travel specialist. Social media scholar. Twitter fan.",
        "avatar": "https://i.pravatar.cc/64?u=5"
    },
    {
        "id": 6,
        "friends": [
            3,
            93
        ],
        "birthYear": 2000,
        "firstName": "Eunice",
        "lastName": "Munoz",
        "skill": "fullstack",
        "gender": "female",
        "salary": 38174.89,
        "bio": "Travel scholar. Freelance alcohol enthusiast. Total social media geek. Food trailblazer. Pop culture specialist. Tv fanatic.",
        "avatar": "https://i.pravatar.cc/64?u=6"
    },
    {
        "id": 7,
        "friends": [
            1,
            57,
            69
        ],
        "birthYear": 1986,
        "firstName": "Harvey",
        "lastName": "Wooten",
        "skill": "backend",
        "gender": "female",
        "salary": 21832.87,
        "bio": "Tv buff. Explorer. Web expert. Analyst. Professional social media maven. Bacon advocate. Organizer.",
        "avatar": "https://i.pravatar.cc/64?u=7"
    },
    {
        "id": 8,
        "friends": [
            24,
            33,
            12,
            98,
            34
        ],
        "birthYear": 1985,
        "firstName": "Bell",
        "lastName": "Middleton",
        "skill": "fullstack",
        "gender": "female",
        "salary": 31446.88,
        "bio": "Internet practitioner. Travel evangelist. Alcohol junkie. Writer. Creator. Explorer. Web buff.",
        "avatar": "https://i.pravatar.cc/64?u=8"
    },
    {
        "id": 9,
        "friends": [
            31,
            32,
            78
        ],
        "birthYear": 1993,
        "firstName": "Lily",
        "lastName": "Cole",
        "skill": "frontend",
        "gender": "male",
        "salary": 38347.26,
        "bio": "Lifelong web practitioner. Total twitter ninja. Freelance entrepreneur. Extreme tv trailblazer.",
        "avatar": "https://i.pravatar.cc/64?u=9"
    },
    {
        "id": 10,
        "friends": [
            53,
            48,
            24,
            34,
            51,
            7,
            41
        ],
        "birthYear": 1997,
        "firstName": "Nixon",
        "lastName": "Bowen",
        "skill": "frontend",
        "gender": "female",
        "salary": 29298.52,
        "bio": "Internetaholic. Problem solver. Organizer. Avid zombie advocate. Troublemaker.",
        "avatar": "https://i.pravatar.cc/64?u=10"
    },
    {
        "id": 11,
        "friends": [
            82,
            31,
            58,
            59,
            40,
            19,
            36,
            39,
            26,
            42
        ],
        "birthYear": 1994,
        "firstName": "Daphne",
        "lastName": "Nash",
        "skill": "frontend",
        "gender": "female",
        "salary": 21932.61,
        "bio": "Certified introvert. Food advocate. Troublemaker. Freelance music junkie.",
        "avatar": "https://i.pravatar.cc/64?u=11"
    },
    {
        "id": 12,
        "friends": [
            96,
            11
        ],
        "birthYear": 1983,
        "firstName": "Moses",
        "lastName": "Christian",
        "skill": "fullstack",
        "gender": "male",
        "salary": 24327.67,
        "bio": "Professional organizer. Music practitioner. Creator. Twitter enthusiast. Pop culture maven.",
        "avatar": "https://i.pravatar.cc/64?u=12"
    },
    {
        "id": 13,
        "friends": [
            63,
            14,
            55,
            72,
            49
        ],
        "birthYear": 1998,
        "firstName": "Dana",
        "lastName": "Bradshaw",
        "skill": "frontend",
        "gender": "female",
        "salary": 36588.24,
        "bio": "Friendly foodaholic. Travel aficionado. Communicator. Certified internet buff. Twitter scholar.",
        "avatar": "https://i.pravatar.cc/64?u=13"
    },
    {
        "id": 14,
        "friends": [
            56,
            53,
            48,
            53,
            24,
            90,
            1
        ],
        "birthYear": 1994,
        "firstName": "Theresa",
        "lastName": "Spence",
        "skill": "fullstack",
        "gender": "male",
        "salary": 21949.83,
        "bio": "Writer. Incurable bacon buff. Travel advocate. Coffee ninja. Communicator. Proud entrepreneur.",
        "avatar": "https://i.pravatar.cc/64?u=14"
    },
    {
        "id": 15,
        "friends": [
            33,
            46,
            63,
            44,
            85,
            97
        ],
        "birthYear": 1996,
        "firstName": "Courtney",
        "lastName": "Barrera",
        "skill": "backend",
        "gender": "female",
        "salary": 30035.59,
        "bio": "Social media nerd. Internet trailblazer. Certified beer practitioner. Coffee junkie. Music fanatic. Zombie expert.",
        "avatar": "https://i.pravatar.cc/64?u=15"
    },
    {
        "id": 16,
        "friends": [
            79,
            64
        ],
        "birthYear": 1983,
        "firstName": "Lara",
        "lastName": "Gilmore",
        "skill": "backend",
        "gender": "female",
        "salary": 24640.71,
        "bio": "Alcohol practitioner. Writer. Devoted pop culture advocate. Social media nerd. General communicator.",
        "avatar": "https://i.pravatar.cc/64?u=16"
    },
    {
        "id": 17,
        "friends": [
            94,
            92,
            75,
            1,
            10,
            16,
            59,
            25
        ],
        "birthYear": 1996,
        "firstName": "Katy",
        "lastName": "Henderson",
        "skill": "backend",
        "gender": "male",
        "salary": 39997.78,
        "bio": "Tv specialist. Hardcore gamer. Devoted troublemaker. Explorer. Unable to type with boxing gloves on. Web advocate.",
        "avatar": "https://i.pravatar.cc/64?u=17"
    },
    {
        "id": 18,
        "friends": [
            43,
            9,
            61,
            55,
            82,
            71,
            66,
            74
        ],
        "birthYear": 1983,
        "firstName": "Vanessa",
        "lastName": "Mooney",
        "skill": "fullstack",
        "gender": "male",
        "salary": 20092.59,
        "bio": "Creator. Entrepreneur. Tv fanatic. Social media ninja. Total coffee guru. Pop culture aficionado. Certified food buff. Twitter evangelist.",
        "avatar": "https://i.pravatar.cc/64?u=18"
    },
    {
        "id": 19,
        "friends": [
            50,
            76,
            57,
            8,
            35,
            90,
            46
        ],
        "birthYear": 1989,
        "firstName": "Nona",
        "lastName": "Grant",
        "skill": "fullstack",
        "gender": "male",
        "salary": 28719.41,
        "bio": "Professional coffee fanatic. Award-winning troublemaker. Bacon ninja. Music trailblazer.",
        "avatar": "https://i.pravatar.cc/64?u=19"
    },
    {
        "id": 20,
        "friends": [
            84
        ],
        "birthYear": 1997,
        "firstName": "Consuelo",
        "lastName": "Jimenez",
        "skill": "frontend",
        "gender": "female",
        "salary": 38533.13,
        "bio": "Explorer. Introvert. Social media geek. Organizer. Lifelong thinker. Gamer. Reader. Proud internet lover.",
        "avatar": "https://i.pravatar.cc/64?u=20"
    },
    {
        "id": 21,
        "friends": [
            41,
            72,
            47,
            1,
            10,
            13,
            100,
            25
        ],
        "birthYear": 1995,
        "firstName": "Cristina",
        "lastName": "Gamble",
        "skill": "fullstack",
        "gender": "female",
        "salary": 33189.94,
        "bio": "Beer evangelist. Zombie geek. Communicator. Friendly troublemaker. Music enthusiast. Web guru. Hipster-friendly student. Writer.",
        "avatar": "https://i.pravatar.cc/64?u=21"
    },
    {
        "id": 22,
        "friends": [
            34
        ],
        "birthYear": 1987,
        "firstName": "Sheri",
        "lastName": "Dennis",
        "skill": "frontend",
        "gender": "male",
        "salary": 20079.18,
        "bio": "Introvert. Passionate reader. Problem solver. Beer scholar. Music practitioner. Tv aficionado. Zombie geek. Award-winning coffee expert. Food guru.",
        "avatar": "https://i.pravatar.cc/64?u=22"
    },
    {
        "id": 23,
        "friends": [
            66,
            48,
            26
        ],
        "birthYear": 1989,
        "firstName": "Jodie",
        "lastName": "Duffy",
        "skill": "backend",
        "gender": "female",
        "salary": 22172.19,
        "bio": "Beer evangelist. Falls down a lot. Food practitioner. Zombie enthusiast. Introvert. Subtly charming tv junkie.",
        "avatar": "https://i.pravatar.cc/64?u=23"
    },
    {
        "id": 24,
        "friends": [
            98,
            86,
            78
        ],
        "birthYear": 1986,
        "firstName": "Selena",
        "lastName": "Bird",
        "skill": "backend",
        "gender": "female",
        "salary": 38605.65,
        "bio": "Infuriatingly humble web specialist. Incurable communicator. Wannabe food fanatic.",
        "avatar": "https://i.pravatar.cc/64?u=24"
    },
    {
        "id": 25,
        "friends": [
            52,
            30,
            93,
            12
        ],
        "birthYear": 2000,
        "firstName": "Graciela",
        "lastName": "Rowland",
        "skill": "backend",
        "gender": "male",
        "salary": 37723.75,
        "bio": "Pop culture lover. Introvert. Gamer. Freelance zombie guru. Problem solver. Web practitioner.",
        "avatar": "https://i.pravatar.cc/64?u=25"
    },
    {
        "id": 26,
        "friends": [
            47,
            39,
            50,
            66,
            39,
            69,
            39,
            94,
            33
        ],
        "birthYear": 1983,
        "firstName": "Mccoy",
        "lastName": "Ellison",
        "skill": "backend",
        "gender": "female",
        "salary": 38679.11,
        "bio": "Subtly charming gamer. Food buff. Alcohol aficionado. Coffee specialist. Tv junkie. Beer fanatic.",
        "avatar": "https://i.pravatar.cc/64?u=26"
    },
    {
        "id": 27,
        "friends": [
            94,
            4
        ],
        "birthYear": 1999,
        "firstName": "Gay",
        "lastName": "Holman",
        "skill": "frontend",
        "gender": "male",
        "salary": 22489.87,
        "bio": "Organizer. Tv ninja. Unable to type with boxing gloves on. Internetaholic. Social media junkie.",
        "avatar": "https://i.pravatar.cc/64?u=27"
    },
    {
        "id": 28,
        "friends": [
            43,
            100,
            82,
            5,
            79,
            48,
            91,
            71
        ],
        "birthYear": 1999,
        "firstName": "Keisha",
        "lastName": "Acosta",
        "skill": "frontend",
        "gender": "female",
        "salary": 21243.75,
        "bio": "Typical music lover. Bacon aficionado. Incurable coffee advocate. Professional zombie junkie. Total internet maven.",
        "avatar": "https://i.pravatar.cc/64?u=28"
    },
    {
        "id": 29,
        "friends": [
            17,
            81,
            97,
            70,
            100,
            24
        ],
        "birthYear": 1983,
        "firstName": "May",
        "lastName": "Deleon",
        "skill": "backend",
        "gender": "female",
        "salary": 35736.54,
        "bio": "Travel enthusiast. Evil pop culture buff. Bacon guru. Tv specialist. Web aficionado. Zombie evangelist.",
        "avatar": "https://i.pravatar.cc/64?u=29"
    },
    {
        "id": 30,
        "friends": [
            54,
            14,
            65,
            58
        ],
        "birthYear": 1987,
        "firstName": "Denise",
        "lastName": "Clayton",
        "skill": "frontend",
        "gender": "female",
        "salary": 29197.04,
        "bio": "Zombieaholic. Beer practitioner. Explorer. Food expert. Introvert. Social media guru. Friendly pop culture junkie.",
        "avatar": "https://i.pravatar.cc/64?u=30"
    },
    {
        "id": 31,
        "friends": [
            94,
            96,
            87,
            95,
            21,
            1,
            48,
            27,
            28
        ],
        "birthYear": 1986,
        "firstName": "Ewing",
        "lastName": "Estes",
        "skill": "backend",
        "gender": "female",
        "salary": 37747.57,
        "bio": "Devoted food expert. Freelance bacon geek. Internetaholic. Beer scholar. Thinker. Social media trailblazer. Web maven.",
        "avatar": "https://i.pravatar.cc/64?u=31"
    },
    {
        "id": 32,
        "friends": [
            68,
            25,
            90,
            3,
            7
        ],
        "birthYear": 1996,
        "firstName": "Nielsen",
        "lastName": "Evans",
        "skill": "backend",
        "gender": "female",
        "salary": 26822.58,
        "bio": "Professional thinker. Alcohol ninja. Web fanatic. Reader. Certified beer buff. Analyst. Extreme troublemaker. Food practitioner.",
        "avatar": "https://i.pravatar.cc/64?u=32"
    },
    {
        "id": 33,
        "friends": [
            93,
            76,
            99,
            25,
            23,
            13,
            94
        ],
        "birthYear": 1984,
        "firstName": "Cantrell",
        "lastName": "Hood",
        "skill": "backend",
        "gender": "male",
        "salary": 32615.01,
        "bio": "Zombie specialist. Travel lover. Reader. Incurable creator. Twitter enthusiast. Amateur music ninja.",
        "avatar": "https://i.pravatar.cc/64?u=33"
    },
    {
        "id": 34,
        "friends": [
            16,
            64
        ],
        "birthYear": 1987,
        "firstName": "Melisa",
        "lastName": "Hernandez",
        "skill": "backend",
        "gender": "female",
        "salary": 22335.62,
        "bio": "Social media nerd. Internetaholic. Introvert. Analyst. Prone to fits of apathy. Amateur web lover. Entrepreneur.",
        "avatar": "https://i.pravatar.cc/64?u=34"
    },
    {
        "id": 35,
        "friends": [
            77,
            33,
            68,
            94,
            2,
            83
        ],
        "birthYear": 1987,
        "firstName": "Page",
        "lastName": "Horne",
        "skill": "frontend",
        "gender": "male",
        "salary": 24057.2,
        "bio": "Proud reader. Award-winning troublemaker. Avid coffee fanatic. Social media expert.",
        "avatar": "https://i.pravatar.cc/64?u=35"
    },
    {
        "id": 36,
        "friends": [
            65,
            44,
            12,
            18
        ],
        "birthYear": 1982,
        "firstName": "Tran",
        "lastName": "Ellis",
        "skill": "fullstack",
        "gender": "male",
        "salary": 24870.86,
        "bio": "Tv enthusiast. Incurable student. Hipster-friendly communicator. Typical music evangelist.",
        "avatar": "https://i.pravatar.cc/64?u=36"
    },
    {
        "id": 37,
        "friends": [
            87,
            43,
            82,
            64,
            34,
            47,
            72
        ],
        "birthYear": 1983,
        "firstName": "Haley",
        "lastName": "Herrera",
        "skill": "fullstack",
        "gender": "male",
        "salary": 28994.36,
        "bio": "Zombie buff. Music fanatic. Food advocate. Evil organizer. Alcohol fan.",
        "avatar": "https://i.pravatar.cc/64?u=37"
    },
    {
        "id": 38,
        "friends": [
            34
        ],
        "birthYear": 1981,
        "firstName": "Buckner",
        "lastName": "Doyle",
        "skill": "frontend",
        "gender": "female",
        "salary": 36395.51,
        "bio": "Analyst. Music guru. Explorer. Alcohol geek. Reader. Friendly social media advocate. Web fanatic. Writer. Thinker.",
        "avatar": "https://i.pravatar.cc/64?u=38"
    },
    {
        "id": 39,
        "friends": [
            2,
            37,
            20,
            85,
            44,
            60,
            69,
            71
        ],
        "birthYear": 1990,
        "firstName": "Bryan",
        "lastName": "Strickland",
        "skill": "fullstack",
        "gender": "female",
        "salary": 23000.69,
        "bio": "Alcohol fanatic. Reader. Amateur bacon trailblazer. Web buff. Hardcore thinker. Twitter nerd. Tv ninja. Total travel specialist. Gamer.",
        "avatar": "https://i.pravatar.cc/64?u=39"
    },
    {
        "id": 40,
        "friends": [
            29,
            78,
            70,
            17
        ],
        "birthYear": 1981,
        "firstName": "Padilla",
        "lastName": "Owens",
        "skill": "fullstack",
        "gender": "female",
        "salary": 34166.56,
        "bio": "Lifelong social media guru. Evil introvert. Prone to fits of apathy. Hardcore travel lover.",
        "avatar": "https://i.pravatar.cc/64?u=40"
    },
    {
        "id": 41,
        "friends": [
            74
        ],
        "birthYear": 1994,
        "firstName": "Deborah",
        "lastName": "Pennington",
        "skill": "fullstack",
        "gender": "female",
        "salary": 20826.24,
        "bio": "Food fanatic. Professional alcohol scholar. Creator. Tv advocate. Travel practitioner. Avid pop culture evangelist. Evil coffee trailblazer. Bacon geek.",
        "avatar": "https://i.pravatar.cc/64?u=41"
    },
    {
        "id": 42,
        "friends": [
            31,
            69,
            94,
            61,
            90,
            10,
            80,
            9,
            6,
            49
        ],
        "birthYear": 1992,
        "firstName": "Jordan",
        "lastName": "Justice",
        "skill": "backend",
        "gender": "female",
        "salary": 25940.33,
        "bio": "Web lover. Amateur coffee trailblazer. Infuriatingly humble organizer. General alcohol maven. Award-winning thinker.",
        "avatar": "https://i.pravatar.cc/64?u=42"
    },
    {
        "id": 43,
        "friends": [
            51,
            91,
            87,
            10,
            5
        ],
        "birthYear": 1993,
        "firstName": "Schultz",
        "lastName": "Chambers",
        "skill": "backend",
        "gender": "male",
        "salary": 24201.35,
        "bio": "Webaholic. Social media aficionado. Travel expert. Introvert. Internet guru. Freelance bacon trailblazer. Beer buff.",
        "avatar": "https://i.pravatar.cc/64?u=43"
    },
    {
        "id": 44,
        "friends": [
            30,
            33,
            17,
            87,
            60,
            29,
            23,
            94,
            36,
            46
        ],
        "birthYear": 1996,
        "firstName": "Petty",
        "lastName": "Park",
        "skill": "fullstack",
        "gender": "male",
        "salary": 35788.56,
        "bio": "Analyst. Zombie evangelist. Coffee lover. Troublemaker. Student. Writer. Twitter maven. Evil social media nerd. Food fanatic.",
        "avatar": "https://i.pravatar.cc/64?u=44"
    },
    {
        "id": 45,
        "friends": [
            86,
            38,
            33,
            86,
            96,
            81,
            52,
            20
        ],
        "birthYear": 1995,
        "firstName": "Catherine",
        "lastName": "Porter",
        "skill": "frontend",
        "gender": "male",
        "salary": 20952.88,
        "bio": "Lifelong creator. Certified alcohol expert. Avid travel specialist. Internet advocate. Food enthusiast. Music fanatic.",
        "avatar": "https://i.pravatar.cc/64?u=45"
    },
    {
        "id": 46,
        "friends": [
            80,
            56,
            23,
            16,
            99,
            36,
            6,
            82,
            17,
            92
        ],
        "birthYear": 1981,
        "firstName": "Ramos",
        "lastName": "Goodman",
        "skill": "fullstack",
        "gender": "male",
        "salary": 37985.51,
        "bio": "Travel advocate. Proud coffee evangelist. Alcohol fanatic. Internetaholic. Twitter geek. Tv guru.",
        "avatar": "https://i.pravatar.cc/64?u=46"
    },
    {
        "id": 47,
        "friends": [
            58
        ],
        "birthYear": 1989,
        "firstName": "Lyons",
        "lastName": "Saunders",
        "skill": "frontend",
        "gender": "male",
        "salary": 21332.85,
        "bio": "Zombie junkie. Wannabe social media fan. Freelance communicator. Hipster-friendly reader. Writer. Pop culture enthusiast. Gamer.",
        "avatar": "https://i.pravatar.cc/64?u=47"
    },
    {
        "id": 48,
        "friends": [
            77,
            55
        ],
        "birthYear": 1981,
        "firstName": "Snow",
        "lastName": "Dalton",
        "skill": "fullstack",
        "gender": "female",
        "salary": 38644.84,
        "bio": "Tv maven. Typical food buff. Bacon expert. Reader. Zombie advocate. Social media practitioner.",
        "avatar": "https://i.pravatar.cc/64?u=48"
    },
    {
        "id": 49,
        "friends": [
            54,
            79,
            41
        ],
        "birthYear": 1997,
        "firstName": "Wong",
        "lastName": "Pickett",
        "skill": "fullstack",
        "gender": "male",
        "salary": 39741.57,
        "bio": "Food junkie. Twitter maven. Music aficionado. Unapologetic pop culture ninja. Tv lover. Extreme creator.",
        "avatar": "https://i.pravatar.cc/64?u=49"
    },
    {
        "id": 50,
        "friends": [
            78,
            81,
            47,
            95,
            72,
            42
        ],
        "birthYear": 1993,
        "firstName": "Malinda",
        "lastName": "Atkins",
        "skill": "frontend",
        "gender": "female",
        "salary": 38036.27,
        "bio": "Typical creator. Lifelong introvert. Pop culture practitioner. Total organizer.",
        "avatar": "https://i.pravatar.cc/64?u=50"
    },
    {
        "id": 51,
        "friends": [
            88
        ],
        "birthYear": 1999,
        "firstName": "Ana",
        "lastName": "Dunlap",
        "skill": "backend",
        "gender": "male",
        "salary": 35484.33,
        "bio": "Communicator. Food buff. Amateur tv enthusiast. Creator. Incurable problem solver. Wannabe pop culture nerd. Reader. Introvert.",
        "avatar": "https://i.pravatar.cc/64?u=51"
    },
    {
        "id": 52,
        "friends": [
            14,
            50,
            12,
            92,
            83
        ],
        "birthYear": 2000,
        "firstName": "Lawrence",
        "lastName": "Dean",
        "skill": "frontend",
        "gender": "male",
        "salary": 37999.54,
        "bio": "Avid pop culture ninja. Music scholar. Analyst. Tv evangelist. Thinker. Bacon fanatic. Travel lover.",
        "avatar": "https://i.pravatar.cc/64?u=52"
    },
    {
        "id": 53,
        "friends": [
            74,
            43,
            4,
            67,
            27,
            25,
            58,
            50,
            26
        ],
        "birthYear": 1988,
        "firstName": "Dina",
        "lastName": "Rogers",
        "skill": "frontend",
        "gender": "male",
        "salary": 32582.69,
        "bio": "Typical communicator. Incurable pop culture practitioner. Wannabe twitter evangelist. Student.",
        "avatar": "https://i.pravatar.cc/64?u=53"
    },
    {
        "id": 54,
        "friends": [
            97,
            16,
            55,
            40,
            27,
            56,
            62
        ],
        "birthYear": 1983,
        "firstName": "Bright",
        "lastName": "Finley",
        "skill": "frontend",
        "gender": "female",
        "salary": 33434.67,
        "bio": "Web aficionado. Zombie lover. Bacon junkie. Explorer. Devoted food nerd. General alcohol geek.",
        "avatar": "https://i.pravatar.cc/64?u=54"
    },
    {
        "id": 55,
        "friends": [
            36,
            100
        ],
        "birthYear": 2000,
        "firstName": "Kerri",
        "lastName": "Dunn",
        "skill": "fullstack",
        "gender": "female",
        "salary": 20384.88,
        "bio": "Proud social media ninja. Organizer. Gamer. Unable to type with boxing gloves on. Twitter aficionado. Food nerd. Coffee trailblazer.",
        "avatar": "https://i.pravatar.cc/64?u=55"
    },
    {
        "id": 56,
        "friends": [
            69,
            83,
            54,
            82,
            75,
            67,
            62
        ],
        "birthYear": 1990,
        "firstName": "Donaldson",
        "lastName": "Buckley",
        "skill": "fullstack",
        "gender": "male",
        "salary": 25021.03,
        "bio": "Beer nerd. Pop culture fan. Passionate social media advocate. Friendly student. Future teen idol. Coffee maven. Zombie lover. Web fanatic.",
        "avatar": "https://i.pravatar.cc/64?u=56"
    },
    {
        "id": 57,
        "friends": [
            87,
            43,
            62,
            89,
            95,
            85,
            14,
            88,
            92
        ],
        "birthYear": 1988,
        "firstName": "Mcmahon",
        "lastName": "Monroe",
        "skill": "frontend",
        "gender": "male",
        "salary": 28811.01,
        "bio": "Beer trailblazer. Coffee specialist. Travelaholic. Food fanatic. Reader. Proud zombie advocate.",
        "avatar": "https://i.pravatar.cc/64?u=57"
    },
    {
        "id": 58,
        "friends": [
            19,
            38,
            48,
            17,
            7,
            48,
            20,
            75,
            80,
            62
        ],
        "birthYear": 1990,
        "firstName": "Bobbi",
        "lastName": "Morrow",
        "skill": "fullstack",
        "gender": "male",
        "salary": 25508.21,
        "bio": "Internet aficionado. Pop culture scholar. Coffee guru. Proud creator. Twitter geek. Webaholic.",
        "avatar": "https://i.pravatar.cc/64?u=58"
    },
    {
        "id": 59,
        "friends": [
            28
        ],
        "birthYear": 1990,
        "firstName": "Hazel",
        "lastName": "Good",
        "skill": "backend",
        "gender": "female",
        "salary": 29152.05,
        "bio": "Subtly charming communicator. Tv fanatic. Internet practitioner. Zombie buff. Travel ninja.",
        "avatar": "https://i.pravatar.cc/64?u=59"
    },
    {
        "id": 60,
        "friends": [
            96,
            43,
            45,
            23,
            36,
            53,
            40,
            21,
            92
        ],
        "birthYear": 1984,
        "firstName": "Torres",
        "lastName": "Weeks",
        "skill": "backend",
        "gender": "male",
        "salary": 24808.17,
        "bio": "Twitter trailblazer. Hipster-friendly travel guru. Award-winning troublemaker.",
        "avatar": "https://i.pravatar.cc/64?u=60"
    },
    {
        "id": 61,
        "friends": [
            25,
            9,
            9,
            42,
            11
        ],
        "birthYear": 1988,
        "firstName": "Santiago",
        "lastName": "Barker",
        "skill": "backend",
        "gender": "male",
        "salary": 23695.07,
        "bio": "Extreme alcohol maven. General student. Bacon scholar. Amateur communicator. Writer. Friend of animals everywhere. Reader.",
        "avatar": "https://i.pravatar.cc/64?u=61"
    },
    {
        "id": 62,
        "friends": [
            26,
            31,
            66,
            15
        ],
        "birthYear": 1981,
        "firstName": "Jennie",
        "lastName": "Wiggins",
        "skill": "frontend",
        "gender": "male",
        "salary": 26535.21,
        "bio": "Lifelong bacon fanatic. Writer. Avid coffee aficionado. Food specialist. Internet junkie. Typical beer expert.",
        "avatar": "https://i.pravatar.cc/64?u=62"
    },
    {
        "id": 63,
        "friends": [
            10,
            70
        ],
        "birthYear": 1988,
        "firstName": "Bianca",
        "lastName": "Rios",
        "skill": "fullstack",
        "gender": "male",
        "salary": 24004.27,
        "bio": "Student. Food practitioner. Bacon enthusiast. Explorer. Reader. Beer nerd. Analyst. Creator. Pop culture guru.",
        "avatar": "https://i.pravatar.cc/64?u=63"
    },
    {
        "id": 64,
        "friends": [
            18
        ],
        "birthYear": 1995,
        "firstName": "Berger",
        "lastName": "Potts",
        "skill": "fullstack",
        "gender": "female",
        "salary": 20852.32,
        "bio": "Subtly charming entrepreneur. Gamer. Coffee geek. Alcohol enthusiast. Travel buff.",
        "avatar": "https://i.pravatar.cc/64?u=64"
    },
    {
        "id": 65,
        "friends": [
            92,
            15,
            1,
            85
        ],
        "birthYear": 1987,
        "firstName": "Clayton",
        "lastName": "Stein",
        "skill": "fullstack",
        "gender": "male",
        "salary": 24811.8,
        "bio": "Food fanatic. Tv lover. Typical zombie expert. Extreme gamer. Bacon scholar. Entrepreneur. Proud travel fan. Thinker. Award-winning coffee junkie.",
        "avatar": "https://i.pravatar.cc/64?u=65"
    },
    {
        "id": 66,
        "friends": [
            82,
            25,
            79,
            40,
            30,
            93,
            33,
            41,
            84
        ],
        "birthYear": 1988,
        "firstName": "Duke",
        "lastName": "Scott",
        "skill": "backend",
        "gender": "female",
        "salary": 27138.1,
        "bio": "Internet practitioner. Travel nerd. Avid twitter junkie. Unapologetic alcohol guru.",
        "avatar": "https://i.pravatar.cc/64?u=66"
    },
    {
        "id": 67,
        "friends": [
            28,
            4,
            10,
            65,
            65,
            51
        ],
        "birthYear": 1985,
        "firstName": "Amanda",
        "lastName": "Shaw",
        "skill": "frontend",
        "gender": "female",
        "salary": 28423.85,
        "bio": "Food fanatic. Introvert. Hardcore entrepreneur. Award-winning gamer. Tv aficionado. Music evangelist. Bacon enthusiast.",
        "avatar": "https://i.pravatar.cc/64?u=67"
    },
    {
        "id": 68,
        "friends": [
            85,
            38,
            59
        ],
        "birthYear": 1993,
        "firstName": "Frank",
        "lastName": "Johns",
        "skill": "frontend",
        "gender": "male",
        "salary": 26430.98,
        "bio": "Bacon scholar. Thinker. Subtly charming food expert. Twitter fanatic. Zombie buff. Entrepreneur.",
        "avatar": "https://i.pravatar.cc/64?u=68"
    },
    {
        "id": 69,
        "friends": [
            78,
            31,
            19,
            38,
            71,
            60,
            61
        ],
        "birthYear": 1983,
        "firstName": "Freeman",
        "lastName": "Dominguez",
        "skill": "fullstack",
        "gender": "female",
        "salary": 24253.28,
        "bio": "Introvert. Alcohol evangelist. Entrepreneur. Food junkie. Unapologetic beer lover. Friendly twitter fanatic. Analyst. Incurable communicator. Coffee guru.",
        "avatar": "https://i.pravatar.cc/64?u=69"
    },
    {
        "id": 70,
        "friends": [
            10,
            10,
            74
        ],
        "birthYear": 1994,
        "firstName": "Holly",
        "lastName": "Osborn",
        "skill": "frontend",
        "gender": "male",
        "salary": 25406.08,
        "bio": "Twitter guru. Evil zombie buff. Alcohol evangelist. Music specialist. Web enthusiast. Troublemaker. Travel trailblazer.",
        "avatar": "https://i.pravatar.cc/64?u=70"
    },
    {
        "id": 71,
        "friends": [
            47,
            90,
            91
        ],
        "birthYear": 1997,
        "firstName": "Angel",
        "lastName": "Foley",
        "skill": "fullstack",
        "gender": "female",
        "salary": 30936.36,
        "bio": "Writer. Certified pop culture specialist. Typical bacon enthusiast. Coffee advocate.",
        "avatar": "https://i.pravatar.cc/64?u=71"
    },
    {
        "id": 72,
        "friends": [
            47
        ],
        "birthYear": 1989,
        "firstName": "Sue",
        "lastName": "Chase",
        "skill": "backend",
        "gender": "female",
        "salary": 27414.11,
        "bio": "Analyst. Social media trailblazer. Coffee lover. Explorer. Subtly charming tv evangelist. Avid zombie geek. Music ninja.",
        "avatar": "https://i.pravatar.cc/64?u=72"
    },
    {
        "id": 73,
        "friends": [
            90,
            61,
            93,
            67,
            100,
            52,
            29,
            83
        ],
        "birthYear": 1987,
        "firstName": "Rosalie",
        "lastName": "Patrick",
        "skill": "fullstack",
        "gender": "male",
        "salary": 25507.51,
        "bio": "Devoted troublemaker. Amateur bacon enthusiast. Gamer. Internet scholar. Communicator.",
        "avatar": "https://i.pravatar.cc/64?u=73"
    },
    {
        "id": 74,
        "friends": [
            23,
            72,
            35
        ],
        "birthYear": 1991,
        "firstName": "Gray",
        "lastName": "Stewart",
        "skill": "backend",
        "gender": "female",
        "salary": 31028.23,
        "bio": "Pop cultureaholic. Web guru. Zombie fanatic. Troublemaker. Incurable food fan. Alcohol aficionado.",
        "avatar": "https://i.pravatar.cc/64?u=74"
    },
    {
        "id": 75,
        "friends": [
            98,
            66
        ],
        "birthYear": 1993,
        "firstName": "Estes",
        "lastName": "Mays",
        "skill": "backend",
        "gender": "male",
        "salary": 24200.43,
        "bio": "Web ninja. Evil writer. Internet buff. Bacon evangelist. Alcohol advocate. Introvert. Passionate music practitioner. Tv guru. Twitter maven.",
        "avatar": "https://i.pravatar.cc/64?u=75"
    },
    {
        "id": 76,
        "friends": [
            90,
            81,
            71,
            52,
            58,
            41,
            99,
            90,
            15,
            86
        ],
        "birthYear": 1994,
        "firstName": "Becky",
        "lastName": "Mckinney",
        "skill": "frontend",
        "gender": "female",
        "salary": 31465.58,
        "bio": "Web junkie. Creator. Lifelong entrepreneur. Hardcore tv ninja. Twitter fanatic.",
        "avatar": "https://i.pravatar.cc/64?u=76"
    },
    {
        "id": 77,
        "friends": [
            88,
            57,
            3,
            22,
            49,
            42,
            20,
            32,
            56
        ],
        "birthYear": 1985,
        "firstName": "Lara",
        "lastName": "Wolf",
        "skill": "frontend",
        "gender": "male",
        "salary": 22143.21,
        "bio": "Web specialist. Evil problem solver. Beer aficionado. Pop culture fanatic. Passionate twitter geek. Subtly charming introvert. Food maven.",
        "avatar": "https://i.pravatar.cc/64?u=77"
    },
    {
        "id": 78,
        "friends": [
            15
        ],
        "birthYear": 1988,
        "firstName": "Conner",
        "lastName": "Carpenter",
        "skill": "fullstack",
        "gender": "female",
        "salary": 38628.53,
        "bio": "Passionate bacon junkie. Alcohol practitioner. Amateur tv aficionado. Prone to fits of apathy.",
        "avatar": "https://i.pravatar.cc/64?u=78"
    },
    {
        "id": 79,
        "friends": [
            17,
            82,
            90,
            88
        ],
        "birthYear": 1987,
        "firstName": "Kemp",
        "lastName": "Noble",
        "skill": "backend",
        "gender": "female",
        "salary": 22338.07,
        "bio": "Tv lover. Analyst. Gamer. Internet maven. Certified alcohol fanatic. Hipster-friendly coffee nerd.",
        "avatar": "https://i.pravatar.cc/64?u=79"
    },
    {
        "id": 80,
        "friends": [
            65,
            29,
            47
        ],
        "birthYear": 2000,
        "firstName": "Lee",
        "lastName": "Hopkins",
        "skill": "frontend",
        "gender": "female",
        "salary": 35141.85,
        "bio": "Avid travel ninja. Music maven. Food specialist. Reader. Social media enthusiast.",
        "avatar": "https://i.pravatar.cc/64?u=80"
    },
    {
        "id": 81,
        "friends": [
            59,
            96,
            99,
            67,
            64,
            16,
            75,
            94,
            63
        ],
        "birthYear": 1996,
        "firstName": "Delia",
        "lastName": "Lewis",
        "skill": "backend",
        "gender": "female",
        "salary": 30699.74,
        "bio": "Introvert. Troublemaker. Beer buff. Avid bacon trailblazer. Pop cultureaholic. Tv aficionado. Lifelong social media fan. Internet ninja.",
        "avatar": "https://i.pravatar.cc/64?u=81"
    },
    {
        "id": 82,
        "friends": [
            81,
            83
        ],
        "birthYear": 1994,
        "firstName": "Russo",
        "lastName": "Moody",
        "skill": "frontend",
        "gender": "female",
        "salary": 27492.69,
        "bio": "Alcohol fanatic. Music evangelist. Passionate internet maven. Wannabe tv guru. Bacon aficionado.",
        "avatar": "https://i.pravatar.cc/64?u=82"
    },
    {
        "id": 83,
        "friends": [
            89,
            40,
            82,
            75,
            35,
            7,
            29,
            46,
            1,
            35
        ],
        "birthYear": 1992,
        "firstName": "Grimes",
        "lastName": "Johnson",
        "skill": "backend",
        "gender": "female",
        "salary": 30349.33,
        "bio": "Social media aficionado. Analyst. Organizer. Friend of animals everywhere. Student. Total troublemaker. Foodaholic. Tv evangelist. Music maven. Zombie lover.",
        "avatar": "https://i.pravatar.cc/64?u=83"
    },
    {
        "id": 84,
        "friends": [
            57,
            49,
            64
        ],
        "birthYear": 1998,
        "firstName": "Vargas",
        "lastName": "Durham",
        "skill": "backend",
        "gender": "male",
        "salary": 36684.29,
        "bio": "Troublemaker. Bacon buff. Food junkie. Tv evangelist. Pop culture maven. Organizer. Professional writer. Music lover. Thinker. Web ninja.",
        "avatar": "https://i.pravatar.cc/64?u=84"
    },
    {
        "id": 85,
        "friends": [
            29,
            66,
            44,
            38,
            81,
            56
        ],
        "birthYear": 1981,
        "firstName": "Hoffman",
        "lastName": "Carson",
        "skill": "backend",
        "gender": "male",
        "salary": 28167.74,
        "bio": "Reader. Organizer. Tv nerd. Coffee advocate. Introvert. Devoted twitter specialist. Alcohol geek. Student.",
        "avatar": "https://i.pravatar.cc/64?u=85"
    },
    {
        "id": 86,
        "friends": [
            82,
            4,
            32,
            57
        ],
        "birthYear": 1996,
        "firstName": "Erin",
        "lastName": "Mcmillan",
        "skill": "frontend",
        "gender": "female",
        "salary": 37952.08,
        "bio": "Certified alcohol buff. Lifelong food guru. Zombie advocate. Social media fan. Web trailblazer. Coffee fanatic. Thinker.",
        "avatar": "https://i.pravatar.cc/64?u=86"
    },
    {
        "id": 87,
        "friends": [
            66,
            78,
            86,
            10
        ],
        "birthYear": 1987,
        "firstName": "Mitzi",
        "lastName": "Chandler",
        "skill": "backend",
        "gender": "male",
        "salary": 24479.89,
        "bio": "Troublemaker. Introvert. Extreme tv guru. Food evangelist. Incurable travel expert. Creator.",
        "avatar": "https://i.pravatar.cc/64?u=87"
    },
    {
        "id": 88,
        "friends": [
            45,
            54,
            15,
            25,
            5,
            16,
            45,
            96,
            51,
            50
        ],
        "birthYear": 1984,
        "firstName": "Erika",
        "lastName": "Joyce",
        "skill": "backend",
        "gender": "female",
        "salary": 27600.22,
        "bio": "Beer expert. Pop culture fan. Analyst. Unapologetic communicator. Coffee practitioner. Zombie ninja. Food lover.",
        "avatar": "https://i.pravatar.cc/64?u=88"
    },
    {
        "id": 89,
        "friends": [
            22,
            92
        ],
        "birthYear": 1990,
        "firstName": "Sheila",
        "lastName": "Lyons",
        "skill": "fullstack",
        "gender": "male",
        "salary": 36166.6,
        "bio": "Beer ninja. Subtly charming food buff. Writer. Explorer. Typical troublemaker. Internet scholar. Friendly music expert.",
        "avatar": "https://i.pravatar.cc/64?u=89"
    },
    {
        "id": 90,
        "friends": [
            6,
            95
        ],
        "birthYear": 2000,
        "firstName": "Inez",
        "lastName": "Waller",
        "skill": "fullstack",
        "gender": "male",
        "salary": 30334.77,
        "bio": "Travel lover. Gamer. Reader. Troublemaker. Food fanatic. Wannabe music trailblazer.",
        "avatar": "https://i.pravatar.cc/64?u=90"
    },
    {
        "id": 91,
        "friends": [
            9,
            3,
            79,
            83,
            62,
            39,
            86,
            30
        ],
        "birthYear": 1983,
        "firstName": "Karla",
        "lastName": "Weiss",
        "skill": "frontend",
        "gender": "male",
        "salary": 30710.51,
        "bio": "Hardcore alcohol geek. Social media fan. Student. Twitter enthusiast. Freelance web specialist. Certified pop culture lover. Typical internet aficionado.",
        "avatar": "https://i.pravatar.cc/64?u=91"
    },
    {
        "id": 92,
        "friends": [
            84,
            99,
            14,
            30,
            80,
            40,
            35
        ],
        "birthYear": 1986,
        "firstName": "Gilda",
        "lastName": "Donaldson",
        "skill": "frontend",
        "gender": "female",
        "salary": 27051.23,
        "bio": "Reader. Passionate bacon ninja. Alcohol enthusiast. Hipster-friendly writer. Food fan.",
        "avatar": "https://i.pravatar.cc/64?u=92"
    },
    {
        "id": 93,
        "friends": [
            80,
            100,
            61,
            60
        ],
        "birthYear": 1984,
        "firstName": "Shelly",
        "lastName": "Mcclain",
        "skill": "frontend",
        "gender": "female",
        "salary": 37864.02,
        "bio": "Web maven. Food practitioner. Music scholar. Zombie aficionado. Future teen idol. Alcoholaholic. Introvert. Amateur coffee ninja. Explorer.",
        "avatar": "https://i.pravatar.cc/64?u=93"
    },
    {
        "id": 94,
        "friends": [
            40,
            80,
            83,
            99,
            31,
            67,
            9,
            35
        ],
        "birthYear": 1998,
        "firstName": "Bradford",
        "lastName": "Jackson",
        "skill": "backend",
        "gender": "female",
        "salary": 34949,
        "bio": "Unapologetic problem solver. Friend of animals everywhere. Food fanatic. Web expert. Thinker. Organizer. Music fan.",
        "avatar": "https://i.pravatar.cc/64?u=94"
    },
    {
        "id": 95,
        "friends": [
            91,
            69,
            11,
            54,
            71
        ],
        "birthYear": 1997,
        "firstName": "Mitchell",
        "lastName": "Bennett",
        "skill": "frontend",
        "gender": "female",
        "salary": 39063.4,
        "bio": "Music expert. Travel aficionado. Wannabe beer advocate. Communicator. Future teen idol. Tv lover.",
        "avatar": "https://i.pravatar.cc/64?u=95"
    },
    {
        "id": 96,
        "friends": [
            21
        ],
        "birthYear": 1982,
        "firstName": "Mary",
        "lastName": "Velez",
        "skill": "backend",
        "gender": "male",
        "salary": 31300.76,
        "bio": "Evil reader. Food maven. Student. Travel aficionado. Twitter lover. Music fanatic. Web scholar. Passionate bacon enthusiast. Internet guru.",
        "avatar": "https://i.pravatar.cc/64?u=96"
    },
    {
        "id": 97,
        "friends": [
            5,
            15,
            37
        ],
        "birthYear": 1985,
        "firstName": "Gamble",
        "lastName": "Tucker",
        "skill": "backend",
        "gender": "female",
        "salary": 38832.56,
        "bio": "Friendly twitter nerd. Beeraholic. Problem solver. Social media guru. Organizer. Bacon fanatic. General travel geek. Web scholar. Reader.",
        "avatar": "https://i.pravatar.cc/64?u=97"
    },
    {
        "id": 98,
        "friends": [
            89,
            14,
            100,
            73,
            81,
            27
        ],
        "birthYear": 1986,
        "firstName": "Kerr",
        "lastName": "Cortez",
        "skill": "frontend",
        "gender": "male",
        "salary": 25740.54,
        "bio": "Pop cultureaholic. Friendly food lover. Problem solver. Explorer. Communicator. Incurable zombie advocate. Falls down a lot. Internet ninja.",
        "avatar": "https://i.pravatar.cc/64?u=98"
    },
    {
        "id": 99,
        "friends": [
            70,
            21,
            67,
            61,
            1,
            51,
            83,
            71,
            68,
            46
        ],
        "birthYear": 1989,
        "firstName": "Maude",
        "lastName": "Carlson",
        "skill": "backend",
        "gender": "male",
        "salary": 20740.33,
        "bio": "Beer scholar. Travel fan. Gamer. Web practitioner. Troublemaker. Thinker. Bacon fanatic. Professional internet junkie.",
        "avatar": "https://i.pravatar.cc/64?u=99"
    },
    {
        "id": 100,
        "friends": [
            72,
            53,
            23,
            55,
            13,
            75
        ],
        "birthYear": 1986,
        "firstName": "Johanna",
        "lastName": "Frost",
        "skill": "fullstack",
        "gender": "female",
        "salary": 39877.96,
        "bio": "Beer maven. Introvert. Gamer. Troublemaker. Hipster-friendly tv guru. Thinker. Student. Reader.",
        "avatar": "https://i.pravatar.cc/64?u=100"
    }
];

const getUsers = () => Promise.resolve(_users);
const getUser = userId => {
    if (!userId || typeof userId !== 'number') {
        return Promise.reject('Invalid userId type!');
    }

    return Promise.resolve(_users.find(({ id }) => id === userId));
};