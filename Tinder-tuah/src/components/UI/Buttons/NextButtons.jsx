import './NextButton.css';

const NextButton = ({ onClick, children }) => {
    return (
        <button className="buttons" onClick={onClick}>
            {children} {}
            <img src="/img/icons/like.png" alt="Like" /> {}
        </button>
    );
};

export default NextButton;