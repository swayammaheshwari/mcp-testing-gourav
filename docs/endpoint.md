---
title: "Test Endpoint Import"
description: "This is a test endpoint to verify the GitHub import functionality."
type: "endpoint"
published: true
tags:
  - "testing"
  - "api"
---

curl --request POST \
  --url https://api.example.com/v1/users \
  --header 'Authorization: Bearer YOUR_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "John Doe",
    "email": "john@example.com"
}'
