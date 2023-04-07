#!/bin/bash
#  a Bash script that takes in a URL, sends a request to that URL, and displays the size of the body of the response
url="$1"
response=$(curl -sI "$url") # send a HEAD request and get the response headers
content_length=$(echo "$response" | awk '/Content-Length/ {print $2}') # extract the content length from the response headers
if [ -n "$content_length" ]; then
	    echo "$content_length"
    else
	        echo "Could not determine the size of the body"
fi
