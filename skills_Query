db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$skills",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "skills.id": "$_id", "skills.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$skills" } },
	{ "$out": "skills" }
])
