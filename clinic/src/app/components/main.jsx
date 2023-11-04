import Image from "next/image"
import Link from "next/link"
import Img_main from '../../../public/images/main_banner.webp'
import { Cards } from "./mainComponents/cards"
import { AboutUs } from "./mainComponents/quemSomos" 

export const Mains = () => {
    return (
        <main className="flex flex-col items-center w-screen h-auto">
            <section className="flex justify-center flex-col gap-5 items-center relative w-screen text-white font-medium h-[300px]">
                <Image fill={true} className="object-cover" src={Img_main}/>
                <p className="relative bottom-[20px] font-bold text-xl text-center z-10">
                    Lorem ipsum dolor
                    <br />
                    Lorem
                </p>
                <Link href={`#`}>
                    <button className="relative bottom-[10px] px-5 rounded-md py-1 z-10 font-bold text-sm shadow-lg bg-blue-400" >
                        Cadastrar
                    </button>
                </Link>
            </section>
            <Cards/>
            <AboutUs/>
        </main>
    )
}