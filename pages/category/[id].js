import Link from "next/link";
import Landing from "../../components/LandingPage";
import ProductCard from "../../components/ProductCard";
import Format from "../../layout/format";

export const getStaticPaths = async () => {
    const res = await fetch('http://admin.franceajalimentaire.com/api/get_all_products')
    const data = await res.json();

    const paths = data.categories.map(data => {
        return {
            params: { id: data.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('http://admin.franceajalimentaire.com/api/get_products/' + id)
    const data = await res.json();
    const result = await fetch('https://admin.franceajalimentaire.com/api/get_all_products')
    const store = await result.json();
    const lande = await fetch('http://admin.franceajalimentaire.com/api/get_home_data');
    const land = await lande.json();
    return {
        props: { id, data, store, land }
    }
}
const Category = ({ data, store, id, land }) => {
    const path = 'https://admin.franceajalimentaire.com/assets/images/products/'
    const pathSlider = 'https://admin.franceajalimentaire.com/public/assets/images/slider/'
    return (
        <Format key={data.category[0].id} title={data.category[0].category_name} description={data.category[0].seo_description} keyword={data.category[0].keyword} imgSrc={path + data.category[0].category_image} >
            <div className="bg-gray-50">
                <Landing slide={pathSlider + land.sliders[0].image_name} sl1={pathSlider + land.sliders[1].image_name} sl2={pathSlider + land.sliders[2].image_name} />
                <div className="text-3xl w-max mx-auto font-semibold text-center mt-10 border-b-2 border-b-sky-500" >Our Product</div>
                <div>
                    <div className="w-8/12 mx-auto flex flex-row justify-between my-10 ">
                        <Link href={'/product'}><div className="category-list">All Product</div></Link>
                        {store.categories.map(item => (
                            <Link key={item.id} href={'/category/' + item.id}><div className={`category-list ${item.id == id ? 'active' : ''}`}>{item.category_name}</div></Link>
                        ))}
                    </div>
                </div>
                <div className="my-10 flex flex-wrap w-10/12 justify-start mx-auto ">
                    {data.data.map(item => (
                        <div key={item.id} className='mr-3'>
                            <ProductCard alt={item.product_title} id={item.id} category={data.category[0].category_name} title={item.product_title} description={item.description} imgSrc={path + item.thumbnail} />
                        </div>
                    ))}
                </div>
            </div>
        </Format>

    );
}

export default Category;