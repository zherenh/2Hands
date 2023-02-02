import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import CollectionPage from "./pages/CollectionPage";
import AuthorityPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Layout>
				<Routes>
					<Route path={"/"} element={<HomePage></HomePage>}></Route>
					<Route path={"/authority"} element={<AuthorityPage></AuthorityPage>}></Route>
					<Route path={"/collection"} element={<CollectionPage></CollectionPage>}></Route>
					<Route path={"/product"} element={<ProductPage></ProductPage>}></Route>
					<Route path={"/profile"} element={<ProfilePage></ProfilePage>}></Route>
          <Route path={"/about"} element={<AboutPage></AboutPage>}></Route>
				</Routes>
			</Layout>
    </div>
  );
}

export default App;
