db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$volunteerExperiences",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "volunteerExperiences.id": "$_id", "volunteerExperiences.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$volunteerExperiences" } },
	{ "$out": "volunteerExperiences" }
])
