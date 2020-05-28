import Home from "../views/Home";
import About from "../views/About";
import Initiatives from "../views/Initiatives";
import Support from "../views/Support";
import ContactUs from "../views/ContactUs";

const indexRoutes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/initiatives", name: "Initiatives", component: Initiatives },
  { path: "/support", name: "Support", component: Support },
  { path: "/contactus", name: "ContactUs", component: ContactUs },
];

export default indexRoutes;
