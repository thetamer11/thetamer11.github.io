import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from './../../components/header'
import Topbar from './../../components/topbar.js'
import SectionTitle from './../../components/section-title'

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