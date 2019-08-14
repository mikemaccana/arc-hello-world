# Sandbox failure test

## First part 

Run:

`npm i`

`npx sandbox`

Does the sandbox start?

## Second part

Open `arc.json`. Change the file contents to 

```json
{
  "app": "hello-world",
  "description": "arc hello world",
  "http": [
    {
      "get": "/"
    }
  ]
}
```

Ie, removing the second route. Retry `npx sandbox`  

Does the sandbox start?