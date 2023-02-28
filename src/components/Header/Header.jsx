import Logo from './components/Logo/Logo';
import Auth from './components/Auth/Auth';

const Header = () => {
  return (
    <div className='d-flex justify-content-between align-items-center border border-primary rounded p-3'>
      <Logo />
      <Auth />
    </div>
  );
};

export default Header;
