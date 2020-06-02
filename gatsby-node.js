const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`]
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.js`);
  const projectPostTemplate = path.resolve(`src/templates/ProjectPost/index.js`);

  const blog = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const proj = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const blogPosts = blog.data.allMarkdownRemark.edges;
  const projectsPosts = proj.data.allMarkdownRemark.edges;

  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: `${post.node.fields.slug}`,
        previous,
        next
      }
    });
  });

  projectsPosts.forEach((post, index) => {
    const previous = index === projectsPosts.length - 1 ? null : projectsPosts[index + 1].node;
    const next = index === 0 ? null : projectsPosts[index - 1].node;

    createPage({
      path: `${post.node.fields.slug}`,
      component: projectPostTemplate,
      context: {
        slug: `${post.node.fields.slug}`,
        previous,
        next
      }
    });
  });


  return new Promise((resolve, reject) => {
    const StoreTemplate = path.resolve("src/templates/Products/details.js")
    resolve(
      graphql(`{
          allProduct(sort: {fields: flotiqInternal___createdAt, order: DESC}) {
            edges{
              node{
                id
                slug,
                name,
                price,
                description,
                productImage {
                  id,
                  extension
                },
                productGallery {
                  id,
                  extension
                }
              }
            }
          
        }}
        
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const products = result.data.allProduct.edges;

        products.forEach((edge, index) => {

          const previous = index === products.length - 1 ? null : products[index + 1].node;
          const next = index === 0 ? null : products[index - 1].node;

          createPage({
            path: edge.node.slug,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug,
              previous,
              next
            },
          })
        });
        return
      })
    )
  })

};