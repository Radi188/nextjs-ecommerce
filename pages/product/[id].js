import Format from "../../layout/format";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from '../../components/ProductCard'

export const getStaticPaths = async () => {
    const res = await fetch('http://admin.franceajalimentaire.com/api/get_all_products')
    const data = await res.json();
    const paths = data.data.map(data => {
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
    const res = await fetch('http://admin.franceajalimentaire.com/api/get_product/' + id)
    const data = await res.json()
    return {
        props: { data }
    }
}

const Details = ({ data }) => {
    const path = 'https://admin.franceajalimentaire.com/assets/images/products/'
    const Slide1 = () => {
        const path = 'https://admin.franceajalimentaire.com/assets/images/products/'
        return (
            <div className="image ">
                <Image src={path + data.data.thumbnail} width={600} height={500} alt={data.data.product_title} />
            </div>
        )
    }

    return (
        <Format title={data.data.product_title} description={data.data.seo_description} keyword={data.data.keyword} imgSrc={path + data.data.thumbnail} >
            <div className="bg-gray-50">
                <div className="text-2xl font-semibold text-center pt-5 border-b-2 border-b-sky-500 w-48 p-1 mx-auto text-slate-900" >Product Details</div>
                <div className=" text-sm font-semibold text-center mb-5 w-68 p-2 mx-auto uppercase text-gray-600 ">Home&emsp;{'>'}&emsp;Product&emsp;{'>'}&emsp;{data.data.product_title}</div>
                <div className="w-11/12 mx-auto bg-slate-100 line "></div>
                <div className="flex flex-row justify-between mt-20 w-7/12 mx-auto ">
                    <div className=" w-6/12">
                        <Swiper
                            slidesPerView={1}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            autoplay={{
                                delay: 3000
                            }}
                        >
                            <SwiperSlide>
                                <Slide1 />
                            </SwiperSlide>
                            {data.data.product_images.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="image ">
                                        <Image src={path + item.file_location} width={600} height={500} alt={data.data.product_title} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="container mx-auto md:px-20">
                        </div>
                    </div>
                    <div className="w-5/12 flex flex-col justify-center" >
                        <h1 className="uppercase text-3xl text-start pb-1 border-b-2 border-b-sky-300 w-64 text-slate-900 ">{data.data.product_title}</h1>
                        <h2 className="uppercase text-sm pt-2 text-start pb-1 text-slate-900">{data.data.category.category_name}</h2>
                        <p className="text-xl pt-5 text-gray-600 ">{data.data.description}</p>
                        <div className="w-11/12 mt-10 mb-10 bg-slate-200 line "></div>
                        <div className="mb-10">
                            <Link href={'/'} className=' w-48 text-sm bg-slate-900 text-white button'>Contact What App</Link>
                            <Link href={'/'} className='ml-10 w-48 text-sm bg-slate-900 text-white button'>Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="py-5 flex flex-wrap w-10/12 justify-between mx-auto  ">
                    {data.featured_product.map(item => (
                        <ProductCard key={item.id} id={item.id} title={item.product_title} description={item.description} imgSrc={path + item.thumbnail} alt={item.product_title} />
                    ))}
                </div>
            </div>


        </Format>
    );
}

export default Details;

