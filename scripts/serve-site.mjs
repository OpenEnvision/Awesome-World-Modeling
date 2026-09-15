import http from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.txt':'text/plain; charset=utf-8'};
http.createServer(async (req,res)=>{
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/Awesome-World-Modeling(?=\/|$)/,'');
    let file = path.resolve(root, '.' + (pathname || '/'));
    if (file !== root.slice(0,-1) && !file.startsWith(root)) {res.writeHead(403);res.end('Forbidden');return;}
    if ((await stat(file)).isDirectory()) file = path.join(file,'index.html');
    const body = await readFile(file);
    res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store'});res.end(body);
  } catch {res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`Library preview: http://127.0.0.1:${port}/Awesome-World-Modeling/`));
