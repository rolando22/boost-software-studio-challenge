interface Props {
  children: JSX.Element
}

export function RoutesLayout({ children }: Props): JSX.Element {
  return (
    <main className='min-h-[calc(100%-115px)] flex items-center justify-center p-5'>
      {children}
    </main>
  );
}
