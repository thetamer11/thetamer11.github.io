import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
   
    const headerStyle = {
        backgroundColor: "#45A29E",
        borderTopLeftRadius: "1vw",
        borderTopRightRadius: "1vw",
        textAlign: ""
    }

    const educationStyle = {
        marginTop: 4,
        marginBottom: 4,
        fontSize: "1vw"
    }

    const gridItemStyle = {
        textAlign: "center",
        backgroundColor: "#1F2833",
        borderRadius: "1vw",
        margin: "1vw",
        padding: "0"
    }

    const headerTextStyle = {
        marginTop: 4,
        marginBottom: 6,
        textAlign: "center"
    }

    return(
        <div style={{
            marginTop: "2vw",
            marginBottom: "2vw",
            marginLeft: "4vw",
            marginRight: "4vw"
        }}>
           <Grid container spacing={2} style={{
               justifyContent: "center",
           }}>
               <Grid item md={6} style={gridItemStyle}>
                   <Grid container>
                        <Grid md={12} item style={headerStyle}>
                            <h3 style={headerTextStyle}>Email</h3>
                        </Grid>
                        <Grid md={12} item>
                            <h3 style={educationStyle}>gcamlin[at]gmail.com</h3>
                        </Grid>
                   </Grid>
               </Grid>
               <Grid item md={4} style={gridItemStyle}>
                   <Grid container>
                        <Grid md={12} item style={headerStyle}>
                            <h3 style={headerTextStyle}>Socials</h3>
                        </Grid>
                        <Grid md={6} item>
                            <Link href='https://twitter.com/GavinCamlin'>
                                <a><Image width='40vw' height='40vw' src='/assets/logos/twitter.png'/></a>
                            </Link>
                        </Grid>
                        <Grid md={6} item>
                            <Link href='https://linkedin.com/in/gavincamlin'>
                                <a><Image width='40vw' height='40vw' src='/assets/logos/600px-LinkedIn_logo_initials.png'/></a>
                            </Link>
                        </Grid>
                   </Grid>
               </Grid>
           </Grid>
        </div>
    )
}