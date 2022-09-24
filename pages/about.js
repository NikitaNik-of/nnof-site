import Link from "next/link";
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from "../components/Layout";
import { useState } from "react";
import NavBtn from "../components/UI/NavBtn";
import NavBar from "../components/NavBar";


export default function About() {

    return(
    <div className=" font-igraSans">
        <NavBar/>
        <Layout>
            <Head>
                <title>О сайте</title>
            </Head>
            <h1 className=" text-6xl mb-3 ">This is about page</h1>
        </Layout>
    </div>
    )
}