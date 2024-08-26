import { ProductCard } from '../ProductCard';
import { useGetProducts } from '../../hooks/useGetProducts';
import { Loader } from '../Loader';


export function ProductsList(): JSX.Element {
  const { products, isLoading } = useGetProducts();

  return (
    isLoading
      ? <Loader />
      : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-items-center w-full'>
        {products.map(product => 
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        )}
      </div>
  );
}