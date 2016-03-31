'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/css/style.css',
        'public/css/bootstrap.css',
        'public/css/font-awesome.css',
        'public/css/effect.css',
        'public/css/animation.css',
        'public/css/masterslider.css',
        'public/css/ms-fullscreen.css',
        'public/css/owl.carousel.css',
        'public/css/owl.transitions.css',
          'public/css/color.css'

      ],
      js: [
          'public/js/jquery-2.1.0.min.js',
          'public/js/bootstrap.min.js',
          'public/js/jquery.easing.1.3.js',
          'public/js/parallax/jquery.parallax-1.1.3.js',
          'public/js/parallax/jquery.transform2d.js',
          'public/js/parallax/script.js',
          'public/js/parallax/parallax.js',
          'public/js/masterslider.min.js',
          'public/js/classie.js',
          'public/js/waypoints.js',
          //'public/js/dropdown.js',
          'public/js/owl.carousel.min.js',

        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
