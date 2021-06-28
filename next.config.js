
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['aTpssVasMKGdYz3D7EzdhS'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  