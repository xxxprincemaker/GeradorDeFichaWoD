{
    "version": "0.2.0",
    "configurations": [
      {
        "debug": "node --inspect -r sucrase/register src/server.js",
        "type": "node",
        "request": "attach",
        "name": "Launch Program",
        "protocol": "inspector"
      }
    ]
}