# WCC Widget Starter: Lit Element

## Development

Setting up your development environment:

1. Clone this repo
2. Run `yarn` from the root of the repo.
3. Run `yarn start` to start the playground app.

RANDOM JSON VIA GENERATOR TEMPLATE (https://www.json-generator.com/)

```
    '{{repeat(5, 7)}}',
    {
        "title": '{{lorem(2, "words")}}',
        "summary": '{{lorem(30, "words")}}',
        "date": '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
        "facility": '{{company().toUpperCase()}}',
        "clinician": "Dr. {{firstName()}} {{surname()}}",
        "department": '{{lorem(2, "words")}}',
        "condition": '{{lorem(1, "words")}}',
        "type": '{{lorem(1, "words")}}',
        "O2 stat": '{{floating(1, 100, 2, "00")}}'
    },
```
