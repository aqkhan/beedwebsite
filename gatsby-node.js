// const { createFilePath } = require("gatsby-source-filesystem")
// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions
//     // you only want to operate on `Mdx` nodes. If you had content from a
//     // remote CMS you could also check to see if the parent node was a
//     // `File` node here
//     if (node.internal.type === "Mdx") {
//         const value = createFilePath({ node, getNode })
//         createNodeField({
//             // Name of the field you are adding
//             name: "slug",
//             // Individual MDX node
//             node,
//             // Generated value based on filepath with "blog" prefix. you
//             // don't need a separating "/" before the value because
//             // createFilePath returns a path with the leading "/".
//             value: `${value}`,
//         })
//     }
// }


const path = require('path')
module.exports.onCreateNode = ({node,actions}) => {
    const {createNodeField} = actions

    if (node.internal.type === 'Mdx'){
        const slug = path.basename(node.fileAbsolutePath,'.mdx')
        createNodeField({
            node,
            name:'slug',
            value:slug
        })
    }
}
module.exports.createPages = async({graphql,actions})=>{
    const {createPage} = actions
    const productsTemplate =  path.resolve('./src/components/productDetail/index.js');

    const res1 =  await graphql(`
query{
  allMdx{ 
    edges{
      node{
        fields{
          slug
        }
      }
    }
  }
}
     `);
console.log(res1.data.allMdx,"check node")
    res1.data && res1.data.allMdx.edges.forEach((edge)=>{
        createPage({
            component:productsTemplate,
            path:`/product-detail/${edge.node.fields.slug}`,
            context:{
                slug:edge.node.fields.slug
            }
        })
    })



}