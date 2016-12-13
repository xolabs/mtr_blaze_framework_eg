<app>/client/components/widgets

## Widgets

This directory contains widget components.

Widget components are components which are mostly supportive features of the app, are used widely or in multiple places across the application, and which are reactive to data contexts. They may provide a simple data complex such as merely display simple queries to collections, but do not involve complex models, or heavy and disparate methods of accessing and updating these models.

Examples of such a component could be clock displaying the time for the user. Displaying simple dialogues to the user, or a most basic chat interface.

These widgets may eventually evolve into modules, the most complex form of component, over time as needed. Also refactoring can result in them becoming mere "micro" view templates.