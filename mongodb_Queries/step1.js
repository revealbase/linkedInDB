db.getCollection("sample").aggregate([{$addFields:{
    firstName: {
        $arrayElemAt: [
            "$linkedinProfile.firstName",
            0
        ]
    },
    lastName: {
        $arrayElemAt: [
            "$linkedinProfile.lastName",
            0
        ]
    },
    industry: {
        $arrayElemAt: [
            "$linkedinProfile.industry",
            0
        ]
    },
    headline: {
        $arrayElemAt: [
            "$linkedinProfile.headline",
            0
        ]
    },
    summary: {
        $arrayElemAt: [
            "$linkedinProfile.summary",
            0
        ]
    },
    geoLocation: {
        $arrayElemAt: [
            "$linkedinProfile.geoLocation",
            0
        ]
    },
    location: {
        $arrayElemAt: [
            "$linkedinProfile.location",
            0
        ]
    },
    primaryLocale: {
        $arrayElemAt: [
            "$linkedinProfile.primaryLocale",
            0
        ]
    },
    volunteerCauses: {
        $arrayElemAt: [
            "$linkedinProfile.volunteerCauses",
            0
        ]
    },
    publicIdentifier: {
        $arrayElemAt: [
            "$linkedinProfile.publicIdentifier",
            0
        ]
    },
    organizations: {
        $arrayElemAt: [
            "$linkedinProfile.profileOrganizations.elements",
            0
        ]
    },
    educations: {
        $arrayElemAt: [
            "$linkedinProfile.profileEducations.elements",
            0
        ]
    },
    certifications: {
        $arrayElemAt: [
            "$linkedinProfile.profileCertifications.elements",
            0
        ]
    },
    volunteerExperiences: {
        $arrayElemAt: [
            "$linkedinProfile.profileVolunteerExperiences.elements",
            0
        ]
    },
    skills: {
        $arrayElemAt: [
            "$linkedinProfile.profileSkills.elements",
            0
        ]
    },
    projects: {
        $arrayElemAt: [
            "$linkedinProfile.profileProjects.elements",
            0
        ]
    },
    honors: {
        $arrayElemAt: [
            "$linkedinProfile.profileHonors.elements",
            0
        ]
    },
    patents: {
        $arrayElemAt: [
            "$linkedinProfile.profilePatents.elements",
            0
        ]
    },
    testScores: {
        $arrayElemAt: [
            "$linkedinProfile.profileTestScores.elements",
            0
        ]
    },
    languages: {
        $arrayElemAt: [
            "$linkedinProfile.profileLanguages.elements",
            0
        ]
    },
    courses: {
        $arrayElemAt: [
            "$linkedinProfile.profileCourses.elements",
            0
        ]
    },
    positionGroups: {
        $arrayElemAt: [
            "$linkedinProfile.profilePositionGroups.elements",
            0
        ]
    },
    picture: {
        $arrayElemAt: [
            "$linkedinProfile.profilePicture.elements",
            0
        ]
    }
}}, {$project:{
    linkedinProfile: 0
}}, {$out:"step1"}])
