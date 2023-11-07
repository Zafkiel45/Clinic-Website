export const Cards = () => {
    return (
        <section className="relative w-full min-[890px]:h-[300px] desktopMini:h-[300px] tabletMini:h-[390px] h-[920px] p-3 flex justify-center">
            <div className="absolute h-fit flex flex-col min-[890px]:justify-center tabletMini:flex-row gap-3 desktopMini:top-[-100px] top-[-50px]">
                <div className="bg-white border min-[890px]:w-[30%]  desktopMini:w-[25%] desktopMini:h-[355px] tabletMini:w-52 p-4 border-gray-200 w-64 rounded-lg shadow-lg flex flex-col justify-center gap-2">
                    <div className="my-0 mx-auto p-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg"  height='25px' width='25px' fill="rgb(156, 163, 175)" className="desktopMini:h-[30px] desktopMini:w-[25px] h-[25px] w-[25px] " class="bi bi-calendar-check" viewBox="0 0 16 16">
                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                    </div>
                    <h1 className="text-base desktopMini:text-lg text-center w-full font-medium text-color-card">
                        lorems
                    </h1>
                    <p className="text-sm desktopMini:text-base p-2 text-color-card text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur esse beatae fugiat odio perferendis nemo deserunt unde maiores veniam nisi et exercitationem excepturi quaerat rerum cupiditate, iure eaque iste?
                    </p>
                </div>
                <div className="bg-white border min-[890px]:w-[30%] desktopMini:w-[25%]  desktopMini:h-[355px] tabletMini:w-52 p-4 border-gray-200 w-64 rounded-lg shadow-lg flex flex-col justify-center gap-2">
                    <div className="my-0 mx-auto p-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg"  height='25px' width='25px' fill="rgb(156, 163, 175)" className="desktopMini:h-[30px] desktopMini:w-[25px] h-[25px] w-[25px] " class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                    </div>
                    <h1 className="text-base desktopMini:text-lg text-center w-full font-medium text-color-card">
                        lorem
                    </h1>
                    <p className="text-sm desktopMini:text-base p-2 text-color-card text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente itaque veniam animi dolorum temporibus fugiat, nulla soluta neque molestias, veritatis alias magni deleniti voluptate voluptas esse distinctio ut sunt.
                    </p>
                </div>
                <div className="bg-white border p-4 border-gray-200 min-[890px]:w-[30%] desktopMini:w-[25%]  desktopMini:h-[355px] tabletMini:w-52 w-64 rounded-lg shadow-lg flex flex-col justify-center gap-2">
                    <div className="my-0 mx-auto p-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height='25px' width='25px' fill="rgb(156, 163, 175)" className="desktopMini:h-[30px] desktopMini:w-[25px] h-[25px] w-[25px]" class="bi bi-activity" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                        </svg>
                    </div>
                    <h1 className="text-base desktopMini:text-lg text-center w-full font-medium text-color-card">
                        lorem
                    </h1>
                    <p className="text-sm desktopMini:text-base p-2 text-color-card text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id, nobis quasi quod accusantium totam sint tempora exercitationem adipisci dolore numquam consequuntur quaerat, harum repudiandae, laborum dolorem! Ut, ipsa? Quasi?
                    </p>
                </div>
            </div>
        </section>
    )
}