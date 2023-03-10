import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Landing = ({ slide, sl1, sl2 }) => {

    SwiperCore.use([Autoplay])

    return (
        <div className=" bg-gray-50">
            <section className="pt-2 w-10/12 mx-auto">
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
                    <SwiperSlide><Slide imgSrc={slide} /></SwiperSlide>
                    <SwiperSlide><Slide1 imgSrc1={sl1} /></SwiperSlide>
                    <SwiperSlide><Slide2 imgSrc2={sl2} /></SwiperSlide>
                </Swiper>
                <div className="container mx-auto md:px-20">
                </div>

            </section >
        </div>
    );
}

export default Landing;

const Slide = ({ imgSrc }) => {
    return (
        <div className="image ">
            <Image src={imgSrc} width={1920} height={200} alt={'slide1'} />
        </div>
    )
}

const Slide1 = ({ imgSrc1 }) => {
    return (
        <div className="image ">
            <Image src={imgSrc1} width={1920} height={200} alt={'slide2'} />
        </div>
    )
}
const Slide2 = ({ imgSrc2 }) => {
    return (
        <div className="image ">
            <Image src={imgSrc2} width={1920} height={200} alt={'slide3'} />
        </div>
    )
}