import React from 'react'
import Alert from 'react-bootstrap/Alert';
function Alert1(props) {
  return (
   props.alert&& <div>
      <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">{props.alert.type}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

export default Alert1
