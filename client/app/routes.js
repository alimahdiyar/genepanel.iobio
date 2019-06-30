import 'babel-polyfill'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import d3 from 'd3'
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';
import jQueryUi from 'jquery-ui'
import App from './App.vue'
import GeneticTestingRegistry from './components/pages/GeneticTestingRegistry.vue';
import Main from './components/pages/Main.vue'
import phenolyzer from './components/pages/Phenolyzer.vue'
// import Sortable from 'sortablejs'
import { Typeahead } from 'uiv';

import * as uiv from 'uiv';

import Clipboard from 'v-clipboard';
var FileSaver = require('file-saver');
import VueAnalytics from 'vue-analytics';


Vue.use(uiv)

import Vuetify from 'vuetify'
require('../../node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader
require('../app/components/assets/css/siteVuetify.css');

//Selectize
require('../app/components/assets/js/selectize.js')

//Use vuetify
// Vue.use(Vuetify)

//Use typeahead
Vue.use(Typeahead)


//Use router
Vue.use(VueRouter);

// Use vue-resource package
Vue.use(VueResource);

//Use Axios
// Vue.use(axios);


//Use copy to clipboard
//Link: https://github.com/euvl/v-clipboard
Vue.use(Clipboard)

// Back to top button
// Vue.use(BackToTop);

Vue.use(Vuetify, {
  theme: {
    primary: '#4267b2',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
  }
})

import globalEduTour        from './partials/GlobalEduTour.js'

import _                    from 'lodash'


import GeneHome             from './components/pages/GeneHome.vue'
import Tutorial             from './components/pages/Tutorial.vue'
import UseCases             from './components/pages/UseCases.vue'
import Exhibit              from './components/pages/Exhibit.vue'
import ExhibitCases         from './components/pages/ExhibitCases.vue'
import ExhibitCaseComplete  from './components/pages/ExhibitCaseComplete.vue'
import ExhibitCasesComplete from './components/pages/ExhibitCaseComplete.vue'



import bootstrap            from 'bootstrap/dist/css/bootstrap.css'


import VTooltip from 'v-tooltip'
import                           '../assets/css/v-tooltip.css'
Vue.use(VTooltip)


import Util                 from './globals/Util.js'
import GlobalApp            from './globals/GlobalApp.js'


//Route
const routes = [
  {
    path: '/',
    component: Main,
    props: (route) => ({
        paramLaunchedFromClin:     route.query.launchedFromClin
    })
  },
  {
	name: 'home',
	path: '/vue',
	component: GeneHome,
	beforeEnter: (to, from, next) => {
	var idx = to.hash.indexOf("#access_token");
	if (idx == 0) {
	let queryParams = Qs.parse(to.hash.substring(1));
	let { access_token, expires_in, token_type, otherQueryParams } = queryParams;
	localStorage.setItem('hub-iobio-tkn', token_type + ' ' + access_token);
	next('/' + Qs.stringify(otherQueryParams, { addQueryPrefix: true, arrayFormat: 'brackets' }));
	} else {
	var start = 0;
	if (idx == 0) {
	start = 3;
	} else {
	var idx = to.hash.indexOf("#\/");
	var start = 0;
	if (idx == 0) {
		start = 3;
	} else {
		idx = to.hash.indexOf("#");
		if (idx == 0) {
		start = 2;
		}
	}
	}
	if (idx == 0) {
	let queryParams = Qs.parse(to.hash.substring(start));
	next('/' + Qs.stringify(queryParams, { addQueryPrefix: true, arrayFormat: 'brackets' }));
	} else {
	next();
	}

	}

	},
	props: (route) => ({
	paramGene:             route.query.gene,
	paramGenes:            route.query.genes,
	paramSpecies:          route.query.species,
	paramBuild:            route.query.build,
	paramBatchSize:        route.query.batchSize,
	paramGeneSource:       route.query.geneSource,
	paramMyGene2:          route.query.mygene2,
	paramLaunchedFromClin: route.query.launchedFromClin,
	paramMode:             route.query.mode,
	paramTour:             route.query.tour,
	paramFileId:           route.query.fileId,
	paramAffectedSibs:     route.query.affectedSibs,
	paramUnaffectedSibs:   route.query.unaffectedSibs,
	paramRelationships:    [route.query.rel0, route.query.rel1, route.query.rel2],
	paramSamples:          [route.query.sample0, route.query.sample1, route.query.sample2],
	paramNames:            [route.query.name0, route.query.name1, route.query.name2],
	paramBams:             [route.query.bam0, route.query.bam1, route.query.bam2],
	paramBais:             [route.query.bai0, route.query.bai1, route.query.bai2],
	paramVcfs:             [route.query.vcf0, route.query.vcf1, route.query.vcf2],
	paramTbis:             [route.query.tbi0, route.query.tbi1, route.query.tbi2],
	paramAffectedStatuses: [route.query.affectedStatus0, route.query.affectedStatus1, route.query.affectedStatus2],
	paramGeneName:         route.query.geneName,
	paramSampleId:         route.query.sample_id,
	paramSampleUuid:       route.query.sample_uuid,
	paramProjectId:        route.query.project_id,
	paramIsPedigree:       route.query.is_pedigree,
	paramSource:           route.query.source
	})
},
{
	name: 'home-backward-compat1',
	path: '/vue/#',
	redirect: '/vue'
},
{
	name: 'home-backward-compat2',
	path: '/vue/#/',
	redirect: '/vue'
},
{
	name: 'home-hub',
	path: '/vue/access_token*',
	redirect: '/vue'
},
{
	name: 'tutorial',
	path: '/vue/tutorial',
	component: Tutorial
},
{
	name: 'use-cases',
	path: '/vue/use-cases',
	component: UseCases,
	props: (route) => ({
	paramTopic:             route.query.topic
	})
},
{
	name: 'exhibit',
	path: '/vue/exhibit',
	component: Exhibit
},
{
	name: 'exhibit-cases',
	path: '/vue/exhibit-cases',
	component: ExhibitCases
},
{
	name: 'exhibit-case-complete',
	path: '/vue/exhibit-case-complete',
	component: ExhibitCaseComplete
},
{
	name: 'exhibit-cases-complete',
	path: '/vue/exhibit-cases-complete',
	component: ExhibitCasesComplete
}
]

const router = new VueRouter({
  'mode':  'history',
  'base': '/',
  'routes': routes
})

// Google analytics
Vue.use(VueAnalytics, {
  id: 'UA-47481907-8',
  router
})


//Registering component globally for nesting.
// Vue.component('iobio', Iobio);

export const bus = new Vue();

// define a globals mixin object
Vue.mixin({
	data: function() {
	  return {
		utility: new Util(),
		globalApp: new GlobalApp()
	  };
	},
	created: function(){
	  this.utility.globalApp = this.globalApp;
	  this.globalApp.utility = this.utility;
  
	}
  })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
