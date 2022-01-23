db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$honors",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "honors.id": "$_id", "honors.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$honors" } },
	{ "$out": "honors" }
])
