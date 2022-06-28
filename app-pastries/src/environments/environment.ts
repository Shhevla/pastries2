// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  numberPage : 2,
  nbDice : 5,
  combinations : {
    yams : "yams",
    square : "square",
    double : "double",
    orther : "nothing"
  },
  maxPastries : 3,
  nbPastriesYams : 3,
  nbPastriesSquare : 2,
  nbPastriesDouble : 1,
  isLogin : false,
  Users : "",
  pastriesUrl : 'http://localhost:8000/pastries',
  pastrieUrl : 'http://localhost:8000/pastrie',
  ingredientsUrl : 'http://localhost:8000/ingredients',
  ingredientUrl : 'http://localhost:8000/ingredient',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
