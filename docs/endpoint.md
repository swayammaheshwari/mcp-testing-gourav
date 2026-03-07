---
title: "Test Endpoint Import "
description: "This is a test endpoint to verify the GitHub import functionality."
type: "endpoint"
published: true
tags:
  - "testing"
  - "api"
---

openapi: 3.0.0
paths:
  {{BASE_URL}}/v3/users:
    post:
      summary: Create User
      description: Creates a new user in the system.
      tags:
        - Users
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - name
                - email
              properties:
                name:
                  type: string
                  example: John Doe
                email:
                  type: string
                  format: email
                  example: john@example.com
      responses:
        "201":
          description: User created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    example: "123"
                  name:
                    type: string
                    example: John Doe
                  email:
                    type: string
                    example: john@example.com
        "401":
          description: Unauthorized
        "400":
          description: Invalid request

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT