import KingCard from './KingCard';
import MercenaryCard from './MercenaryCard';
import Orb from './Orb';
export default function CardLayout(props) {
    return (
        <div className='flex flex-row justify-between w-full'>
            <div className="w-56 h-56 bg-red-100 ml-12">
                <img src={require('../../assets/characters/png/char9.png')} />
                <MercenaryCard source={require('../../assets/characters/png/char1.png')} type={"top_right"} />
                <MercenaryCard source={require('../../assets/characters/png/char2.png')} type={"top_middle"} />
                <MercenaryCard source={require('../../assets/characters/png/char3.png')} type={"top_left"} />
                <Orb value={4} type={'top_right_orb'} />
            </div>
            <div className="w-56 h-56 bg-blue-100 mr-12">
                <img src={require('../../assets/characters/png/char4.png')} />
                <MercenaryCard source={require('../../assets/characters/png/char5.png')} type={"bottom_right"} />
                <MercenaryCard source={require('../../assets/characters/png/char6.png')} type={"bottom_middle"} />
                <MercenaryCard source={require('../../assets/characters/png/char7.png')} type={"bottom_left"} />
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