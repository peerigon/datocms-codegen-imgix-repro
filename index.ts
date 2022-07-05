import { GraphQLClient } from "graphql-request";
import { getSdk } from "./__generated__/cms-schema.codegen";

const endpoint = "https://graphql.datocms.com/";

const headers = {
	Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN_READONLY}`,
	"X-Exclude-Invalid": "true",
	"Content-Type": "application/json",
};

const client = getSdk(
	new GraphQLClient(endpoint, {
		headers,
	})
);

client.getThumbnails({
	/*
	Type '{ w: number; h: number; q: number; }' is missing the following properties from type 'ImgixParams': ar, auto, bg, blend, and 123 more.
	*/
	thumbnailImgix: {
		w: 100,
		h: 100,
		q: 20,
	},
});
