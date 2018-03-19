// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_API_URL: 'https://simulationapi.ur-nl.com',
  TOKEN_API_URL: '/oauth/token.json',
  CASE_STUDY_API_URL: '/case_study/'

};
