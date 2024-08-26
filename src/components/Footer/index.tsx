import { Link } from 'react-router-dom';

const links = [
    { id: 0, to: '/', text: 'Sobre Nosotros' }, 
    { id: 2, to: '/contact', text: 'Contactanos' }, 
];

export function Footer(): JSX.Element {
  return (
    <footer className='rounded-lg shadow m-4 bg-gray-800'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm sm:text-center text-gray-400'>
          © 2024 <a href='#' className='hover:underline'>Challenge</a>. Todos los derechos reservados.
        </span>
        <ul className='flex flex-wrap gap-4 justify-center items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0'>
          {links.map(item =>
            <li key={item.id}>
              <Link to={item.to} className='hover:underline'>{item.text}</Link>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}