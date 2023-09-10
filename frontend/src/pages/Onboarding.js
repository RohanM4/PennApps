import { useState } from "react"
import CommanderCarousel from "../components/Onboarding/CommanderCarousel"
export default function Onboarding(props) {
    const [playerSelection, setPlayerSelection] = useState(null)
    const [perkSelection, setPerkSelection] = useState(null);
    const handleSubmit = () => {
        // fetch('http://127.0.0.1:5000/write-to-file', {method: 'POST', body: {playerSelection: playerSelection, perkSelection: perkSelection}})
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         window.location.href = "/homepage"
        //     })
        setTimeout(() => {
            window.location.href = "/homepage"
        }, 2000)

    }
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [stealth, setStealth] = useState(0);


    const increaseAttack = () => {
        if (attack + defense + stealth < 15 && attack < 7) {
            setAttack(attack + 1)
        }
    }

    const decreaseAttack = () => {
        if (attack > 0) {
            setAttack(attack - 1)
        }
    }

    const increaseDefense = () => {
        if (attack + defense + stealth < 15 && defense < 7) {
            setDefense(defense + 1)
        }
    }

    const decreaseDefense = () => {
        if (defense > 0) {
            setDefense(defense - 1)
        }
    }

    const increaseStealth = () => {
        if (attack + defense + stealth < 15 && stealth < 7) {
            setStealth(stealth + 1)
        }
    }

    const decreaseStealth = () => {
        if (stealth > 0) {
            setStealth(stealth - 1)
        }
    }


    return (
        <div className="w-100 min-h-screen flex flex-col items-center pt-12 battle_background pb-20">
        <h1 className="text-7xl text-white">Select Your Commander</h1>
        <div id="123" className="flex justify-center mt-8 w-full h-80">
            <div style={{
                width:"100%",
                height: "100%",
                position: "relative",
            }}>
                <div style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0
                }}>
                    <CommanderCarousel  />
                </div>
            </div>
        </div>
        
        <div className="flex flex-row justify-around w-4/5 h-80 mt-40 mr-12">
            <div className="flex flex-col items-center w-1/3">
                <h3 className="text-center text-3xl text-white mr-10">Attack</h3>
                <div className={`w-32 h-32 orb flex items-center justify-center text-black text-5xl text-center ml-8`} >
                    <p className="mb-10 mr-12">{attack}</p>
                </div>
                <div className="flex flex-row justify-around">
                    <button onClick={decreaseAttack} className={`w-20 h-20 orb_small flex items-center justify-center text-black text-5xl text-center mr-20`} >
                        <p className="mb-10 mr-10 text-black">-</p>
                    </button>
                    <button onClick={increaseAttack} className={`w-20 h-20 orb_small flex items-center justify-center text-black text-5xl text-center`} >
                        <p className="mb-10 mr-10 text-black">+</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
                <h3 className="text-center text-3xl text-white mr-10">Defense</h3>
                <div className={`w-32 h-32 orb flex items-center justify-center text-black text-5xl text-center ml-8`} >
                    <p className="mb-10 mr-12">{defense}</p>
                </div>
                <div className="flex flex-row justify-around">
                    <button onClick={decreaseDefense} className={`w-20 h-20 orb_small flex items-center justify-center text-black text-5xl text-center mr-20`} >
                        <p className="mb-10 mr-10 text-black">-</p>
                    </button>
                    <button onClick={increaseDefense} className={`w-20 h-20 orb_small flex items-center justify-center text-black text-5xl text-center`} >
                        <p className="mb-10 mr-10 text-black">+</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
                <h3 className="text-center text-3xl text-white mr-10">Stealth</h3>
                <div className={`w-32 h-32 orb flex items-center justify-center text-black text-5xl text-center ml-8`} >
                    <p className="mb-10 mr-12">{stealth}</p>
                </div>
                <div className="flex flex-row justify-around">
                    <button onClick={decreaseStealth} className={`w-20 h-20 orb_small flex items-center justify-center text-black text-5xl text-center mr-20`} >
                        <p className="mb-10 mr-10 text-black">-</p>
                    </button>
                    <button onClick={increaseStealth} className={`w-20 h-20 orb_small flex items-center justify-center text-black text-5xl text-center`} >
                        <p className="mb-10 mr-10 text-black">+</p>
                    </button>
                </div>
            </div>

        </div>


        {/* <div class="grid grid-cols-4 gap-4 w-full h-80 bg-red-200 mt-24">
            <button className="w-full h-full bg-yellow-200 rounded-md">01</button>
            <button className="w-full h-full bg-yellow-200 rounded-md">02</button>
            <button className="w-full h-full bg-yellow-200 rounded-md">03</button>
            <button className="w-full h-full bg-yellow-200 rounded-md">04</button>
            <div className="w-full h-full bg-yellow-200 rounded-md">05</div>
            <div className="w-full h-full bg-yellow-200 rounded-md">06</div>
            <div className="w-full h-full bg-yellow-200 rounded-md">07</div>
            <div className="w-full h-full bg-yellow-200 rounded-md">08</div>
        </div> */}

        <button onClick={handleSubmit} className="button_color text-white font-bold py-2 px-4 rounded w-2/5  h-12 text-3xl">Let's Go</button>

    </div>
    )
}