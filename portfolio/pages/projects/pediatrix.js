import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from './../header'
import Topbar from './../topbar.js'
import SectionTitle from './../section-title'
import ProjectGrid from './../projectGrid'
import About from './../about'

export default function Unity() {
    return(
    <div className={styles.container}>
      <Head>
        <title>Gavin Camlin</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Topbar/>
        <Header/>
        <SectionTitle title="Unity/Vivox"/>
      </main>
    </div>
    )
}