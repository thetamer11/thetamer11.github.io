import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from './../../components/header'
import Topbar from './../../components/topbar.js'
import SectionTitle from './../../components/section-title'
import MobileGameHorizontal from './../../components/mobile_game_horizontal'

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
        <SectionTitle title="Birch Tree"/>
        <MobileGameHorizontal
        image1="/assets/games/009_Project_Birch_Tree/1.png"
        image2="/assets/games/009_Project_Birch_Tree/2.png"
        image3="/assets/games/009_Project_Birch_Tree/3.png"
        status="Canceled"
        genre="Infinite Runner"
        company="Independent"
        role="Programmer"
        tools="Unity"
        gameDesc = "Help Marsh flee from the demons as she bops to the lastest Lo-Fi Hip Hop Track in this top down infinite runner!"
        learned = "This was the first independent team that I worked on, together we worked to fully capture a popular vibe from the time. One of the challenges I was tasked with was creating an infite level generatorThis was the first independent team that I worked on, together we worked to fully capture a popular vibe from the time. One of the challenges I was tasked with was creating an infinite level generator. My solution was to use prefabed sections that had assigned difficulty levels, allowing us to scale the course the longer that the player lasts."
        contribs = {["Scripted enemy AI", "Designed and built a tool that allowed us to quickly build more levels", "Targeted our game at a behavoir group and iterated and designed the game around it", "Implemented Game Analytics and used the data we collected to iterate off of"]}
        teamSize={5}
        />
      </main>
    </div>
    )
}