#!/bin/sh

echo "window.env = { VUE_APP_EXPRESS_BACKEND_URL: '${VUE_APP_EXPRESS_BACKEND_URL}' };" > /usr/share/nginx/html/env.js

nginx -g "daemon off;"
