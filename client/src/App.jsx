import Routers from './routes/routers';
//react context api
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Routers />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
