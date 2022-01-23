db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$certifications",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "certifications.id": "$_id", "certifications.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$certifications" } },
	{ "$out": "certifications" }
])
