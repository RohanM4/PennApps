import KingCard from './KingCard';
import MercenaryCard from './MercenaryCard';
import {ReactComponent as PlayerOneIcon} from '../../assets/characters/char1.svg';
import {ReactComponent as PlayerTwoIcon} from '../../assets/characters/char4.svg';
export default function CardLayout(props) {
    return (
        <>

        <div className="w-56 h-56 bg-red-100 py-4 px-2">
            <PlayerOneIcon />
            <MercenaryCard type={"top_right"} />
            <MercenaryCard type={"top_middle"} />
            <MercenaryCard type={"top_left"} />
        </div>
        <div className="w-56 h-56 bg-blue-100 py-4 px-2">
            <PlayerTwoIcon />
            <MercenaryCard type={"bottom_right"} />
            <MercenaryCard type={"bottom_middle"} />
            <MercenaryCard type={"bottom_left"} />
        </div>
        </>
    // </div>
    )
}


//         // <>
        // <KingCard />
        // <MercenaryCard type={"one"} />
        // <MercenaryCard type={"two"} />
        // <MercenaryCard type={"three"} />  

        // </>