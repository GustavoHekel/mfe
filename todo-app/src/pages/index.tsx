import Head from 'next/head'
import React from 'react'
import ToDo from "@/components/ToDo/ToDo";

export default function Home() {

    return (
        <>
            <Head>
                <title>To Do App</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <main>
                <ToDo/>
            </main>
        </>
    )
}
