//react
import { createContext, useContext, useState } from "react";

const ShopIdContext = createContext();

export const ShopIdProvider = ({ childeren }) => {
  const [shopID, setShopID] = useState(0);

  return (
    <ShopIdContext.Provider value={{ shopID, setShopID }}>
      {childeren}
    </ShopIdContext.Provider>
  );
};

export function useShopIdContext() {
  return useContext(ShopIdContext);
}
