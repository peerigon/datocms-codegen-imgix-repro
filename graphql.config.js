// @ts-check

const endpoint = "https://graphql.datocms.com/";

const headers = {
	Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN_READONLY}`,
	"X-Exclude-Invalid": "true",
	"Content-Type": "application/json",
};

/**
 * @type {import('graphql-config').IGraphQLConfig}
 **/
const config = {
	documents: "src/**/*.graphql",
	schema: [
		{
			[endpoint]: {
				headers,
			},
		},
	],
	extensions: {
		codegen: {
			generates: {
				[`./__generated__/cms-schema.codegen.ts`]: {
					documents: "./**/*.graphql",
					plugins: [
						"typescript",
						"typescript-operations",
						"typescript-graphql-request",
					],
					config: {
						avoidOptionals: true,
						dedupeFragments: true,
						namingConvention: { enumValues: "keep" },
						fetcher: {
							endpoint,
							fetchParams: JSON.stringify({
								headers,
							}),
						},
					},
				},
			},
		},
	},
};

module.exports = config;
