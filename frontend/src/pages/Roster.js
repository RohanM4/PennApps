import CommanderImage from '../assets/characters/png/char1.png'
import {ReactComponent as PlayerTwoIcon} from '../assets/characters/char5.svg';
import {ReactComponent as PlayerThreeIcon} from '../assets/characters/char6.svg';
import {ReactComponent as PlayerFourIcon} from '../assets/characters/char8.svg';
import CommanderCarousel from '../components/Onboarding/CommanderCarousel';
import RosterCarousel from '../components/Roster/RosterCarousel';
export default function Roster() {
    return (
        <div className="w-100 min-h-screen py-8 px-4 battle_background pb-64">
            <div className='w-96 h-80 bg-blue-200 absolute stat_position' />
            <div className='flex flex-col items-center'>
                <h1 className='text-7xl text-white'>Commander</h1>
                <img src={require('../assets/characters/png/char9.png')} className="w-80 h-80 py-4 px-2 mt-4"/>
                <h3 className='text-4xl text-white'>Skull. A. Ton</h3>
            </div>
            <div className='w-96 h-80 bg-green-200 absolute perk_position rounded-xl'>
                <div className="w-full h-3/8 px-8 py-4 text-xl bg-green-400 rounded-t-xl">Perk</div>
            </div>
            <h2 className='text-5xl mt-12 text-white'>Active Mercenaries</h2>
            <div className='w-full h-56 flex flex-row justify-around'>
                <img src={require('../assets/characters/png/char2.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
                <img src={require('../assets/characters/png/char3.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
                <img src={require('../assets/characters/png/char4.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
            </div>

            <h2 className='text-5xl mt-12 text-white'>Roster</h2>
            <div className='w-full mx-16'>
                <RosterCarousel />
            </div>

        </div>
    )
}