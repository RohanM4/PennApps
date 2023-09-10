import { useState } from 'react';
import RosterCarousel from '../components/Roster/RosterCarousel';
import StatsModal from '../components/Roster/Modal';
export default function Roster() {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-100 min-h-screen py-8 px-4 battle_background pb-64">
            <div className='w-96 h-60 bg-blue-200 absolute stat_position rounded-xl'>
                <div className="w-full h-3/8 px-8 py-4 text-3xl bg-blue-400 rounded-t-xl">Stats</div>
                <div className='flex flex-row pt-4'>
                    <p className='ml-3 text-3xl'>7 </p>
                    <img src={require('../assets/icons/defense-shield.png')} className="w-6 h-6 mt-1 ml-4"/>
                    <p className='ml-1 text-3xl'>Defense </p>
                </div>
                <div className='flex flex-row pt-4'>
                    <p className='ml-3 text-3xl'>3 </p>
                    <img src={require('../assets/icons/sword.png')} className="w-6 h-6 mt-1 ml-4"/>
                    <p className='ml-1 text-3xl'>Attack </p>
                </div>
                <div className='flex flex-row pt-4'>
                    <p className='ml-3 text-3xl'>9 </p>
                    <img src={require('../assets/icons/stealth.png')} className="w-6 h-6 mt-1 ml-4"/>
                    <p className='ml-1 text-3xl'>Stealth </p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-7xl text-white'>Commander</h1>
                <img src={require('../assets/characters/png/char9.png')} className="w-80 h-80 py-4 px-2 mt-4"/>
                <h3 className='text-4xl text-white'>Skull. A. Ton</h3>
            </div>
            <div className='w-96 h-60 bg-green-200 absolute perk_position rounded-xl'>
                <div className="w-full h-3/8 px-8 py-4 text-3xl bg-green-400 rounded-t-xl">Perk</div>
                <p className='px-8 py-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat porttitor eros at sollicitudin io pharetra.</p>
            </div>
            <h2 className='text-5xl mt-12 text-white'>Active Mercenaries</h2>
            <div className='w-full h-56 flex flex-row justify-around'>
                <img onClick={() => setOpen(true)} src={require('../assets/characters/png/char2.png')} className="w-60 h-60 py-4 px-2 mt-4 cursor-pointer"/>
                <img onClick={() => setOpen(true)} src={require('../assets/characters/png/char3.png')} className="w-60 h-60 py-4 px-2 mt-4 cursor-pointer"/>
                <img onClick={() => setOpen(true)} src={require('../assets/characters/png/char4.png')} className="w-60 h-60 py-4 px-2 mt-4 cursor-pointer"/>
            </div>
            <StatsModal open={open} setOpen={setOpen} />

            <h2 className='text-5xl mt-12 text-white'>Roster</h2>
            <div className='w-full mx-16'>
                <RosterCarousel />
            </div>

        </div>
    )
}