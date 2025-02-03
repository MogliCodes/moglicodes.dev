---
title: "Cheat Sheet: Linux on Raspberry Pi"
description: 'Just a list of linux commands I frequently use on my Raspberry Pi'
category: Cheat Sheet, OS, Linux, Raspberry Pi
date: 12/23/2023
navigation:
    title: 'Home'
    icon: '🏡'
---

# Cheat Sheet: Linux on Raspberry Pi

## General & system status
One of the first things I do on almost every machine running Linux, is to install [neofetch](https://github.com/dylanaraps/neofetch). If you ever need to find out specs of your machine, this is the way to go.

```bash
# Print out system information
neofetch

# Print free disk space
df -h
```
## Attached Hardware 
When it comes to attached hardware, the most common commands I use are the following:

```bash
# List all connected devices
lsblk

# List all connected devices with UUIDs
blkid
```
I recently learned that you can print out only USB and PCI devices with the following commands:

```bash
# List all USB devices
lsusb

# List all PCI devices
lspci
```

## File system and permissions
```bash
# Check permissions
ls -l
```

## tmux
I discovered tmux, because after ssh-ing into my Raspberry Pi, I wanted to run commands, and do stuff while the commands where running. tmux allows you to split your window, created sessions and windows.

```bash 
# split pane horizontally
ctrl + b & shit + %

# switch pane
ctrl + b & cursor

```

## nginx
```bash
# Check status
systemctl status nginx

# Restart nginx
systemctl restart nginx
```