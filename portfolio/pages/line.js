export default function Line() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                margin: 0,
                border: 0,
            }}
        />
    );

    return(
        <div>
            <ColoredLine color="#45A29E"/>
        </div>
    )
}