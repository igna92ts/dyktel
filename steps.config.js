module.exports = {
  steps: [
    {
      site: 'https://docs.google.com/forms/d/e/1FAIpQLSdg3p7yvQNT9QDTpZBkyGACQfnjsud1LQB3Iz0aJ6AbWSbKoQ/viewform',
      inputs: [
        {
          selector: 'input[type="email"][name="identifier"]',
          action: 'type',
          value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
      ],
      finisher: {
        selector: 'div[role="button"][jsname="tJiF1e"]',
        action: 'click',
        waitFor: 1000
      }
    },
    {
      inputs: [
        {
          selector: 'input[name="password"]',
          action: 'type',
          value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
      ],
      finisher: {
        selector: 'div[role="button"][jsname="tJiF1e"]',
        action: 'click',
        waitFor: 'input[name="entry.45060985"]'
      }
    },
    {
      inputs: [
        {
          selector: 'input[name="entry.45060985"]',
          action: 'type',
          value: 'input de la seccion 1'
        }
      ],
      finisher: {
        selector: 'div[role="button"][jsname="OCpkoe"]',
        action: 'click',
        waitFor: 1000
      }
    },
    {
      inputs: [
        {
          selector: 'input[name="entry.45060985"]',
          action: 'type',
          value: 'input de la seccion 1'
        }
      ],
      finisher: {
        selector: 'div[role="button"][jsname="OCpkoe"]',
        action: 'click',
        waitFor: 1000
      }
    }
  ]
}