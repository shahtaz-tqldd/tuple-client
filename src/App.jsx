import React from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AtomLoader from "./components/loader/AtomLoader";
import useAuthCheck from "./hooks/useAuthCheck";
import { routes } from "./routes";

import "./assets/styles/global.css";
import "./assets/styles/typography.css";
import "./assets/styles/layout.css";

const App = () => {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <section className="h-screen w-screen center dark:bg-black/90 bg-bg50">
      <AtomLoader className="h-16 w-16" />
      <h2 className="dark:text-white text-xl mt-4 uppercase tracking-[4px]">
        Restro <span className="text-primary">Fx</span>
      </h2>
    </section>
  ) : (
    <React.Fragment>
      <RouterProvider router={routes} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#222",
            color: "#eee",
            fontSize: "14px",
            padding: "16px",
            border: "1px solid #333",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      />
    </React.Fragment>
  );
};

export default App;
