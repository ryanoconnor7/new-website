import { Link, withPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderButton } from "./headerButton"
import {
  faMobileAlt,
  faEnvelope,
  faBook,
  faUser,
  faPhotoVideo
} from "@fortawesome/free-solid-svg-icons"
import { Row } from "simple-flexbox"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2864bd`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        flexDirection: "row"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h5
        style={{
          color: "white",
          fontWeight: "400",
          letterSpacing: 1.6,
          marginTop: 2
        }}
      >
        DEVELOPER ∙ DESIGNER ∙ MEDIA
      </h5>
      <Row vertical="center">
        <HeaderButton
          buttonName={"About Me"}
          url={withPrefix("/")}
          icon={faUser}
        />
        {/* <HeaderButton buttonName={"Projects"} url={withPrefix("/#projects")} icon={faMobileAlt}/> */}
        <HeaderButton
          buttonName={"Blog"}
          url={withPrefix("/blog")}
          icon={faBook}
        />
        <HeaderButton
          buttonName={"Media"}
          url={withPrefix("/media")}
          icon={faPhotoVideo}
        />
        <HeaderButton
          buttonName={"Contact"}
          url={withPrefix("/contact")}
          icon={faEnvelope}
        />
      </Row>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
