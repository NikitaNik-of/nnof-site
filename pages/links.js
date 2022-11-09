import Head from 'next/head'
import Layout from "../components/Layout";
import { useState } from "react";
import NavBar from "../components/NavBar";
import LinkButton from "../components/UI/LinkButton";
import links from "../api/links.json"
import TitleHead from "../components/TitleHead";
import LinkBlock from "../components/LinkBlock";
import ytl from "../public/images/logos/yt_profile.jpg"
import ytl2 from "../public/images/logos/yt2_profile.png"

export default function Links() {
    const [linkBtn, setLink] = useState(links.linkBtn)

    return(
    <div className=" font-igraSans">
        <NavBar/>
        <Layout className='my-16'>
            <Head>
                <title>Полезные ссылки</title>
            </Head>
            <TitleHead title="Ссылки" subtitle="Где можно меня найти?" hidtitle="Я есть везде, но не одновременно..."/>
            <div className="w-full flex flex-wrap lg:flex-nowrap">
                {linkBtn.map((link) => (
                    <LinkButton key={link.id} className={link.classBtn} href={link.href}>
                        {link.name}
                    </LinkButton>
                ))}
            </div>
        </Layout>
        <LinkBlock playlistID="UUamczE3xY8f_UcF4ItttVgA" pic={ytl} channelID="@NikitaNik_of" body="Самая главная часть контента"/>
        <LinkBlock playlistID="UUcaSqrqIfplYngOKW3MLANA" pic={ytl2} channelID="@NikitaNik_not_of" body="Клипы почти на каждый день"/>
    </div>
    )
}