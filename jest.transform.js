const getTargets = require('@babel/preset-env/lib/targets-parser').default;

const targets = getTargets({ node: 'current' });
const includePolyfills = true;

module.exports = require('babel-jest').default.createTransformer({
  presets: [
    [
      require('@babel/preset-env'),
      {
        useBuiltIns: includePolyfills && 'entry',
        corejs: includePolyfills ? 3 : undefined,
        targets,
        forceAllTransforms: true,
      },
    ],
  ],
  plugins: [
    require('@babel/plugin-proposal-class-properties'),
    [
      require('@babel/plugin-transform-runtime'),
      {
        regenerator: false, // provided by polyfill
      },
    ],
    [require('@babel/plugin-proposal-object-rest-spread'), { loose: true }],
    require('@babel/plugin-proposal-nullish-coalescing-operator'),
    require('@babel/plugin-proposal-optional-chaining'),
  ].filter(Boolean),
});
