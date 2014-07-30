module.exports = function(grunt) {
  grunt.initConfig({
    loopback_angular: {
      services: {
        options: {
          input: './app.js',
          output: '../client/js/lb-services.js'
        }
      }
    },
    docular: {
      groups: [{
        groupTitle: 'LoopBack',
        groupId: 'loopback',
        sections: [{
          id: 'lbServices',
          title: 'LoopBack Services',
          scripts: ['../client/js/lb-services.js']
        }]
      }]
    }
  });
  // Load the plugin that provides the "loopback-angular" and "grunt-docular" tasks.
  grunt.loadNpmTasks('grunt-loopback-angular');
  grunt.loadNpmTasks('grunt-docular');
  // Default task(s).
  grunt.registerTask('default', ['loopback_angular', 'docular']);
};
