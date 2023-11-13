import Link from "next/link"

export const Specialty = () => {
    return (
        <section id="specialty" className="w-screen h-fit bg-slate-50 py-10">
            {/* title */}
            <div className="w-screen text-center font-bold h-fit mb-7">
                <h1 className="text-slate-700 text-xl">Especialidades</h1>
            </div>
            {/* cars */}
            <div className="flex tabletMini:flex-row tabletMini:justify-center flex-col gap-5 desktopMini:text-base text-center text-sm items-center flex-wrap">
                <div data-aos="fade-left" data-aos-delay="50" className="bg-white shadow-md tabletMini:w-[33.3%] mobileMini:w-[60%] w-[70%] p-5 rounded-lg tabletMini:h-72 h-80 text-gray-400">
                    <div className="w-full pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" className="fill-red-500 desktop:w-[35px] desktop:h-[35px] mx-auto" viewBox="0 -960 960 960" width="28"><path d="M410-120v-238L204-239l-70-121 206-120-206-119 70-121 206 119v-239h140v239l206-119 70 121-206 119 206 120-70 121-206-119v238H410Z"/></svg>
                    </div>
                    <div className="p-2">
                        Estamos preparados para emergências. Nossa equipe altamente treinada e equipamentos modernos garantem cuidados ágeis e eficientes. Do primeiro atendimento à estabilização, estamos sempre prontos para garantir o melhor para nossos pacientes                    
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="50" className="bg-white shadow-md tabletMini:w-[33.3%] mobileMini:w-[60%] w-[70%] p-5 rounded-lg tabletMini:h-72 h-80 text-gray-400">
                    <div className="w-full pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" className="fill-green-700 desktop:w-[35px] desktop:h-[35px] mx-auto" width="28"><path d="M450-80q-12 0-21-9t-9-21q0-12 9-21t21-9v-62q-42-5-79-20t-67-40l-43 44q9 9 9 21t-9 21q-9 9-21 9t-21-9l-43-42q-9-9-9-21.5t9-21.5q9-9 21-8.5t21 8.5l44-44q-25-31-40-67t-20-78h-62q0 12-9 21t-21 9q-12 0-21-9t-9-21v-60q0-12 9-21t21-9q12 0 21 9t9 21h62q5-42 20.5-78t39.5-67l-44-44q-9 8-21 8.5t-21-8.5q-9-9-9-21.5t9-21.5l42-42q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5l43 43q31-25 67-40t78-20v-62q-12 0-20.5-9t-8.5-21q0-12 9-21t21-9h60q12 0 21 9t9 21q0 12-9 21t-21 9v62q42 5 78 20t67 40l44-44q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l42 43q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9l-43 43q25 31 40 67.5t20 78.5h62q0-12 9-21t21-9q12 0 21 9t9 21v60q0 12-9 21t-21 9q-12 0-21-9t-9-21h-62q-5 42-20 78.5T698-304l43 43q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5l-42 42q-9 9-21.5 9t-21.5-9q-9-9-8.5-21t8.5-21l-44-44q-31 25-67 40.5T510-201v61q12 0 21 9t9 21q0 12-9 21t-21 9h-60Zm30-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-70-40q17 0 28.5-11.5T450-360q0-17-11.5-28.5T410-400q-17 0-28.5 11.5T370-360q0 17 11.5 28.5T410-320Zm140 0q17 0 28.5-11.5T590-360q0-17-11.5-28.5T550-400q-17 0-28.5 11.5T510-360q0 17 11.5 28.5T550-320ZM340-440q17 0 28.5-11.5T380-480q0-17-11.5-28.5T340-520q-17 0-28.5 11.5T300-480q0 17 11.5 28.5T340-440Zm140 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm140 0q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440ZM410-560q17 0 28.5-11.5T450-600q0-17-11.5-28.5T410-640q-17 0-28.5 11.5T370-600q0 17 11.5 28.5T410-560Zm140 0q17 0 28.5-11.5T590-600q0-17-11.5-28.5T550-640q-17 0-28.5 11.5T510-600q0 17 11.5 28.5T550-560Zm-70 80Z"/></svg>
                    </div>
                    <div className="p-2">
                        Em nossas consultas especializadas, analisamos minuciosamente as cepas bacterianas, identificando suas características e comportamentos. 
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="100"  className="bg-white shadow-md tabletMini:w-[33.3%] mobileMini:w-[60%] w-[70%] p-5 rounded-lg tabletMini:h-72 h-80 text-gray-400">
                    <div className="w-full pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" className="fill-pink-400 desktop:w-[35px] desktop:h-[35px] mx-auto" width="28" viewBox="0 -960 960 960"><path d="M390-120q-51 0-88-35.5T260-241q-60-8-100-53t-40-106q0-21 5.5-41.5T142-480q-11-18-16.5-38t-5.5-42q0-61 40-105.5t99-52.5q3-51 41-86.5t90-35.5q26 0 48.5 10t41.5 27q18-17 41-27t49-10q52 0 89.5 35t40.5 86q59 8 99.5 53T840-560q0 22-5.5 42T818-480q11 18 16.5 38.5T840-400q0 62-40.5 106.5T699-241q-5 50-41.5 85.5T570-120q-25 0-48.5-9.5T480-156q-19 17-42 26.5t-48 9.5Zm130-590v460q0 21 14.5 35.5T570-200q20 0 34.5-16t15.5-36q-21-8-38.5-21.5T550-306q-10-14-7.5-30t16.5-26q14-10 30-7.5t26 16.5q11 16 28 24.5t37 8.5q33 0 56.5-23.5T760-400q0-5-.5-10t-2.5-10q-17 10-36.5 15t-40.5 5q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480q33 0 56.5-23.5T760-560q0-33-23.5-56T680-640q-11 18-28.5 31.5T613-587q-16 6-31-1t-20-23q-5-16 1.5-31t22.5-20q15-5 24.5-18t9.5-30q0-21-14.5-35.5T570-760q-21 0-35.5 14.5T520-710Zm-80 460v-460q0-21-14.5-35.5T390-760q-21 0-35.5 14.5T340-710q0 16 9 29.5t24 18.5q16 5 23 20t2 31q-6 16-21 23t-31 1q-21-8-38.5-21.5T279-640q-32 1-55.5 24.5T200-560q0 33 23.5 56.5T280-480q17 0 28.5 11.5T320-440q0 17-11.5 28.5T280-400q-21 0-40.5-5T203-420q-2 5-2.5 10t-.5 10q0 33 23.5 56.5T280-320q20 0 37-8.5t28-24.5q10-14 26-16.5t30 7.5q14 10 16.5 26t-7.5 30q-14 19-32 33t-39 22q1 20 16 35.5t35 15.5q21 0 35.5-14.5T440-250Zm40-230Z"/></svg>
                    </div>
                    <div className="p-2">
                        Consultas de Psicologia: Suporte especializado para cuidar da sua saúde mental. Profissionais atenciosos, estratégias personalizadas para o seu bem-estar emocional.                   
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100"  className="bg-white shadow-md tabletMini:w-[33.3%] mobileMini:w-[60%] w-[70%] p-5 rounded-lg tabletMini:h-72 h-80 text-gray-400">
                    <div className="w-full pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-400 desktop:w-[35px] desktop:h-[35px] mx-auto" height="28" viewBox="0 -960 960 960" width="28"><path d="M480-480Zm0 360q-18 0-34.5-6.5T416-146L148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Zm40-520q10 0 19 5t14 13l68 102h166q7-17 10.5-34.5T801-590q-2-69-46-118.5T645-758q-31 0-59.5 12T536-711l-27 29q-5 6-13 9.5t-16 3.5q-8 0-16-3.5t-14-9.5l-27-29q-21-23-49-36t-60-13q-66 0-110 50.5T160-590q0 18 3 35.5t10 34.5h187q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8Zm12 130-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H236l237 237q2 2 3.5 2.5t3.5.5q2 0 3.5-.5t3.5-2.5l236-237H600q-10 0-19-5t-15-13l-34-52Z"/></svg>
                    </div>
                    <div className="p-2">
                        Nossas consultas cardiológicas oferecem avaliações abrangentes e precisas. Com tecnologia avançada e especialistas dedicados, proporcionamos cuidados preventivos e tratamentos personalizados para garantir a saúde do seu coração.                    
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="150"  className="bg-white shadow-md tabletMini:w-[33.3%] mobileMini:w-[60%] w-[70%] p-5 rounded-lg tabletMini:h-72 h-80 text-gray-400">
                    <div className="w-full pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-pink-300 desktop:w-[35px] desktop:h-[35px] mx-auto" height="28" viewBox="0 -960 960 960" width="28"><path d="m364-102-29-58q-9-17-13-35t-4-37q0-23 6.5-45.5T345-320q8-11 12-23.5t4-26.5q0-16-6-30l-12-28q-10-19-16.5-39t-6.5-41v-152q0-25-17.5-42.5T260-720q-21 0-37 14t-21 34q34 13 56 43.5t22 68.5q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-40 23-71t59-43q5-54 44.5-90t93.5-36q7 0 14 .5t14 2.5q44-23 92.5-33t99.5-10q50 0 98.5 10t92.5 33q7-2 14-2.5t14-.5q55 0 94.5 36t44.5 90q36 12 59 43t23 71q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-38 22-68.5t56-43.5q-5-20-21-34t-38-14q-25 0-42 17.5T640-660v152q0 21-7 41t-16 39q-7 14-12.5 28t-5.5 30q0 14 4 26.5t12 23.5q13 20 20 42.5t7 45.5q0 19-4.5 37T625-160l-29 58-72-36 29-58q5-8 7-17t2-19q0-12-4-23t-10-21q-14-20-21.5-44t-7.5-49q0-23 6.5-43.5T543-453q6-14 11.5-27.5T560-508v-152q0-24 7.5-45.5T589-745q-26-8-53.5-11.5T480-760q-28 0-55.5 3.5T371-745q14 18 21.5 39.5T400-660v152q0 14 5 28t12 27q10 20 17 40.5t7 43.5q0 25-7.5 48.5T412-276q-7 10-10.5 21t-3.5 23q0 10 2 19t7 17l29 58-72 36ZM160-520q17 0 28.5-11.5T200-560q0-17-11.5-28.5T160-600q-17 0-28.5 11.5T120-560q0 17 11.5 28.5T160-520Zm640 0q17 0 28.5-11.5T840-560q0-17-11.5-28.5T800-600q-17 0-28.5 11.5T760-560q0 17 11.5 28.5T800-520Zm0-40Zm-640 0Z"/></svg>                    </div>
                    <div className="p-3">
                        Nas consultas ginecológicas, oferecemos um ambiente acolhedor e confidencial. Nossa equipe de especialistas em saúde feminina garante cuidados abrangentes.
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="150"  className="bg-white shadow-md tabletMini:w-[33.3%] mobileMini:w-[60%] w-[70%] p-5 rounded-lg tabletMini:h-72 h-80 text-gray-400">
                    <div className="w-full pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" className="fill-gray-300 desktop:w-[35px] desktop:h-[35px] mx-auto" viewBox="0 -960 960 960" width="28"><path d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z"/></svg>                    </div>
                    <div className="p-3">
                        Nas consultas odontológicas, priorizamos sua saúde bucal. Com técnicas avançadas e atendimento personalizado, oferecemos desde cuidados preventivos até tratamentos especializados.
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className="w-screen h-fit p-3 mt-4 flex justify-center items-center">
                <Link href={'#'}>
                    <button className="bg-blue-400 w-fit h-fit tabletMini:py-2 py-1 tabletMini:px-8desktop:w-[35px] desktop:h-[35px]  px-5 text-white font-bold shadow-sm rounded-lg">
                        Ver mais
                    </button>
                </Link>
            </div>
        </section>
    )
}