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
Since I don't have the best memory and I don't use Docker every day, I decided to create a cheat sheet with the most common commands I use.


```bash
# List all docker containers
docker ps -a

# Build image
docker build -t <image_name> .

# Run container based on image
docker run -p 3000:3000 -d <image_name>

# Start container
docker start <container_id>

# Stop container
docker stop <container_id>

# Remove container
docker rm <container_id>

# Get into shell of container
docker exec -it <container_id> /bin/bash

# Example with mongosh
docker exec -it <container_id> mongosh
```
<br>

``docker ps`` is probably the command I use the most. So I created an alias for it. I added the following lines to my ``.bashrc`` file:
<br>
<br>

```bash
alias dps='docker ps'
alias dpsa='docker ps -a'
```

If like me you are annoyed by the display of docker containers with a lot of ports, I highly recommend [better-docker-ps](https://github.com/Mikescher/better-docker-ps) 


Every few months I need to clean up my computer. To clean up my Docker Environment I use the following command

```bash
docker images -f dangling=true
docker images --quiet --filter=dangling=true | xargs --no-run-if-empty docker rmi
docker ps --filter "status=exited" | grep 'weeks ago' | awk '{print $1}' | xargs --no-run-if-empty docker rm
```
https://stackoverflow.com/questions/17236796/how-to-remove-old-docker-containers
https://x.com/jpetazzo/status/347431091415703552