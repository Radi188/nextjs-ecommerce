import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import Image from "next/image";
import Link from 'next/link'
import Dropdown from "./Dropdown";

const Header = () => {
    return (
        <div className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div>
                    <Link href={'/'}><Image src={'/assets/logo.png'} width='230' height={'80'} alt='logo' ></Image></Link>
                </div>
                <div className="shrink w-3/12 sm:order-2 flex justify-end align-center">
                    <Link href={'/'} className="font-bold text-slate-900 uppercase text-sm mr-10">Home</Link>
                    <Link href={'/product'} className="font-bold text-slate-900 uppercase text-sm mr-10">Product</Link>
                    {/* <Dropdown /> */}
                    {/* <Link href={'/category'} className="font-bold uppercase text-sm">Category</Link> */}
                    <Link href={'/contactus'} className="font-bold text-slate-900 uppercase text-sm">Contact Us</Link>
                </div>
                <div className="w-3/12 order-3 flex flex-row justify-center">
                    <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center sm:py-0">
                        <input className="input-text focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="Search..." />
                        <a href='/assets/myPDF.pdf' target="_blank" rel="noopener noreferrer" className='ml-5 text-sm bg-slate-800 text-white button'>Downlaod</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;