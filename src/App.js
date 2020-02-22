import React from 'react'
import './App.css'

import { ButtonAppBar } from "./components/ButtonAppBar/ButtonAppBar.js"
// import { SideDrawer } from "./components/SideDrawer/SideDrawer.js"
// import { ImageGrid } from "./components/ImageGrid/ImageGrid.js"
import ImageGridContainer from "./containers/ImageGridContainer.js"
import SideDrawerContainer from "./containers/SideDrawerContainer.js"

function App() {

  return (
    <div>
      {ButtonAppBar()}
      {/* {SideDrawer()} */}
      <SideDrawerContainer />
      <ImageGridContainer />
    </div>
  );
}

export default App;
