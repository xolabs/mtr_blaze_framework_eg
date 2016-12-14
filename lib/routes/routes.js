/* MAIN APPLICATION ROUTING SETTINGS */

/**
 * Main application routes
 * This file contains client-side routing definitions for
 * the application.
 * This will generally constitute the majority of the 
 * information architecture defined for the application.
 *
 * Notes....
 *
 */


/**
 * This 'loadMainDefaults' function defines default layout
 * and region templates. It can be called in the 'triggersExit'
 * method of any route defition. This is so that local route
 * definitions will be replaced by the defaults.
 * 
 * This is needed because FlowRouter is non-reactive, and
 * configs persist from one route to the next. 
 *
 * TODO: Is there any rendering or performance impact?
 *
 */
function loadMainDefaults (context) {
	context.route.group.options.defaultTemplates.layout = "mainLayout";
	context.route.group.options.defaultTemplates.regions = {
		mainNav: "mainNav",
		// secondaryNav: "navCrumb",
		// leftSidebar: "leftSidebar",
		// rightSidebar: "rightSidebar",
		// mainList: "tasksList"
		// mainFooter: "mainFooter"
	};
}

/**
 * ************************************************
 * Route Groups ***********************************
 * ************************************************
 *
 */

// Group definition for routes with open access
var openRoutes = FlowRouter.group({
	name: "openRoutes",
	defaultTemplates: {
		mainNav: "mainNav",
		// secondaryNav: "navCrumb",
		// mainFooter: "mainFooter"
	}
});


// Group definition for user accessible routes
var appRoutes = FlowRouter.group({
	name: "appRoutes",
	defaultTemplates: {
		layout: "mainLayout",
		regions: {
			mainNav: "mainNav",
			// secondaryNav: "navCrumb",
			// leftSidebar: "leftSidebar",
			// rightSidebar: "rightSidebar",
			// mainList: "tasksList"
			// mainFooter: "mainFooter"
			}
	},
	triggersEnter: [function (){
		var route;
		if (!Meteor.loggingIn() || !Meteor.userId()) {
			route = FlowRouter.current();
			if (route.route.name !== "userAuth") {
				Session.set('redirectAfterLogin', route.path);
			}
			// return FlowRouter.go("userAuth");
		}
		loadMainDefaults;
	}],
	triggersExit: [loadMainDefaults]
});

/**
 * ************************************************
 * User Authentication Routes *********************
 * ************************************************
 *
 */

openRoutes.route("/userAuth/:mode?", {
	name: "userAuth",
	action: function () {
	  BlazeLayout.render("entryLayout", {mainContent:"userAuth"});
	}
});

/**
 * ************************************************
 * Main Application Routes ************************
 * ************************************************
 *
 */

// Home route
appRoutes.route("/", {
	name: "home",
	breadcrumb: {
		title: "Home",
	},
	action: function() {
		var self = this;
		var templates = self.group.options.defaultTemplates.regions;
		var layoutTemplate = self.group.options.defaultTemplates.layout;
		templates.mainContent = "homeScreen";
		// templates.rightSidebar = "rightSidebar";
	  BlazeLayout.render(layoutTemplate, templates);
	}
});

appRoutes.route("/tasks", {
	name: "tasks",
	breadcrumb: {
		title: "Tasks"
	},
	action: function() {
		var self = this;
		var templates = self.group.options.defaultTemplates.regions;
		var layoutTemplate = self.group.options.defaultTemplates.layout;
		// templates.mainList = "tasksList";
		console.log(templates);
		templates.mainContent = "tasksList";
		// templates.rightSidebar = "rightSidebar";
	  BlazeLayout.render(layoutTemplate, templates);
	}
});
