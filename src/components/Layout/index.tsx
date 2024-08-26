interface Props {
  children: JSX.Element[]
}

export function Layout({ children }: Props): JSX.Element {
  return (
    <div className='max-w-7xl h-screen mx-auto p-8 text-center'>
      {children}
    </div>
  );
}
