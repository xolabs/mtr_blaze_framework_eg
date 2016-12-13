<app>/client/components/modules

## Modules

This directory contains module components.

Modules are components of the highest order of complexity under packages.

They contain the main features of the application and are dedicated to creating and managing the most complex interface interactions, and data models. They are the primary features around which all other features and models serve to support.

The majority of the codebase developed specifically for the application will most likely reside here. As such care and thought should be put into the organization of directories and code files to ensure easy extensibility and lack of collision in the global namespace, as well as for future software development and reference.

These components create the main data context of the application. Generally special publications are developed on the server side to handle the management of the potentially large amounts of data that can be required for these components.