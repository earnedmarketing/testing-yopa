exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: { 'browserName': 'chrome' },

  specs: ['todo-spec.js']

  // organise - http://stackoverflow.com/questions/30331018/suites-vs-specs-protractor

  // Alternatively, suites may be used. When run without a command line
  // parameter, all suites will run. If run with --suite=smoke or
  // --suite=smoke,full only the patterns matched by the specified suites will
  // run.
  // suites: {
  //   smoke: 'spec/smoketests/*.js',
  //   full: 'spec/*.js'
  // },
};
