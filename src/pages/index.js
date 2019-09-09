import React from "react"

import Layout from "../components/layout"

import Banner from "../components/banner"
import Saying from "../components/client-saying"
import WhatWeDo from "../components/what-we-do"

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <Saying />
      <WhatWeDo />
    </Layout>
  )
}

export default IndexPage
