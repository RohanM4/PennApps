export default function MercenaryCard({type, ...props}) {
    return (
        <div className={`w-32 h-40 bg-green-200 absolute ${type}`} />
    )
}