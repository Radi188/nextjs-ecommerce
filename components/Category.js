import Card from "./ItemCard";
import Link from "next/link";

const Category = ({ alt, id1, id2, id3, id4, id5, id6, imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6, desc1, desc2, desc3, desc4, desc5, desc6, categoryName1, categoryName2, categoryName3, categoryName4, categoryName5, categoryName6, }) => {
    return (
        <div className="bg-gray-50 pt-6">
            <div className="text-3xl mb-10 font-semibold text-center pt-5 border-b-2 border-b-sky-500 w-max p-1 mx-auto text-slate-900">Main Category</div>

            <div className="w-8/12 mx-auto h-96 container flex justify-between mb-10">
                <Link href={'category/' + id1}>
                    <Card alt={alt} imgSrc={imgSrc1} description={desc1} category={categoryName1} /></Link>
                <Link href={'category/' + id2}><Card alt={alt} imgSrc={imgSrc2} description={desc2} category={categoryName2} />
                </Link>
                <Link href={'category/' + id3}><Card alt={alt} imgSrc={imgSrc3} description={desc3} category={categoryName3} /></Link>
            </div>
            <div className="w-8/12 mx-auto h-96 container flex justify-between">
                <Link href={'category/' + id4}><Card alt={alt} imgSrc={imgSrc4} description={desc4} category={categoryName4} /></Link>
                <Link href={'category/' + id5}><Card alt={alt} imgSrc={imgSrc5} description={desc5} category={categoryName5} /></Link>
                <Link href={'category/' + id6}><Card alt={alt} imgSrc={imgSrc6} description={desc6} category={categoryName6} /></Link>
            </div>
        </div>
    );
}

export default Category;