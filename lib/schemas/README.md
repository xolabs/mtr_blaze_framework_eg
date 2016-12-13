<app>/lib/schemas

# MAIN SCHEMAS DIRECTORY

This is where all base form validation schemas for the application will reside.

With the "Fireball" framework ;) we only minimally define the data model here, with specific form validation schemes being kept with the forms.

This allows for a single reference to the data model of the application, and ability to apply global settings and parameters for the validation of all forms.

It is important to note, that this is NOT a database scheme. It is a form validation schema designed to implement easy form security and validation, as well as application wide data model consistency. Otherwise your insert/update statements are the model.