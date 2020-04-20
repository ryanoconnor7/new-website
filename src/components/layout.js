/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { FooterButton } from "./headerButton"
import { Row } from "simple-flexbox"
import {
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
  faAppStore,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
        <Row vertical="center" style={{ justifyContent: "center", margin: 16 }}>
          <FooterButton
            buttonName={""}
            url={"https://github.com/ryanoconnor7"}
            icon={faGithub}
          />
          <FooterButton
            buttonName={""}
            url={"https://apps.apple.com/us/developer/ryan-oconnor/id989567551"}
            icon={faAppStore}
          />
          <FooterButton
            buttonName={""}
            url={"https://www.linkedin.com/in/ryan-o-connor-2b386594/"}
            icon={faLinkedin}
          />
          <FooterButton
            buttonName={""}
            url={"https://twitter.com/ryan7oconnor"}
            icon={faTwitter}
          />
          <FooterButton
            buttonName={""}
            url={"https://www.instagram.com/ryan.oconnor7/"}
            icon={faInstagram}
          />
          <FooterButton
            buttonName={""}
            url={"https://www.youtube.com/channel/UC94TXPkHmjAKHaCUqdZK8Lg"}
            icon={faYoutube}
          />
        </Row>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
