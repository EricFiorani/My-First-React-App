import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import sketchLogo from '../images/logo-sketch.png';
import figmaLogo from '../images/logo-figma.png';
import studioLogo from '../images/logo-studio.png';
import framerLogo from '../images/logo-framer.png';
import reactLogo from '../images/logo-react.png';
import swiftLogo from '../images/logo-swift.png';
import wallpaper from '../images/wallpaper.jpg';
import wallpaper2 from '../images/wallpaper2.jpg';
import wallpaper3 from '../images/wallpaper3.jpg';
import wallpaper4 from '../images/wallpaper4.jpg';

import Card from "../components/card"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  
  <Layout>
    <div>
      <div className="Hero">
  
        <div className="HeroGroup">
  
          <h1>
            Learning How to Code & Design Through React
          </h1>
          <p className={styles.intro}>
            To the start of greater achievements!
          </p>
          <Link to="/page-2/">Watch the Video</Link>
  
          <div className="Logos">
            <img src={sketchLogo} width="56" />
            <img src={figmaLogo} width="56" />
            <img src={studioLogo} width="56" />
            <img src={framerLogo} width="56" />
            <img src={reactLogo} width="56" />
            <img src={swiftLogo} width="56" />
          </div>
  
          <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z">
                <animate repeatCount="indefinite" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
  
                M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
  
                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
  
                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" />
            </path>
          </svg>
  
  
  
  
        </div>
  
      </div>
  
      <div className="Cards">
        <h2>Future Projects</h2>

        <dvi className="CardGroup">
          <Card
            title="React for Designers"
            text="12 Sections"
            image={wallpaper}
          />
          <Card
            title="Design Systems"
            text="10 Sections"
            image={wallpaper2}
          />
          <Card
            title="Sound Design"
            text="5 Sections"
            image={wallpaper3}
          />
          <Card
            title="ARKit 2"
            text="10 Sections"
            image={wallpaper4}
          />
        </dvi>
      
      </div>
    </div>

  </Layout>
)



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
