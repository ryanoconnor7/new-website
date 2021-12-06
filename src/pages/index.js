import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row } from "simple-flexbox"
const IndexPage = () => (
  <Layout>
    <SEO />
    <Row className="about-row">
      <div style={{ flexGrow: 1 }} />
      <img
        className="about-img"
        src={require("../images/Me.png")}
        height={126}
        style={{ marginRight: 12, borderRadius: 63 }}
      />
      <div>
        <h3>Hi!👨🏻‍💻</h3>
        <p style={{ marginTop: -24 }}>
          I'm Ryan O'Connor, an app developer and designer from Long Island, NY.
          I'm currently a student at the University of Michigan. I've published
          personal apps on the app store and also worked on projects for the NY
          MTA, Apple, and Chaminade High School.
        </p>
      </div>
    </Row>
    <h2 style={{ marginTop: 24 }}>Projects & Work Experience📱</h2>
    <Row className="about-row">
      <Row className="about-img-wrapper">
        <div style={{ flexGrow: 1, marginTop: -2 }} />
        <img
          className="about-img"
          src={require("../images/AppleLogo.png")}
          height={54}
          style={{ marginRight: 6 }}
        />
      </Row>
      <div>
        <h3>Apple - Software Engineer Intern</h3>
        <p className="about-date">June 2020 - November 2020</p>
      </div>
    </Row>
    <ul className="about-list-wrapper">
      <li>Proactive Intelligence Team - Siri Shortcuts</li>
    </ul>
    <Row className="about-row">
      <Row className="about-img-wrapper">
        <div style={{ marginTop: -2 }} />
        <img
          className="about-img"
          src={require("../images/MTALogo.png")}
          height={50}
          style={{ marginRight: 8 }}
        />
      </Row>
      <div>
        <h3>Metropolitan Transportation Authority - App Developer</h3>
        <p className="about-date">
          May 2019 - May 2020, December 2020 - Present
        </p>
      </div>
    </Row>
    <ul className="about-list-wrapper">
      <li>
        Designed and developed major update to{" "}
        <a target="_blank" href="https://app.mylirr.org">
          LIRR TrainTime
        </a>
        , which had 70K daily active users at peak. Released June 2020.
      </li>
      <li>Built in React Native, for iOS and Android</li>
      <li>Siri Shortcuts Integration</li>
      <li>
        Read more <a href="/blog/lirr-traintime">here</a>.
      </li>
    </ul>
    <Row className="about-row">
      <Row className="about-img-wrapper">
        <div style={{ flexGrow: 1 }} />
        <img
          className="about-img"
          src={require("../images/Chaminade.jpg")}
          height={50}
          style={{ marginRight: 8 }}
        />
      </Row>
      <div>
        <h3>Chaminade High School App</h3>
        <p className="about-date">Released September 2017</p>
      </div>
    </Row>
    <ul className="about-list-wrapper">
      <li>
        Developed{" "}
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/chaminade-high-school/id1287184112"
        >
          Chaminade HS
        </a>{" "}
        iOS app for daily news and events as well as virtual tour and brochure
        of school. Read more <a href="/blog/chaminade-app">here</a>.
      </li>
    </ul>

    <Row className="about-row">
      <Row className="about-img-wrapper">
        <div style={{ flexGrow: 1, marginTop: -2 }} />
        <img
          className="about-img"
          src={require("../images/AppleLogo.png")}
          height={54}
          style={{ marginRight: 6 }}
        />
      </Row>
      <div>
        <h3>WWDC Scholarship Winner</h3>
        <p className="about-date">2017 & 2019</p>
      </div>
    </Row>
    <ul className="about-list-wrapper">
      <li>
        June 2017 - Built a project in SpriteKit on the four seasons,
        interactive using the devices gyroscope.{" "}
        <iframe
          width={280}
          height={158}
          src="https://www.youtube.com/embed/vu6X3VcbNa4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ borderRadius: 12 }}
        ></iframe>
      </li>
      <li>
        June 2019 - Built a self-driving car simulation of an intersection with
        no stop lights.{" "}
        <iframe
          width={280}
          height={158}
          src="https://www.youtube.com/embed/jUrjRzJdDKw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ borderRadius: 12 }}
        ></iframe>
      </li>
    </ul>
    <Row className="about-row">
      <Row className="about-img-wrapper">
        <img
          className="about-img"
          src={require("../images/SiteLogo.png")}
          height={50}
          style={{ marginRight: 8 }}
        />
      </Row>
      <div>
        <h3>Other Apps - iOS & tvOS</h3>
        <p className="about-date">2015 - Present</p>
      </div>
    </Row>
    <ul className="about-list-wrapper">
      <li>
        Date & Time (iOS) - Simple digital/analog clock today view widget -{" "}
        <a
          target="_blank"
          href="https://apps.apple.com/us/developer/ryan-oconnor/id989567551"
        >
          App Store
        </a>
      </li>
      <li>
        Clock & Time (tvOS) - world clock app for Apple TV, including custom
        backgrounds and themes for the big screen.{" "}
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/clock-and-timer/id1048672167"
        >
          App Store
        </a>
      </li>
      <li>
        Reaction Time Recorder (iOS) - Developed for high school science fair
        project to measure people's differences in reaction time for various
        colors. Uses bluetooth to sync timing between two devices.{" "}
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/reaction-time-recorder/id1195678425"
        >
          App Store
        </a>
      </li>
    </ul>
    <h2 style={{ marginTop: 24 }}>Education🎓</h2>
    <Row className="about-row">
      <Row className="about-img-wrapper">
        <div style={{ flexGrow: 1 }} />
        <img
          className="about-img"
          src={require("../images/Michigan.png")}
          height={50}
          style={{ marginRight: 8, borderRadius: 25 }}
        />
      </Row>
      <div>
        <h3>University of Michigan</h3>
        <p className="about-date">September 2019 - Present</p>
      </div>
    </Row>
    <ul className="about-list-wrapper">
      <li>Computer Science - LSA</li>
      <li>Club Sailing Team - Go Blue!</li>
    </ul>
    <Row className="about-row">
      <Row className="about-img-wrapper">
        <div style={{ flexGrow: 1 }} />
        <img
          className="about-img"
          src={require("../images/Chaminade.jpg")}
          height={50}
          style={{ marginRight: 8 }}
        />
      </Row>
      <div>
        <h3>Chaminade High School</h3>
        <p className="about-date">Class of 2019</p>
      </div>
    </Row>
    <h2 style={{ marginTop: 24 }}>Questions?☕️💬</h2>
    <p>
      Want to know more about a project that I worked on? Have a suggestion for
      one of my apps? Just want to say hi?{" "}
      <a href="/contact">Reach out here!</a>
    </p>
  </Layout>
)

export default IndexPage
