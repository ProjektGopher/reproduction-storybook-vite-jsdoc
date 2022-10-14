# Storybook Vite JSDoc Issue Reproduction

:wave: Hi friends, I'm working on a codebase that makes heavy use of JSDocs instead of TS.

I've encountered this issue where `vite:import-analysis` doesn't cooperate with **valid** jsdoc syntax because `<` and `>` make it try to interpret the comments as `jsx`? 
specifically: something like `@property {Array<Object>} fields` will break it, because `<Object>` is being interpreted as a jsx tag instead of a *type*.

I know in this particular example I could just rewrite the type declaration as `...{Object[]}...` but I'd rather be able to keep our comments unchanged to reduce my diff.

I've spent hours now digging through google searches, jsdoc.app docs, forum posts, etc... and nothing has helped so far. Surely there has to just be some config option I've missed that will address this?

here's an example error:
```bash
12:11:36 p.m. [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
  Plugin: vite:import-analysis
  File: /Users/gopher/Code/[redacted]/src/components/molecules/openHours/index.vue?vue&type=yyyyddmm&index=0&lang.yyyyddmm
  1  |  : { openTime: <hhmm>, closeTime: <hhmm> }
  2  |       *     ...
  3  |       *   }
     |           ^
  4  |       * }
  5  |       *
      at formatError (file:///Users/gopher/Code/[redacted]/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:40862:46)
      at TransformContext.error (file:///Users/gopher/Code/[redacted]/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:40858:19)
      at TransformContext.transform (file:///Users/gopher/Code/[redacted]/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:37530:22)
      at async Object.transform (file:///Users/gopher/Code/[redacted]/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:41111:30)
      at async loadAndTransform (file:///Users/gopher/Code/[redacted]/node_modules/vite/dist/node/chunks/dep-4da11a5e.js:37373:29)
```

## Note:
This reproduction is stuck at the moment, because storybook can't seem to find my stories. But I'm too braindead and frustrated to get it across the finish line.

## Packge Versions:
- Vue@2.7
- Storybook@6.5.12
- Vite@3.1