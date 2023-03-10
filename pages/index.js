import Head from 'next/head'
import Format from '../layout/format'
import Landing from '../components/LandingPage'
import Category from '../components/Category'
import Product from '../components/Product'
import ProductReverse from '../components/ProductReverse'
import Video from '../components/Video'

export const getStaticProps = async () => {
  const res = await fetch('http://admin.franceajalimentaire.com/api/get_home_data');
  const data = await res.json();
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=${process.env.INSTAGRAM_KEY}`
  const result = await fetch(url)
  const feed = await result.json();

  return {
    props: { data, feed }
  }

}
export default function Home({ data, feed }) {
  const path = 'https://admin.franceajalimentaire.com/assets/images/products/'
  const pathCath = 'https://admin.franceajalimentaire.com/assets/images/categories/'
  const pathSlider = 'https://admin.franceajalimentaire.com/public/assets/images/slider/'
  const images = feed.data
  return (
    <Format title={'Home'} description={'Welcome to France Aj Alimentaire. France Aj Alimentaire is A place you can purchase Wholesale Product by contacting us.'} imgSrc={pathSlider + data.sliders[1].image_name} keyword={'france aj, alimentaire, food, wholesale, product, corn, sweet, bean , flour, rice, tea, pepper, coffe, sugar'}  >
      <Head>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Landing slide={pathSlider + data.sliders[0].image_name} sl1={pathSlider + data.sliders[1].image_name} sl2={pathSlider + data.sliders[2].image_name} />
      <Video />
      <Category alt={data.categories[0].category_name} id1={data.categories[0].id} id2={data.categories[1].id} id3={data.categories[2].id} id4={data.categories[3].id} id5={data.categories[4].id} id6={data.categories[5].id} desc1={data.categories[0].category_name} desc2={data.categories[1].category_name} desc3={data.categories[2].category_name} desc4={data.categories[3].category_name} desc5={data.categories[4].category_name} desc6={data.categories[5].category_name}
        imgSrc1={pathCath + data.categories[0].category_image} imgSrc2={pathCath + data.categories[1].category_image} imgSrc3={pathCath + data.categories[2].category_image} imgSrc4={pathCath + data.categories[3].category_image} imgSrc5={pathCath + data.categories[4].category_image} imgSrc6={pathCath + data.categories[5].category_image}
      />
      <div className='bg-gray-50'>
        <div className="text-3xl pb-10 text-slate-900 font-semibold text-center pt-5 border-b-2 border-b-sky-500 w-max p-1 mx-auto">Feature Product</div>
      </div>
      <Product alt={data.collections[0].collection_details[0].product.product_title} id={data.collections[0].collection_details[0].product.id} description={data.collections[0].collection_details[0].product.description} imgSrc={path + data.collections[0].collection_details[0].product.thumbnail} titleProduct={data.collections[0].collection_details[0].product.product_title} />
      <ProductReverse alt={data.collections[0].collection_details[1].product.product_title} id={data.collections[0].collection_details[1].product.id} description={data.collections[0].collection_details[1].product.description} imgSrc={path + data.collections[0].collection_details[1].product.thumbnail} titleProduct={data.collections[0].collection_details[1].product.product_title} />
      <Product alt={data.collections[0].collection_details[2].product.product_title} id={data.collections[0].collection_details[2].product.id} description={data.collections[0].collection_details[2].product.description} imgSrc={path + data.collections[0].collection_details[2].product.thumbnail} titleProduct={data.collections[0].collection_details[2].product.product_title} />
      <ProductReverse alt={data.collections[0].collection_details[3].product.product_title} id={data.collections[0].collection_details[3].product.id} description={data.collections[0].collection_details[3].product.description} imgSrc={path + data.collections[0].collection_details[3].product.thumbnail} titleProduct={data.collections[0].collection_details[3].product.product_title} />
      <div className="bg-slate-900 mt-5 " >
        <h1 className=" text-center font-bold pt-5 text-xl uppercase text-white ">Instagram Feed</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-3xl px-4 sm:px-6 gap-3 mx-auto py-5 '>
          {images && images.map(image => (
            <div key={image.id} >
              {image.media_type === 'VIDEO' ? (<img className="insta-img" src={image.thumbnail_url} alt={image.caption} />) : (<img className="insta-img" src={image.media_url} alt={image.caption} height='500' />)}
            </div>
          ))}
        </div>

      </div>
    </Format>
  )
}
