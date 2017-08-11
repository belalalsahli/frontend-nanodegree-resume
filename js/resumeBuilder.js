// Bio section start
var bio = {
    name: "Belal Alsahli",
    role: "Web developer!",
    contacts: {
    mobile: "0569452081",
    email: "belalalsahli@gmail.com",
    github: "bilalalsehli",
    twitter: "@belalalsahli",
    location: "Riyadh, Saudi Arabia"
    },
    welcomeMessage: "Welcome!",
    skills: [
        "HTML5", "CSS3", "Java Script", "Sketch", "Photoshop"
    ],
    biopic: "..//images/fry.jpg",
    display: ""
};

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
var formattedbioPic = HTMLbioPic.replace("%data%", bio["biopic"]);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedbioPic);
$("#header").append(formattedMessage);
$("#header").append(HTMLskillsStart);
bio.skills.forEach(function(skill){
  var formattedSkill = HTMLskills.replace("%data%", skill);
  $("#skills").append(formattedSkill);
});

// Bio section end

// work section start

//var work = {
//    "jobs": [
//    employer: "Alber in Yutamah",
//    title: "IT administrator",
//    location: "Medinah, Saudi Arabia",
//    dates: "2009 - 2016",
//    description: "description"
//    ]
//};


// work section end

// education section start
var education = {
    "schools": [{
        "name": "Taibah university",
        "location": "Medianh, Saudi Arabia",
        "degree": "Bachelor degree",
        "major": ["Computer science"],
        "dates": "2011 - 2016 ",
        "url": "https://www.taibahu.edu.sa"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Development",
        "school": "Udacity.com",
        "dates": "2017",
        "url": "https://www.udacity.com"
    }]
};
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var url = education.schools[0].url;
        var name = education.schools[0].name;
        var formattedSchoolName = HTMLschoolName.replace("%data%", name).replace("#", url);
        var degree = education.schools[0].degree;
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", degree);
        var dates = education.schools[0].dates;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", dates);
        var location = education.schools[0].location;
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", location);
        var major = education.schools[0].major;
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);   
    }
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var url = education.onlineCourses[0].url;
        var title = education.onlineCourses[0].title;
        var formattedOnlineClassesTitle = HTMLonlineTitle.replace("%data%", title).replace("#", url);
        var school = education.onlineCourses[0].school;
        var formattedOnlineClassesSchool = HTMLonlineSchool.replace("%data%", school);
        var dates = education.onlineCourses[0].dates;
        var formattedOnlineClassesDates = HTMLonlineDates.replace("%data%", dates);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineClassesTitle);
        $(".education-entry:last").append(formattedOnlineClassesSchool);
        $(".education-entry:last").append(formattedOnlineClassesDates);
        }
};
education.display();

// education section end




	