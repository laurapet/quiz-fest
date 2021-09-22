// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrlQuizFest: 'http://localhost:8080/quiz-fest/api',
  tokenUrl: 'localhost:8180/auth/realms/quiz-fest/protocol/openid-connect/token',
  registerUrl: 'http://localhost:8180/auth/realms/quiz-fest/protocol/openid-connect/registrations?client_id=quiz-app&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&state=91a06228-6b37-4069-8839-c333a8fedc21&response_mode=fragment&response_type=code&scope=openid&nonce=3344722e-a7ce-489d-8d96-27ac7978de5b'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
