import React from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { routes } from "./routes";

import "./assets/styles/global.css";
import "./assets/styles/typography.css";
import "./assets/styles/layout.css";

const App = () => {
  return (
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
