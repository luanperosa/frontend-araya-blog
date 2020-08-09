import { useEffect, useState } from "react"
export default function ({ delay = 0, text = '', prefix = '', sufix = '' }) {
    const [textEffect, setTextEffect] = useState('');
    useEffect(() => {
        const phrase = text.split('');
        let newPhrase = '';
        setTimeout(() => {
            phrase.forEach((letter, index) => {
                setTimeout(() => {
                    setTextEffect(`${prefix}${newPhrase += letter}${sufix}`);
                }, 105 * index);
            })
        }, delay)
    }, []);
    return textEffect
}