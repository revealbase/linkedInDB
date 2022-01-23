db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$testScores",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "testScores.id": "$_id", "testScores.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$testScores" } },
	{ "$out": "testScores" }
])
