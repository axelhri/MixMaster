import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedLayout from "../react-router/layout/SharedLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import { loader as homeLoader } from "./pages/Home.jsx";
import SingleCocktail, {
  singleCocktailLoader,
} from "./pages/SingleCocktail.jsx";

function ReactRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "/cocktail/:id",
          element: <SingleCocktail />,
          loader: singleCocktailLoader,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "newsletter",
          element: <Login />,
          errorElement: <div>Erreur</div>,
          action: async ({ request }) => {
            const formData = await request.formData();
            const data = Object.fromEntries(formData);
            const { name, email } = data;

            if (!name.trim() || !email.trim()) {
              toast.error("Veuillez remplir tous les champs !");
              return null;
            }

            toast.success("Formulaire soumis avec succès !");
            return redirect("/");
          },
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default ReactRouter;
