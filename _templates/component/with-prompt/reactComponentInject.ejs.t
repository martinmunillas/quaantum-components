---
to: src/components/index.ts
inject: true
append: true
---
export * from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>'
export {default as <%= h.changeCase.pascalCase(name) %>} from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>'
