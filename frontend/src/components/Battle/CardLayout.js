import KingCard from './KingCard';
import {useState} from 'react';
import MercenaryCard from './MercenaryCard';
import Orb from './Orb';
export default function CardLayout(props) {
    const [playerOneValue, setPlayerOneValue] = useState(7);
    const [playerTwoValue, setPlayerTwoValue] = useState(9);

    return (
        <div className='flex flex-row justify-between w-full'>
            <div className="w-56 h-56 bg-red-100 ml-12">
                <img src={require('../../assets/characters/png/char9.png')} />
                <MercenaryCard player={1} setPlayerOneValue={setPlayerOneValue} source={require('../../assets/characters/png/char1.png')} type={"top_right"} />
                <MercenaryCard player={1} setPlayerOneValue={setPlayerOneValue} source={require('../../assets/characters/png/char2.png')} type={"top_middle"} />
                <MercenaryCard player={1} setPlayerOneValue={setPlayerOneValue} source={require('../../assets/characters/png/char3.png')} type={"top_left"} />
                {true && <Orb value={playerTwoValue} type={"left"} />}
            </div>
            <div className="w-56 h-56 bg-blue-100 mr-12">
                <img src={require('../../assets/characters/png/char4.png')} />
                <MercenaryCard player={2} setPlayerTwoValue={setPlayerTwoValue} source={require('../../assets/characters/png/char5.png')} type={"bottom_right"} />
                <MercenaryCard player={2} setPlayerTwoValue={setPlayerTwoValue} source={require('../../assets/characters/png/char6.png')} type={"bottom_middle"} />
                <MercenaryCard player={2} setPlayerTwoValue={setPlayerTwoValue} source={require('../../assets/characters/png/char7.png')} type={"bottom_left"} />
                {true && <Orb value={playerOneValue} type={"right"} />}
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