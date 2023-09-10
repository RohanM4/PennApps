export default function StatsCard(props) {
    return (
     <div className='w-96 h-60 bg-blue-200 rounded-xl'>
        <div className="w-full h-3/8 px-8 py-4 text-3xl bg-blue-400 rounded-t-xl">Stats</div>
        <div className='flex flex-row pt-4'>
            <p className='ml-3 text-3xl'>7 </p>
            <img src={require('../../assets/icons/defense-shield.png')} className="w-6 h-6 mt-1 ml-4"/>
            <p className='ml-1 text-3xl'>Defense </p>
        </div>
        <div className='flex flex-row pt-4'>
            <p className='ml-3 text-3xl'>3 </p>
            <img src={require('../../assets/icons/sword.png')} className="w-6 h-6 mt-1 ml-4"/>
            <p className='ml-1 text-3xl'>Attack </p>
        </div>
        <div className='flex flex-row pt-4'>
            <p className='ml-3 text-3xl'>9 </p>
            <img src={require('../../assets/icons/stealth.png')} className="w-6 h-6 mt-1 ml-4"/>
            <p className='ml-1 text-3xl'>Stealth </p>
        </div>
    </div>
    )
}