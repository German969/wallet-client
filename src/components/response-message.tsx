const ResponseMessage = ({ type, message }: { type: string, message: string }) => {
  return (
    <div className={`alert alert-${type} m-auto`} role="alert" style={{ width: '540px' }}>
      {message}
    </div>
  );
};

export default ResponseMessage;