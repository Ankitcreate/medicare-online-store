import {Audit} from '../models/index.js';
export async function audit(actor,action,entity,entityId,details={}){try{await Audit.create({actor,action,entity,entityId,details})}catch(e){console.error('Audit event could not be stored:',e.message)}}
