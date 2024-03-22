import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
