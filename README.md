# Vue Resume (Customized)

This folder contains your customized resume website built with Vue 3 and Vite.

The current project already includes a GitHub Pages deployment workflow in `.github/workflows/deploy.yml`.

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Optional preview of built files:

```bash
npm run preview
```

## GitHub hosting (step by step)

Use these steps to push this folder to your own GitHub repository and deploy it.

### 1. Clean local repo metadata

This project has been cleaned as requested:

- old `.git` removed
- `dist` removed
- `node_modules` removal attempted (may require closing locked processes on Windows)

If `node_modules` still exists due to file locks, close VS Code terminals/build tools and run:

```powershell
rmdir /s /q node_modules
```

### 2. Create your GitHub repository

Create a new empty repository on GitHub (without README/license/gitignore to avoid conflicts).

### 3. Update Vite base path

Edit `vite.config.js`:

- If deploying to `https://<username>.github.io/<repo-name>/`, set:

```js
base: '/<repo-name>/'
```

- If deploying to a custom domain root (or `username.github.io` root), set:

```js
base: '/'
```

### 4. Initialize git and push

From this folder (`vue-resume`):

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit: customized vue-resume"
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

### 5. Enable GitHub Actions permissions

In your repository settings:

1. Go to `Settings > Actions > General`
2. Set `Actions permissions` to allow actions
3. In `Workflow permissions`, enable `Read and write permissions`

### 6. Run deployment workflow

After pushing to `main`, workflow `Deploy resume to GitHub Pages` should run automatically.

If not:

1. Go to `Actions`
2. Select `Deploy resume to GitHub Pages`
3. Click `Run workflow`

### 7. Configure GitHub Pages source

In `Settings > Pages`:

1. Set source branch to `gh-pages`
2. Save

Your site will be available at:

- `https://<username>.github.io/<repo-name>/` (project pages), or
- your custom domain if configured.

## Common deployment issues

- Blank page after deploy: usually wrong `base` in `vite.config.js`.
- Assets not loading: check repository name and base path match exactly.
- Workflow fails to push `gh-pages`: check `Read and write permissions` in Actions settings.

## Credits and attribution

This project is based on:

- `vue-resume-template` by Ryan Balieiro: https://github.com/ryanbalieiro/vue-resume-template
- Author website: https://ryanbalieiro.com/

Frameworks and libraries used by this project include:

- Vue: https://vuejs.org/
- Vite: https://vitejs.dev/
- Bootstrap: https://getbootstrap.com/
- Font Awesome: https://fontawesome.com/
- PrimeIcons: https://www.primefaces.org/primeicons/
- Chart.js: https://www.chartjs.org/
- EmailJS: https://www.emailjs.com/
- Swiper: https://swiperjs.com/

Please keep attribution to the original template author when redistributing template-based work.

## License

This project follows the upstream template license (MIT), unless you define a different license in your own repository.
