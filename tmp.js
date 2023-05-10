import { createRequire } from 'node:module'

const require = createRequire(import.meta.url);
const pathName = require.resolve('@ffmpeg/core/dist/ffmpeg-core.worker.js');
