import { useRoutes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { appRoutes } from './routes';

function AppRoutes() {
  return useRoutes(appRoutes);
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
