import './GameNormal.css'
import React from "react";
import Menu from '../Menu/Menu'

export default class GameNormal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: false,
            startButton: 'grid',
            cards: [],
            runningTime: 0, timerIsActive: false,
            gameOver: false,
            lastCardFlipped: -1,
            firstUncoveredCardContent: '', firstUncoveredCardId: -1,
            secondUncoveredCardContent: '', secondUncoveredCardId: -1,

            cardFlippedA: false, cardBackA: '', cardContentA: '', cardVisibleA: 'visible', cardIsVisibleA: true,
            cardFlippedB: false, cardBackB: '', cardContentB: '', cardVisibleB: 'visible', cardIsVisibleB: true,
            cardFlippedC: false, cardBackC: '', cardContentC: '', cardVisibleC: 'visible', cardIsVisibleC: true,
            cardFlippedD: false, cardBackD: '', cardContentD: '', cardVisibleD: 'visible', cardIsVisibleD: true,

            cardFlippedE: false, cardBackE: '', cardContentE: '', cardVisibleE: 'visible', cardIsVisibleE: true,
            cardFlippedF: false, cardBackF: '', cardContentF: '', cardVisibleF: 'visible', cardIsVisibleF: true,
            cardFlippedG: false, cardBackG: '', cardContentG: '', cardVisibleG: 'visible', cardIsVisibleG: true,
            cardFlippedH: false, cardBackH: '', cardContentH: '', cardVisibleH: 'visible', cardIsVisibleH: true,

            cardFlippedI: false, cardBackI: '', cardContentI: '', cardVisibleI: 'visible', cardIsVisibleI: true,
            cardFlippedJ: false, cardBackJ: '', cardContentJ: '', cardVisibleJ: 'visible', cardIsVisibleJ: true,
            cardFlippedK: false, cardBackK: '', cardContentK: '', cardVisibleK: 'visible', cardIsVisibleK: true,
            cardFlippedL: false, cardBackL: '', cardContentL: '', cardVisibleL: 'visible', cardIsVisibleL: true,

            cardFlippedM: false, cardBackM: '', cardContentM: '', cardVisibleM: 'visible', cardIsVisibleM: true,
            cardFlippedN: false, cardBackN: '', cardContentN: '', cardVisibleN: 'visible', cardIsVisibleN: true,
            cardFlippedO: false, cardBackO: '', cardContentO: '', cardVisibleO: 'visible', cardIsVisibleO: true,
            cardFlippedP: false, cardBackP: '', cardContentP: '', cardVisibleP: 'visible', cardIsVisibleP: true,
        }
    }
    setMenu = () => { this.setState({ menu: !this.state.menu }) }
    setReset = () => {
        this.setState({
            startButton: 'grid',
            cards: [],
            runningTime: 0, timerIsActive: false,
            gameOver: false,
            lastCardFlipped: -1,
            firstUncoveredCardContent: '', firstUncoveredCardId: -1,
            secondUncoveredCardContent: '', secondUncoveredCardId: -1,

            cardFlippedA: false, cardBackA: '', cardContentA: '', cardVisibleA: 'visible', cardIsVisibleA: true,
            cardFlippedB: false, cardBackB: '', cardContentB: '', cardVisibleB: 'visible', cardIsVisibleB: true,
            cardFlippedC: false, cardBackC: '', cardContentC: '', cardVisibleC: 'visible', cardIsVisibleC: true,
            cardFlippedD: false, cardBackD: '', cardContentD: '', cardVisibleD: 'visible', cardIsVisibleD: true,

            cardFlippedE: false, cardBackE: '', cardContentE: '', cardVisibleE: 'visible', cardIsVisibleE: true,
            cardFlippedF: false, cardBackF: '', cardContentF: '', cardVisibleF: 'visible', cardIsVisibleF: true,
            cardFlippedG: false, cardBackG: '', cardContentG: '', cardVisibleG: 'visible', cardIsVisibleG: true,
            cardFlippedH: false, cardBackH: '', cardContentH: '', cardVisibleH: 'visible', cardIsVisibleH: true,

            cardFlippedI: false, cardBackI: '', cardContentI: '', cardVisibleI: 'visible', cardIsVisibleI: true,
            cardFlippedJ: false, cardBackJ: '', cardContentJ: '', cardVisibleJ: 'visible', cardIsVisibleJ: true,
            cardFlippedK: false, cardBackK: '', cardContentK: '', cardVisibleK: 'visible', cardIsVisibleK: true,
            cardFlippedL: false, cardBackL: '', cardContentL: '', cardVisibleL: 'visible', cardIsVisibleL: true,

            cardFlippedM: false, cardBackM: '', cardContentM: '', cardVisibleM: 'visible', cardIsVisibleM: true,
            cardFlippedN: false, cardBackN: '', cardContentN: '', cardVisibleN: 'visible', cardIsVisibleN: true,
            cardFlippedO: false, cardBackO: '', cardContentO: '', cardVisibleO: 'visible', cardIsVisibleO: true,
            cardFlippedP: false, cardBackP: '', cardContentP: '', cardVisibleP: 'visible', cardIsVisibleP: true

        })
        this.deleteCards('all')
        this.stopTimer()
    }
    startGame = () => {
        this.setState({
            startButton: 'none',
            cards: this.generateCards(),
            cardBackA: 'card', cardVisibleA: 'visible', cardIsVisibleA: true, cardFlippedA: false,
            cardBackB: 'card', cardVisibleB: 'visible', cardIsVisibleB: true, cardFlippedB: false,
            cardBackC: 'card', cardVisibleC: 'visible', cardIsVisibleC: true, cardFlippedC: false,
            cardBackD: 'card', cardVisibleD: 'visible', cardIsVisibleD: true, cardFlippedD: false,

            cardBackE: 'card', cardVisibleE: 'visible', cardIsVisibleE: true, cardFlippedE: false,
            cardBackF: 'card', cardVisibleF: 'visible', cardIsVisibleF: true, cardFlippedF: false,
            cardBackG: 'card', cardVisibleG: 'visible', cardIsVisibleG: true, cardFlippedG: false,
            cardBackH: 'card', cardVisibleH: 'visible', cardIsVisibleH: true, cardFlippedH: false,

            cardBackI: 'card', cardVisibleI: 'visible', cardIsVisibleI: true, cardFlippedI: false,
            cardBackJ: 'card', cardVisibleJ: 'visible', cardIsVisibleJ: true, cardFlippedJ: false,
            cardBackK: 'card', cardVisibleK: 'visible', cardIsVisibleK: true, cardFlippedK: false,
            cardBackL: 'card', cardVisibleL: 'visible', cardIsVisibleL: true, cardFlippedL: false,

            cardBackM: 'card', cardVisibleM: 'visible', cardIsVisibleM: true, cardFlippedM: false,
            cardBackN: 'card', cardVisibleN: 'visible', cardIsVisibleN: true, cardFlippedN: false,
            cardBackO: 'card', cardVisibleO: 'visible', cardIsVisibleO: true, cardFlippedO: false,
            cardBackP: 'card', cardVisibleP: 'visible', cardIsVisibleP: true, cardFlippedP: false
        })
        this.startTimer()
    }
    generateCardSet = () => {
        const easySmileys =
            ['😀', '😅', '😂', '🙃', '😇', '🥰', '🤪', '🤑', '🤐', '😶',
                '🤨', '🙄', '😪', '🤢', '🥵', '🥶', '🤠', '😎', '😳', '😱']
        const easyAnimals =
            ['🙊', '🐶', '🦊', '🐱', '🦁', '🦄', '🐷', '🐭', '🐹', '🐻',
                '🐼', '🐦', '🐧', '🐸', '🐲', '🐟', '🦋', '🕷️', '🐣', '🦔']
        const easyFood =
            ['🍉', '🍋', '🍇', '🍌', '🍍', '🍎', '🍑', '🍒', '🍓', '🍆',
                '🍄', '🍞', '🍖', '🍟', '🍔', '🍕', '🌭', '🍿', '🍪', '🍬']
        const easyActivity =
            ['🏂', '🏄', '🚴', '🤸', '🤹', '⚽', '🏀', '⚾', '🎹', '🎳',
                '🏓', '🥊', '🎯', '🎮', '🎲', '🥁', '🎸', '🏆', '🤼', '🧗']
        const easyTravel =
            ['⛰️', '🌋', '🏖️', '🏝️', '🏕️', '🏟️', '🏰', '🗼', '🗽', '⛩️',
                '🌅', '🎢', '🚕', '✈️', '🚢', '⛵', '🚁', '🚀', '🏨', '🏛️']
        const easyAll = easySmileys.concat(easyAnimals, easyFood, easyActivity, easyTravel)

        const makeItHarder = (easySet) => {
            const harderSet = []
            for (let i = 0; i < 15; i++) {
                const index1 = Math.floor(Math.random() * easySet.length)
                const randomElement1 = easySet[index1]
                const index2 = Math.floor(Math.random() * easySet.length)
                const randomElement2 = easySet[index2]
                easySet.splice(index1, 1)
                const randomElement = randomElement1 + randomElement2
                harderSet.push(randomElement)
            }
            return harderSet
        }

        const smileys = makeItHarder(easySmileys)
        const animals = makeItHarder(easyAnimals)
        const food = makeItHarder(easyFood)
        const activity = makeItHarder(easyActivity)
        const travel = makeItHarder(easyTravel)
        const all = makeItHarder(easyAll)

        let chosenSet
        switch (this.props.cardSet) {
            case 'Smileys': chosenSet = smileys; break
            case 'Animals': chosenSet = animals; break
            case 'Food': chosenSet = food; break
            case 'Activity': chosenSet = activity; break
            case 'Travel': chosenSet = travel; break
            default: chosenSet = all; break
        }
        const cards = []

        for (let i = 0; i < 8; i++) {
            const index = Math.floor(Math.random() * chosenSet.length)
            const randomElement = chosenSet[index]
            chosenSet.splice(index, 1)
            cards.push(randomElement)
        }

        return cards
    }
    generateCards = () => {

        const cards = []
        const fronts = this.generateCardSet()


        for (let i = 0; i < 16; i += 2) {
            cards.push(
                {
                    card: <p className="card">{fronts[i / 2]}</p>,
                    index: fronts[i / 2]
                }
            )
            cards.push(
                {
                    card: <p className="card">{fronts[i / 2]}</p>,
                    index: fronts[i / 2]
                }
            )
        }

        // shuffle cards
        let currentIndex = cards.length, randomIndex
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [cards[currentIndex], cards[randomIndex]] =
                [cards[randomIndex], cards[currentIndex]]
        }

        const cardsContent = []
        const cardsIndexes = []
        for (let i = 0; i < cards.length; i++) {
            cardsContent.push(
                cards[i].card
            )
        }
        for (let i = 0; i < cards.length; i++) {
            cardsIndexes.push(
                cards[i].index
            )
        }
        this.setState({
            cardContentA: cardsIndexes[0],
            cardContentB: cardsIndexes[1],
            cardContentC: cardsIndexes[2],
            cardContentD: cardsIndexes[3],
            cardContentE: cardsIndexes[4],
            cardContentF: cardsIndexes[5],
            cardContentG: cardsIndexes[6],
            cardContentH: cardsIndexes[7],
            cardContentI: cardsIndexes[8],
            cardContentJ: cardsIndexes[9],
            cardContentK: cardsIndexes[10],
            cardContentL: cardsIndexes[11],
            cardContentM: cardsIndexes[12],
            cardContentN: cardsIndexes[13],
            cardContentO: cardsIndexes[14],
            cardContentP: cardsIndexes[15]
        })
        return cardsContent
    }

    flipCardA = () => { this.setState({ cardFlippedA: !this.state.cardFlippedA }); this.onCardFlip(0) }
    flipCardB = () => { this.setState({ cardFlippedB: !this.state.cardFlippedB }); this.onCardFlip(1) }
    flipCardC = () => { this.setState({ cardFlippedC: !this.state.cardFlippedC }); this.onCardFlip(2) }
    flipCardD = () => { this.setState({ cardFlippedD: !this.state.cardFlippedD }); this.onCardFlip(3) }
    flipCardE = () => { this.setState({ cardFlippedE: !this.state.cardFlippedE }); this.onCardFlip(4) }
    flipCardF = () => { this.setState({ cardFlippedF: !this.state.cardFlippedF }); this.onCardFlip(5) }
    flipCardG = () => { this.setState({ cardFlippedG: !this.state.cardFlippedG }); this.onCardFlip(6) }
    flipCardH = () => { this.setState({ cardFlippedH: !this.state.cardFlippedH }); this.onCardFlip(7) }
    flipCardI = () => { this.setState({ cardFlippedI: !this.state.cardFlippedI }); this.onCardFlip(8) }
    flipCardJ = () => { this.setState({ cardFlippedJ: !this.state.cardFlippedJ }); this.onCardFlip(9) }
    flipCardK = () => { this.setState({ cardFlippedK: !this.state.cardFlippedK }); this.onCardFlip(10) }
    flipCardL = () => { this.setState({ cardFlippedL: !this.state.cardFlippedL }); this.onCardFlip(11) }
    flipCardM = () => { this.setState({ cardFlippedM: !this.state.cardFlippedM }); this.onCardFlip(12) }
    flipCardN = () => { this.setState({ cardFlippedN: !this.state.cardFlippedN }); this.onCardFlip(13) }
    flipCardO = () => { this.setState({ cardFlippedO: !this.state.cardFlippedO }); this.onCardFlip(14) }
    flipCardP = () => { this.setState({ cardFlippedP: !this.state.cardFlippedP }); this.onCardFlip(15) }

    onCardFlip = (id) => {
        let uncoveredCards =
            this.state.cardFlippedA + this.state.cardFlippedB + this.state.cardFlippedC + this.state.cardFlippedD +
            this.state.cardFlippedE + this.state.cardFlippedF + this.state.cardFlippedG + this.state.cardFlippedH +
            this.state.cardFlippedI + this.state.cardFlippedJ + this.state.cardFlippedK + this.state.cardFlippedL +
            this.state.cardFlippedM + this.state.cardFlippedN + this.state.cardFlippedO + this.state.cardFlippedP

        let cardsLeft =
            this.state.cardIsVisibleA + this.state.cardIsVisibleB + this.state.cardIsVisibleC + this.state.cardIsVisibleD +
            this.state.cardIsVisibleE + this.state.cardIsVisibleF + this.state.cardIsVisibleG + this.state.cardIsVisibleH +
            this.state.cardIsVisibleI + this.state.cardIsVisibleJ + this.state.cardIsVisibleK + this.state.cardIsVisibleL +
            this.state.cardIsVisibleM + this.state.cardIsVisibleN + this.state.cardIsVisibleO + this.state.cardIsVisibleP

        let cardContent
        switch (id) {
            case 0: cardContent = this.state.cardContentA; break
            case 1: cardContent = this.state.cardContentB; break
            case 2: cardContent = this.state.cardContentC; break
            case 3: cardContent = this.state.cardContentD; break
            case 4: cardContent = this.state.cardContentE; break
            case 5: cardContent = this.state.cardContentF; break
            case 6: cardContent = this.state.cardContentG; break
            case 7: cardContent = this.state.cardContentH; break
            case 8: cardContent = this.state.cardContentI; break
            case 9: cardContent = this.state.cardContentJ; break
            case 10: cardContent = this.state.cardContentK; break
            case 11: cardContent = this.state.cardContentL; break
            case 12: cardContent = this.state.cardContentM; break
            case 13: cardContent = this.state.cardContentN; break
            case 14: cardContent = this.state.cardContentO; break
            case 15: cardContent = this.state.cardContentP; break
            default: console.log("Something went terribly wrong")
        }

        if (uncoveredCards === 2) { this.hideCards() }

        if (cardsLeft === 2 && uncoveredCards === 1) {
            this.deleteCards('all')
            this.stopTimer()
            this.setState({ gameOver: true })
            console.log('GAME ENDS NOW!')
            console.log('GAME ENDS NOW!')
            console.log('GAME ENDS NOW!')
            cardsLeft = 0
            uncoveredCards = 0
        }
        if (uncoveredCards === 0) {
            this.setState({
                firstUncoveredCardContent: '', secondUncoveredCardContent: '',
                firstUncoveredCardId: -1, secondUncoveredCardId: -1
            })
        }
        if (this.state.firstUncoveredCardContent === this.state.secondUncoveredCardContent && uncoveredCards === 2) {
            this.deleteCards(this.state.firstUncoveredCardId)
            this.deleteCards(this.state.secondUncoveredCardId)
            this.setState({
                firstUncoveredCardContent: '', secondUncoveredCardContent: '',
                firstUncoveredCardId: -1, secondUncoveredCardId: -1
            })
        }

        if (this.state.firstUncoveredCardContent === '' && uncoveredCards > 0 && this.state.lastCardFlipped !== id) {
            this.setState({
                firstUncoveredCardContent: cardContent,
                firstUncoveredCardId: id,
                lastCardFlipped: id
            })
        }
        else if (this.state.secondUncoveredCardContent === '') {
            this.setState({
                secondUncoveredCardContent: cardContent,
                secondUncoveredCardId: id,
                lastCardFlipped: id
            })
        } else {
            this.setState({
                firstUncoveredCardContent: '', secondUncoveredCardContent: '',
                firstUncoveredCardId: -1, secondUncoveredCardId: -1
            })
        }

        // console.log("first card:" + this.state.firstUncoveredCardContent)
        // console.log("second card: " + this.state.secondUncoveredCardContent)
        // console.log("cardsLeft: " + cardsLeft)
        // console.log("uncoveredCards: " + uncoveredCards)
        // console.log("last card flipped: " + this.state.lastCardFlipped)
    }

    deleteCardA = () => { this.setState({ cardVisibleA: 'hidden', cardIsVisibleA: false }) }
    deleteCardB = () => { this.setState({ cardVisibleB: 'hidden', cardIsVisibleB: false }) }
    deleteCardC = () => { this.setState({ cardVisibleC: 'hidden', cardIsVisibleC: false }) }
    deleteCardD = () => { this.setState({ cardVisibleD: 'hidden', cardIsVisibleD: false }) }
    deleteCardE = () => { this.setState({ cardVisibleE: 'hidden', cardIsVisibleE: false }) }
    deleteCardF = () => { this.setState({ cardVisibleF: 'hidden', cardIsVisibleF: false }) }
    deleteCardG = () => { this.setState({ cardVisibleG: 'hidden', cardIsVisibleG: false }) }
    deleteCardH = () => { this.setState({ cardVisibleH: 'hidden', cardIsVisibleH: false }) }
    deleteCardI = () => { this.setState({ cardVisibleI: 'hidden', cardIsVisibleI: false }) }
    deleteCardJ = () => { this.setState({ cardVisibleJ: 'hidden', cardIsVisibleJ: false }) }
    deleteCardK = () => { this.setState({ cardVisibleK: 'hidden', cardIsVisibleK: false }) }
    deleteCardL = () => { this.setState({ cardVisibleL: 'hidden', cardIsVisibleL: false }) }
    deleteCardM = () => { this.setState({ cardVisibleM: 'hidden', cardIsVisibleM: false }) }
    deleteCardN = () => { this.setState({ cardVisibleN: 'hidden', cardIsVisibleN: false }) }
    deleteCardO = () => { this.setState({ cardVisibleO: 'hidden', cardIsVisibleO: false }) }
    deleteCardP = () => { this.setState({ cardVisibleP: 'hidden', cardIsVisibleP: false }) }

    deleteCards = (id) => {
        switch (id) {
            case -1: ; break
            case 0: this.deleteCardA(); break
            case 1: this.deleteCardB(); break
            case 2: this.deleteCardC(); break
            case 3: this.deleteCardD(); break
            case 4: this.deleteCardE(); break
            case 5: this.deleteCardF(); break
            case 6: this.deleteCardG(); break
            case 7: this.deleteCardH(); break
            case 8: this.deleteCardI(); break
            case 9: this.deleteCardJ(); break
            case 10: this.deleteCardK(); break
            case 11: this.deleteCardL(); break
            case 12: this.deleteCardM(); break
            case 13: this.deleteCardN(); break
            case 14: this.deleteCardO(); break
            case 15: this.deleteCardP(); break
            case 'all':
                this.deleteCardA(); this.deleteCardB(); this.deleteCardC(); this.deleteCardD();
                this.deleteCardE(); this.deleteCardF(); this.deleteCardG(); this.deleteCardH();
                this.deleteCardI(); this.deleteCardJ(); this.deleteCardK(); this.deleteCardL();
                this.deleteCardM(); this.deleteCardN(); this.deleteCardO(); this.deleteCardP();
                break
            default: console.log("Something went terribly wrong")
        }

    }
    hideCards = () => {
        this.setState({
            cardFlippedA: false, cardFlippedB: false, cardFlippedC: false, cardFlippedD: false,
            cardFlippedE: false, cardFlippedF: false, cardFlippedG: false, cardFlippedH: false,
            cardFlippedI: false, cardFlippedJ: false, cardFlippedK: false, cardFlippedL: false,
            cardFlippedM: false, cardFlippedN: false, cardFlippedO: false, cardFlippedP: false
        })
    }
    startTimer = () => {
        const startTime = Date.now()
        this.timerID = setInterval(() => {
            this.setState({ runningTime: Date.now() - startTime })
        }, 40)
    }
    stopTimer = () => {
        clearInterval(this.timerID)
    }
    componentDidMount() {
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    formatedTime = () => {
        return (this.state.runningTime / 1000).toFixed(2)
    }
    judgePerformance = () => {
        if (this.formatedTime() < 30) {
            return '🥇 Amazing! 🥇'
        } else if (this.formatedTime() < 60) {
            return '🥈 Good job! 🥈'
        } else if (this.formatedTime() < 120) {
            return '🥉 Not bad! 🥉'
        } else {
            return '🤔 Why so slow? 🤔'
        }
    }
    render() {
        const gameOverMessage = !this.state.gameOver ? null : (
            <div className="message">
                <p>Finished in {this.formatedTime()} seconds!</p>
                <p>{this.judgePerformance()}</p>
            </div>
        )
        if (this.state.menu === true) { return <Menu /> }
        else {
            return (
                <div className="game-normal">
                    {gameOverMessage}
                    <p className="element" id="back-to-menu" onClick={this.setMenu} >Menu</p>
                    <p className="element" id="timer">{this.formatedTime()} seconds</p>
                    <p className="element" id="reset" onClick={this.setReset}>Reset</p>
                    <p className="element" id="start-game" onClick={this.startGame} style={{ display: this.state.startButton }}>Start Game</p>
                    {/* Card A */}
                    <div className={this.state.cardVisibleA}>
                        <div className="visible" onClick={this.flipCardA}>
                            {this.state.cardFlippedA
                                ? this.state.cards[0]
                                : <p className={this.state.cardBackA}></p>}
                        </div>
                    </div>

                    {/* Card B */}
                    <div className={this.state.cardVisibleB}>
                        <div className="visible" onClick={this.flipCardB}>
                            {this.state.cardFlippedB
                                ? this.state.cards[1]
                                : <p className={this.state.cardBackB}></p>}
                        </div>
                    </div>

                    {/* Card C */}
                    <div className={this.state.cardVisibleC}>
                        <div className="visible" onClick={this.flipCardC}>
                            {this.state.cardFlippedC
                                ? this.state.cards[2]
                                : <p className={this.state.cardBackC}></p>}
                        </div>
                    </div>

                    {/* Card D */}
                    <div className={this.state.cardVisibleD}>
                        <div className="visible" onClick={this.flipCardD}>
                            {this.state.cardFlippedD
                                ? this.state.cards[3]
                                : <p className={this.state.cardBackD}></p>}
                        </div>
                    </div>

                    {/* Card E */}
                    <div className={this.state.cardVisibleE}>
                        <div className="visible" onClick={this.flipCardE}>
                            {this.state.cardFlippedE
                                ? this.state.cards[4]
                                : <p className={this.state.cardBackE}></p>}
                        </div>
                    </div>

                    {/* Card F */}
                    <div className={this.state.cardVisibleF}>
                        <div className="visible" onClick={this.flipCardF}>
                            {this.state.cardFlippedF
                                ? this.state.cards[5]
                                : <p className={this.state.cardBackF}></p>}
                        </div>
                    </div>

                    {/* Card G */}
                    <div className={this.state.cardVisibleG}>
                        <div className="visible" onClick={this.flipCardG}>
                            {this.state.cardFlippedG
                                ? this.state.cards[6]
                                : <p className={this.state.cardBackG}></p>}
                        </div>
                    </div>

                    {/* Card H */}
                    <div className={this.state.cardVisibleH}>
                        <div className="visible" onClick={this.flipCardH}>
                            {this.state.cardFlippedH
                                ? this.state.cards[7]
                                : <p className={this.state.cardBackH}></p>}
                        </div>
                    </div>

                    {/* Card I */}
                    <div className={this.state.cardVisibleI}>
                        <div className="visible" onClick={this.flipCardI}>
                            {this.state.cardFlippedI
                                ? this.state.cards[8]
                                : <p className={this.state.cardBackI}></p>}
                        </div>
                    </div>

                    {/* Card J */}
                    <div className={this.state.cardVisibleJ}>
                        <div className="visible" onClick={this.flipCardJ}>
                            {this.state.cardFlippedJ
                                ? this.state.cards[9]
                                : <p className={this.state.cardBackJ}></p>}
                        </div>
                    </div>

                    {/* Card K */}
                    <div className={this.state.cardVisibleK}>
                        <div className="visible" onClick={this.flipCardK}>
                            {this.state.cardFlippedK
                                ? this.state.cards[10]
                                : <p className={this.state.cardBackK}></p>}
                        </div>
                    </div>

                    {/* Card L */}
                    <div className={this.state.cardVisibleL}>
                        <div className="visible" onClick={this.flipCardL}>
                            {this.state.cardFlippedL
                                ? this.state.cards[11]
                                : <p className={this.state.cardBackL}></p>}
                        </div>
                    </div>

                    {/* Card M */}
                    <div className={this.state.cardVisibleM}>
                        <div className="visible" onClick={this.flipCardM}>
                            {this.state.cardFlippedM
                                ? this.state.cards[12]
                                : <p className={this.state.cardBackM}></p>}
                        </div>
                    </div>

                    {/* Card N */}
                    <div className={this.state.cardVisibleN}>
                        <div className="visible" onClick={this.flipCardN}>
                            {this.state.cardFlippedN
                                ? this.state.cards[13]
                                : <p className={this.state.cardBackN}></p>}
                        </div>
                    </div>

                    {/* Card O */}
                    <div className={this.state.cardVisibleO}>
                        <div className="visible" onClick={this.flipCardO}>
                            {this.state.cardFlippedO
                                ? this.state.cards[14]
                                : <p className={this.state.cardBackO}></p>}
                        </div>
                    </div>

                    {/* Card P */}
                    <div className={this.state.cardVisibleP}>
                        <div className="visible" onClick={this.flipCardP}>
                            {this.state.cardFlippedP
                                ? this.state.cards[15]
                                : <p className={this.state.cardBackP}></p>}
                        </div>
                    </div>
                </div>
            )
        }
    }
}