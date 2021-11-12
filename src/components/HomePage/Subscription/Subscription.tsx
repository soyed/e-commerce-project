import './Subscription.scss';

const Subscription = () => {
  //TODO: show modal when the sign up button is clicked on
  return (
    <div className='subscription'>
      <div className='subscription__container'>
        <div className='subscription__container-1'>
          <h2 className='container-1__heading'>
            Sign Up for Email NewsLetter!!
          </h2>
        </div>
        <div className='subscription__container-2'>
          <div className='container-2__content-1'>
            <input
              type='email'
              className='subscription__input'
              placeholder='Email Address'
            />
            <p className='subscription__error'></p>
          </div>
          <div className='container-2__content-2'>
            <button className='sign-up__btn'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
