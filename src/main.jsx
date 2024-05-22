import React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

import usePageVisibility from "./usePageVisibility";
import usePreventScreenshot from "./usePreventScreenshot.js";
import useBrowserVisibility from "./useBrowserVisibility.js";
const App = () => {
  usePageVisibility();
  const isBrowserVisible = useBrowserVisibility();
  usePreventScreenshot() // Use the custom hook

  return (
    <GoogleOAuthProvider clientId="1055637407106-j4lkpqr2me552nqe7iu3ic17ru9svebc.apps.googleusercontent.com">
    <Provider store={store}>
      <NextUIProvider>
       
        {isBrowserVisible ? (
              // Your app content here
              <RouterProvider router={router} />
            ) : (
              // Blackout overlay
              <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'black' }} />
            )}
      </NextUIProvider>
    </Provider>
  </GoogleOAuthProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App/>
  // </React.StrictMode>
);
