// Libraries
import Tea from 't3js';

// Import services
import analyticsService from './services/analytics';

// Import behaviors
import analyticsBehavior from './behaviors/analytics';

// Import modules
//import asyncLoaderModule from './modules/async-loader';

Tea.Application.addService('analytics', analyticsService);

Tea.Application.addBehavior('analytics', analyticsBehavior);

//Tea.Application.addModule('async-loader', asyncLoaderModule);

global.Tea = Tea;
