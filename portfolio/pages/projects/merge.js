import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from './../header'
import Topbar from './../topbar.js'
import SectionTitle from './../section-title'
import ProjectGrid from './../projectGrid'
import About from './../about'
import MobileGame from './../mobile_game'

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
        <SectionTitle title="Merge Critters"/>
        <MobileGame
        image1="/assets/games/011_Merge_Critters/1.png"
        image2="/assets/games/011_Merge_Critters/2.png"
        image3="/assets/games/011_Merge_Critters/3.png"
        status="Released"
        genre="Idle Clicker"
        company="MassDiGI"
        role="Programmer"
        tools="Unity"
        gameDesc = "Who would have thought that such cute little critters would have such big weapons??? The demons have invaded the critters homeland, eager to fight!! Match the adorable critters to get bigger, badder critters with even bigger weapons!"
        learned = "While working for MassDiGI over the summer I learned a lot. I was thankful to have other brialliant minds from Cornell and MIT on the team, they really helped push me to stick to a style guide and write more readable and reusable code. We also ran into a very big problem over the summer, for awhile our game wasn’t that fun. People would play it and put it down almost instantly, it took a lot of feed back, scrapping hard work, and itteration to get to the point where we are today. We constantly sought feed back from other developers on how we can improve our model and I think that’s one of the reasons our game has turned into something so addicting and fun."
        contribs = {["Prototyped 6 versions of our idea in a week", "Broke down the taxonomy of the mobile genre", "Utilized the Kanban methodology", "Worked closely with the art team to execute there vision in engine", "Built tools to speed up the UI/UX pipeline", "Developed a low dependency code base that is easy to dive into", "Designed multible balance spread sheets to increase our design efficiency", "Itterated off of feed back from industry professionals"]}
        teamSize={6}
        />
      </main>
    </div>
    )
}