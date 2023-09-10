import useSound from 'use-sound';
import song from '../assets/song.mp3'

export default function Homepage() {
    const handleEject = () => {
        alert('Ejecting Drive')
    }

    const transferPlayer = () => {
        alert('Transferring Player')
    }

    const [play] = useSound(song, {volume: 0.25})

    return (
        <div className="w-100 min-h-screen flex flex-col items-center main_background pb-96">
            <div className='relative'>
                <img onClick={play} src={require('../assets/scroll.png')} alt="" className="inner-image"/>
                <div className="text-9xl centered mt-4 text-center text_abc">Flash Kingdom</div>
            </div>

            <div className="justify-center items-center flex flex-col px-24 w-full ">
                <a href="/roster" className="text-center button_color text-white font-bold py-2 px-4 rounded w-2/5 h-12 text-3xl">Roster</a>
                <a href="/battle" className="text-center button_color text-white font-bold py-2 px-4 rounded w-2/5  h-12 text-3xl mt-12">Battle</a>
                <button onClick={transferPlayer} className="button_color text-white font-bold py-2 px-4 rounded w-2/5  h-12 text-3xl mt-12">Transfer Player</button>
                <button onClick={handleEject} className="button_color text-white font-bold py-2 px-4 rounded w-2/5  h-12 text-3xl mt-12">Eject Drive</button>
            </div>
        </div>
    )
}