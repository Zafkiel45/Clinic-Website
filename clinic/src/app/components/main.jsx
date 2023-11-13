import Image from "next/image"
import Link from "next/link"
import Img_main from '../../../public/images/doctors.webp'
import { Complement } from "./mainComponents/complement" 
import { Units } from "./mainComponents/Units"
import { Beneficies } from "./mainComponents/beneficies"
import { Specialty } from "./mainComponents/specialty"
import { Description } from "./mainComponents/description"

export const Mains = () => {
    return (
        <main className="flex flex-col items-center w-screen h-auto">
            <section className="flex justify-center flex-col gap-5 items-center relative w-screen text-white font-bold   h-screen ">
                <Image fill={true} className="brightness-75 object-cover" src={Img_main}/>
                <p className="mobileMini:text-2xl tabletBig:text-3xl desktopMini:text-4xl relative bottom-[20px] font-bold text-xl text-center z-10">
                    Saúde em Foco. 
                    <br />
                    Cuidamos de Você!
                </p>
                <Link href={`/register`}>
                    <button className="mobileMini:px-7 tabletBig:px-8 tabletBig:py-2 desktopMini:px-10 desktopMini:py-3 mobileMini:py-2 mobileMini:text-base desktopMini:text-lg relative bottom-[10px] px-5 rounded-md py-1 z-10 font-bold text-sm shadow-lg bg-blue-400" >
                        Cadastrar
                    </button>
                </Link>
            </section>
            <Specialty/>
            <Complement/>
            <Description/>
            <Beneficies/>
            <Units/>
        </main>
    )
}