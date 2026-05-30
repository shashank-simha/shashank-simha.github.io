import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Use repo-relative base on GitHub Actions (Project Pages), root elsewhere.
const githubRepo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const base = isGithubActions && githubRepo ? `/${githubRepo}/` : '/'

// https://vitejs.dev/config/
export default defineConfig({
    base,
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
            },
        },
    }
})
