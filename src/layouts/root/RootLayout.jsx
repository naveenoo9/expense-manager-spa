import { Outlet } from "react-router-dom";
import "./styles.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <section className="header"></section>
      <section className="main">
        <Outlet />
      </section>
      <section className="footer"></section>
    </div>
  );
};

export default RootLayout;
