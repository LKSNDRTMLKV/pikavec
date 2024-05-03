// import { createContext, useContext } from 'react';

// // Create a context for the navbar state
// const NavbarContext = createContext();

// // Create a provider component
// export function NavbarProvider({ children, navbarState }) {
//   return (
//     <NavbarContext.Provider value={navbarState}>
//       {children}
//     </NavbarContext.Provider>
//   );
// }

// // Create a hook to use the navbar state
// export function useNavbar() {
//   return useContext(NavbarContext);
// }

// // In your _app.js file, wrap your page component in the NavbarProvider
// function MyApp({ Component, pageProps }) {
//   // You can determine the navbarState here based on the route, user data, etc.
//   const navbarState = ...;

//   return (
//     <NavbarProvider navbarState={navbarState}>
//       <Component {...pageProps} />
//     </NavbarProvider>
//   );
// }

// // In your SideNavbar component, use the useNavbar hook to access the navbar state
// function SideNavbar() {
//   const navbarState = useNavbar();

//   // Change the appearance of the navbar based on navbarState
// }

"use client";

import { usePathname } from "next/navigation";

export default function useNavbar() {
  const pathname = usePathname();



  return {
    navbarState: "navbarState",
  };
}
