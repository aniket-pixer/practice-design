// src/pages/_app.tsx
import "../styles/globals.css";
import AppProvider from "../components/appProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
