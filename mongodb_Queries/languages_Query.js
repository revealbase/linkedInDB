db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$languages",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "languages.id": "$_id", "languages.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$languages" } },
	{ "$out": "languages" }
])
