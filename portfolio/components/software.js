import { Component } from "react";
import Line from "./line";
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid';
import Stack from '@mui/material/Stack';

const imageSize = {
    width: "23.21vw",
    height: "34vw"
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

class Software extends Component {
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
            },
        ]
        
        var devJson = [
            {
                Title: "Role(s): ",
                Info: this.role,
            },
            {
                Title: "Company: ",
                Info: this.company,
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
                            <Grid item md={4}/>
                            <Grid item md={4}>
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
                            <Grid item md={4}/>
                            <Grid item md={1}/>
                            <Grid item md={10}>
                                <h3 style={headerStyle}>
                                    Responsibilities
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
                            <Grid item md={1}/>
                        </Grid>
                    </Grid>
                    <Grid item md={3} style={{
                        marginTop: ".75vw"
                    }}>
                            <img src={this.image1} style={imageSize}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Software