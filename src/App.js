import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'
import store from './redux/store';
import router from './routes/router';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
