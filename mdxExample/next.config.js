const nextMDX = require("@next/mdx");

const withMDX = nextMDX({
  // By default only the .mdx extension is supported.
  extension: /\.md?$/,
  options: { providerImportSource: "@mdx-js/react" },
});

module.exports = withMDX({
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
});
