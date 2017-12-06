module.exports = csvRow => {
  return {
    steps: [
      {
        site: 'https://docs.google.com/forms/d/e/1FAIpQLSdg3p7yvQNT9QDTpZBkyGACQfnjsud1LQB3Iz0aJ6AbWSbKoQ/viewform',
        inputs: [
          {
            selector: 'input[type="email"][name="identifier"]',
            action: 'type',
            value: 'aaaaaaaaaaaaaa'
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
            value: 'aaaaaaaaaaaaaaaaaaa'
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
            value: csvRow.input1
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
            selector: 'div.quantumWizMenuPaperselectOptionList[jsname="d9BH4c"]',
            action: 'click',
            delay: 1000
          },
          {
            selector: `div[role="option"][jsname="wQNmvb"][data-value="${csvRow.select}"]`,
            action: 'click',
            delay: 1000
          },
          {
            selector: 'input[name="entry.1332089574"]',
            action: 'type',
            value: csvRow.input2
          },
          {
            selector: `div[role="checkbox"][aria-label="${csvRow.checkbox}"]`,
            action: 'click'
          },
          {
            selector: `div[role="radio"][aria-label="${csvRow.radio}"]`,
            action: 'click'
          }
        ],
        finisher: {
          selector: 'div[role="button"][jsname="M2UYVd"]',
          action: 'click',
          waitFor: 2000
        }
      }
    ]
  }
}