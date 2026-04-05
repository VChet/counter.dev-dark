module.exports = {
  tagPrefix: "",
  bumpFiles: [
    "package.json",
    { filename: "src/counter.dev-dark.user.css", updater: "src/meta-updater.js" }
  ],
  scripts: {
    prerelease: "npm run lint:all"
  },
  writerOpts: {
    finalizeContext(context) {
      if (!context.commitGroups?.length) {
        context.commitGroups = [{ commits: [{ header: "No significant changes" }] }];
      }
      return context;
    }
  }
};
