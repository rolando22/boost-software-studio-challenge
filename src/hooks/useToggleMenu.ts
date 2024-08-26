import { useState } from 'react';

export function useToggleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
  const closeMenu = () => setIsMenuOpen(false);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  }
}
