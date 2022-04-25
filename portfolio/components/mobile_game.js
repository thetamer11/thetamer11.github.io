import { Component } from "react";
import Line from "./line";
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid';
import Stack from '@mui/material/Stack';

const imageSize = {
    height: "20vw",
    width: "10vw"
}

const headerStyle = {
    backgroundColor: "#45A29E",
    borderTopLeftRadius: "1vw",
    borderTopRightRadius: "1vw",
    textAlign: "center",
    marginBottom: 0,
}

const stackStyle = {
    alignItems: "center"
}

const stateStyle = {
    textAlign: "center right",
    
}

const itemStyle = {
    textAlign: "center left",
}

const bodyStyle = {
    justifyContent: "center",
    backgroundColor: "#1F2833",
    borderBottomLeftRadius: "1vw",
    borderBottomRightRadius: "1vw",
    margin: 0
}

const statusBlock = {
    paddingLeft: "4vw",
}

const largeBlob = {
    wordBreak: "break-word",
    textAlign: "left",
    itemAlign: "center",
    backgroundColor: "#1F2833",
    padding: 10,
    margin: 0,
    borderBottomLeftRadius: "1vw",
    borderBottomRightRadius: "1vw",
}

const bulletStyle = {
    backgroundColor: "#1F2833",
    borderBottomLeftRadius: "1vw",
    borderBottomRightRadius: "1vw",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
}

class MobileGame extends Component {
    constructor(props) {
        super(props);
        this.image1 = props.image1;
        this.image2 = props.image2;
        this.image3 = props.image3;
        this.image4 = props.image4;
        this.status = props.status;
        this.genre = props.genre;
        this.company = props.company;
        this.role = props.role;
        this.tools = props.tools;
        this.teamSize = props.teamSize;
        this.gameDesc = props.gameDesc;
        this.learned = props.learned;
        this.contribs = props.contribs;
    }
    
    
    render() {
        var infoJson = [
            {
                Title: "Status: ",
                Info: this.status,
            },
            {
                Title: "Genre: ",
                Info: this.genre,
            },
            {
                Title: "Company: ",
                Info: this.company,
            },
        ]
        
        var devJson = [
            {
                Title: "Role(s): ",
                Info: this.role,
            },
            {
                Title: "Tools: ",
                Info: this.tools,
            },
            {
                Title: "Team Size: ",
                Info: this.teamSize,
            }
        ]
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item md={9}>
                        <Grid container spacing={3}>
                            <Grid item md={1}/>
                            <Grid item md={5}>
                                <h3 style={headerStyle}>
                                    Game Information
                                </h3>
                                <Grid container spacing={0} style={bodyStyle}>
                                    {infoJson.map((value) => (
                                        <Grid item md={6} key={value.Title} style={statusBlock}>
                                            <Stack direction="row" style={stackStyle}>
                                                <h4 style={stateStyle}>
                                                    {value.Title}&nbsp;
                                                </h4>
                                                <p style={itemStyle}>
                                                    {value.Info}
                                                </p>
                                            </Stack>
                                        </Grid>
                                    ))
                                    }
                                </Grid>
                            </Grid>
                            <Grid item md={5}>
                                <h3 style={headerStyle}>
                                    Game Development
                                </h3>
                                <Grid container spacing={0} style={bodyStyle}>
                                    {devJson.map((value) => (
                                        <Grid item md={6} key={value.Title} style={statusBlock}>
                                            <Stack direction="row" style={stackStyle}>
                                                <h4 style={stateStyle}>
                                                    {value.Title}&nbsp;
                                                </h4>
                                                <p style={itemStyle}>
                                                    {value.Info}
                                                </p>
                                            </Stack>
                                        </Grid>
                                    ))
                                    }
                                </Grid>
                            
                            </Grid>
                            <Grid item md={1}/>
                            <Grid item md={1}/>
                            <Grid item md={10}>
                                <h3 style={headerStyle}>
                                    Game Description
                                </h3>
                                <p style={largeBlob}>
                                    {this.gameDesc}
                                </p>
                            </Grid>
                            <Grid item md={1}/>
                            <Grid item md={1}/>
                            <Grid item md={10}>
                                <h3 style={headerStyle}>
                                    Contributions
                                </h3>
                                <ul style={bulletStyle}>
                                {this.contribs.map((value) =>(
                                    <li key={value}>
                                        {value}
                                    </li>
                                ))
                                }
                                </ul>
                            </Grid>
                            <Grid item md={1}/>
                            <Grid item md={1}/>
                            <Grid item md={10}>
                                <h3 style={headerStyle}>
                                    What I learned
                                </h3>
                                <p style={largeBlob}>
                                    {this.learned}
                                </p>
                            </Grid>
                            <Grid item md={1}/>
                        </Grid>
                    </Grid>
                    <Grid item md={3}>
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" spacing={1}>
                                <img src={this.image1} style={imageSize}/>
                                <img src={this.image2} style={imageSize}/>
                            </Stack>
                            <img src={this.image3} style={imageSize}/>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MobileGame