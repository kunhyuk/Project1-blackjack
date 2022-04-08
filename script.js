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
//disable buttons
hitBtn.disabled = true;
stayBtn.disabled = true;
dealingBtn.disabled = true;

//dealer and player's hand
let dealer = {hand:[], isFaceDown: true}
let player = {hand:[], bet:25, credit:1000, numberofCards: 0}
//let isStarted = false;

//deck is what we use in one game
let deck = [...cardsArr]

//cards on talbe as image
function dealerCard(arr) {    
    if (dealer.isFaceDown) {
    let backImg = document.createElement('img')
    backImg.setAttribute('src', 'images/back.jpg')
    backImg.style.width = `200px`
    backImg.style.height = `200px`
    dealerSide.appendChild(backImg)
    for (let i = 1; i < arr.length; i++) {
    let images = document.createElement('img')
    images.setAttribute('src', arr[i].img)
    images.setAttribute('data-id', i)
    images.style.width = `200px`
    images.style.height = `200px`
    dealerSide.appendChild(images)
}
} else {

for (let i = 0; i < arr.length; i++) {
    let images = document.createElement('img')
    images.setAttribute('src', arr[i].img)
    images.setAttribute('data-id', i)
    images.style.width = `200px`
    images.style.height = `200px`
    dealerSide.appendChild(images)
} 
}
    // let images = document.createElement('img')
    // images.setAttribute('src', arr[i].img)
    // images.setAttribute('data-id', i)
    // images.style.width = `200px`
    // images.style.height = `200px`
    // dealerSide.appendChild(images)
}
function playerCard(arr) {
    //playerSide.removeChild()
    for (let i = 0; i < arr.length; i++) {
        let images = document.createElement('img')
        images.setAttribute('src', arr[i].img)
        images.setAttribute('data-id', i)
        images.style.width = `200px`
        images.style.height = `200px`
        playerSide.appendChild(images)
    } 
}

//shuffle function shuffle the array on top of this js file
function shuffle() {
    for (let i = cardsArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
    }
    deck = [...cardsArr]  
}

//when event happen delete previouse images on screen
function removeAllPreviousCards(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

//empty hand of dealer and player
function emptyHands() {
    dealer.hand.length = 0
    player.hand.length = 0
}

//Question
function sumCard(arr) {
    let sum = 0;
    for (let i = 0; i < arr; i++) {
        sum+= arr[i].value;
    }
    return sum;
}


function sumPlayerHand() {
    let sum = 0;
    for (let i = 0; i < player.hand.length; i++) {
        sum+= player.hand[i].value;
    }
    return sum
}

function sumDealerHand() {
    let sum = 0;
    for (let i = 0; i < dealer.hand.length; i++) {
        sum+= dealer.hand[i].value;
    }
    return sum
}

function untilOverSixteen() {
   while (sumDealerHand() < 17) {
    dealer.hand.push(deck.pop())
   }
}

function displayBetAndCredit() {
    document.getElementById("currentCredit").innerHTML = `Current Credit ${player.credit}`
    document.getElementById("currentBet").innerHTML = `Current Bet ${player.bet}`
}

//Buttons
startBtn.addEventListener('click', ()=> {
    alert('Game started')
    removeAllPreviousCards(dealerSide)
    removeAllPreviousCards(playerSide)
    emptyHands()
    shuffle()
    dealer = {hand:[], isFaceDown: true}
    player = {hand:[], bet:25, credit:1000, numberofCards: 2}
    dealer.hand.push(deck.pop())
    dealer.hand.push(deck.pop())
    player.hand.push(deck.pop())
    player.hand.push(deck.pop())
    dealer.isFaceDown = true;
    playerCard(player.hand)
    dealerCard(dealer.hand)

    hitBtn.disabled = false;
    stayBtn.disabled = false;
    //dealingBtn.disabled = false;
    
    if (sumPlayerHand() === 21) {
        alert('Blackjack')
        player.credit = player.credit + player.bet
        hitBtn.disabled = true;
        stayBtn.disabled = true;
        dealingBtn.disabled = false;
    }

    displayBetAndCredit()
})

hitBtn.addEventListener('click', () => {
    //disalbe double button
    removeAllPreviousCards(playerSide)
    player.hand.push(deck.pop())
    playerCard(player.hand)
    player.numberofCards++;
    
    console.log(sumPlayerHand())

    if (sumPlayerHand() > 21) {
        alert('bust')
        dealer.isFaceDown = false;
        dealerCard(dealer.hand)
        player.credit = player.credit - player.bet
        hitBtn.disabled = true;
        stayBtn.disabled = true;
        dealingBtn.disabled = false;
    } else {
        alert('hit')
        dealingBtn.disabled = true;
        hitBtn.disabled = false;
        stayBtn.disabled = false;
    }
    displayBetAndCredit()
})

stayBtn.addEventListener('click', () => {
    removeAllPreviousCards(dealerSide)
    dealer.isFaceDown = false;
    if (sumDealerHand() < 16) {
        untilOverSixteen()
    }
    dealerCard(dealer.hand)

    if (sumDealerHand() === sumPlayerHand()) {
        alert('draw')
        
    } else if (sumPlayerHand() > sumDealerHand()) {
        alert('Table win')
        player.credit = player.credit + player.bet
        
    } else {
        alert('Dealer win')
        player.credit = player.credit - player.bet
    }
    hitBtn.disabled = true;
    stayBtn.disabled = true;
    dealingBtn.disabled = false;

    displayBetAndCredit()
})

dealingBtn.addEventListener('click', () => {
    dealer.isFaceDown = true;
    removeAllPreviousCards(dealerSide)
    removeAllPreviousCards(playerSide)
    emptyHands()
    // shuffle()
    // dealer = {hand:[], isFaceDown: true}
    // player = {hand:[], bet:25, credit:1000, numberofCards: 2}
    dealer.hand.push(deck.pop())
    dealer.hand.push(deck.pop())
    player.hand.push(deck.pop())
    player.hand.push(deck.pop())
    player.numberofCards = 2;
    dealer.isFaceDown = true;
    playerCard(player.hand)
    dealerCard(dealer.hand)

    hitBtn.disabled = false;
    stayBtn.disabled = false;
    dealingBtn.disabled = true;
    
    if (sumPlayerHand() === 21) {
        alert('Blackjack')
        player.credit = player.credit + player.bet
        hitBtn.disabled = true;
        stayBtn.disabled = true;
    }

    displayBetAndCredit()

})

