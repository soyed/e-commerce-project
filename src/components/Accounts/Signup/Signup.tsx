import UIModal from '../../../UIKit/UIModal/UIModal';
import { VerifyUser } from '../utils';

interface SignupProps {}

const SignUp: React.FC<SignupProps> = () => {
  return <UIModal action={VerifyUser.SIGN_UP} />;
};

export default SignUp;
