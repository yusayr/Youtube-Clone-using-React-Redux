import { createContext, useContext, useMemo, useState } from "react";

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const value = useMemo(
    () => ({
      isOpen,
      toggle: () => setIsOpen((v) => !v),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      setIsOpen,
    }),
    [isOpen]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within <SidebarProvider>");
  return ctx;
}
