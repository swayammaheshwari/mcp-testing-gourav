---
title: "Create User"
description: "Creates a new user in the in-memory array."
type: "endpoint"
published: true
tags:
  - "testing"
  - "api"
  - "local"
  - "POST"
---

```bash
curl --request POST \
  --url {{BASE_URL}}/api/users \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Charlie",
    "role": "editor",
    "active": true
}'
```
