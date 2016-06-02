// Libraries
import Alura from 't3js';

// Import services
import analyticsService from './services/analytics';

// Import behaviors
import analyticsBehavior from './behaviors/analytics';

// Import modules
import pageModule from './modules/page';

Alura.Application.addService('analytics', analyticsService);

Alura.Application.addBehavior('analytics', analyticsBehavior);

Alura.Application.addModule('page', pageModule);

global.Alura = Alura;
