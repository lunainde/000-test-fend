import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import PropTypes from 'prop-types';

function ProtectedWrapper({ children, toLoggedIn, toLoggedOut, className, element: Element = 'div', style }) {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoggedIn) {
      navigate(toLoggedIn);
    } else {
      navigate(toLoggedOut);
    }
  };

  return (
    <Element className={className} onClick={handleClick} style={{ cursor: 'pointer', ...style }}>
      {children}
    </Element>
  );
}

ProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  toLoggedIn: PropTypes.string.isRequired,
  toLoggedOut: PropTypes.string.isRequired,
  className: PropTypes.string,
  element: PropTypes.elementType,
  style: PropTypes.object,
};

export default ProtectedWrapper;
