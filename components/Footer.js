import Image from "next/image";
import { ImFacebook, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="h-72 bg-slate-900 ">
            <div className="justify-around pt-8 w-11/12 flex flex-row mx-auto ">
                <div>
                    <Image src={'/assets/logo-white.png'} width='300' height={'150'} alt='logo' />
                    <div className="pl-24">
                        <p className="text-slate-300 text-xs ">France AJ Alimentaire & Food</p><br />
                        <p className="text-slate-300 text-xs">(+855) 010 30 83 30 / 010 30 38 30</p>
                        <p className="text-slate-300 text-xs">info@franceajalimentaire.com</p>
                    </div>
                </div>
                <div className="justify-start">
                    <div>
                        <h1 className="text-slate-300 text-2xl font-semibold  ">Quick Link</h1>
                        <ul className="pt-6">
                            <li className="text-white pb-4 text-xl font-semibold">Home</li>
                            <li className="text-white pb-4 text-xl font-semibold">Product</li>
                            {/* <li className="text-white pb-2 text-sm font-semibold">Category</li> */}
                            <li className="text-white pb-4 text-xl font-semibold">Contact us</li>
                        </ul>
                    </div>
                </div>
                <div className="justify-start">
                    <div>
                        <h3 className="text-slate-300 text-xl font-semibold ">Quick Contact</h3>
                        <div className="flex flex-row justify-start pt-6">
                            <Link href={'https://www.facebook.com/franceajalimentaire'}><ImFacebook color="#fff" className="w-8 h-8 mr-4" /></Link>
                            <Link href={'/'}><ImTwitter color="#fff" className="w-8 h-8 mr-4" /></Link>
                            <Link href={'/'}><ImYoutube color="#fff" className="w-8 h-8 mr-4" /></Link>
                            <Link href={'/'}><ImInstagram color="#fff" className="w-8 h-8 mr-4" /></Link>
                        </div>

                    </div>
                    {/* <div className="w-11/12 pt-6 flex flex-row justify-start mb-9">
                        <input className="input-text focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="Drop your email here..." />
                    </div>
                    <Link href={'/'} className='w-48 text-sm bg-amber-500 text-black button'>Submit your email</Link> */}
                </div>
            </div>
        </div >
    );
}

export default Footer;