# Storybook Vite JSDoc Issue Reproduction

:wave: Hi friends, I'm working on a codebase that makes heavy use of JSDocs instead of TS.

Has anyone run into this issue where `vite:import-analysis` doesn't cooperate with **valid** jsdoc syntax because `<` and `>` make it try to read the comments as `jsx`? 
specifically: something like `@property {Array<Object>} fields` will break it, because `<Object>` is being interpreted as a jsx tag instead of a *type*.

I know in this particular example I could just rewrite this type desclaration as `... {Object[]}...` but I'd rather be able to keep our comments unchanged to reduce my diff.

I've spent hours now digging through google searches, jsdoc.app docs, forum posts, etc... and nothing has helped so far. Surely there has to just be some config option I've missed that will address this?

here's the error:
```bash
[vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
  Plugin: vite:import-analysis
```

### Note:
This reproduction is stuck at the moment, because storybook can't seem to find my stories. But I'm too braindead and frustrated at the moment to get it across the finish line.