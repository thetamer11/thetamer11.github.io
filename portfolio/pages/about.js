import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Stack from '@mui/material/Stack';
import styles from '../styles/Home.module.css'
import { borderRadius } from '@mui/system';
import { Button } from '@material-ui/core';
import AboutMe from '../public/blurbs/about_me.json'

export default function About() {
    const gridItemStyle = {
        textAlign: "center",
        backgroundColor: "#1F2833",
        borderRadius: "1vw",
        margin: "1vw"
    }

    const pText = {
        textAlign: "left"
    }

    const headerStyle = {
        backgroundColor: "#45A29E",
        borderTopLeftRadius: "1vw",
        borderTopRightRadius: "1vw",
        textAlign: ""
    }

    const headerTextStyle = {
        marginTop: 4,
        marginBottom: 6,
        textAlign: "center"
    }

    const educationStyle = {
        marginTop: 4,
        marginBottom: 4,
        fontSize: "1vw"
    }

    const engines = [
        "assets/logos/UnityLogo.png",
        "assets/logos/gamemaker.png"
    ]

    const utilities = [
        "assets/logos/Maya.png",
        "assets/logos/blender_icon.png"
    ]

    const languages = [
        {
            logo: "assets/logos/C_Sharp_logo.png",
            name: "C#"
        },
        {
            logo: "assets/logos/cpp_logo.png",
            name: "C++"
        },
        {
            logo: "assets/logos/Other-python-icon.png",
            name: "Python"
        },
        {
            logo: "assets/logos/golang.png",
            name: "Golang"
        }
    ]

    return(
        <div style={{
            marginTop: "2vw",
            marginBottom: "2vw",
            marginLeft: "4vw",
            marginRight: "4vw"
        }}>
            <Grid container spacing={6} style={{
                justifyContent: "center",
            }}>
                <Grid item md={9} style={{
                    textAlign: "center"
                }}>
                    <Grid container spacing={0}>
                        <Grid md={12} item style={gridItemStyle}>
                            <Grid container spacing={0}>
                                        <Grid md={5} item>
                                            <div style={{
                                                backgroundImage: 'url(assets/images/Me_Hat.png)',
                                                height: "100%",
                                                width: "100%",
                                                backgroundPosition: "center center",
                                                backgroundSize: "cover",
                                                borderTopLeftRadius: "1vw",
                                                borderBottomLeftRadius: "1vw"
                                            }} >
                                                &nbsp;
                                            </div>
                                        </Grid>
                                        <Grid md={7} item>
                                            <p style={pText}>{AboutMe.p1}</p>
                                            <p style={pText}>{AboutMe.p2}</p>
                                            <p style={pText}>{AboutMe.p3}</p>
                                            <p style={pText}>{AboutMe.p4}</p>
                                        </Grid>
                                </Grid>
                        </Grid>
                        <Grid md={12} item style={{
                            textAlign: "center",
                            backgroundColor: "#1F2833",
                            borderRadius: "1vw",
                            margin: "1vw",
                            padding: 0
                        }}>
                            <Grid container spacing={0}>
                                    <Grid md={12} item style={headerStyle}>
                                        <h3 style={headerTextStyle}>Languages</h3>
                                    </Grid>
                                    <Grid md={12} item>
                                        <Stack direction="row" spacing={2} style={{
                                        justifyContent: "center",
                                        margin: "1vw"
                                    }}>
                                            {languages.map((value) => (
                                            <Stack spacing={0}>
                                                <img src={value.logo} style={{
                                                    width: "4vw",
                                                    height: "4vw",
                                                    justifyContent: "Center"
                                                }}/>
                                                <p style={{
                                                    justifyContent: "Center",
                                                    textAlign: "Center",
                                                    marginTop: 4,
                                                    fontSize: "1.5vw"
                                                }}>{value.name}</p>
                                            </Stack>
                                            ))
                                            }
                                        </Stack>
                                    </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} style={{
                    justifyContent: "center"
                }}>
                    <Grid container spacing={2}>
                        <Grid md={12} style={gridItemStyle}>
                            <Grid container>
                                <Grid md={12} item style={headerStyle}>
                                    <h3 style={headerTextStyle}>Resume</h3>
                                </Grid>
                                <Grid md={12} item>
                                    <a href="assets/Resumes/Resume_1_22_20.pdf" target="_blank">
                                    <div class="resumeLink" style={{
                                        backgroundImage: "url(assets/images/Resume.png)",
                                        backgroundPosition: "top center",
                                        backgroundSize: "cover",
                                        width: "100%",
                                        height: "100%",
                                        borderBottomRightRadius: "1vw",
                                        borderBottomLeftRadius: "1vw",
                                        paddingTop: 16
                                    }}>
                                        &nbsp;  
                                    </div>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid md={12} style={gridItemStyle}>
                            <Grid container>
                                <Grid md={12} item style={headerStyle}>
                                    <h3 style={headerTextStyle}>Engines</h3>
                                </Grid>
                                <Grid md={12} item>
                                    <Stack direction="row" spacing={1} style={{
                                        justifyContent: "center",
                                        paddingTop: 4,
                                        paddingBottom: 4
                                    }}>
                                        {engines.map((value) => (
                                            <img src={value} style={{
                                                width: "4vw",
                                                height: "4vw"
                                            }}/>
                                        ))
                                        }
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid md={12} style={gridItemStyle}>
                        <Grid container>
                                <Grid md={12} item style={headerStyle}>
                                    <h3 style={headerTextStyle}>Utilities</h3>
                                </Grid>
                                <Grid md={12} item>
                                    <Stack direction="row" spacing={1} style={{
                                        justifyContent: "center",
                                        paddingTop: 4,
                                        paddingBottom: 4
                                    }}>
                                        {utilities.map((value) => (
                                            <img src={value} style={{
                                                width: "4vw",
                                                height: "4vw"
                                            }}/>
                                        ))
                                        }
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid md={12} style={gridItemStyle}>
                        <Grid container>
                                <Grid md={12} item style={headerStyle}>
                                    <h3 style={headerTextStyle}>Education</h3>
                                </Grid>
                                <Grid md={12} item>
                                    <Stack spacing={0}>
                                        <h3 style={{
                                            marginTop: 4,
                                            marginBottom: 0
                                        }}>Becker College</h3>
                                        <p style={educationStyle}>Interactive Media Design</p>
                                        <p style={educationStyle}>Concentration in Game Programming</p>
                                        <p style={educationStyle}>2016 - 2020</p>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}