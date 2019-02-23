const dir = require('node-dir')
const fs = require('fs-extra')
const jsonToYaml = require('yamljs')
const matter = require('gray-matter')
const path = require('path')
const config = require('./config')
const _ = require('lodash')
const featuredPlugins = config.featuredPlugins

function isFileFeatured(folderName) {
  if (featuredPlugins.includes(folderName)) {
    return true
  } else {
    return false
  }
}

function fixYamlContent(content, filename) {
  // fix links for website
  let fixedContent = content.replace(/([0-9]{2})-/g, '').replace(/.md\)/g, ')')
  // fix Yaml frontmatter
  fixedContent = fixedContent.replace('<!--', '---').replace('-->', '---')
  // replace /README)
  fixedContent = fixedContent.replace(/\/README\)/g, ')')
  // fix paths of links that are not index.md('README.md')
  if (path.basename(filename) !== 'README.md') {
    // replace (.. with (../..
    fixedContent = fixedContent.replace(/\(\.\./g, '(../..')
    // replace (./ with (../
    fixedContent = fixedContent.replace(/\(\.\//g, '(../')
  }
  return fixedContent
}

function makeSEOTitle(title) {
  let seoTitle = `${title}`
  return seoTitle
}

function getAuthorName(githubUrl) {
  return githubUrl.replace('https://github.com/', '').split('/')[0]
}

function getAuthorLink(githubUrl) {
  const authorName = getAuthorName(githubUrl)
  return `https://github.com/${authorName}`
}

function formatTitle(title) {
  let formattedTitle = ''
  const uppercaseWords = [
    'Aws',
    'Http',
    'Rest',
    'Api',
    'Iot',
    'Sam',
    'Sns',
    'Ses',
    'Iam',
    'Es',
    'Cf',
    'Waf',
    'Raml',
    'Wsgi',
    'Vpc',
    'Ssm',
    'Kms',
    'Sqs',
    'Ttl',
  ]
  const brandWords = {
    dynamodb: 'DynamoDB',
    faunadb: 'FaunaDB',
    pynamodb: 'PynamoDB',
    mongodb: 'MongoDB',
    oauth: 'OAuth',
    graphql: 'GraphQL',
    iopipe: 'IOpipe',
    graphiql: 'GraphiQL',
  }
  title.split(' ').forEach(word => {
    const wordInLowercase = word.toLowerCase()

    if (brandWords[wordInLowercase]) {
      formattedTitle += ` ${brandWords[wordInLowercase]}`
    } else if (uppercaseWords.includes(word)) {
      formattedTitle += ` ${word.toUpperCase()}`
    } else {
      formattedTitle += ` ${word}`
    }
  })
  formattedTitle = formattedTitle.replace('S 3', 'S3')
  formattedTitle = formattedTitle.replace('Sthree', 'S3')

  formattedTitle = formattedTitle.trim()
  return formattedTitle
}

module.exports = function updatePluginsContent(
  rawPluginsData,
  pluginsDirectoryPath,
  callback
) {
  dir.readFiles(
    pluginsDirectoryPath,
    {
      match: /.md$/,
    },
    (err, content, filename, next) => {
      if (err) console.error(err)
      const pluginName = path.parse(filename).base.replace('.md', '')
      const pluginMetaData = rawPluginsData.filter(obj => {
        if (obj.githubUrl.includes(pluginName)) {
          return true
        } else {
          return false
        }
      })[0]
      const fixedContent = fixYamlContent(content, filename)
      const item = matter(fixedContent).data
      item.title = formatTitle(_.startCase(pluginName))
      item.description = pluginMetaData.description
      item.gitLink = pluginMetaData.githubUrl
      item.authorName = getAuthorName(item.gitLink)
      item.authorLink = getAuthorLink(item.gitLink)
      item.seoTitle = makeSEOTitle(item.title)
      if (isFileFeatured(pluginName)) {
        item.highlighted = true
      }

      const yaml = jsonToYaml.stringify(item)
      const newYamlContent = `---
${yaml}---`

      const finalNewContent = `${newYamlContent} 
${fixedContent}`

      fs.writeFileSync(filename, finalNewContent)

      next()
    },
    function(err) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    }
  )
}
