module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  quoteProps: 'as-needed',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
