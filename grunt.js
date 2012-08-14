module.exports = function(grunt) {
  grunt.initConfig({
  	watch: {
    		files: 'grid.scss',
      	tasks: 'shell'
    },
    
    shell: {
    	compilescss: {
  			command: 'sass -t compressed grid.scss > grid.min.css'
			}
		}
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('default', 'shell');
};