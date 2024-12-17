import './Button.css'

const NextButton = ({ children }) => {
    return (
      <button className="buttons">
        {children}
      </button>
    );
  };

export default NextButton;