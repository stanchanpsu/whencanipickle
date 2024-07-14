#!/bin/bash

# Zip the contents of the src directory into deploy.zip without the src directory itself
rm -f deploy.zip
cd src
zip -r ../deploy.zip .

# Overwrite any existing deploy.zip file
echo "Zipped src directory contents into deploy.zip"
