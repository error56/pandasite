const routes = {
  '/': {
    templatePath: 'templates/index',
    mounted () {
      this.$nextTick(() => {
        const interval = setInterval(() => {
          const block = document.querySelector('pre code.panda')
          if (!block) return
          
          clearInterval(interval)
          hljs.highlightBlock(block)
        }, 5)
      })
    }
  },
  '/api/': 'templates/api',
  '/examples/': 'templates/examples',
}
