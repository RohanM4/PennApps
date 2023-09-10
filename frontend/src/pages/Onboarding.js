import { useState } from "react"
import CommanderCarousel from "../components/Onboarding/CommanderCarousel"
export default function Onboarding(props) {
    const [playerSelection, setPlayerSelection] = useState(null)
    const [perkSelection, setPerkSelection] = useState(null);
    const handleSubmit = () => {
        alert(`Player Selection: ${playerSelection}, Perk Selection: ${perkSelection}`)
    }
    return (
        <div className="w-100 min-h-screen flex flex-col items-center pt-12">
        <h1 className="text-7xl">Select Your Commander</h1>
        <div id="123" className="flex justify-center mt-8 w-full h-80 bg-green-200">
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

        <div class="grid grid-cols-4 gap-4 w-full h-80 bg-red-200 mt-8">
            <button className="w-full h-full bg-yellow-200 rounded-md">01</button>
            <button className="w-full h-full bg-yellow-200 rounded-md">02</button>
            <button className="w-full h-full bg-yellow-200 rounded-md">03</button>
            <button className="w-full h-full bg-yellow-200 rounded-md">04</button>
            <div className="w-full h-full bg-yellow-200 rounded-md">05</div>
            <div className="w-full h-full bg-yellow-200 rounded-md">06</div>
            <div className="w-full h-full bg-yellow-200 rounded-md">07</div>
            <div className="w-full h-full bg-yellow-200 rounded-md">08</div>
        </div>
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/5  h-12 text-3xl mt-4">Let's Go</button>

    </div>
    )
}