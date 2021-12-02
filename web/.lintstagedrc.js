module.exports = {
  '**/*.ts?(x)': [
    filenames => `next lint --max-warnings=0 --fix --file ${filenames.map(file => file.split(process.cwd())[1]).join(' --file ')}`,
    "yarn lint:css --fix",
    "yarn test --findRelatedTests --bail"
  ]
}
