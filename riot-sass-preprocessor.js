/* eslint-disable @typescript-eslint/no-var-requires */

const {registerPreprocessor} = require('@riotjs/compiler')
const sass = require('sass')

registerPreprocessor('css', 'scss', function(code, { options }) {
  const { file } = options;

  console.log('Compile the sass code in', file);

  const result = sass.renderSync({
    file,
    data: code
  });

  return {
    code: result.css.toString(),
    map: null
  };
});
