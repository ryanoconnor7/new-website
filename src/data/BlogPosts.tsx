import React from "react"
import { ReactElement } from "react"
import _ from "lodash"
interface BlogPost {
  id: string
  title: string
  bannerImage?: string
  content: ReactElement
}

export const blogPosts: BlogPost[] = [
  {
    id: "wwdc-2017",
    title: "The WWDC 2017 Experience",
    bannerImage: "SiteLogo.png",
    content: (
      <p>
        This June, I attended Apple’s Worldwide Developer Conference as a
        Scholarship Recipient. I wrote about my experience each day as a
        personal memory or the amazing week, and to also inspire others. Read
        the 3-part series on my school’s online newspaper.
        <ol>
          <li>
            <a
              href="http://ryanmoconnor.com/media/"
              target="_blank"
              rel="noopener"
            >
              Part 1
            </a>
          </li>
          <li>
            <a
              href="https://chstarmac.com/2017/06/20/ryan-oconnor-19-wins-scholarship-to-wwdc17-part-2/"
              target="_blank"
              rel="noopener"
            >
              Part 2
            </a>
          </li>
          <li>
            <a
              href="https://chstarmac.com/2017/06/21/ryan-oconnor-19-wins-scholarship-to-wwdc17-part-3/"
              target="_blank"
              rel="noopener"
            >
              Part 3
            </a>
          </li>
        </ol>
      </p>
    ),
  },
  {
    id: "chs-app",
    title: "Chaminade High School App",
    bannerImage: "gatsby-astronaut.png",
    content: (
      <div>
        <em>
          <strong>Released Version 1.0</strong>
        </em>{" "}
        - The completely redesigned iOS application for Chaminade High School
        will serve as a hub for both incoming students as well as current
        students, including instant access to the latest events and news.
        <a href="https://itunes.apple.com/us/app/chaminade-high-school/id1287184112?ls=1&mt=8">
          <img
            class="  wp-image-377 aligncenter"
            src="https://ryanoconnor7.files.wordpress.com/2017/09/download_on_the_app_store_badge_us-uk_135x402x.png"
            alt="Download_on_the_App_Store_Badge_US-UK_135x40@2x"
            width="135"
            height="40"
          />
        </a>
        <ul>
          <li>
            <strong>Events & Lunch</strong> - Check out both general and
            athletic events up to a month in advance, and see what's for lunch
            at the Courtyard Cafe.
          </li>
        </ul>
        [gallery ids="364,365" type="columns"]
        <ul>
          <li>
            <strong>News</strong> - The new Chaminade app uniquely blends both
            the school's news from the website and Tarmac Online. You will
            always be in the loop by checking one, centralized news feed.
          </li>
          <li>
            <strong>Academics</strong> - Easily view courses for all four years
            at Chaminade, and contact the teachers in easy department at your
            fingertips.
          </li>
        </ul>
        [gallery ids="366,367" type="rectangular"]
        <ul>
          <li>
            <strong>Campus & Virtual Tour</strong> - You are greeted with the
            point of view flying into Mineola, NY with Chaminade front and
            center. Continuing to the virtual tour section, learn more details
            about locations throughout the school, and view interactive
            360-degree photographs as if you are walking through the school!
          </li>
          <li>
            <strong>Activities</strong> - View the full clubs and activities
            listing, rich with detailed descriptions, photos and videos.
          </li>
        </ul>
        [caption id="attachment_368" align="aligncenter" width="326"]
        <img
          class="alignnone size-full wp-image-368"
          src="https://ryanoconnor7.files.wordpress.com/2017/05/06_athleticsactivities-e1506466419939.png?w=652"
          alt="06_athleticsactivities.png"
          width="326"
          height="299"
        />{" "}
        Athletics | Activities[/caption]
        <ul>
          <li>
            <strong>Athletics</strong> - View all of Chaminade's sports,
            filterable by season, each with photos to make looking through this
            section super immersive.
          </li>
          <li>
            <strong>Religious Expression</strong> - Learn about Chaminade's
            involved spiritual activities and daily routines, including
            retreats, sodality, and monthly school-wide masses.
          </li>
        </ul>
        [caption id="attachment_369" align="aligncenter" width="342"]
        <img
          class="  wp-image-369 aligncenter"
          src="https://ryanoconnor7.files.wordpress.com/2017/05/07_relgiousabout-e1506466598718.png"
          alt="07_Relgious+About"
          width="342"
          height="314"
        />{" "}
        Religious Expression | About Chaminade[/caption]
        <ul>
          <li>
            <strong>About Chaminade</strong> - Learn some basic info and history
            about Chaminade, including links to Chaminade's social media
            accounts, and quick access to the school store and website.
          </li>
        </ul>
         
      </div>
    ),
  },
]

export const postById = _.keyBy(blogPosts, "id")
