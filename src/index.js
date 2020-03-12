import GSheetProcessor from './gsheetsprocessor.js';

const reader = (options) => {
  return new Promise( (resolve, reject)  => {
    GSheetProcessor(options, results => {
      resolve(results);
    })});
};

module.exports = reader;

export default reader;
