import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes/AppRoutes';
import { Footer, Layout, Navbar, RoutesLayout } from './components';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <RoutesLayout>
          <AppRoutes />
        </RoutesLayout>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
