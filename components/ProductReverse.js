import Image from "next/image";
import Link from "next/link";

const ProductReverse = ({ titleProduct, description, imgSrc, id, alt }) => {
    return (
        <div className="bg-gray-50 pt-6">
            <div className="w-9/12 flex justify-between mx-auto ">
                <div className="w-6/12 bg-gray-50 flex flex-col justify-center ">
                    <div className="ml-5 uppercase text-3xl text-start pb-1 border-b-2 text-slate-900 border-b-slate-700  ">{titleProduct}</div>
                    <div className="pl-5 text-gray-700 text-justify h-80 pt-5 max-lines ">{description}</div>
                    <Link href={'/product/' + id} className='m-5 w-48 text-sm bg-slate-900 text-white button'>Check Details</Link>
                </div>
                <div className=" w-6/12 bg-gray-50 flex justify-end">
                    <Image src={imgSrc} width='600' height={'500'} alt={alt} />
                </div>
            </div>
        </div>
    );
}

export default ProductReverse;