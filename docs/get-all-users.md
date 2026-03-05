---
title: "Get All Users"
description: "Retrieves a list of all users. Supports filtering and pagination via query parameters."
type: "endpoint"
published: true
tags:
  - "testing"
  - "api"
  - "local"
  - "GET"
---

```bash
curl --request GET \
  --url '{{BASE_URL}}/api/users?role=admin&limit=1'
```
