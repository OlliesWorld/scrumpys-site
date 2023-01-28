import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'scrumpys',
  projectId: 'dm9wk06u',
  dataset: 'production',
  plugins: [
    deskTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})