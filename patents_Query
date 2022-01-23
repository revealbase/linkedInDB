db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$patents",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "patents.id": "$_id", "patents.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$patents" } },
	{ "$out": "patents" }
])
