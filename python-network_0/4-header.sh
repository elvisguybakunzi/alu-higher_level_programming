#!/bin/bash
# a Bash script that takes in a URL as an argument, sends a GET request to the URL, and displays the body of the response.
url="$1"
curl -sH "X-HolbertonSchool-User-Id: 98" "$url"
