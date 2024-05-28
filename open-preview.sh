#!/bin/bash

# Construct the forwarded port URL dynamically
# Example for GitHub Codespaces: Adjust the URL pattern as necessary for your environment
FORWARDED_PORT_URL="https://${CODESPACE_NAME}.app.github.dev/"

# Open the URL using VSCode's Browser Preview command
code --command "browser-preview.openPreview" "$FORWARDED_PORT_URL"
