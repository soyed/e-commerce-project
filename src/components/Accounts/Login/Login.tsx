import UIModal from '../../../UIKit/UIModal/UIModal';
import { VerifyUser } from '../utils';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return <UIModal action={VerifyUser.SIGN_IN} />;
};

export default Login;
