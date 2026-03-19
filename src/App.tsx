import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/route";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />

          <main>
            <Routes>
              {ROUTES.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
