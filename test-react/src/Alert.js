function Alert(props) {
    return (
        props.message &&
      <div
        className="alert alert-success d-flex align-items-center alert-dismissible"
        role="alert"
      >
        
        <div>{props.message}</div>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    );
}

export default Alert;