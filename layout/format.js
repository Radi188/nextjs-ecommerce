import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"

export default function Format({ children, title, keyword, imgSrc, description }) {
    return (
        <>
            <Head>
                <title>{title ? title : 'Alimentaire'} | France Aj Alimentaire</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="keywords" content={keyword} />
                <meta name="description" content={description} />
                <meta property="og:title" content={title} key={title} />
                <meta property="og:description" content={description} key={title} />
                <meta property="og:image" content={imgSrc} key={title} />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
