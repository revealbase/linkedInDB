db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$positionGroups",
			"includeArrayIndex": "indexName",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "positionGroups.profilePositionInPositionGroup._id": "$_id" } },
	{ "$replaceRoot": { "newRoot": "$positionGroups.profilePositionInPositionGroup" } },
	{
		"$unwind": {
			"path": "$elements",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "elements.id": "$_id", "elements.index0": "$index" } },
	{ "$replaceRoot": { "newRoot": "$elements" } },
	{ "$out": "positions" }
])
