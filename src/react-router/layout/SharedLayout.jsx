import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../pages/Navbar.jsx";

function SharedLayout() {
  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === "loading") {
    return (
      <main className="chargement">
        <p>Chargement en cours...</p>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
export default SharedLayout;
