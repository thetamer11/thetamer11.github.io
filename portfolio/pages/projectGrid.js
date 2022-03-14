import Grid from '@material-ui/core/Grid';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function ProjectGrid() {
    function changeBackground(e) {
        e.target.style.backgroundColor = "red"
    }
    function changeBack(e) {
        e.target.style.backgroundImage = "blue"
    }


    const projects =[
        {
            // url: "assets/games/013_Unity_Vivox/logo.png",
            logo: 'assets/games/013_Unity_Vivox/logo.png',
        },    
        {
            url: "assets/games/012_Spirit_Loop/Banner.png",
            // logo: 'assets/games/012_Spirit_Loop/logo.png',
        },   
        {
            url: "assets/games/011_Merge_Critters/Banner.png",
            logo: 'assets/games/011_Merge_Critters/logo.png',
       },
       {
            url: 'assets/games/009_Project_Birch_Tree/Banner.png',
            logo: 'assets/games/009_Project_Birch_Tree/Logo.png',
       },
       {
            url: 'assets/games/008_Property_Damage/Banner.png',
            logo: 'assets/games/008_Property_Damage/Logo.png',
       },
       {
            url: 'assets/games/007_Pediatrix/Banner.png',
            logo: 'assets/games/007_Pediatrix/Logo.png',
       },
        {
            url: 'assets/games/006_Triage/Banner.png',
            logo: 'assets/games/006_Triage/Logo.png',
        }
   ]

   const ButtonStyle = ({value}) => (
                    <Button
                     onMouseEnter={changeBackground}
                     onMouseExit={changeBack}
                     style={{
                        backgroundImage: `url(${value.url})`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                        borderRadius: "1vw",
                        backgroundColor: "#000"
                    }}>
                        <img src={value.logo} style={{
                            maxHeight: "100%",
                            maxWidth: "100%"
                        }}></img>
                    </Button>
   );

    return(
        <div className={styles.section}>
            <Box sx={{
                marginTop: "2vw",
                marginBottom: "2vw",
                marginLeft: "4vw",
                marginRight: "4vw"
            }}>
                <Grid container spacing={2} className={styles.experience}>
                    {projects.map((value) => (
                        <Grid item key={value} xs={6} md={4}>
                        <ButtonStyle value={value}/>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}