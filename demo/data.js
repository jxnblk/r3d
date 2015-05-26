
var pkg = require('../package.json');
var cssnext = require('cssnext');

module.exports = {
  name: pkg.name,
  description: pkg.description,
  version: pkg.version,
  css: cssnext('@import "basscss";', {
    compress: true,
    features: {
      colorRgba: false,
      rem: false,
      pseudoElements: false,
      customProperties: {
        variables: {
        }
      }
    }
  }),
  graph: {
    area: true,
    xAxisLabels: false,
    yAxisRules: 4,
    data: [
      {
        label: 'Test',
        values: [
          1, 3, 3, 4, 3, 4, 3, 2, 8, 1
        ],
        color: 'blue'
      },
      {
        label: 'Another',
        values: [
          3, 4, 3, 4, 3, 2, 8, 1, 4, 2
        ],
        color: 'red'
      }
    ]
  }
};

