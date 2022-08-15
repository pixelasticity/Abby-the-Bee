import classNames from "classnames";
import PropTypes from "prop-types";
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = (props) => {
  return (
    <div id="spinner" className={classNames("bg-white", "position-fixed", "translate-middle", "w-100", "vh-100", "top-50", "start-50", "d-flex", "align-items-center", "justify-content-center", {
      "show": props.loading
    })}>
      <Spinner animation="border" variant="primary" style={{width: 3 + 'rem', height: 3 + 'rem'}} role="status">
        <span className="visually-hidden">Loading&hellip;</span>
      </Spinner>
    </div>
  );
}

LoadingSpinner.propTypes = {
  loading: PropTypes.bool
};

export default LoadingSpinner
