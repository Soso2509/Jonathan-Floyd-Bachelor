import Head from "next/head"

const Meta = ({ header, page }) => {
    const { headerImage, headerAltText } = header[0].fields;
    return (
        <Head>
            <meta property="og:title" content={"Jonathan Floyd" + page}/>
            <meta property="og:description" content="Jonathan Floyd is a multitalented artist and producer from Oslo, Norway."/>
            <meta property="og:url" content="https://jonathan-floyd-bachelor.vercel.app/"/>
            <meta property="og:image" content={"https:" + headerImage.fields.file.url}/>
            <meta property="og:image:alt" content={headerAltText}/>
            <meta property="og:site_name" content="Jonathan Floyd"/>
            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="en_US"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={"Jonathan Floyd" + page}/>
            <meta name="twitter:description" content="Jonathan Floyd is a multitalented artist and producer from Oslo, Norway."/>
            <meta name="twitter:site" content="@JonathanFloyd"/>
            <meta name="twitter:creator" content="@jonathanFloydOfficial"/>
            <meta name="twitter:image" content={"https:" + headerImage.fields.file.url}/>
            <meta name="twitter:image:alt" content={headerAltText}/>

            <meta name="keywords" content="Jonathan Floyd, musician, Når Jeg Faller Ned, Demon Time, Danser på Kanten, Intensjoner, Toothfairy"></meta>
            <meta name="description" content="Jonathan Floyd is a multitalented artist and producer from Oslo, Norway."></meta>
            <title>Jonathan Floyd{page}</title>
        </Head>
    )
}

export default Meta