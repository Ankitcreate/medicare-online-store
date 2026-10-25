import jwt from 'jsonwebtoken';
export function auth(req,res,next){const h=req.headers.authorization||'';if(!h.startsWith('Bearer '))return res.status(401).json({message:'Sign in required'});try{req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET||'local-demo-secret-change-me');next()}catch{return res.status(401).json({message:'Session expired or invalid'})}}
export function admin(req,res,next){if(req.user?.role!=='admin')return res.status(403).json({message:'Administrator access required'});next()}
