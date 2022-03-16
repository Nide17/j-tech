import Head from 'next/head'
export default function Meta({ keywords, description, title, favicon }) {

    return (

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel='icon' href={favicon} />
            <title>{title}</title>
        </Head>)
};

Meta.defaultProps = {
    keywords: 'J-TECH, J-TECH Technology, J-TECH Technology Ltd., ICT, Printing, Repair of Machinery, Installation, Supply',
    description: 'J-TECH Technology Ltd is a company based in Kigali that provides ICT services including printing, repair, supply and maintenance of IT devices',
    title: 'J-TECH | Technology | Repair | Installation | Supply',
    favicon: '/favicon.ico'
}