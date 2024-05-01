import { createServer } from "node:http";
import { open, readFile } from "fs/promises";
import express from "express";
import cors from "cors";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const server = createServer(app);
app.use(cors("*"));
app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/video2", async (req, res) => {
  const data = await readFile("./src/video.mp4");
  res.set({"Content-type": "video/mp4"})
  res.status(200).send(data);
});
app.get("/video", async (req, res) => {
  try {
    const range = req.headers.range;
    if (!range) {
      res.sendStatus(400);
      return;
    }
    const fd = await open("./src/video.mp4");

    const { size } = await fd.stat();

    const CHUNK_SIZE = 10 ** 6 * 4;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, size - 1);

    const stream = await fd.createReadStream({ start, end });

    res.set({
      "Accept-Ranges": "bytes",
      "Content-type": "video/mp4",
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Content-Length": end - start + 1,
    });
    res.writeHead(206);
    stream.pipe(res);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

server.listen(3030, () => {
  console.log("http://localhost:3030");
});
