<app>/client/components/views

## Views

This directory contains view components.

View components are components which function to set the main visual layout of the rendered application.

They contain generally markup for the main visual areas of the interface, with limited code other than references to other components which are to be rendered in the view.

Importantly, the main views are the recipient of the data context set by the application routing software calling the template.

View components are also a good place to set global data contexts, and do high level checks on user roles and authorities for feature access or custom layouts.

As such it can be a good place to put subscriptions you always need, checks for 
the availability of subscriptions and displaying a global loader
element, or for potentially doing high level security or access checks.

View components generally remain very static after they are created, or only as much as the visual design of the application interface is changed. Smaller view templates for use in containers for smaller modules or widgets may in time evolve into widgets or modules, or even packages themselves.

An example of a very static view template would of course be the main application template which does general layout and calls module and widget component rendering.

However a "sidebar" template may evolve from a simple container for a list, into a fully reactive and responsive complex mobile interaction interface.