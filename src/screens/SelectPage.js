import React from 'react'

import ButtonAppBar from "../components/ButtonAppBar/ButtonAppBar.js"
import SelectImageGridContainer from "../containers/SelectImageGridContainer.js"
import SelectDrawerContainer from "../containers/SelectDrawerContainer.js"

export default function SelectPage() {

  return (
    <div>
      <ButtonAppBar />
      <SelectDrawerContainer />
      <SelectImageGridContainer />
    </div>
  );
}