# Serving the Bullock site with IIS on Windows

This guide covers serving the built **`dist`** folder of the Bullock Interactive Reconstruction project using **Internet Information Services (IIS)** on Windows. Use this if you prefer a Windows-native web server or need to integrate with an existing IIS site.

**Prerequisites:** You must have already built the project (`npm run build`) so the **`dist`** folder exists. The **document root** for the site must be that **`dist`** folder so that `index.html` and all assets load correctly.

---

## Enable IIS

1. Press `Win + R`, type `optionalfeatures`, press Enter.
2. In **Windows Features**, enable **Internet Information Services**.
3. Expand **World Wide Web Services** and ensure **Common HTTP Features** → **Static Content** is checked.
4. Click OK and wait for Windows to apply changes. Reboot if prompted.

On **Windows Server**, you can add the **Web Server (IIS)** role via **Server Manager** instead.

---

## Open IIS Manager

- Press `Win + R`, type **inetmgr**, press Enter (or search for “IIS” in the Start menu and open **Internet Information Services (IIS) Manager**).

---

## Create a site or application

### Option A — New website

1. In IIS Manager, in the left tree click **Sites**.
2. Right-click **Sites** → **Add Website**.
3. **Site name:** e.g. `Bullock Reconstruction`.
4. **Physical path:** click **...** and select the project’s **`dist`** folder (e.g. `C:\sites\bullock-interactive-reconstruction\dist`). The path must point to **`dist`**, not the project root.
5. **Binding:** e.g. **http**, port **80** (or **8080** if 80 is in use). Leave host name blank for local access.
6. Click **OK**.

### Option B — Application under Default Web Site

1. In the left tree, expand **Sites** and click **Default Web Site**.
2. Right-click **Default Web Site** → **Add Application**.
3. **Alias:** e.g. `bullock`.
4. **Physical path:** the project’s **`dist`** folder.
5. Click **OK**. The site will be at `http://localhost/bullock` (or your server name).

---

## Default document

1. In IIS Manager, click the **site or application** you created.
2. Double-click **Default Document**.
3. Ensure **index.html** is in the list. If not, click **Add**, enter `index.html`, and use **Move Up** so it is at the top.

---

## Static content / MIME types

IIS usually serves .html, .css, .js, .json, .woff2, .webp, .png, .svg by default. If a file type does not load:

1. Click the site or application.
2. Double-click **MIME Types**.
3. Add the extension and correct MIME type if it is missing.

---

## Permissions

The application pool identity must be able to read the **`dist`** folder:

1. In File Explorer, right-click the **`dist`** folder → **Properties** → **Security**.
2. Click **Edit** → **Add** → type **IIS_IUSRS** → **Check names** → OK.
3. Give **IIS_IUSRS** **Read** (and “Read & execute” / “List folder contents” as needed). Click OK.

---

## Application pool (static site)

1. In IIS Manager, click **Application Pools**.
2. Click the pool used by your site (e.g. **DefaultAppPool** or the one you assigned).
3. Right-click → **Advanced Settings**.
4. Set **.NET CLR Version** to **No Managed Code** (correct for a static site).

---

## Test

- Open a browser and go to the site URL (e.g. `http://localhost` or `http://localhost/bullock`).
- If you get **403** or **404**, recheck the physical path (must be **`dist`**), default document (`index.html`), and folder permissions (`IIS_IUSRS` Read).
