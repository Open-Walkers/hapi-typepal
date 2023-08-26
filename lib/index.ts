import HauteCouture from '@hapipal/haute-couture';
import Package from '../package.json';
import { Server } from '@hapi/hapi';

export const plugin = {
    pkg: Package,
    register: async (server: Server, options: any) => {
        await HauteCouture.compose(server, options);
    }
};
