import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Usuarios = new Mongo.Collection('usuarios');
Preguntas = new Mongo.Collection('preguntas');


Template.home.events({
	'click .facebook-btn': function() {
		console.log('click en el boton de facebook');

		return {'logueado': false};
	}
});

Template.login.helpers({
	'logueado' : false
});

Template.coche.events({
	'click .chs' : function(){
		console.log(event.name)
		return event.name;
	}
})

Router.route('/', function () {
  this.render('login');
});