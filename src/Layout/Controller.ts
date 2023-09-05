import { createContext, useState } from 'react';

function LayoutController() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleSearchOpen() {
    setIsSearchOpen(true);
  }

  function handleSearchClose() {
    setIsSearchOpen(false);
  }

  return {
    isSearchOpen,
    handleSearchClose,
    handleSearchOpen,
  };
}

export const LayoutContext = createContext({
  handleSearchOpen: () => {},
  handleSearchClose: () => {},
});
export default LayoutController;
