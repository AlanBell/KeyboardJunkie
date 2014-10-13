#!/bin/bash

# Script to build a package of the module
APP=`basename $PWD`

# Get the package version number and remove any whitespace
VER=`sed -n 's|<version>\(.*\)</version>|\1|p' manifest.xml`
VER=${VER//[[:space:]]}

# Check for previous package with same name and remove
rm -f ../${APP}-${VER}.zip

# Create the zip package file
zip -r ../${APP}-${VER}.zip . -x *.git/* *.settings/* .project .buildpath `basename $0` *.tar.gz

