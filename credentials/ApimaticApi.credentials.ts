import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApimaticApi implements ICredentialType {
        name = 'N8nDevApimaticApi';

        displayName = 'Apimatic API';

        icon: Icon = { light: 'file:../nodes/Apimatic/apimatic.svg', dark: 'file:../nodes/Apimatic/apimatic.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apimatic.io/api/transform',
                        required: true,
                        placeholder: 'https://apimatic.io/api/transform',
                        description: 'The base URL of your Apimatic API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'apikey': '={{$credentials.apiKey}}',
                        },
                },
        };


}
