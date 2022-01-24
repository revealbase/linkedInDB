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
]);
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
]);
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
]);
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
]);
db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$languages",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "languages.id": "$_id", "languages.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$languages" } },
	{ "$out": "languages" }
]);
db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$organizations",
			"includeArrayIndex": "index",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "organizations.id": "$_id", "organizations.index": "$index" } },
	{ "$replaceRoot": { "newRoot": "$organizations" } },
	{ "$out": "organizations" }
]);
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
]);
db.getCollection("step1").aggregate([
	{
		"$unwind": {
			"path": "$positionGroups",
			"includeArrayIndex": "index0",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "positionGroups.profilePositionInPositionGroup._id": "$_id", "positionGroups.profilePositionInPositionGroup.index0": "$index0" } },
	{ "$replaceRoot": { "newRoot": "$positionGroups.profilePositionInPositionGroup" } },
	{
		"$unwind": {
			"path": "$elements",
			"includeArrayIndex": "index1",
			"preserveNullAndEmptyArrays": false
		}
	},
	{ "$addFields": { "elements.id": "$_id", "elements.index0": "$index0","elements.index1": "$index1"  } },
	{ "$replaceRoot": { "newRoot": "$elements" } },
	{ "$out": "positions" }
]);
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
]);
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
]);
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
]);
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
