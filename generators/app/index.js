var Generator = require('yeoman-generator');

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
    message: 'what is the SIEM you want to integrate into UDS?',
    default: 'siem1',
  },
  {
    type: 'input',
    name: 'siemLabel',
    message: 'what is label (short name) you want to give your adapter?'
    default: 'siem1'
  },
  {

  }
];

  return this.prompt(prompts).then((responses) => {
    // To access props later use this.props.someAnswer;
    this.siemName = responses.siemName;
    this.siemLabel = responses.siemLabel;

    }
  });
}

writing() {
    this.log('SIEM name:', this.answers.siemName)
}

}
