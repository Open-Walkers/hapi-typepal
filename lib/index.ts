import HauteCouture from '@hapipal/haute-couture';
import Package from '../package.json';

export const plugin = {
    pkg: Package,
    register: async (server: any, options: any) => {
        await HauteCouture.compose(server, options);
    }
};
