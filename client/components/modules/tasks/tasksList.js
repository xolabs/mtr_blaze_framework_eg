// tasksList.js
/* This module handles the list of tasks */

if (Meteor.isClient) {

	Template.tasksList.helpers({

		tasks : function () {
			// Get the list of tasks
			return Tasks.find({}, {sort: {createdOn: -1}});
		}

	});

}

