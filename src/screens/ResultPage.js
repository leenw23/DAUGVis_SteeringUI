import React from 'react'

import ButtonAppBar from "../components/ButtonAppBar/ButtonAppBar.js"
import ResultDrawerContainer from "../containers/ResultDrawerContainer.js"
import ResultImageGridContainer from "../containers/ResultImageGridContainer.js"

export default function ResultPage() {

  return (
    <div>
      <ButtonAppBar />
      <ResultDrawerContainer />
      <ResultImageGridContainer />
    </div>
  );
}