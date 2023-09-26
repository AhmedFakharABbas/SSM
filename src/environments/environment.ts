export const environment = {
  production: false,
  urlAddress: getEnvironment(),
};
function getEnvironment() {
  var env;
  env = window.location;

  if (env.hostname === "localhost")
    env = 'http://localhost:10509/'; // Url for development server 
  else if (env.hostname === '')
    env = 'http://192.168.10.106:81/'; //Url for local build server 
  else if (env.hostname === '')
      env = 'http://amavez-001-site5.htempurl.com/'; //Url for production server
  return env;
}
