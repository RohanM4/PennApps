export default function Homepage() {
    const handleEject = () => {
        alert('Ejecting Drive')
    }

    const transferPlayer = () => {
        alert('Transferring Player')
    }

    return (
        <div className="w-100 min-h-screen flex flex-col items-center main_background pt-48">
            <h1 className="text-9xl">Homepage</h1>
            <div className="justify-center items-center flex flex-col mt-36 px-24 w-full">
                <a href="/roster" className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/5 h-12 text-3xl">Roster</a>
                <a href="/battle" className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/5  h-12 text-3xl mt-12">Battle</a>
                <button onClick={transferPlayer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/5  h-12 text-3xl mt-12">Transfer Player</button>
                <button onClick={handleEject} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/5  h-12 text-3xl mt-12">Eject Drive</button>
            </div>
        </div>
    )
}