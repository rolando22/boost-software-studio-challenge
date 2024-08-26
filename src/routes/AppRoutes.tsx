import { useRoutes } from 'react-router-dom';
import { CatalogPage, ContactPage, HomePage } from '../pages';

export const AppRoutes = () => {

    const routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/products', element: <CatalogPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/*', element: <></> },
    ]);

    return routes;
};
