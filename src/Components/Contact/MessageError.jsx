function MessageErrror({ children }) {
  return (
    <div
      className="alert alert-danger py-0 mt-2"
      style={{ fontSize: " 12px" }}
      role="alert"
    >
      {children}
    </div>
  );
}
export default MessageErrror;
