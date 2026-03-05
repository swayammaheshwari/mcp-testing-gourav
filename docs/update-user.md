---
title: "Update User"
description: "Updates an existing user completely using Path and Body parameters."
type: "endpoint"
published: true
tags:
  - "testing"
  - "api"
  - "local"
  - "PUT"
---

```bash
curl --request PUT \
  --url {{BASE_URL}}/api/users/:id \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Alice Wonderland",
    "role": "superadmin"
}'
```
