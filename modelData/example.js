'use strict';

/*
 * Load the model data of the problem 1 of cs142's project4.
 * We load into DOM the property cs142models.exampleModel a function that returns an object
 * with the following property:
 *    name:  A string with name.
 *
 * See README.md for information on how to access it.
 * 
 * window.cs142models.statesModel()
 */
var cs142models;

if (cs142models === undefined) {
   cs142models = {};
}

cs142models.exampleModel = function() {
   return {
      name: 'Turbat Bay',
      motto: "one day...",
   };
};

