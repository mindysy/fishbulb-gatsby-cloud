import React from "react"
import Helmet from "react-helmet"

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
      <Helmet>
        <title>Fishbulb Solutions – Custom Software Development</title>
        {/* <meta
          name="title"
          content="Fishbulb Solutions – Custom Software Development"
        />
         <meta
          name="description"
          content="This website is so awesome that I really don't think you can handle how much awesome that is happening here."
        /> */}
      </Helmet>
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
