import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
import postcss from 'postcss';
import tailwind from 'tailwindcss';
const root=process.cwd(),require=createRequire(import.meta.url);
const modules=[],ids=new Map();
function add(file){file=path.resolve(file);const normalized=file.replaceAll(String.fromCharCode(92),"/");const picks={"/react/index.js":"react.production.min.js","/react/jsx-runtime.js":"react-jsx-runtime.production.min.js","/react-dom/index.js":"react-dom.production.min.js","/scheduler/index.js":"scheduler.production.min.js"};for(const [tail,target] of Object.entries(picks)){if(normalized.endsWith("/node_modules"+tail)){file=path.join(path.dirname(file),"cjs",target);break;}}if(ids.has(file))return ids.get(file);const id=modules.length;ids.set(file,id);modules.push('');let text=fs.readFileSync(file,'utf8');
// Include only the icons actually imported by the application.
if(!file.includes('node_modules'))text=text.replace(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"];?/g,(_,names)=>names.split(',').map(name=>{name=name.trim();const slug=name.replace(/([a-z0-9])([A-Z])/g,'$1-$2').toLowerCase();return 'import '+name+' from "lucide-react/dist/esm/icons/'+slug+'.js";'}).join('\n'));if(/\.[tj]sx?$/.test(file)&&(!file.includes('node_modules')||normalized.includes('/lucide-react/dist/esm/')))text=ts.transpileModule(text,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const req=createRequire(file);text=text.replace(/require\(["']([^"']+)["']\)/g,(_,spec)=>{if(spec.endsWith('.css'))return '{}';return `__r(${add(req.resolve(spec))})`});modules[id]=`function(module,exports,__r){${text}\n}`;return id;}
const app=add(path.join(root,'src/App.tsx')),entry=add(path.join(root,'src/main.tsx'));
const runtime=()=>`const process={env:{NODE_ENV:'production'}};const __m=[${modules.join(',')}];const __c={};function __r(i){if(__c[i])return __c[i].exports;const m=__c[i]={exports:{}};__m[i](m,m.exports,__r);return m.exports;}`;
fs.mkdirSync('dist/assets',{recursive:true});fs.cpSync('public','dist',{recursive:true});fs.writeFileSync('dist/assets/app.js',`(()=>{${runtime()};__r(${entry});})();`);
const react=add(require.resolve('react')),renderer=add(require.resolve('react-dom/server.browser'));
const html=vm.runInNewContext(`${runtime()};__r(${renderer}).renderToString(__r(${react}).createElement(__r(${app}).default))`,{TextEncoder,TextDecoder,setTimeout,clearTimeout,console});
const styles=await postcss([tailwind({content:['./src/App.tsx']})]).process(fs.readFileSync('src/index.css','utf8'),{from:'src/index.css'});fs.writeFileSync('dist/assets/style.css',styles.css);
const template=fs.readFileSync('index.html','utf8').replace('<div id="root"></div>',`<div id="root">${html}</div>`).replace('<script type="module" src="/src/main.tsx"></script>','<link rel="stylesheet" href="/assets/style.css"/><script defer src="/assets/app.js"></script>');fs.writeFileSync('dist/index.html',template);new vm.Script(fs.readFileSync('dist/assets/app.js','utf8'));console.log('Built and syntax checked. Pre-rendered HTML:',html.length,'characters.');


await import('./build-service-pages.mjs');
