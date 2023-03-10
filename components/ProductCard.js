import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCard = ({ title, description, category, imgSrc, id, alt }) => {
    return (
        <div >
            <Link href={'/product/' + id} className="w-96 pb-3  mt-3 flex flex-col justify-center items-center border border-slate-900 ">
                <Image src={imgSrc} width='375' height='375' alt={alt} className=' mt-1 object-cover ' />
                <div className="flex flex-row justify-between w-9/12 mt-3">
                    <h1 className="text-sm font-semibold mb-3 text-slate-900">{title}</h1>
                    <h1 className="text-sm font-semibold text-slate-900">{category}</h1>
                </div>
                <div className="text-sm text-gray-600 w-9/12   ">
                    <p className="h-10 overflow-hidden text-slate-900">{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;