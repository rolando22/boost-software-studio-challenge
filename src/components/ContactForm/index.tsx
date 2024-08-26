export function ContactForm(): JSX.Element { 
  return (
    <form className='max-w-sm mx-auto'>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-white'
        >
          Tu email
        </label>
        <input
          type='email'
          id='email'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
          placeholder='email@gmail.com'
          required
        />
      </div>
      <div className='mb-5'> 
        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-white'
        >
          Tu mensaje
        </label>
        <textarea
          id='message'
          rows={4}
          className='block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
          placeholder='Escribe tu mensaje aquí...'
        ></textarea>
      </div>
      <button
        type='submit'
        className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'
      >
        Enviar
      </button>
    </form>
  );
}
