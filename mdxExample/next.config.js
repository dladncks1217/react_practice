const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
// import remarkFrontmatter from "remark-frontmatter";
// import rehypeHighlight from "rehype-highlight";
// const remarkFrontmatter = require("remark-frontmatter");
// const rehypeHighlight = require("rehype-highlight");

// export default {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.md?$/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "@mdx-js/loader",
//           options: {
//             providerImportSource: "@mdx-js/react",
//             remarkPlugins: [remarkFrontmatter],
//             rehypePlugins: [rehypeHighlight],
//           },
//         },
//       ],
//     });

//     return config;
//   },
//   reactStrictMode: true,
//   pageExtensions: ["js", "jsx", "md", "mdx"],
// };

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.md?$/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "@mdx-js/loader",
//           options: {
//             providerImportSource: "@mdx-js/react",
//             remarkPlugins: [remarkFrontmatter],
//             rehypePlugins: [rehypeHighlight],
//           },
//         },
//       ],
//     });

//     return config;
//   },
//   reactStrictMode: true,
//   pageExtensions: ["js", "jsx", "md", "mdx"],
// };
