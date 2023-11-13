import Image from "next/image"
import Svg from '../../../../public/svg/medicine.svg'

export const Description = () => {
    return (
        <section id="aboutus" data-aos="fade-up" className="w-screen flex desktopMini:flex-row flex-col desktop:gap-10 gap-5 desktop:py-32 desktopMini:py-16 h-fit px-5 py-10">
            <div className="relative tabletMini:w-[80%] desktopMini:w-[75%] desktop:w-[70%] w-[90%]  tabletMini:h-[300px] h-[340px] mx-auto">
                <Image className="object-contain" fill={true} src={Svg}/>
            </div>
            <div className="w-full">
                <div className="w-full text-center font-bold tabletMini:text-2xl desktop:text-3xl text-xl">
                    <h1 className="p-3">Nossa equipe</h1>
                </div>
                <div className="w-full desktop:text-lg text-center">
                Nossa equipe médica é formada por especialistas dedicados e experientes, comprometidos em oferecer cuidados de excelência. Com profissionais de diversas áreas da saúde, nossa equipe multidisciplinar garante um atendimento abrangente e personalizado para cada paciente, priorizando a saúde e o bem-estar.
                </div>
            </div>
        </section>
    )
}