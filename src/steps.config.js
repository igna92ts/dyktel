module.exports = csvRow => {
  return {
    steps: [
      {
        site: 'https://ar.santanderrio.com.ar/dana-na/auth/url_18/welcome.cgi',
        inputs: [
          {
            selector: 'input[type="text"][name="username"]',
            action: 'type',
            value: 'B047178'
          },
          {
            selector: 'input[name="password"]',
            action: 'type',
            value: 'Banco003'
          }
        ],
        finisher: {
          selector: 'input[name="btnSubmit"]',
          action: 'click',
          waitFor: 200000
        }
      }
    ]
  }
}