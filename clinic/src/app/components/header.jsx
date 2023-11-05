'use client'
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export const Headers = () => {

    const [position, setPosition] = useState('left-[-100%]')
    const ListRef = useRef(null);

    const togglePosition = () => {
        setPosition('left-[0%]')
    }
    const closePosition = () => {
        setPosition('left-[-100%]')
    }
    useEffect(() => {
        if(position === 'left-[-100%]') {
            document.body.style.overflow = 'scroll'
        } else {
            document.body.style.overflow = 'hidden'
        }
    },[position])

    return (
        <header className="relative w-screen h-auto p-3 bg-white text-black" >
            <nav className="w-full h-auto p-1 bg-transparent">
                <ol className="flex justify-between items-center text-sm">
                    <li className="cursor-pointer" onClick={togglePosition} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </li>
                    <li className="font-medium">Logo</li>
                    <li>
                        <Link className="bg-blue-400 font-bold text-white px-2 cursor-pointer py-1 rounded-md" href={`/login`}>
                            <button >
                                Entrar
                            </button>
                        </Link>
                    </li>
                </ol>
                <ol className="hidden">
                    <li>Logo</li>
                    <li>Quem somos</li>
                    <li>Mais informações</li>
                    <li>Unidades</li>
                    <li>
                        <button>
                            Entrar
                        </button>
                    </li>
                </ol>
            </nav>
            <ol ref={ListRef} className={`absolute p-3 transition-all top-0 ${position} flex flex-col items-center gap-3 w-[60vw] text-white font-medium h-screen bg-white shadow-md z-20`}>
                <Link className="bg-slate-300 w-[80%] flex justify-center items-center p-2 rounded-sm" href={`#`}>
                    <li onClick={closePosition}>X</li>
                </Link>
                <Link className="bg-blue-400 w-[80%] flex justify-center items-center p-2 rounded-sm" href={`#`}>
                    <li>Entrar</li>
                </Link>
                <Link className="bg-blue-400 w-[80%] flex justify-center items-center p-2 rounded-sm" href={`#`}>
                    <li>Cadastrar</li>
                </Link>
            </ol>
        </header>
    )
}