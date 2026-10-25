import test from 'node:test';import assert from 'node:assert/strict';import {app} from '../src/app.js';
let server,base;
test('MediCare API demo checks',async(t)=>{server=app.listen(0,'127.0.0.1');await new Promise(resolve=>server.once('listening',resolve));base=`http://127.0.0.1:${server.address().port}/api`;
await t.test('health endpoint responds',async()=>{const r=await fetch(`${base}/health`);assert.equal(r.status,200);assert.equal((await r.json()).ok,true)});
await t.test('guest catalogue is public and contains sample products',async()=>{const r=await fetch(`${base}/products`);const d=await r.json();assert.equal(r.status,200);assert.ok(d.products.length>=5);assert.ok(d.products.some(p=>p.prescriptionRequired))});
await t.test('private orders endpoint requires authentication',async()=>{const r=await fetch(`${base}/orders`);assert.equal(r.status,401)});
await t.test('unknown product returns 404',async()=>{const r=await fetch(`${base}/products/not-a-real-id`);assert.equal(r.status,404)});
server.close();});
