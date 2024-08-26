import { ProductsList } from '../../components';

export function CatalogPage(): JSX.Element {
  return (
    <section className='w-full flex justify-center items-center'>
      <ProductsList />
    </section>
  );
}
