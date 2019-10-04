import React from "react"

import Layout from "../components/layout"

import Banner from "../components/banner"
import Saying from "../components/client-saying"
import WhatWeDo from "../components/what-we-do"
import Industries from "../components/industries"
import OurWork from "../components/our-work"
import PreFooter from "../components/pre-footer"

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <Saying />
      <WhatWeDo />
      <Industries />
      <OurWork />
      <PreFooter />
    </Layout>
  )
}

export default IndexPage
