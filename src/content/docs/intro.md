---
title: Introduction
---

**Git Commit Audio** adds a spark of joy to coding—hear a surprise sound every time you commit. By default, it’s a sitcom laugh track.

## Features

- Cross-platform
  - macOS (`afplay`)
  - Linux (`aplay` or `paplay`)
- Quick setup with [a single command](/install)!
- Centralised configuration with easily [customisable audio](/config/#custom-audio)

## How this works

This project installs a Git hook that plays an audio file every time you commit. It uses the [post-commit](https://git-scm.com/docs/githooks#_post_commit) hook, which is triggered after a commit is made.
The audio is played using the system’s default audio player, which is `afplay` on macOS and `aplay` or `paplay` on Linux.
