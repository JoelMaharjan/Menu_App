import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Menu from './pages/Menu';
import AddMenu from './pages/AddMenu';
import Order from './pages/Order';
import LayoutComponent from './components/layout/LayoutComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <LayoutComponent>
          <Routes>
            <Route path = '/' element={<Menu />} />
            <Route path = '/add-menu' element={<AddMenu />} />
            <Route path = '/order' element={<Order />} />
          </Routes>
        </LayoutComponent>
      </BrowserRouter>
    </div>

  );
}

export default App;
