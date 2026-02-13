# Installing on Windows

This guide walks you through installing the Bullock Interactive Reconstruction site on Windows: installing Node.js and npm, building the project, configuring the server and Chrome to start when Windows starts, and serving the built files with `npx serve dist`. For serving with **IIS** instead of npx serve, see [INSTALL-WINDOWS-IIS.md](INSTALL-WINDOWS-IIS.md).

---

## 1. Prerequisites

### Node.js

You need Node.js (which includes npm) on your Windows machine.

1. Download the **LTS** Windows installer from [nodejs.org](https://nodejs.org/).
2. Run the **.msi** installer and follow the prompts (default options are fine).
3. Restart any open Command Prompt or PowerShell windows so the updated `PATH` is picked up.

**Recommended:** Node.js 20 LTS for compatibility with this project.

### Google Chrome

Required for the “start server and Chrome at startup” step (Section 5). Install Chrome if it is not already installed:

- Download from [google.com/chrome](https://www.google.com/chrome/).
- Install using the default path. Typical locations:
  - **64-bit:** `C:\Program Files\Google\Chrome\Application\chrome.exe`
  - **32-bit:** `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`

### Git (optional)

Only needed if you clone the repo from Git:

- Download [Git for Windows](https://git-scm.com/download/win) and install.

### Verify Node and npm

Open **Command Prompt** or **PowerShell** and run:

```bat
node -v
npm -v
```

You should see version numbers (e.g. `v20.x.x` and `10.x.x`). If you get “not recognized,” Node is not on your PATH; reinstall or add Node to PATH.

---

## 2. Getting the project

1. **If using Git:** clone the repository into a folder, e.g.:
   ```bat
   gh repo clone scottdickerson/bullock-interactive-reconstruction
   cd bullock-interactive-reconstruction
   ```
2. **If using a ZIP:** extract the archive to a folder and open that folder in Command Prompt or PowerShell:
   ```bat
   cd path\to\bullock-interactive-reconstruction
   ```
   Replace `path\to\bullock-interactive-reconstruction` with the actual path (e.g. `C:\sites\bullock-interactive-reconstruction`).

All following commands assume you are in this project root directory.

---

## 3. Installing dependencies

In the project root, run:

```bat
npm install
```

- The first run may take a few minutes while packages are downloaded.
- If you see errors related to antivirus, proxy, or network, try again or configure npm (e.g. `npm config set proxy ...` if you use a corporate proxy).

---

## 4. Building the site

From the project root, run:

```bat
npm run build
```

When it finishes:

- Built files are in the **`dist`** folder.
- You can confirm by opening the project in File Explorer and checking that `dist` exists and contains `index.html` and asset folders.

The **document root** for serving the site is always this **`dist`** folder so that `index.html` and assets (CSS, JS, images, fonts) load correctly.

---

## 5. Start server and Chrome at Windows startup

Configure two **Windows Scheduled Tasks** so that when the machine (or user) starts, the site server runs and Chrome opens to the site. You must have **Chrome installed** (Section 1). The server will use **npx serve dist** on port **3000** (Section 6).

### Task 1 — Start `npx serve dist` when Windows starts

This task starts the static server so it is running before or when the user logs on.

#### Create or use the batch file

The project includes **start-serve.bat** in the project root. It uses the folder where the script lives, so you do not need to edit any path.

If you prefer to create your own, in the project root create **start-serve.bat** with:

```bat
@echo off
cd /d "%~dp0"
npx serve dist -l 3000
```

(`%~dp0` is the folder containing the batch file, i.e. the project root.)

#### Create the scheduled task

1. Press `Win + R`, type **taskschd.msc**, press Enter to open **Task Scheduler**.
2. In the right panel, click **Create Task** (not “Create Basic Task”).
3. **General** tab:
   - **Name:** e.g. `Bullock – Start serve`.
   - Optionally check **Run with highest privileges** if you have permission issues.
   - For a kiosk-style setup (server starts before anyone logs in), choose **Run whether user is logged on or not**; otherwise **Run only when user is logged on** is simpler.
4. **Triggers** tab → **New**:
   - **Begin the task:** choose **At startup** (or **At log on** if you prefer the server to start only after a user logs in).
   - Click OK.
5. **Actions** tab → **New**:
   - **Action:** Start a program.
   - **Program/script:** full path to **start-serve.bat** in your project root, e.g. `C:\sites\bullock-interactive-reconstruction\start-serve.bat`.
   - **Start in (optional):** your project root (e.g. `C:\sites\bullock-interactive-reconstruction`). This ensures the batch file and `npx` run in the correct folder.
   - Click OK.
6. **Conditions** tab: uncheck **Start the task only if the computer is on AC power** if this machine might run on battery.
7. Click **OK** and enter your password if prompted.

The user account that runs this task must have **Node.js and npm on PATH** (same as when you run `npx serve dist` manually). If the task runs at startup before logon, ensure the account you chose has access to the project folder and a valid PATH that includes Node.

---

### Task 2 — Start Chrome and open localhost

This task opens Chrome to the site after logon, with a short delay so the server from Task 1 is ready.

1. In **Task Scheduler**, click **Create Task** again.
2. **General** tab:
   - **Name:** e.g. `Bullock – Open Chrome`.
   - **Run only when user is logged on** is usually correct so Chrome opens in the user’s session.
3. **Triggers** tab → **New**:
   - **Begin the task:** **At log on**.
   - **Delay task for:** e.g. **15** or **30** seconds so the server has time to start.
   - Click OK.
4. **Actions** tab → **New**:
   - **Action:** Start a program.
   - **Program/script:** Chrome’s path, e.g.:
     - 64-bit: `C:\Program Files\Google\Chrome\Application\chrome.exe`
     - 32-bit: `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`
   - **Add arguments:** `http://localhost:3000`
   - Optional: add `--start-maximized` to open Chrome maximized.
   - Click OK.
5. Click **OK** to save the task.

The port (**3000**) must match the one used in **start-serve.bat** (`npx serve dist -l 3000`). If you use a different port, change both the batch file and the Chrome task arguments.

After a reboot or logon, the server should start and Chrome should open to **http://localhost:3000** after the delay.

---

## 6. Serving the built files (static HTTP)

The startup tasks in Section 5 run **npx serve dist** on port **3000**. To serve the site manually (or to confirm it works), use the same command.

You need to serve the contents of the **`dist`** folder with an HTTP server. This guide uses **npx serve dist** on port **3000**, which the startup tasks (Section 5) depend on.

### npx serve dist

1. From the **project root**, run:

   ```bat
   npx serve dist -l 3000
   ```

   - The first time, npm will download `serve`; after that it runs directly.
   - `-l 3000` fixes the port to **3000** so Chrome opens the same URL when Windows starts (Section 5).

2. Open a browser and go to **http://localhost:3000**. You should see the site.

To stop the server, press `Ctrl+C` in the terminal.

---

### Other options

- **IIS:** For serving with Internet Information Services (new site or application, default document, permissions, etc.), see **[INSTALL-WINDOWS-IIS.md](INSTALL-WINDOWS-IIS.md)**.
- **Python:** If Python 3 is installed, you can run a quick server from the **`dist`** folder: `cd dist` then `py -m http.server 8000`, and open **http://localhost:8000**.
- Any other static HTTP server that uses the **`dist`** folder as the document root will work.

---

## 7. Troubleshooting

### Long path issues

If the build or npm fails with path-too-long errors:

- Enable long paths: run **Group Policy** or **Registry** settings as per [Microsoft’s documentation](https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation).
- Or move the project to a shorter path (e.g. `C:\proj\bullock`).

### Build failures

- Run a clean install and rebuild:
  ```bat
  npm ci
  npm run build
  ```
- Ensure you have enough disk space and that antivirus is not blocking Node or the project folder.

### Server or Chrome task not running

- Run **start-serve.bat** manually from the project folder and fix any errors (path, Node not on PATH).
- In Task Scheduler, check the **History** for the task to see why it did not run or failed.
- For “At startup” tasks, ensure the account has access to the project directory and that Node is available in that account’s environment (e.g. install Node for “All users” or set PATH in a system-wide or that user’s environment).
