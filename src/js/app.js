import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element
  name: 'Startup', // App name
  theme: 'md', // Android Style
  panel: {
    swipe: 'left',
  },
  // App root data
  data: function() {
    return {};
  },
  // App root methods
  methods: {
    helloWorld: function() {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,

  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function() {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
