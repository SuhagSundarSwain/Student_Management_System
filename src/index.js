import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import { Provider } from "react-redux";
import applicationStore from "./store/applicationStore";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={applicationStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
