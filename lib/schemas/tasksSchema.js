/* This contains the general validation schema for the tasks model */

TaskSchema = New SimpleSchema ({

	createdOn : { label: "Task created on",
		type: Date,
		autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
	},

	updatedOn : { label: "Task created on",
		type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
	},

	title: { label: "Task title",
		type: String,
	},

	content : { label: "Task content",
		type: String
	},

	status : { label: "Task status"
		type: String
	}

});

Meteor.users.attachSchema(Schema.User);