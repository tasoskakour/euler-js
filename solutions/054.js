/*
    Problem 54 - Poker hands
    https://projecteuler.net/problem=54
*/
const fs = require('fs');
const CARD_ARITHMETIC = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'T': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
}

module.exports = () => {

    class PokerHand {
        constructor(hand) { // hand as a plain string e.g 8C TS KC 9H 4S
            this.hand = hand.split(' ')
                .map(h => Object.assign({}, { 'value': h[0], 'suit': h[1] }))
                .sort((a, b) => parseFloat(CARD_ARITHMETIC[a.value]) - parseFloat(CARD_ARITHMETIC[b.value]));
            let tmp = {};
            this.hand.forEach((card) => {
                tmp[card.value] = tmp[card.value] ? tmp[card.value] + 1 : 1;
            })
            this.cardsCount = tmp;
        }
        // 0: The hand has nothing. Just return rank 0
        checkHandHasNothing() {
            this.score = {
                rank: 0,
                value: []
            };
            this.remainingHand = JSON.parse(JSON.stringify(this.hand));
        }
        // 1: Check One Pair and return the value of pair
        checkOnePair() {
            for (let key in this.cardsCount) {
                if (this.cardsCount[key] === 2) {
                    this.score = {
                        rank: 1,
                        value: [key]
                    };
                    this.remainingHand = this.hand.filter((card) => !this.score.value.includes(card.value))
                }
            }
        }
        // 2: Check Two Pairs and return the value of the pairs in descending order
        checkTwoPairs() {
            let gotOnePair = false;
            let keyOnePair;
            for (let key in this.cardsCount) {
                if (this.cardsCount[key] === 2) {
                    if (gotOnePair) {
                        this.score = {
                            rank: 2,
                            value: [keyOnePair, key].sort((a, b) => parseFloat(CARD_ARITHMETIC[a.value]) - parseFloat(CARD_ARITHMETIC[b.value])).reverse()
                        };
                        this.remainingHand = this.hand.filter((card) => !this.score.value.includes(card.value))
                    } else {
                        gotOnePair = true;
                        keyOnePair = key;
                    }
                }
            }
        }
        // 3: Check Three of a Kind and return the threes
        checkThreeOfAKind() {
            for (let key in this.cardsCount) {
                if (this.cardsCount[key] === 3) {
                    this.remainingHand = [];
                    this.score = {
                        rank: 3,
                        value: [key]
                    }
                }
            }
        }
        // 4: Check Straight and returns the sum
        checkStraight() {
            // First Straight: A,2,3,4,5
            if (this.hand[0].value === '2' && this.hand[1].value === '3' && this.hand[2].value === '4'
                && this.hand[3].value === '5' && this.hand[4].value === 'A') {
                this.remainingHand = [];
                this.score = {
                    rank: 4,
                    value: 15
                }
            } else {
                let is = true;
                for (let i = 1; i < this.hand.length; i++) {
                    if (CARD_ARITHMETIC[this.hand[i].value] - CARD_ARITHMETIC[this.hand[i - 1].value] !== 1) {
                        is = false;
                        break;
                    }
                }
                if (is) {
                    this.remainingHand = [];
                    this.score = {
                        rank: 4,
                        value: [this.hand.reduce((a, b) => a + CARD_ARITHMETIC[b.value], 0)]
                    }
                }
            }
        }
        // 5: Check Flush
        checkFlush() {
            if (this.hand.every(card => card.suit === this.hand[0].suit)) {
                this.remainingHand = JSON.parse(JSON.stringify(this.hand));
                this.score = {
                    rank: 5,
                    value: []
                }
            }
        }
        // 6: Check Full House and returns the value of the three cards of the full house
        checkFullHouse() {
            let threes;
            let gotThree = false; let gotTwo = false;
            for (let key in this.cardsCount) {
                if (this.cardsCount[key] === 3) {
                    threes = key;
                    gotThree = true;
                }
                if (this.cardsCount[key] === 2) {
                    gotTwo = true;
                }
            }
            if (gotThree && gotTwo) {
                this.remainingHand = [];
                this.score = {
                    rank: 6,
                    value: [threes]
                }
            }
        }
        // 7: Check Four of a kind and returns the value of the four of a kind
        checkFourOfAKind() {
            let is = false;
            for (let key in this.cardsCount) {
                if (this.cardsCount[key] === 4) {
                    is = key;
                }
            }
            if (is) {
                this.remainingHand = [];
                this.score = {
                    rank: 7,
                    value: [is]
                }
            }
        }
        // 8: Check Straight Flush and returns the sum
        checkStraightFlush() {
            if (this.hand.every(card => card.suit === this.hand[0].suit)) {
                if (this.hand[0].value === '2' && this.hand[1].value === '3' && this.hand[2].value === '4'
                    && this.hand[3].value === '5' && this.hand[4].value === 'A') {
                    this.remainingHand = [];
                    this.score = {
                        rank: 8,
                        value: 15
                    }
                } else {
                    let isStraight = true;
                    for (let i = 1; i < this.hand.length; i++) {
                        if (CARD_ARITHMETIC[this.hand[i].value] - CARD_ARITHMETIC[this.hand[i - 1].value] !== 1) {
                            isStraight = false;
                            break;
                        }
                    }
                    if (isStraight) {
                        this.remainingHand = [];
                        this.score = {
                            rank: 8,
                            value: [this.hand.reduce((a, b) => a + CARD_ARITHMETIC[b.value], 0)]
                        }
                    }
                }
            }
        }
        // 9: Check Royal Flush
        checkRoyalFlush() {
            let is = false;
            if (this.hand.every(card => card.suit === this.hand[0].suit)) {
                let vals = ['T', 'J', 'Q', 'K', 'A'];
                this.hand.forEach((card) => {
                    let ind = vals.indexOf(card.value);
                    if (ind !== -1) {
                        vals.splice(ind, 1);
                    }
                });
                if (vals.length === 0) {
                    is = true;
                }
            }
            if (is) {
                this.remainingHand = [];
                this.score = {
                    rank: 9,
                    value: []
                }
            }
        }
        // Get the score of the hand
        computeHandRank() {
            const functions = [this.checkRoyalFlush.bind(this), this.checkStraightFlush.bind(this),
            this.checkFourOfAKind.bind(this), this.checkFullHouse.bind(this), this.checkFlush.bind(this),
            this.checkStraight.bind(this), this.checkThreeOfAKind.bind(this), this.checkTwoPairs.bind(this),
            this.checkOnePair.bind(this), this.checkHandHasNothing.bind(this)]
            let i = 0;
            while (this.score === undefined) {
                functions[i]();
                i++;
            }
        }
    }

    // Main begins here
    let count = 0;
    fs.readFileSync('utilities/problems-data/p054_poker.txt', 'utf8')
        .split('\n')
        .slice(0, -1)
        .forEach((row, i) => {
            let h1 = new PokerHand(row.substring(0, 14));
            let h2 = new PokerHand(row.substring(15));
            h1.computeHandRank();
            h2.computeHandRank();
            let winner = getHandWinner(h1, h2);
            if (winner === 1) {
                count++;
            }
        })
    return count;
}


const getHandWinner = (hand1, hand2) => {
    if (hand1.score.rank !== hand2.score.rank) {
        return hand1.score.rank > hand2.score.rank ? 1 : 2
    } else {
        if (!arraysEqual(hand1.score.value, hand2.score.value)) {
            for (let i = 0; i < hand1.score.value.length; i++) {
                if (CARD_ARITHMETIC[hand1.score.value[i]] > CARD_ARITHMETIC[hand2.score.value[i]]) {
                    return 1;
                } else if (CARD_ARITHMETIC[hand1.score.value[i]] < CARD_ARITHMETIC[hand2.score.value[i]]) {
                    return 2;
                }
            }
        } else {
            // The winner will be judged from highest cards remaining (both have same value 1-pair|2-pair or flush)
            for (let i = hand1.remainingHand.length - 1; i >= 0; i--) {
                if (CARD_ARITHMETIC[hand1.remainingHand[i].value] > CARD_ARITHMETIC[hand2.remainingHand[i].value]) {
                    return 1;
                } else if (CARD_ARITHMETIC[hand1.remainingHand[i].value] < CARD_ARITHMETIC[hand2.remainingHand[i].value]) {
                    return 2;
                }
            }
        }
    }
}

const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}