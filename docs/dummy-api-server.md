---
title: "Dummy Local API Server"
description: "A local Node.js Express server providing a simple set of 5 CRUD endpoints for testing purposes."
type: "page"
published: true
tags:
  - "testing"
  - "api"
  - "local"
---

## Overview

This local Node.js Express server provides a simple set of 5 CRUD endpoints designed specifically for testing frontend or external API integrations without needing a real database. It utilizes an in-memory array as a mock data store.

## Running the Server
To start the local server, run the following commands in the directory where the project is located:
```bash
cd dummy-server
npm install
npm run dev
```

The server will be available locally on `http://localhost:3000`.