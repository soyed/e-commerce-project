import React from 'react';
import ClassNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { LinkType } from '../../routes/utilS';

interface UILinkProps {
  linkTo: string;
  isActive?: boolean;
  linkType: LinkType;
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
    linkType,
  } = props;
  return (
    <div>
      <li className={ClassNames('link__container', parentClassName)}>
        {linkType === LinkType.SOCIAL ? (
          <a target='_blank' href={linkTo}>
            {children}
          </a>
        ) : isActive && linkType === LinkType.COMMERCE ? (
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
