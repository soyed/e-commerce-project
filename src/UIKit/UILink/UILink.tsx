import React from 'react';
import ClassNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { LinkPath, RouteType, SocialLink } from '../../routes/utils';

interface UILinkProps {
  linkTo: LinkPath | SocialLink;
  isActive?: boolean;
  linkType: RouteType;
  activeClassName?: string;
  activeStyle?: object;
  parentClassName?: string;
}

const UILink: React.FC<UILinkProps> = (props) => {
  const {
    linkTo,
    isActive = false,
    activeClassName,
    activeStyle,
    children,
    parentClassName,
    linkType,
  } = props;
  return (
    <div>
      <li className={ClassNames('link__container', parentClassName)}>
        {linkType === RouteType.SOCIAL ? (
          <a target='_blank' href={linkTo}>
            {children}
          </a>
        ) : isActive && linkType === RouteType.COMMERCE ? (
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
