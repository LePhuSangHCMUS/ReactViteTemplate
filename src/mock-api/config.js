import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
// import { fileURLToPath } from 'url'

// const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join('db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter);
 export {
     db
 }