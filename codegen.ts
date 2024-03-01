import type { CodegenConfig } from '@graphql-codegen/cli';

import siteConfig from './src/shared/config/site.config';

const PATH = './src/shared/api/graphql';
const config: CodegenConfig = {
    schema: siteConfig.API_URL,
    generates: {
        [`${PATH}/generated-schema.ts`]: {
            documents: [`${PATH}/**/*.graphql`],
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
        },
    },
};

export default config;
