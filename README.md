# Storybook Vite JSDoc Issue Reproduction

:wave: Hi friends, I'm working on a codebase that makes heavy use of JSDocs instead of TS.

I've encountered this issue where `vite:import-analysis` doesn't cooperate with **valid** jsdoc syntax because `<` and `>` make it try to interpret the comments as `jsx`? 
specifically: something like `@property {Array<Object>} fields` will break it, because `<Object>` is being interpreted as a jsx tag instead of a *type*.

I know in this particular example I could just rewrite the type declaration as `...{Object[]}...` but I'd rather be able to keep our comments unchanged to reduce my diff.

I've spent hours now digging through google searches, jsdoc.app docs, forum posts, etc... and nothing has helped so far. Surely there has to just be some config option I've missed that will address this?

## WIP
I haven't yet actually finished reproducing the error. Will finish on Monday

## Packge Versions:
- Vue@2.7
- Storybook@6.5.12
- Vite@3.1

### Example Error:
```bash
12:11:36 p.m. [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
  Plugin: vite:import-analysis
  File: /Users/gopher/Code/getty-ui/src/components/molecules/filters/index.vue?vue&type=Object&index=0&lang.Object
  1  |  } fields - filter fields
     |  ^
  2  |       * @example
  3  |       * [
      at formatError (file:///Users/gopher/Code/getty-ui/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:40862:46)
      at TransformContext.error (file:///Users/gopher/Code/getty-ui/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:40858:19)
      at TransformContext.transform (file:///Users/gopher/Code/getty-ui/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:37530:22)
      at async Object.transform (file:///Users/gopher/Code/getty-ui/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:41111:30)
      at async loadAndTransform (file:///Users/gopher/Code/getty-ui/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:37373:29)
```

### Example Component Extract
```js
props: {
  /**
   * Filters data, used to generate `filtersState` and create dropdowns and filters states.
   *
   * @typedef {filtersSchema}
   * @property {String} label - Filter dropdown label
   * @property {String} key - filter key
   * @property {Array<Object>} fields - filter fields
   * @example
   * [
   *   {
   *     "label": "Topic",
   *     "fields": [
   *       {
   *         "key": "topic",
   *         "value": "art-history",
   *         "label": "Art History",
   *         "type": "checkbox"
   *       },
   *       {
   *         "key": "topic",
   *         "value": "cultural",
   *         "label": "Cultural Heritage Sites/Management",
   *         "type": "checkbox"
   *       }
   *     ]
   *   }
   * ]
   */
  filters: {
    type: Array,
    default: null,
    required: true
  },
```