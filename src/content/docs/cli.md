---
title: git-audio CLI
---

The `git-audio` command line interface allows you to manage **Git Audio** settings both globally and on a per-repository basis.
Run `git-audio` in your terminal to see the available commands.

## Global initialisation

System-wide enable or disable initialisation of **Git Audio** for new repositories.

### Enable

```shell
git-audio global:set
```

### Disable

```shell
git-audio global:unset
```

## Repository-specific

Install or uninstall the `post-commit` hook for the current repository.

### Install

```shell
git-audio repo:commit
```

### Uninstall

```shell
git-audio repo:reset
```

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

Sets a custom audio file. The path must be absolute.

```shell
git-audio audio:set /path/to/audio
```
