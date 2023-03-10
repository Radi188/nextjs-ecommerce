import Link from "next/link";
import Landing from "../components/LandingPage";
import ListProduct from "../components/ListProduct";
import ProductCard from "../components/ProductCard";
import InfiniteScroll from 'react-infinite-scroll-component'
import Format from "../layout/format";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import { paginate } from "../utils/paginate";




export const getStaticProps = async () => {
    const res = await fetch('https://admin.franceajalimentaire.com/api/get_all_products');
    const data = await res.json();
    const result = await fetch('http://admin.franceajalimentaire.com/api/get_home_data');
    const land = await result.json();

    return {
        props: { data, land }
    }
}
const Product = ({ data, land }) => {
    const [post, setPost] = useState(data)
    const path = 'https://admin.franceajalimentaire.com/assets/images/products/'
    const pathSlider = 'https://admin.franceajalimentaire.com/public/assets/images/slider/'
    // const [url, setUrl] = useState('');
    const handleClick = (url) => {
        console.log(url)
    }
    return (
        <Format title='Product' description={'Welcome to France Aj Alimentaire. France Aj Alimentaire is A place you can purchase Wholesale Product by contacting us.'} keyword={'france aj, alimentaire, food, wholesale, product, corn, sweet, bean , flour, rice, tea, pepper, coffe, sugar'}>
            <div className="bg-gray-50 pb-20">
                <Landing slide={pathSlider + land.sliders[0].image_name} sl1={pathSlider + land.sliders[1].image_name} sl2={pathSlider + land.sliders[2].image_name} />
                <div className="text-3xl w-max mx-auto font-semibold text-center mt-10 border-b-2 border-b-sky-500 text-slate-900" >Our Product</div>
                <div>
                    <div className="w-8/12 mx-auto flex flex-row justify-between my-10 ">
                        <Link href={'/product'}><div className="category-list active text-slate-900">All Product</div></Link>
                        {data.categories.map(item => (
                            <Link key={item.id} href={'/category/' + item.id}><div className="category-list text-slate-900">{item.category_name}</div></Link>
                        ))}
                    </div>
                </div>
                <div className="my-10 flex flex-wrap w-10/12 justify-start mx-auto ">
                    {post.data.map(item => (
                        <div key={item.id} className='mr-3'>
                            <ProductCard alt={item.product_title} id={item.id} category={item.category.category_name} title={item.product_title} description={item.description} imgSrc={path + item.thumbnail} />
                        </div>
                    ))}
                </div>
                {/* <nav aria-label="Page navigation example">
                    <ul className="pagination w-max mx-auto">
                        {post.data.links.map(page =>
                            <li key={page} className={page.active == 1 ? "page-item active" : "page-item"}>
                                <a onClick={handleClick(page.url)} className="page-link cursor-pointer ">{page.label}</a>
                            </li>
                        )}
                    </ul>
                </nav> */}
                {/* <Pagination pages={post.data.links} handleClick={handleClick(url)} /> */}
            </div>
        </Format>

    );
}

export default Product;