#!/bin/bash

# Insert Key
KEYS_FILE="./keys"
JS_FILE="./src/pickleball.js"

# Extract the PROD key from the keys file
PROD_KEY=$(grep "^PROD=" "$KEYS_FILE" | cut -d'=' -f2)

# Check if PROD_KEY was found
if [ -z "$PROD_KEY" ]; then
    echo "Error: PROD key not found in $KEYS_FILE"
    exit 1
fi

# Use sed to replace the API key in the JavaScript file
sed -i "s/const googleApiKey = \"\";/const googleApiKey = \"$PROD_KEY\";/" "$JS_FILE"

echo "API key has been updated in $JS_FILE"

# Zip the contents of the src directory into deploy.zip without the src directory itself
rm -f deploy.zip
cd src
zip -r ../deploy.zip .

echo "Zipped src directory contents into deploy.zip"

# Remove Key
cd ..
sed -i 's/const googleApiKey = "[^"]*";/const googleApiKey = "";/' "$JS_FILE"

echo "API key has been cleared from $JS_FILE"
