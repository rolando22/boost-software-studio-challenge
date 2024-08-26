import { Product } from '../../interfaces';

export function ProductCard({ title, price, image, category }: Omit<Product, 'id'>): JSX.Element {
  return (
    <article className='bg-white/80 w-56 h-60 rounded-lg p-2'>
      <figure className='relative mb-2 w-full h-3/4'>
        <span className='absolute bottom-0 left-0 bg-black/60 rounded-lg text-white text-xs m-2 px-3 py-0.5'>
          {category}
        </span>
        <img 
          className='w-full h-full object-cover rounded-lg cursor-pointer'
          src={image} 
          alt={title} 
        />
      </figure>
      <p className='flex justify-between items-center text-black'>
        <span className='text-xs font-light'>
          {title.length > 40 ? `${title.slice(0, 40)}...` : title}
        </span>
        <span className='text-lg font-medium text-black'>
          ${price}
        </span>
      </p>
    </article>
  );
}
