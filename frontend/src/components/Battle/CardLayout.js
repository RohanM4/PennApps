import KingCard from './KingCard';
import {useState, useEffect} from 'react';
import MercenaryCard from './MercenaryCard';
import Orb from './Orb';
export default function CardLayout(props) {
    // const [playerOneMercenaries, setMercenaries] 
    const [playerOneValue, setPlayerOneValue] = useState(7);
    const [showPlayerOneValue, setShowPlayerOneValue] = useState(false)
    const [playerTwoValue, setPlayerTwoValue] = useState(9);
    const [showPlayerTwoValue, setShowPlayerTwoValue] = useState(false)

    const playerOne = {attack: 4, defense: 5, stealth: 6}
    const playerTwo = {attack: 7, defense: 8, stealth: 9}



    useEffect(() => {
        // Function to handle key presses
        const handleKeyPress = (event) => {
          const { key } = event;
    
          // Check if the pressed key is 'a', 's', or 'd'
          if (key === 'a' || key === 's' || key === 'd') {

            if (key === 'a') {
                setPlayerOneValue(playerOne.attack);
            } else if (key === 's') {
                setPlayerOneValue(playerOne.stealth);

            } else if (key === 'd') {
                setPlayerOneValue(playerOne.defense);
            } else {
                console.error("Ivali")
          }
          setShowPlayerOneValue(key);
        }

        if (key === 'j' || key === 'k' || key === 'l') {
            if (key === 'j') {
                setPlayerTwoValue(playerTwo.attack);
            } else if (key === 'k') {
                setPlayerTwoValue(playerTwo.stealth);

            } else if (key === 'l') {
                setPlayerTwoValue(playerTwo.defense);
            } else {
                console.error("Ivali")
          }
          setShowPlayerTwoValue(key);
        }
    };
    
        // Add a keydown event listener when the component mounts
        document.addEventListener('keydown', handleKeyPress);
    
        // Remove the keydown event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
    }, []); // The empty array as the second argument ensures this
    const handleClick = () => {
        fetch('http://127.0.0.1:5000/battle', {request: 'POST', body: {playerOneValue: playerOneValue, playerTwoValue: playerTwoValue}})
    }

    return (
        <div className='flex flex-row justify-between w-full'>
            <div className="w-56 h-56 bg-red-100 ml-12">
                <img src={require('../../assets/characters/png/char9.png')} />
                <MercenaryCard player={1} setPlayerOneValue={setPlayerOneValue} source={require('../../assets/characters/png/char1.png')} type={"top_right"} />
                <MercenaryCard player={1} setPlayerOneValue={setPlayerOneValue} source={require('../../assets/characters/png/char2.png')} type={"top_middle"} />
                <MercenaryCard player={1} setPlayerOneValue={setPlayerOneValue} source={require('../../assets/characters/png/char3.png')} type={"top_left"} />
                {showPlayerOneValue && <Orb value={playerOneValue} type={"left"} />}
            </div>
            <button onClick={handleClick}>Fight</button>
            <div className="w-56 h-56 bg-blue-100 mr-12">
                <img src={require('../../assets/characters/png/char4.png')} />
                <MercenaryCard player={2} setPlayerTwoValue={setPlayerTwoValue} source={require('../../assets/characters/png/char5.png')} type={"bottom_right"} />
                <MercenaryCard player={2} setPlayerTwoValue={setPlayerTwoValue} source={require('../../assets/characters/png/char6.png')} type={"bottom_middle"} />
                <MercenaryCard player={2} setPlayerTwoValue={setPlayerTwoValue} source={require('../../assets/characters/png/char7.png')} type={"bottom_left"} />
                {showPlayerTwoValue && <Orb value={playerTwoValue} type={"right"} />}
            </div>
        </div>  
    )
}


//         // <>
        // <KingCard />
        // <MercenaryCard type={"one"} />
        // <MercenaryCard type={"two"} />
        // <MercenaryCard type={"three"} />  

        // </>