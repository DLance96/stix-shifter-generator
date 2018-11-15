var Generator = require('yeoman-generator');
var path = require('path');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  /**
   * Initialization for this generator
   * @method initializing
   * @return {[type]}     [description]
   */
  initializing() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to ${chalk.red('uds adapter generator')}`));
  }

  /**
 * Prompt the user and determine the type of adapter project being created.
 * @method prompting
 * @return {[type]}  [description]
 */
prompting() {
  const prompts = [{
    type: 'input',
    name: 'siemName',
    message: 'what is the SIEM you want to integrate into UDS? (provided in CamelCase, EX: TestExample1)',
    default: 'SIEMName',
  },
  {
    type: 'input',
    name: 'siemLabel',
    message: 'what is label (short name) you want to give your adapter? (provided in all lowercase with _ dividers, EX: test_example)',
    default: 'siem_name'
  },
  {
    type: 'input',
    name: 'siemQueryLangage',
    message: 'what is the SIEM query language? (provided in CamelCase, EX: TestExample1)',
    default: 'QueryLanguage'
  },
  {
    type: 'input',
    name: 'siemQueryLangageLabel',
    message: 'what is label (short name) of the query language? (provided in all lowercase with _ dividers, EX: test_example)',
    default: 'query_language'
  }
];

  return this.prompt(prompts).then((responses) => {
    // To access props later use this.props.someAnswer;
    this.siemName = responses.siemName;
    this.siemLabel = responses.siemLabel;
    this.siemQueryLangage = responses.siemQueryLangage;
    this.siemQueryLangageLabel = responses.siemQueryLangageLabel;
  });
}

  /**
   * [configuring description]
   * @method configuring
   * @return {[type]}    [description]
   */
  configuring() {
    this.composeWith(require.resolve('../queryTranslate'));
    this.composeWith(require.resolve('../map'));
    this.composeWith(require.resolve('../resultTranslate'));
  }
  writing() {
      this.log('SIEM name:', this.answers.siemName)
  }
}
