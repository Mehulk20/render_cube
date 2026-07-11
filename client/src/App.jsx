import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './store/store';
import { router } from './routes';

import { ThemeEffect } from './components/public';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <WishlistProvider>
          <ThemeProvider>
            <ThemeEffect />
            <RouterProvider router={router} />
          </ThemeProvider>
        </WishlistProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
