import './Menu.css';
import React from 'react';
import GameEasy from '../GameEasy/GameEasy';
import GameNormal from '../GameNormal/GameNormal';
import GameHard from '../GameHard/GameHard';

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameStarted: false,
            difficulty: 'Easy',
            difficultyVisible: false,
            cardSet: 'All'
        }
    }
    setEasy = () => {
        this.setState({ difficulty: 'Easy' })
        this.setState({ difficultyVisible: false })
    }
    setNormal = () => {
        this.setState({ difficulty: 'Normal' })
        this.setState({ difficultyVisible: false })
    }
    setHard = () => {
        this.setState({ difficulty: 'Hard' })
        this.setState({ difficultyVisible: false })
    }
    setSmileys = () => {
        this.setState({ cardSet: 'Smileys' })
        this.setState({ cardSetVisible: false })
    }
    setAnimals = () => {
        this.setState({ cardSet: 'Animals' })
        this.setState({ cardSetVisible: false })
    }
    setFood = () => {
        this.setState({ cardSet: 'Food' })
        this.setState({ cardSetVisible: false })
    }
    setActivity = () => {
        this.setState({ cardSet: 'Activity' })
        this.setState({ cardSetVisible: false })
    }
    setTravel = () => {
        this.setState({ cardSet: 'Travel' })
        this.setState({ cardSetVisible: false })
    }
    setAll = () => {
        this.setState({ cardSet: 'All' })
        this.setState({ cardSetVisible: false })
    }
    render() {
        const difficulty = !this.state.difficultyVisible ? null : (
            <div className='difficulty'>
                <p className='element' onClick={this.setEasy}>Easy</p>
                <p className='element' onClick={this.setNormal}>Normal</p>
                <p className='element' onClick={this.setHard}>Hard</p>
            </div>
        )
        const cardSet = !this.state.cardSetVisible ? null : (
            <div className='card-set'>
                <p className='element' onClick={this.setSmileys}>😃 Smileys 😃</p>
                <p className='element' onClick={this.setAnimals}>🐻 Animals 🐻</p>
                <p className='element' onClick={this.setFood}>🍔 Food 🍔</p>
                <p className='element' onClick={this.setActivity}>⚽ Activity ⚽</p>
                <p className='element' onClick={this.setTravel}>🚀 Travel 🚀</p>
                <p className='element' onClick={this.setAll}>🎁 All 🎁</p>
            </div>
        )

        if (this.state.gameStarted === false) {
            return (
                <div className="Menu">
                    <div style={{ lineHeight: '20vmin' }}>
                        <h1>Match Pairs!</h1>
                    </div>
                    <div style={{ width: '100%' }}>
                        <p className='element' onClick={() => { this.setState({ gameStarted: true }) }}>Start Game</p>
                        <p className='element' onClick={() => { this.setState({ difficultyVisible: !this.state.difficultyVisible }) }}>
                            Difficulty: {this.state.difficulty}</p>
                        {difficulty}
                        <p className='element' onClick={() => { this.setState({ cardSetVisible: !this.state.cardSetVisible }) }}>Card Set: {this.state.cardSet}</p>
                        {cardSet}
                    </div>
                </div>
            );
        } else {
            switch (this.state.difficulty) {
                case 'Easy': return <GameEasy cardSet = {this.state.cardSet}/>
                case 'Normal': return <GameNormal cardSet = {this.state.cardSet}/>
                case 'Hard': return <GameHard cardSet = {this.state.cardSet}/>
                default: <h1>Something went terribly wrong</h1>
                    break
            }
        }
    }
}
