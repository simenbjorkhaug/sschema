import { build, emptyDir } from 'https://deno.land/x/dnt@0.38.1/mod.ts'

await emptyDir('./npm')

await build({
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {
    // see JS docs for overview and more options
    deno: true,
    undici: 'dev',
  },
  test: false,
  typeCheck: false,
  package: {
    // package.json properties
    name: '@bjorkhaug/sschema',
    version: Deno.args[0],
    description: 'JSON Helper types for typescript',
    license: 'MIT',
    publishConfig: {
      access: 'public',
      registry: 'https://registry.npmjs.org/',
      scope: '@bjorkhaug',
    },
    repository: {
      type: 'git',
      url: 'git+https://github.com/simenbjorkhaug/sschema.git',
    },
    bugs: {
      url: 'https://github.com/simenbjorkhaug/sschema/issues',
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync('README.md', 'npm/README.md')
  },
})
