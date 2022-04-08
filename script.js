const cardsArr = [
    {
        name: 'club2',
        img: 'images/2_of_clubs.png',
        value: 2
    },
    {
        name: 'club3',
        img: 'images/3_of_clubs.png',
        value: 3
    }
    ,
    {
        name: 'club4',
        img: 'images/4_of_clubs.png',
        value: 4
    }
    ,
    {
        name: 'club5',
        img: 'images/5_of_clubs.png',
        value: 5
    }
    ,
    {
        name: 'club6',
        img: 'images/6_of_clubs.png',
        value: 6
    }
    ,
    {
        name: 'club7',
        img: 'images/7_of_clubs.png',
        value: 7
    }
    ,
    {
        name: 'club8',
        img: 'images/8_of_clubs.png',
        value: 8
    }
    ,
    {
        name: 'club9',
        img: 'images/9_of_clubs.png',
        value: 9
    }
    ,
    {
        name: 'club10',
        img: 'images/10_of_clubs.png',
        value: 10
    }
    ,
    {
        name: 'clubJack',
        img: 'images/jack_of_clubs.png',
        value: 10
    }
    ,
    {
        name: 'clubKing',
        img: 'images/king_of_clubs.png',
        value: 10
    },
    {
        name: 'clubQueen',
        img: 'images/queen_of_clubs.png',
        value: 10
    },
    {
        name: 'clubAce',
        img: 'images/ace_of_clubs.png',
        value: 11
    },
    {
        name: 'diamonds2',
        img: 'images/2_of_diamonds.png',
        value: 2
    },
    {
        name: 'diamonds3',
        img: 'images/3_of_diamonds.png',
        value: 3
    }
    ,
    {
        name: 'diamonds4',
        img: 'images/4_of_diamonds.png',
        value: 4
    }
    ,
    {
        name: 'diamonds',
        img: 'images/5_of_diamonds.png',
        value: 5
    }
    ,
    {
        name: 'diamonds6',
        img: 'images/6_of_diamonds.png',
        value: 6
    }
    ,
    {
        name: 'diamonds7',
        img: 'images/7_of_diamonds.png',
        value: 7
    }
    ,
    {
        name: 'diamonds8',
        img: 'images/8_of_diamonds.png',
        value: 8
    }
    ,
    {
        name: 'diamonds9',
        img: 'images/9_of_diamonds.png',
        value: 9
    }
    ,
    {
        name: 'diamonds10',
        img: 'images/10_of_diamonds.png',
        value: 10
    }
    ,
    {
        name: 'diamondsJack',
        img: 'images/jack_of_diamonds.png',
        value: 10
    }
    ,
    {
        name: 'diamondsKing',
        img: 'images/king_of_diamonds.png',
        value: 10
    },
    {
        name: 'diamondsQueen',
        img: 'images/queen_of_diamonds.png',
        value: 10
    },
    {
        name: 'diamondsAce',
        img: 'images/ace_of_diamonds.png',
        value: 11
    },    {
        name: 'spades2',
        img: 'images/2_of_spades.png',
        value: 2
    },
    {
        name: 'spades3',
        img: 'images/3_of_spades.png',
        value: 3
    }
    ,
    {
        name: 'spades4',
        img: 'images/4_of_spades.png',
        value: 4
    }
    ,
    {
        name: 'spades5',
        img: 'images/5_of_spades.png',
        value: 5
    }
    ,
    {
        name: 'spades6',
        img: 'images/6_of_spades.png',
        value: 6
    }
    ,
    {
        name: 'spades7',
        img: 'images/7_of_spades.png',
        value: 7
    }
    ,
    {
        name: 'spades8',
        img: 'images/8_of_spades.png',
        value: 8
    }
    ,
    {
        name: 'spades',
        img: 'images/9_of_spades.png',
        value: 9
    }
    ,
    {
        name: 'spades10',
        img: 'images/10_of_spades.png',
        value: 10
    }
    ,
    {
        name: 'spadesJack',
        img: 'images/jack_of_spades.png',
        value: 10
    }
    ,
    {
        name: 'spadesKing',
        img: 'images/king_of_spades.png',
        value: 10
    },
    {
        name: 'spadesQueen',
        img: 'images/queen_of_spades.png',
        value: 10
    },
    {
        name: 'spadesAce',
        img: 'images/ace_of_spades.png',
        value: 11
    },    {
        name: 'hearts2',
        img: 'images/2_of_hearts.png',
        value: 2
    },
    {
        name: 'hearts3',
        img: 'images/3_of_hearts.png',
        value: 3
    }
    ,
    {
        name: 'hearts4',
        img: 'images/4_of_hearts.png',
        value: 4
    }
    ,
    {
        name: 'hearts5',
        img: 'images/5_of_hearts.png',
        value: 5
    }
    ,
    {
        name: 'hearts6',
        img: 'images/6_of_hearts.png',
        value: 6
    }
    ,
    {
        name: 'hearts7',
        img: 'images/7_of_hearts.png',
        value: 7
    }
    ,
    {
        name: 'hearts8',
        img: 'images/8_of_hearts.png',
        value: 8
    }
    ,
    {
        name: 'hearts9',
        img: 'images/9_of_hearts.png',
        value: 9
    }
    ,
    {
        name: 'hearts10',
        img: 'images/10_of_hearts.png',
        value: 10
    }
    ,
    {
        name: 'heartsJack',
        img: 'images/jack_of_hearts.png',
        value: 10
    }
    ,
    {
        name: 'heartsKing',
        img: 'images/king_of_hearts.png',
        value: 10
    },
    {
        name: 'heartsQueen',
        img: 'images/queen_of_hearts.png',
        value: 10
    },
    {
        name: 'heartsAce',
        img: 'images/ace_of_hearts.png',
        value: 11
    }
]

//element and Buttons

//Table cards are here
const table = document.querySelector('.table')
const playerSide = document.querySelector('.player')
const dealerSide = document.querySelector('.dealer')

//bet and credit
const bets = document.querySelector('currentBet')
const credits = document.querySelector('currentCredit')

//Start button is needed to be click to start game
//It reset credit and bets and everything to default
let startBtn = document.querySelector('#start')

//dealing button: After each round click it to get cards
let dealingBtn = document.querySelector('#dealing')

let hitBtn= document.querySelector('#hit')
let stayBtn= document.querySelector('#stay')

//