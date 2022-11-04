import Head from 'next/head'
import Layout from "../components/Layout";
import { useState } from "react";
import NavBar from "../components/NavBar";
import LinkButton from "../components/UI/LinkButton";
import links from "../api/links.json"
import TitleHead from "../components/TitleHead";
import LinkBlock from "../components/LinkBlock";

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
        <LinkBlock/>
    </div>
    )
}