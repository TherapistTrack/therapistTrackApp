const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./docs/api-spec.yaml')

const setupSwagger = (app) => {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true
    })
  )
}

module.exports = setupSwagger
