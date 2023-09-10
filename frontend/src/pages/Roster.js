import CommanderImage from '../assets/characters/png/char1.png'
import {ReactComponent as PlayerTwoIcon} from '../assets/characters/char5.svg';
import {ReactComponent as PlayerThreeIcon} from '../assets/characters/char6.svg';
import {ReactComponent as PlayerFourIcon} from '../assets/characters/char8.svg';
import CommanderCarousel from '../components/Onboarding/CommanderCarousel';
export default function Roster() {
    return (
        <div className="w-100 min-h-screen py-8 px-4 battle_background">
            <div className='flex flex-col items-center'>
                <h1 className='text-7xl'>Commander</h1>
                <img src={require('../assets/characters/png/char1.png')} className="w-80 h-80 py-4 px-2 mt-4"/>
            </div>
            <h2 className='text-5xl mt-12'>Active Mercenaries</h2>
            <div className='w-full h-56 flex flex-row justify-around'>
                <img src={require('../assets/characters/png/char2.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
                <img src={require('../assets/characters/png/char3.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
                <img src={require('../assets/characters/png/char4.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
            </div>

            <h2 className='text-5xl mt-12'>Roster</h2>
            <div className='w-full bg-green-200'>
                <CommanderCarousel />
            </div>

        </div>
    )
}