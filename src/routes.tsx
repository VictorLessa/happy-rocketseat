import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import OrphanateMap from "./pages/OrphanageMap";
import Orphanate from "./pages/Orphanage";
import createOrphanage from "./pages/CreateOrphanage";
function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/map" component={OrphanateMap}></Route>
        <Route path="/orphanage/create" component={createOrphanage}></Route>
        <Route path="/orphanage/:id" component={Orphanate}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default routes;
