---
title: git-audio CLI
---

## Global initialisation

### Enable

```shell
git-audio global:set
```

Enable `post-commit` hook for new repositories.

### Disable

```shell
git-audio global:unset
```

Disable initialisation of `post-commit` hook for new repositories.

## Repository-specific

### Install

```shell
git-audio repo:commit
```

Install `post-commit` hook to current repository.

### Uninstall

```shell
git-audio repo:reset
```

Uninstall `post-commit` hook from current repository.

## Audio configuration

### Default

```shell
git-audio audio:default
```
or
```shell
git-audio audio:reset
```

### Custom audio

```shell
git-audio audio:set /path/to/audio
```

Set custom audio file. Must be an absolute path.
