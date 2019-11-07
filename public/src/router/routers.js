import Contact from "./contact";
import Gallery from "./gallery";
import Home from "./home";
import Social from "./social";
import NoMatch from "./../components/nomatch";

const routers = [
  { path: "/", component: Home },
  { path: "/gallery", component: Gallery },
  { path: "/contact", component: Contact },
  { path: "/social", component: Social },
  { path: "*", component: NoMatch }
];

export default routers;
