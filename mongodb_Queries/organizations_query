db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$organizations",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "organizations.id": "$_id", "organizations.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$organizations" } },
	{ "$out": "organizations" }
])
