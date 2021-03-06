// Bio section start
var bio = {
    "name": "Belal Alsahli",
    "role": "Web developer!",
    contacts: {
        "mobile": "0569452081",
        "email": "belalalsahli@gmail.com",
        "github": "bilalalsehli",
        "twitter": "@belalalsahli",
        "location": "Riyadh, Saudi Arabia"
    },
    "welcomeMessage": "Welcome!",
    skills: [
        "HTML5", "CSS3", "Java Script", "Sketch", "Photoshop"
    ],
    "biopic": "..//images/fry.jpg",
    display: ""
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedLocation);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedMessage);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};
bio.display();
// Bio section end


// work section start
var work = {
    "jobs": [{
            "employer": "Tamkeen technologies",
            "title": "System analyst assistant",
            "location": "Riyadh, Saudi Arabia",
            "dates": "2016 - 2017",
            "description": "I work as a System analyst assistant",
            "url": "https://www.tamkeentech.sa"
        },
        {
            "employer": "Alber in Yutamah",
            "title": "IT administrator",
            "location": "Medinah, Saudi Arabia",
            "dates": "2009 - 2016",
            "description": "I worked as IT administrator",
            "url": "https://www.alberinyut.com"
        }

    ]
};
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var workUrl = work.jobs[i].url;
        var workEmployer = work.jobs[i].employer;
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", workEmployer).replace("#", workUrl);
        var workTitle = work.jobs[i].title;
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", workTitle);
        var workDates = work.jobs[i].dates;
        var formattedWorkDates = HTMLworkDates.replace("%data%", workDates);
        var workLocation = work.jobs[i].location;
        var formattedWorkLocation = HTMLschoolLocation.replace("%data%", workLocation);
        var description = work.jobs[i].description;
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", description);
        $(".work-entry:last").append(formattedWorkEmployer);
        $(".work-entry:last").append(formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};
work.display();
// work section end


// education section start
var education = {
    "schools": [{
        "name": "Taibah university",
        "location": "Medianh, Saudi Arabia",
        "degree": "Bachelor degree",
        "majors": ["Computer science"],
        "dates": "2011 - 2016 ",
        "url": "https://www.taibahu.edu.sa"
    }],
    "onlineCourses": [{
            "title": "Front-end Web Development",
            "school": "Udacity.com",
            "dates": "2017",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Integrated Business Processes with SAP ERP (TERP10)",
            "school": "University Duisburg Essen",
            "dates": "2016",
            "url": "https://www.uni-due.de"
        }
    ]
};
education.display = function() {
    for (var j = 0; j < education.schools.length; j++) {
        $("#education").append(HTMLschoolStart);
        var educationUrl = education.schools[j].url;
        var name = education.schools[j].name;
        var formattedSchoolName = HTMLschoolName.replace("%data%", name).replace("#", educationUrl);
        var degree = education.schools[j].degree;
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", degree);
        var educationDates = education.schools[j].dates;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", educationDates);
        var location = education.schools[j].location;
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", location);
        var majors = education.schools[j].majors;
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", majors);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var course = 0; course < education.onlineCourses.length; course++) {
        var courseUrl = education.onlineCourses[course].url;
        var title = education.onlineCourses[course].title;
        var formattedOnlineClassesTitle = HTMLonlineTitle.replace("%data%", title).replace("#", courseUrl);
        var school = education.onlineCourses[course].school;
        var formattedOnlineClassesSchool = HTMLonlineSchool.replace("%data%", school);
        var courseDates = education.onlineCourses[course].dates;
        var formattedOnlineClassesDates = HTMLonlineDates.replace("%data%", courseDates);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineClassesTitle);
        $(".education-entry:last").append(formattedOnlineClassesSchool);
        $(".education-entry:last").append(formattedOnlineClassesDates);
    }
};
education.display();
// education section end


// Project section start
var project = {
    "projects": [{
        "title": "Taibah university events",
        "dates": "2015 - 2016",
        "description": "A web application, iOS, and Android application to promote and publish Taibah university events.",
        "url": "https://www.tuevents.com",
        "propic": ["..//images/fry.jpg"]
    }, {
        "title": "iGrades - iPhone Application",
        "dates": "2015 - 2016",
        "description": "iGrades is an app to save and organize your college grades.",
        "url": "https://t.co/M7op4QkmTu",
        "propic": ["..//images/igrades.png"]
    }]
};
project.display = function() {
    for (var i = 0; i < project.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var url = project.projects[i].url;
        var projectTitle = project.projects[i].title;
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projectTitle).replace("#", url);
        var projectDates = project.projects[i].dates;
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projectDates);
        var description = project.projects[i].description;
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        for (var j = 0; j < project.projects[i].propic.length; j++) {
            var proPic = project.projects[i].propic;
            var formattedProjectImage = HTMLprojectImage.replace("%data%", proPic);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};
project.display();
// Project section end

$("#mapDiv").append(googleMap);