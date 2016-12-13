# XO-LABS Meteor Framework

## The Missing Meteor Framework

The xo-labs meteor framework is a combination of libraries and placeholder modules and components designed to form the basis of a comprehensive development framework for Meteor. Additionally placeholder components are included to serve as a "cheat sheet" for rapid reference in the development process.

Each directory in this framework generally contains a readme file to describe the contents of that directory, where such explanation is needed. For more information on this framework itself, visit the link>>

Meteor Application Directory.

This readme.md is in the top level directory of this Meteor project. This directory is referred to as the "Application Directory". Any time this term is used in this framework, it is referring to this directory. We do not use naming conventions for other directories that at all relate to "Application". The entire project root folder, aka top level directory aka application directory are all the same.

This directory contains the subdirectories required for creating a Meteor project, and specifically include all specially designated and recognized directory names for Meteor.

These include

	*client
	*import
	*lib
	*private
	*public
	*server


Special Recognition and designation of folders in Meteor:

### client
The code files contained in the "client" directory will only be loaded and executed on the client (browser).

### import
Meteor naturally "lazy loads" files in all other directories except this one. This allows for the removal of any code file from the default lazy load sequence. Allowing for manual import into a specific place in the lazy load sequence.

### lib
The code files in this directory will be available to both the client and the server of the application. A good place to put schemas and routes.

### private
Files in this directory are never made available to the client, and are restricted on the server. This is where you can keep non-code related files or backups etc. You probably want to put this in your .git-ignore.

### public
This is a publicly accessible directory from the client. It can host image and resource files that you want to be accessible on the client. Basically the "html" docs directory as far as the web server is concerned.

### server
This contains all code to be executed and available to the server. This is where all data base methods and publications will exist.