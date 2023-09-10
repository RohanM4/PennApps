import { useState } from 'react';
export default function MercenaryCard({type, source, ...props}) {
    const DEFAULT_CLASS = `w-32 h-32 absolute ${type} cursor-pointer`
    const TOGGLED_CLASS = `w-40 h-40 absolute ${type}_move_assist cursor-pointer border border-8 border-yellow-400 ${type}_moved`
    const [style, setStyle] = useState(DEFAULT_CLASS)
    return (
        <img onClick={() => setStyle(TOGGLED_CLASS)} src={source} className={style} />
    )
}