module.exports = function(grunt) {
  grunt.initConfig({
  	watch: {
    		files: '_grid.scss',
      	tasks: 'shell'
    },
    
    shell: {
    	compilescss: {
  			command: 'sass -t compressed _grid.scss > grid.min.css'
			}
		}
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('default', 'shell');
};