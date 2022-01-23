db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$educations",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "educations.id": "$_id", "educations.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$educations" } },
	{ "$out": "educations" }
])
