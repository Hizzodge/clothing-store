import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  showDropdown: false,
  setShowDropdown: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const value = { showDropdown, setShowDropdown };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
