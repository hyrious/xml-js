
This fork moves "sax" to "devDependencies" and bundles it with
rollup ([rollup-plugin-node-polyfills](https://github.com/ionic-team/rollup-plugin-node-polyfills)).

([rollup-plugin-polyfill-node](https://github.com/snowpackjs/rollup-plugin-polyfill-node) doesn't work, don't know why)

I also removed tests and coverage for faster setup. :sweat_smile:

Install: `npm i @hyrious/xml-js`.

Replace it in **vite.config.js**:

```js
export default defineConfig({
    alias: {
        "xml-js": "@hyrious/xml-js"
    }
})
````

Replace it in **webpack.config.js**

```js
{
  "resolve": {
    "alias": {
      "xml-js": "@hyrious/xml-js"
    }
  }
}
````

Other ways: [see how preact does](https://preactjs.com/guide/v8/switching-to-preact/).

- - -

Read the original [README](https://github.com/nashwaan/xml-js).
