export const Beneficies = () => {
    return (
        <section data-aos="fade-left" className="w-screen tabletMini:h-[300px] h-[400px] py-8 px-6 bg-blue-400 text-white tabletMini:flex-col flex items-center gap-5">
            <div className="w-[10%] tabletMini:w-full tabletMini:h-[10%] justify-between items-center h-full tabletMini:flex-row flex flex-col">
                <div className="w-3 h-full tabletMini:w-full tabletMini:h-3 relative">
                    <div className="desktopMini:w-4 desktopMini:h-4 w-3 h-3 bg-white relative rounded-full"></div>
                    <div className="w-1 h-full tabletMini:h-1 tabletMini:w-full bg-white absolute top-0 left-[30%] tabletMini:top-[30%] desktopMini:left-2 desktopMini:top-[32%]  tabletMini:left-0"></div>
                </div>
                <div className="w-3 h-full tabletMini:w-full tabletMini:h-3 relative ">
                    <div className="desktopMini:w-4 desktopMini:h-4 w-3 h-3 bg-white relative rounded-full"></div>
                    <div className="w-1 h-full tabletMini:h-1 tabletMini:w-full bg-white absolute top-0 left-[30%] tabletMini:top-[30%] desktopMini:left-2 desktopMini:top-[32%] tabletMini:left-0"></div>
                </div>
                <div className="desktopMini:w-4 desktopMini:h-4 w-3 h-3 tabletMini:w-3 tabletMini:h-3 relative">
                    <div className="desktopMini:w-4 desktopMini:h-4 w-3 h-3 bg-white relative rounded-full"></div>
                </div>
            </div>
            <div className="flex tabletBig:text-xl desktop:text-2xl tabletMini:flex-row h-full mobileMini:text-base tabletMini:text-lg text-sm justify-between flex-col gap-6">
                <div className="tabletMini:w-full tabletMini:text-left">
                    Lorem ipsum dolor sit amet consectetur, sentium corrupti animi tenetur unde error. Dolore, expedita libero!
                </div>
                <div className="tabletMini:w-full tabletMini:text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est debitis non unde ibusdam 
                </div>
                <div className="tabletMini:w-full tabletMini:text-right">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur animi labore sequi quam 
                </div>
            </div>
        </section>
    )
}