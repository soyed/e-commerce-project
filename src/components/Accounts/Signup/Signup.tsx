import UIModal from '../../../UIKit/UIModal/UIModal';
import { UserInformation, VerifyUser } from '../utils';

interface SignupProps {
  onClickSignUp?: (userInfo: UserInformation) => void;
}

const SignUp: React.FC<SignupProps> = (props) => {
  const { onClickSignUp } = props;
  return <UIModal action={VerifyUser.SIGN_UP} onClickSubmit={onClickSignUp} />;
};

export default SignUp;
