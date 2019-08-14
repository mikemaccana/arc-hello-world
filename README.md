# Sandbox failure test

Run:

`npm i`

`npx sandbox`

Open `arc.json`. Change the file contents to 

  {
    "app": "hello-world",
    "description": "arc hello world",
    "http": [
      {
        "get": "/"
      }
    ]
  }

Ie, removing the second route. Retry `npx sandbox`  