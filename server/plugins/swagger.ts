import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import Package from '../../package.json';
import { Server } from '@hapi/hapi';

export = {
    name: 'app-swagger',
    async register(server: Server) {

        await server.register([
            Inert,
            Vision,
            {
                plugin: HapiSwagger,
                options: {
                    info: {
                        version: Package.version
                    }
                }
            }
        ] as any);
    }
};
