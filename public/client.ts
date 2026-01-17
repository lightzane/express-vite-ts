// See (vite.config.ts + tsconfig.json + server.ts) for aliasing '~' to 'public' directory
import { hello } from '~/examples/hello'

document.addEventListener('DOMContentLoaded', start)

async function start() {
  document.querySelector('h1').textContent = await hello()
}
