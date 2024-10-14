import './CommonButton.css'; // Importing the CSS file

const CommonButton = ({ btnText }) => {
  return (
    <button type="button" className="common-button">
      <a href="https://naseemkhan.vercel.app/" target="_blank" rel="noopener noreferrer">
        {btnText}
      </a>
    </button>
  );
};

export default CommonButton;
