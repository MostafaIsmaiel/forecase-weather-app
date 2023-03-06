const Error = ({ isError, errorMessage }) => {
  return (
    <div
      className="error"
      onClick={() => {
        isError(false);
      }}
    >
      <h2 className="errMessage">{errorMessage}</h2>
    </div>
  );
};

export default Error;
