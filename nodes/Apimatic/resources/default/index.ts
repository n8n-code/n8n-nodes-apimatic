import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Convert API",
					"value": "Convert API",
					"action": "Transform API Descriptions from/to various formats",
					"description": "Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.\n\n### INPUTS\n* API Blueprint\n* Swagger 1.0 - 1.2\n* Swagger 2.0 JSON\n* Swagger 2.0 YAML\n* WADL - W3C 2009\n* Google Discovery\n* RAML 0.8\n* I/O Docs - Mashery\n* HAR 1.2\n* Postman Collection 1.0 - 2.0\n* APIMATIC Format\n* Mashape\n\n### OUTPUTS\n* API Blueprint\n* Swagger 1.2\n* Swagger 2.0 JSON\n* Swagger 2.0 YAML\n* WADL - W3C 2009\n* RAML 0.8 - 1.0\n* APIMATIC Format",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/transform"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /transform",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Convert API"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"default": "swagger10",
			"type": "options",
			"options": [
				{
					"name": "Swagger 10",
					"value": "swagger10"
				},
				{
					"name": "Swagger 20",
					"value": "swagger20"
				},
				{
					"name": "Swaggeryaml",
					"value": "swaggeryaml"
				},
				{
					"name": "Apiblueprint",
					"value": "apiblueprint"
				},
				{
					"name": "Wadl 2009",
					"value": "wadl2009"
				},
				{
					"name": "Raml",
					"value": "raml"
				},
				{
					"name": "Apimatic",
					"value": "apimatic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Convert API"
					]
				}
			}
		},
		{
			"displayName": "POST /transform<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Convert API"
					]
				}
			}
		},
];
