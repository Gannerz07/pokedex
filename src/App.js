import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./core/layout";
import Pokemons from "./pages/pokemons";
import Pokemon from "./pages/pokemon";
import NotFound from "./pages/notFound";
import AddPokemon from "./pages/addPokemon";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path="/" element={<Layout />}>
        <Route index element={<Pokemons />} />
        <Route path="pokemons/:id" element={<Pokemon />} errorElement={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pokemons/add" element={<AddPokemon />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
