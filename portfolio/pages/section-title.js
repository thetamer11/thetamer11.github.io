import { Component } from "react";
import Line from "./line";
import styles from '../styles/Home.module.css'

class SectionTitle extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <div className={styles.section}>
                <Line/>
                <h3>
                    {this.title}
                </h3>
                <Line/>
            </div>
        )
    }
}

export default SectionTitle