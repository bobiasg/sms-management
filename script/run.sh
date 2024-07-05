#!/bin/sh

# echo "Exporting hostname4..."
# export NEXTAUTH_URL_INTERNAL="http://$HOSTNAME:${PORT:-7575}"

echo "Migrating database..."
cd /app/; npm run db:migrate & PID=$!
# Wait for migration to finish
wait $PID

## If 'default.json' does not exist in '/app/data/configs', we copy it from '/app/data/default.json'
# cp -n /app/data/default.json /app/data/configs/default.json

echo "Starting production server..."
node /app/server.js & PID=$!

wait $PID