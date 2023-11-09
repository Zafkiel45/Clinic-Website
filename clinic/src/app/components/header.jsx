'use client'
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Headers = () => {

    const path = usePathname()
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
            document.body.style.overflowY = 'scroll'
        } else {
            document.body.style.overflowY = 'hidden'
        }
    },[position])

    return (
        <header className="relative w-screen h-auto tabletBig:px-5 p-3 bg-white text-black shadow-md" >
            <nav className="w-full h-auto p-1 bg-transparent">
                <ol className="tabletMini:hidden flex justify-between items-center text-sm">
                    <li className="cursor-pointer" onClick={togglePosition} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="mobileMini:w-[21px] mobileMini:h-[21px]" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </li>
                    <li className="mobileMini:text-lg font-medium">Logo</li>
                    <li>
                        <Link className="bg-blue-400 font-bold text-white mobileMini:px-3 mobileMini:py-2 px-2 cursor-pointer py-1 rounded-md" href={`/login`}>
                            <button >
                                Entrar
                            </button>
                        </Link>
                    </li>
                </ol>
                <ol className="hidden tabletMini:flex items-center gap-5">
                    <li className="grow tabletBig:text-lg font-bold">Logo</li>
                    <Link href={'/#specialty'}>                    
                        <li className="font-medium">Especialidades</li>
                    </Link>
                    <Link href={'/#moreinfos'}>                    
                        <li className="font-medium">Mais informações</li>
                    </Link>
                    <Link href={'/#aboutus'}>                    
                        <li className="font-medium">Nossa Equipe</li>
                    </Link>
                    <Link href={'/#beneficies'}>                    
                        <li className="font-medium">Benefícios</li>
                    </Link>
                    <Link href={'/#units'} >                    
                        <li className="font-medium">Unidades</li>
                    </Link>
                    <Link href={'/login'}>
                        <li>
                            <button className="bg-blue-400 font-bold text-white mobileMini:px-3 mobileMini:py-2 px-2 cursor-pointer py-1 rounded-md">
                                Entrar
                            </button>
                        </li>
                    </Link>
                </ol>
            </nav>
            <ol ref={ListRef} className={`absolute p-3 transition-all top-0 ${position} flex flex-col items-center gap-3 w-[60vw] text-white font-medium h-screen bg-white shadow-md z-20`}>
                <Link className="bg-slate-300 w-[80%] flex justify-center items-center p-2 rounded-sm" href={`#`}>
                    <li onClick={closePosition}>X</li>
                </Link>
                <Link className="bg-blue-400 w-[80%] flex justify-center items-center p-2 rounded-sm" href={`/login`}>
                    <li>Entrar</li>
                </Link>
                <Link onClick={() => setPosition('left-[-100%]')} className="bg-blue-400 w-[80%] flex justify-center items-center p-2 rounded-sm" href={`/register`}>
                    <li>Cadastrar</li>
                </Link>
            </ol>
        </header>
    )
}