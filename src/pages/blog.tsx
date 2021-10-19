import React from "react"
import { blogPosts } from "../data/BlogPosts"
import styled from "styled-components"
import Colors from "../constants/Colors"
import { Row, Column } from "simple-flexbox"
import Constants from "../constants/Constants"
import { graphql, withPrefix } from "gatsby"
import ReactRatio from "react-ratio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { window as gw, document } from "browser-monads"
import moment from "moment"

interface Props {
  path: string
  url: string
  data: any
}
interface State {
  width: number
}

class BlogPostList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      width: gw.innerWidth
    }
  }
  componentWillMount() {
    this.setState({
      width: gw.innerWidth
    })
  }
  componentDidMount() {
    this.setState({
      width: gw.innerWidth
    })
    gw.addEventListener("resize", () => {
      this.setState({
        width: gw.innerWidth
      })
    })
  }

  getBanner(slug: string) {
    const files: any[] = this.props.data.allFile.nodes ?? []
    const result = files.find(v => {
      const rp: string = v.relativePath ?? ""
      return rp.includes(slug.replace(/\//g, ""))
    })

    return result?.publicURL ?? ""
  }

  render() {
    let posts: any[] = this.props.data.allMarkdownRemark.nodes ?? []

    let pairs = []
    posts.forEach((p, i, all) => {
      if (i % 2 === 0) {
        pairs.push([all[i], all[i + 1]])
      }
    })
    console.log(pairs)
    const RowWrapper = ({ children }) => {
      if (this.state.width < Constants.resizeThreshold) {
        return <Column style={{ marginBottom: 16 }}>{children}</Column>
      } else {
        return <Row style={{ marginBottom: 16 }}>{children}</Row>
      }
    }

    const Content = ({ node }) => {
      const title = node.frontmatter?.title || node.fields?.slug
      return (
        <div key={node.fields.slug}>
          <a className="passive-link" href={"/blog" + node.fields.slug}>
            <ReactRatio ratio={16 / 9}>
              <img
                style={{
                  height: "100%",
                  alignSelf: "center",
                  objectFit: "cover",
                  borderTopRightRadius: 16,
                  borderTopLeftRadius: 16,
                  width: "100%"
                }}
                src={this.getBanner(node.fields.slug)}
              />
            </ReactRatio>
            <div style={{ padding: 16, paddingBottom: 0 }}>
              <h3 style={{ textDecoration: "none" }}>{title}</h3>
              <small>{node.frontmatter.date}</small>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </section>
            </div>
          </a>
        </div>
      )
    }

    return (
      <Layout>
        <SEO title="Blog" />
        {pairs.map(pair => {
          return (
            <RowWrapper>
              {[
                pair[0] ? (
                  <PostWrapper
                    style={
                      this.state.width > Constants.resizeThreshold
                        ? { marginRight: 8 }
                        : { marginBottom: 8 }
                    }
                  >
                    <Content node={pair[0]} />
                  </PostWrapper>
                ) : null,
                pair[1] ? (
                  <PostWrapper
                    style={
                      this.state.width > Constants.resizeThreshold
                        ? { marginLeft: 8 }
                        : { marginTop: 8 }
                    }
                  >
                    <Content node={pair[1]} />
                  </PostWrapper>
                ) : null
              ]}
            </RowWrapper>
          )
        })}
      </Layout>
    )
  }
}

export default BlogPostList

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          description
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allFile(filter: { name: { eq: "banner" } }) {
      nodes {
        publicURL
        relativePath
      }
    }
  }
`

const PostWrapper = styled.div`
  background-color: ${Colors.offWhiteBlue};
  border-radius: 16px;
  flex-grow: 1;
  width: 100%;
  overflow: none;
  &:hover {
    opacity: 0.5;
  }
`
