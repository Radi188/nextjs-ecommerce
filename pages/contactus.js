import Link from "next/link";
import Format from "../layout/format";
import Image from "next/image";

const Contact = () => {
    return (
        <Format>
            <div className="flex flex-row justify-start bg-gray-50 pb-20 ">
                <div className="p-10 w-6/12">
                    <div className=" font-semibold text-2xl uppercase text-slate-900"> Contact</div>
                    <div className="w-11/12 mt-10 mb-10 bg-slate-200 line "></div>
                    <div><span className="font-semibold text-slate-700 ">Address: </span><span className=" text-sm pt-2 text-start pb-1 text-slate-900">23 Samdach Pen Ave (214),Phnom Penh - Cambodia <br /> (+855) 010 30 83 30 / 010 30 38 30 </span></div>
                    <div><span className="font-semibold text-slate-700 ">Email: </span><span className=" text-sm pt-2 text-start pb-1 text-slate-900">info@franceajalimentaire.com</span></div>
                    <div><span className="font-semibold text-slate-700 ">Phone: </span><span className=" text-sm pt-2 text-start pb-1 x ext-slate-900">(+855) 010 30 83 30 / 010 30 38 30</span></div>
                    <div><span className="font-semibold text-slate-700 ">Fax: </span><span className=" text-sm pt-2 text-start pb-1 text-slate-900">1-850-201-6911</span></div>
                    <div><span className="font-semibold text-slate-700 ">Naples Office: </span><br /><span className=" text-sm pt-2 text-start pb-1 text-slate-900">23 Samdach Pen Ave (214),Phnom Penh - Cambodia </span></div>
                    <div className="font-semibold text-slate-700 text-2xl capitalize ">What you get when u ask question</div>
                    <div>
                        <ul className="pl-10">
                            <li className=" list-disc text-sm pt-2 text-start pb-1 text-slate-900 ">Less than 12hour respone to your question</li>
                            <li className=" list-disc text-sm pt-2 text-start pb-1 text-slate-900 ">Throughness and expertise of Certificate Exchange Specialist</li>
                            <li className=" list-disc text-sm pt-2 text-start pb-1 text-slate-900 ">Plan of action summarize in email follow up </li>
                        </ul>
                    </div>

                </div>
                <div className=" pt-32 justify-center">
                    <div className="pt-3 flex flex-row ">
                        <div>
                            <label className="pl-2 text-slate-900">First Name:</label>
                            <input type="text" className="input-box focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        </div>
                        <div className="ml-20">
                            <label className="pl-2 text-slate-900">Last Name:</label>
                            <input type="text" className="input-box focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        </div>
                    </div>
                    <div className="pt-3 flex flex-row ">
                        <div>
                            <label className="pl-2 text-slate-900">Email:</label>
                            <input type="email" className="input-box focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        </div>
                        <div className="ml-20">
                            <label className="pl-2 text-slate-900">Phone Number:</label>
                            <input type="number" className="input-box focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        </div>
                    </div>
                    <div className="pt-3 flex flex-row ">
                        <div>
                            <label className="pl-2 text-slate-900">Subject:</label>
                            <input type="text" className="textarea focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        </div>
                    </div>
                    <div className="flex flex-row pt-3">
                        <div>
                            <label className="pl-2 text-slate-900">Comment:</label>
                            <textarea className="textarea h-10 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" cols="10" rows="10"></textarea>
                        </div>
                    </div>
                    <input type="button" value="Submit" className="mt-5 text-sm bg-slate-800 text-white button" />
                </div>
            </div>
        </Format>
    );
}

export default Contact;