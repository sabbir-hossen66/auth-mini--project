
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Root = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;