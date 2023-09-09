import KingCard from './KingCard';
import MercenaryCard from './MercenaryCard';
import {ReactComponent as PlayerOneIcon} from '../../assets/characters/char3.svg';
import {ReactComponent as PlayerTwoIcon} from '../../assets/characters/char4.svg';
export default function CardLayout(props) {
    return (
        <>

        <div className="w-48 h-48 bg-red-100 py-4 px-2">
            <PlayerOneIcon />
        </div>
        <div className="w-48 h-48 bg-blue-100 py-4 px-2">
            <PlayerTwoIcon />
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