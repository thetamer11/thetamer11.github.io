import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './../components/header'
import Topbar from './../components/topbar.js'
import SectionTitle from './../components/section-title'
import ProjectGrid from './../components/projectGrid'
import About from './../components/about'
import Contact from './../components/contact'

export default function Home() {
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
        <SectionTitle title="Experience"/>
        <ProjectGrid/>
        <SectionTitle id="About" title="About"/>
        <About/>
        <SectionTitle id="Contact" title="Contact"/>
        <Contact/>
      </main>
    </div>
  )
}
