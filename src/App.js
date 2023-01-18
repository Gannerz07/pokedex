import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./core/layout";
import Pokemons from "./pages/pokemons";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path="/" element={<Layout />}>
        <Route index element={<Pokemons />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
