export default function Orb({value}, ...props) {
    return <img src={require(`../../assets/orb.png`)} className={`w-32 h-32 absolute ${props.type}`} />
}