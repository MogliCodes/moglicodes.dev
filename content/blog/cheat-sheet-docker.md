---
title: "Cheat Sheet: Docker"
description: 'Just a list of docker commands I frequently use.'
category: Cheat Sheet, Virtualization, Docker, DevOps
date: 04/16/2024
navigation:
    title: 'Home'
    icon: '🏡'
---

# Cheat Sheet: Docker

```bash
# List all docker containers
docker ps -a

# Build image
docker build -t <image_name> .

# Run container based on image
docker run -p 3000:3000 -d <image_name>
```