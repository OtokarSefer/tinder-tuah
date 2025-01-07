import './RejectButton.css'

const RejectButton = ({ children }) => {
    return (
      <button className="buttons2">
        {children}
        <img src="/img/icons/no.png" alt="No" />
      </button>
    );
  };

export default RejectButton;