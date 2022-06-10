import { setupAutorunMjsHack } from '@ulixee/databox/index.mjs';
import cjsImport from './index.js';

const { Observable, Runner, Extractor } = cjsImport;

export { Observable, Runner, Extractor };

export default cjsImport.default;

setupAutorunMjsHack();