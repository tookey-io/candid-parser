import path from 'path'
import fs from 'fs/promises'
import { parseIdl, parseIdlPretty } from '../index.js'

const json = await fs.readFile(path.resolve(process.cwd(), process.argv[2]), 'utf-8').then(parseIdlPretty)
await fs.writeFile(path.resolve(process.cwd(), process.argv[3]), json)
