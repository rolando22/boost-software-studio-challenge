export function HomePage(): JSX.Element {
  return (
    <section className='bg-gray-900 h-full '>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex flex-col items-center justify-center'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white'>
          Bienvenido
        </h1>
        <p className='mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-400'>
          Boost Software Studio - Challenge
        </p>
      </div>
    </section>
  );
}