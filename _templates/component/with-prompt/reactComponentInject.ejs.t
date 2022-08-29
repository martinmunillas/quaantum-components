---
to: src/index.ts
inject: true
append: true
---
export * from './components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>'
export {default as <%= h.changeCase.pascalCase(name) %>} from './components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>'
