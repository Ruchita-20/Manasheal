import "./Card.css";

function Data(props) {
    return (


            <div className="s-card">
                <div className="s-image">
                    <img src={props.img} alt="image" />
                </div>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>

    );
}

export default Data;