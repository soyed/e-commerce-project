import UIModal from '../../../UIKit/UIModal/UIModal';
import { UserInformation, VerifyUser } from '../utils';

interface LoginProps {
  onClickLogin?: (userInfo: UserInformation) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const { onClickLogin } = props;
  return <UIModal action={VerifyUser.SIGN_IN} onClickSubmit={onClickLogin} />;
};

export default Login;
