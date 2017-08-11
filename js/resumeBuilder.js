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

//// education section start
//var education = {
//    "schools": {
//        "name": "Taibah university",
//        "location": "Medianh, Saudi Arabia",
//        "degree": "Bachelor degree",
//        "majors": ["Computer science"],
//        "dates": "2011 - 2016",
//        "url": "https://www.taibahu.edu.sa"
//    },
//    "onlineCourses": [
//    {
//        "title": "Title of the course",
//        "school": "School"
//        "dates": "2017"
//        "url": "url!"
//    }
//]
//
////      display: function
//}
//
//
//
//
//
//// education section end