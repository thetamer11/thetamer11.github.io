import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from './../../components/header'
import Topbar from './../../components/topbar.js'
import SectionTitle from './../../components/section-title'
import Software from '../../components/software'

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
        <Software
        company="Unity/Vivox"
        role="Software Developer"
        image1="/assets/images/UnityPic.jpg"
        learned = ""
        contribs = {["Developed a service to help control toxicity in voice communications.", "Scaled said service for enterprise customers (Riot, Warner Bros., IMVU, Respawn) to support upwards of 500k concurrent users.", "Created a micro service that takes audio pcaps and decodes them into wav format.", "Documented and planned PRD and TDDs for new APIs.", "Load tested services to confirm that we’d be able to handle large loads of players.", "Refactored sections of our monolithic voice service."]}
        teamSize={5}
        />
      </main>
    </div>
    )
}