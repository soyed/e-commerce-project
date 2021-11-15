import classNames from 'classnames';
import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UILink from '../../../UIKit/UILink/UILink';
import './AccountAction.scss';

interface AccountActionProps {
  isActive?: boolean;
}

const AccountAction: React.FC<AccountActionProps> = (props) => {
  const { isActive } = props;
  return (
    <div className='account-action'>
      <div className='account-action__container'>
        <div
          className={classNames('account-action__container__heading-1', {
            'heading--active': isActive,
          })}
        >
          <UILink
            linkTo={LinkPath.SIGN_UP}
            isActive
            linkType={RouteType.COMMERCE}
          >
            <h2 className='account-action__text'>Join</h2>
          </UILink>
        </div>
        <div
          className={classNames('account-action__container__heading-2', {
            'heading--active': isActive,
          })}
        >
          <UILink
            linkTo={LinkPath.SIGN_IN}
            isActive
            linkType={RouteType.COMMERCE}
          >
            <h2 className='account-action__text'>Sign-in</h2>
          </UILink>
        </div>
      </div>
    </div>
  );
};

export default AccountAction;
