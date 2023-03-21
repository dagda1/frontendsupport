/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ['**/.*'],
  publicPath: '/_static/build/',
  server: './server.js',
  serverBuildPath: 'server/index.js',
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  serverDependenciesToBundle: [
    /^@citation-js.*/,
    /^@jsdevtools\/rehype-toc.*/,
    /^bail.*/,
    /^bcp-47.*/,
    /^boolbase.*/,
    /^ccount*/,
    /^character.*/,
    /^citeproc.*/,
    /^clean-css.*/,
    /^comma.*/,
    /^cross-fetch.*/,
    /^css-selector-parser.*/,
    /^decode.*/,
    /^direction*/,
    /^escape-string-regexp*/,
    /^estree.*/,
    /^fault.*/,
    /^format.*/,
    /^hast.*/,
    /^github-slugger.*/,
    /^html-enumerated-attributes.*/,
    /^html-url-attributes.*/,
    /^html-void-elements.*/,
    /^is-alphabetical.*/,
    /^is-alphanumerical.*/,
    /^is-buffer.*/,
    /^is-decimal.*/,
    /^is-hexadecimal.*/,
    /^is-plain-obj.*/,
    /^longest-streak.*/,
    /^nth-check.*/,
    // /^.*/,
    // /^.*/,
    // /^.*/,
    // /^.*/,
    /^parse-.*/,
    /^mdast.*/,
    /^markdown-table*/,
    /^mdx.*/,
    /^micromark.*/,
    /^node-fetch.*/,
    /^parse-entities.*/,
    /^parse5.*/,
    /^property.*/,
    /^refractor.*/,
    /^remark.*/,
    /^rehype.*/,
    /^source-map.*/,
    /^space.*/,
    /^tr46.*/,
    /^trough.*/,
    /^uglify-.*/,
    /^unified.*/,
    /^unist.*/,
    /^vfile.*/,
    /^webidl-conversions.*/,
    /^whatwg-url.*/,
    /^web-namespaces.*/,
    /^zwitch.*/,
  ],
};
