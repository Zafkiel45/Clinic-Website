import Image from "next/image"
import Svg from '../../../../public/svg/medicine.svg'

export const Description = () => {
    return (
        <section data-aos="fade-up" className="w-screen flex flex-col gap-5  h-fit px-5 py-10">
            <div>
                <Image src={Svg}/>
            </div>
            <div className="w-full">
                <div className="w-full text-center font-bold text-xl">
                    <h1 className="p-3">Lorem Ipsum</h1>
                </div>
                <div className="w-full text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus eum officia, id, sapiente velit nam voluptate ducimus amet illo ipsum dolore iste nulla placeat sequi hic suscipit perferendis consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti beatae eveniet alias, sed expedita possimus! Mollitia dignissimos odit exercitationem adipisci soluta. Atque fugiat porro quas quia, saepe facere accusamus.
                </div>
            </div>
        </section>
    )
}