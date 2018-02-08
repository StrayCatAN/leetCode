const fs = require('fs');
const opn = require('opn');
const R = require('ramda');
const path = require('path');
const copydir = require('copy-template-dir');
const logger = require('tracer').colorConsole();

function addProblemDirectory(problemIndex, title) {
  const problemPathName = `00${problemIndex}`;
  const problemPath = path.resolve(`src/${R.takeLast(3, problemPathName)}`);
  const isExist = fs.existsSync(problemPath);
  if (!isExist) {
    const templatePath = path.resolve('src/.template');
    copydir(templatePath, problemPath, { problemName: title }, (err) => {
      if (err) {
        logger.error(err);
      } else {
        logger.info(`success: problem directory ${problemPath} generated`);
      }
      process.exit();
    });
  } else {
    logger.debug(`info: problem ${problemIndex} directory already exist`);
    process.exit();
  }
}

function openProblem(problemIndex) {
  if (Number.isNaN(problemIndex)) {
    logger.error('problem index must be a number');
    return;
  }
  const content = fs.readFileSync('scripts/readme.md', 'utf-8');
  const space = '\\s';
  const regexpStr = `\\|${space}${problemIndex}${space}\\|${space}\\[(.+?)\\]\\((.+?)\\)`;
  const pattern = new RegExp(regexpStr);
  const matchResult = content.match(pattern);

  const title = matchResult[1];
  const link = matchResult[2];
  opn(link);
  logger.info(`open ${title} in ${link}`);
  addProblemDirectory(problemIndex, title);
}

const problemIndex = R.last(process.argv);
openProblem(problemIndex);
