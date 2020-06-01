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

  const res = await graphql(`
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

  const posts = res.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

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

  return new Promise((resolve, reject) => {
    const StoreTemplate = path.resolve("src/templates/Projects/details.js")
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

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     const StoreTemplate = path.resolve("src/templates/details.js")
//     resolve(
//       graphql(`{
//           allProduct(sort: {fields: flotiqInternal___createdAt, order: DESC}) {
//             edges{
//               node{
//                 id
//                 slug,
//                 name,
//                 price,
//                 description,
//                 productImage {
//                   id,
//                   extension
//                 },
//                 productGallery {
//                   id,
//                   extension
//                 }
//               }
//             }
          
//         }}
        
//       `).then(result => {
//         if (result.errors) {
//           reject(result.errors)
//         }

//         const products = result.data.allProduct.edges;

//         products.forEach((edge, index) => {

//           const previous = index === products.length - 1 ? null : products[index + 1].node;
//           const next = index === 0 ? null : products[index - 1].node;

//           createPage({
//             path: edge.node.slug,
//             component: StoreTemplate,
//             context: {
//               slug: edge.node.slug,
//               previous,
//               next
//             },
//           })
//         });
//         return
//       })
//     )
//   })
// }