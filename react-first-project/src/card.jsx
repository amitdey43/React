import "./card.css";
import PropTypes from "prop-types";

function Card(props) {
    return (
        <div className="card">
            <img src={props.srcc} className="img"></img>
            <h2>{props.name}</h2>
            <p>I am pursuing Btech from Techno Main Salt Lake. Now I am in second year.</p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    srcc: PropTypes.string,
};

Card.defaultProps = {
    name: "lawra",
    srcc: "asdasd",
};


export default Card;
