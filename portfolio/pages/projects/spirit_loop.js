import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from './../../components/header'
import Topbar from './../../components/topbar.js'
import SectionTitle from './../../components/section-title'
import ComputerGame from './../../components/computer_game'

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
        <SectionTitle title="Spirit Loop"/>
        <ComputerGame
        image1="/assets/games/012_Spirit_Loop/1.png"
        image2="/assets/games/012_Spirit_Loop/2.png"
        image3="/assets/games/012_Spirit_Loop/3.png"
        status="Almost Released"
        genre="Roguelite"
        company="Demon Byte"
        role="Programmer"
        tools="Unity"
        gameDesc = "It started as any other morning, everything was nice and peaceful within the domain that you protected. As you started on your usual patrol of the forest the ground in front of you rupters, accompanied by a giant unknown beast. In a panic you attempt to protect yourself but fall at the beast's hands. As they take a final swing at you, time stops... but you’re still aware of everything around you. A voice whispers in your ear, taunting and laughing at your failure. He decides to take pity on you, rewinding time to 15 days prior. Now you fight within a time loop, constantly trying to find the best way to train up and defeat this mysterious beast."
        learned = "Developing Spirit Loop was a big endeavor for me, this project was based on a small game jam I made at one point that evolved into something much bigger. It was also the first game I developed while working full time, one of the biggest lessons I learned from this game was a much better understanding of scope. Since I have limited time to work on the project, the game itself had to reflect what was possible for me to healthily obtain. Spirit Loop was also the first game that I had picked up on my own and carried over the finish line to release. I was determined that I wouldn’t let another game fall to the side as I was distracted with new shiny projects.Most importantly, the Demon Byte team taught me how much I love creatively collaborating with others. Working with my two others on the team helped grow the idea I had from a small little concept to something way more exciting and flashy and I don’t think I would have been able to reach that point without them."
        contribs = {["Developed 4 enemy AIs with small variants of each, totally 8 versions.", "Created and tuned player movement and dashing.", "Wrote a procedural animated grass shader, generated based on the vertex colors at that point in the texture.", "Wrote a cell shader that worked off of a global color palette, allowing us to easily test out different palettes early in development.", "Designed combat and all buffs for the player.", "Utilized a scriptable object workflow to easily create new abilities for the player and swap them out. (dashs, sword swings, sword throw, etc.)"]}
        teamSize={3}
        />
    </main>
    </div>
    )
}