const http = require("http");
const PORT = 3001;
const characters = require("./utils/data");

http
  .createServer((req, resp) => {
    const { url } = req;
    console.log("peticion"+ url );
    resp.setHeader("Access-Control-Allow-Origin", "*");

    if (url.includes("/rickandmorty/character/")) {
      const urlId = url.split("/").pop();
      let found = characters.find(
        (character) => character.id === Number(urlId)
      );

      resp
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(found));
    }
  })
  .listen(PORT, "localhost");
