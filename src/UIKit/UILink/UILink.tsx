import React from 'react';
import ClassNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

interface UILinkProps {
  linkTo?: string;
  isActive?: string;
  activeClassName?: string;
  activeStyle?: object;
  parentClassName?: string;
}

const UILink: React.FC<UILinkProps> = (props) => {
  const {
    linkTo,
    isActive,
    activeClassName,
    activeStyle,
    children,
    parentClassName,
  } = props;
  return (
    <div>
      <li className={ClassNames('link__container', parentClassName)}>
        {isActive ? (
          <NavLink
            to={linkTo}
            activeStyle={activeStyle}
            activeClassName={activeClassName}
          >
            {children}
          </NavLink>
        ) : (
          <Link to={linkTo}>{children}</Link>
        )}
      </li>
    </div>
  );
};

export default UILink;
