## Electron App Template 

A simple ElectronJS starter template for building desktop applications using HTML, CSS, and JavaScript.

This repo is part of my YouTube tutorial on setting up your very first Electron desktop app. It’s designed to be simple, beginner-friendly, and easy to customize for any project.

---

## Tutorial Video

This repo is a part of my Youtube video tutorial on how to set up your very first desktop application. See the video here: 

This repo is only for the basic Electron template that you can clone to build whatever you want. But if you're interested in a beginner demonstration tutorial too, see this repositary for a simple Calendar Widget: https://github.com/nasha-wanich/little-calendar 

---

## What this template is for 

This template is great if you are:

- New to ElectronJS
- A designer or frontend developer exploring desktop apps
- Building quick prototypes or side projects
- Looking for a clean starting point without extra complexity

If you’re looking for a guided beginner project after setting up this template, check out this calendar demo repo: https://github.com/nasha-wanich/little-calendar

---

## Project Structure

```
electron-app-template
├── node_modules
├── main.js
├──index.html
├── styles.css
├── script.js
├── package.json
└── package-lock.json
```

### Core Files Explained

- **`main.js`**
    
    Electron’s main process. Creates the app window and loads the HTML file.
    
- **`index.html`**
    
    The main UI layout of your desktop app.
    
- **`styles.css`**
    
    Styles for your app UI, including draggable window behavior.
    
- **`script.js`**
    
    Frontend JavaScript logic for interactivity.
    
- **`package.json`**
    
    App configuration, dependencies, and run scripts.


---

## Prerequisites

Before using this template, make sure you have:

- **Node.js**
- **Homebrew** (macOS)
- A code editor (VS Code recommended)

---

## Step by step set up

### Install Package Managers (if you don’t have one on your computer)

MacOS: Homebrew ([https://brew.sh](https://brew.sh/))

Window: Chocolatey (https://chocolatey.org/install)

### 2. Install Node.js

You can install Node.js in two ways:

### Option A: Use a package manager (mine is Homebrew which I used in the tutorial)

```bash
brew install node
```

Verify installation:

```bash
node -v
npm -v
```

If both commands return version numbers, you’re good to go 

### Option B: Download Installer

Download Node.js directly from: https://nodejs.org

and follow their installation instructions.