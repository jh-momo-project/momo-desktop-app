module.exports = {
  replaceAttrValues: { "#000": "{props.color || '#000'}" },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
  },
};
