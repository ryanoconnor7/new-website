import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Column } from "simple-flexbox"

export const HeaderButton = ({ url, buttonName, icon }) => (
  <div class="header-button" style={{ alignItems: "center" }}>
    <a
      style={{
        textDecoration: "none",
        color: "white",
        fontWeight: "600",
        marginRight: 24
      }}
      href={url}
    >
      <FontAwesomeIcon
        icon={icon}
        color={"white"}
        style={{ marginRight: 6, height: 16 }}
      />
      {buttonName}
    </a>
  </div>
)

export const FooterButton = ({ url, buttonName, icon }) => (
  <Column>
    <div class="header-button">
      <a
        style={{
          textDecoration: "none",
          color: "#495057",
          fontWeight: "600",
          marginRight: 24
        }}
        href={url}
        target="_blank"
      >
        <FontAwesomeIcon
          icon={icon}
          color={"#495057"}
          size={"2x"}
          style={{ marginRight: 8 }}
        />
        {buttonName}
      </a>
    </div>
  </Column>
)
