import Link from "next/link";
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from "../components/Layout";
import { useState } from "react";
import NavBtn from "../components/UI/NavBtn";
import NavBar from "../components/NavBar";
import MainButton from "../components/UI/MainButton";
import LinkButton from "../components/UI/LinkButton";
import links from "../api/links.json"
import TitleHead from "../components/TitleHead";


export default function Links() {
    const [linkBtn, setLink] = useState(links.linkBtn)

    return(
    <div className=" font-igraSans">
        <NavBar/>
        <Layout className='mt-16'>
            <Head>
                <title>Полезные ссылки</title>
            </Head>
            <TitleHead/>
            <div className="w-full flex flex-wrap lg:flex-nowrap">
                {linkBtn.map((link) => (
                    <LinkButton key={link.id} className={link.classBtn} href={link.href}>
                        {link.name}
                    </LinkButton>
                ))}
            </div>
        </Layout>
    </div>
    )
}