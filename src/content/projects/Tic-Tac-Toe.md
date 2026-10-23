---
title: "Tic Tac Toe"
slug: Tic-Tac-Toe
published: 2026-09-25
order: 100
description: "A simple Tic-Tac-Toe game written in pure C for Windows."
image: "images/Tic-Tac-Toe.png"
status: "published"
tags:
  - C
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/Hirutiya/Tic-Tac-Toe"
---

## How to Play

1. Download `Tic-Tac-Toe.exe` from the [latest release](https://github.com/Hirutiya/Tic-Tac-Toe/releases/latest) on github.
2. Double-click to play. No installation required.

### System Requirements

- Windows 10 or later (64-bit)

## Build

### Prerequisites

- **Windows OS**
- **GCC Compiler** (MinGW-w64 recommended, or MSYS2)
- **windres** (comes with MinGW-w64)
- **Terminal** (PowerShell, CMD, or Git Bash)

### Compile

1. Compile the resource file
```bash
windres icon.rc -o icon.o
```

2. Compile the application
```bash
gcc -Wall -Wextra -std=c11 -mwindows -static src/main.c src/app.c src/render.c src/game.c src/ai.c icon.o -o Tic-Tac-Toe.exe -lgdi32 -luser32
```

### Run

```bash
./Tic-Tac-Toe.exe
```
or
```bash
Tic-Tac-Toe.exe
```

## Credits

App icon: [Tic tac toe icons created by Magnific - Flaticon](https://www.flaticon.com/free-icons/tic-tac-toe)