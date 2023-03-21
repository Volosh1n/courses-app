import Logo from './components/Logo/Logo';
import AuthButton from './components/Auth/AuthButton';

const Header = () => {
  return (
    <div className='d-flex justify-content-between align-items-center border border-primary rounded p-3'>
      <Logo />
      <AuthButton />
    </div>
  );
};

export default Header;
