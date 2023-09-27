import test from 'ava'
import path from 'path'
import fs from 'fs/promises'


import { parseIdlPretty } from '../index.js'

test('parse', async (t) => {
    const fixturesRoot = path.resolve('__tests__', 'fixtures')
    const fixtures = await fs.readdir(fixturesRoot).then((files) => Array.from(new Set(files.map(path.parse).map(f => f.name))))

    for (const fixture of fixtures) {
        const did = await fs.readFile(path.resolve(fixturesRoot, `${fixture}.did`), 'utf-8')
        const json = await fs.readFile(path.resolve(fixturesRoot, `${fixture}.json`), 'utf-8')
        t.is(parseIdlPretty(did).replace(/\s+/g, ''), json.replace(/\s+/g, ''))
    }
})