export default function Orb({value, type}, ...props) {
    const orbClass = type === "right" ? "orb-right" : "orb-left"
    return <div className={`w-32 h-32 ${orbClass} flex items-center justify-center text-black text-5xl text-center`} >
        <p className="mb-10 mr-12">{value}</p>
    </div>
}