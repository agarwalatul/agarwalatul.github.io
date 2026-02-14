# Template Reuse Guide

This guide explains how to reuse this repository as a template for your own professional profile.

## Quick Start Options

There are several ways to start your own profile using this template:

### Option A: Use as a Template (Recommended)
You can mark this repository as a "Template" on GitHub to get a **"Use this template"** button.
1. In your fork/copy settings, check the **"Template repository"** box.
2. Future users (or yourself) can then simply click **"Use this template"** to create a fresh repo with no commit history from the original.

### Option B: Fork this Repository
Click the **Fork** button at the top right of this page to create a copy in your own account. This preserves the link to the original project.

### Option C: Download as ZIP
If you don't want to use Git initially:
1. Click the **Code** button and select **Download ZIP**.
2. Extract the files and create a new repository from scratch in your account.

### Option D: CLI Clone
```bash
git clone https://github.com/agarwalatul/agarwalatul.github.io.git
```

---

## Setting Up Your Repository
Once you have your own copy:

To make this profile your own, update the following files:

### 1. Update Profile Data (`app.js`)
Most content is managed in the `profileData` object within `app.js`. Update the following:
*   **Personal Info**: Name, title, email, phone, and social links.
*   **Experience**: Your work history and key achievements.
*   **Skills**: Technical skills categorized by area.
*   **Projects**: Feature your best work.
*   **Education**: Your academic background.

### 2. Replace Profile Image (`profile.jpg`)
Replace the existing `profile.jpg` file with your own photo. Ensure the filename remains `profile.jpg` or update the reference in `app.js`.

### 3. SEO and Metadata (`index.html`)
Open `index.html` and update the following for search engines:
*   `<title>`: Set to "Your Name - Your Role".
*   `<meta name="description">`: A brief professional summary.

### 4. Styling and Colors (`styles.css`)
Modify the CSS variables at the top of `styles.css` to change the color scheme or fonts globally.

## Publishing Your Changes

Once you've customized the files, simply **commit and push** your changes to the `master` branch. GitHub Actions will automatically deploy the updates, and your profile will be live at `https://[your-username].github.io`.
