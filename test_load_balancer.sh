# Number of requests to send
REQUEST=10

# URL to send requests to
URL="http://localhost:3000"

# Loop to send requests
for ((i=1; i<=REQUEST; i++)); do
    curl "$URL" &
done

# Waiting for all background processes to complete
wait

# Print completion message
echo "All requests sent"