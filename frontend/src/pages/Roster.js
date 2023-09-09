import {ReactComponent as PlayerOneIcon} from '../assets/characters/char4.svg';
export default function Roster() {
    return (
        <div className="w-100 min-h-screen py-8 px-4">
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl'>Commander</h1>
                <div className="w-56 h-56 bg-red-100 py-4 px-2 mt-4">
                    <PlayerOneIcon />
                </div>
            </div>
            <h2 className='text-5xl mt-12'>Active Mercenaries</h2>
            <div className='w-full h-56 bg-green-200'></div>

            <h2 className='text-5xl mt-12'>Roster</h2>
            <div className='w-full h-56 bg-green-200'></div>

        </div>
    )
}