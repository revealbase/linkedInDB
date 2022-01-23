db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$projects",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "projects.id": "$_id", "projects.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$projects" } },
	{ "$out": "projects" }
])
