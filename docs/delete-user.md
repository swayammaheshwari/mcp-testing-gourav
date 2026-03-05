---
title: "Delete User"
description: "Removes a user. Expects a specific authorization header."
type: "endpoint"
published: true
tags:
  - "testing"
  - "api"
  - "local"
  - "DELETE"
---

curl --request DELETE \
  --url {{BASE_URL}}/api/users/:id \
  --header 'Authorization: Bearer super-secret-token'
