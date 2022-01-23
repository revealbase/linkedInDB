db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$courses",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "courses.id": "$_id", "courses.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$courses" } },
	{ "$out": "courses" }
])
