import angular from 'angular';

import 'font-awesome/css/font-awesome.css';

import styles from './app.scss';
import 'angular-material/angular-material.css';
// Angular Animate
import angularAnimate from 'angular-animate';
// Materail Design lib
import angularMaterial from 'angular-material';
// Router
import angularUIRouter from 'angular-ui-router';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME,  [
  angularMaterial,
  angularAnimate,
  angularUIRouter])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;