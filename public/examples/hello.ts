// ! [IMPORTANT]: To import module dependencies (e.g. 'axios')
// ! Then allow Vite to transform index.html (not express.static)
// ! --> see (vite-index-html.ts)
import axios from 'axios'

export async function hello() {
  const result = await axios.get('/api/hello')
  console.log(result.data)
}
