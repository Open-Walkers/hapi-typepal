// Load modules

import Code from '@hapi/code';
import { script } from '@hapi/lab';
import { deployment } from '../server';
import { name } from '../package.json';

// Test shortcuts

const { describe, it } = exports.lab = script();
const { expect } = Code;

describe('Deployment', () => {

    it('registers the main plugin.', async () => {

        const server = await deployment();

        expect(server.registrations[name]).to.exist();
    });
});
