import Image from "next/image";

const Card = ({ imgSrc, description, category, alt }) => {
    return (
        <div className="w-96 h-96 bg-slate-50 ">
            <div className="content-center justify-center">
                <Image src={imgSrc} width='386' height='350' alt={alt} />
            </div>
            <div className="font-bold text-lg pt-2 desc text-slate-700 text text-center ">{description}</div>
        </div>
    );
}

export default Card;