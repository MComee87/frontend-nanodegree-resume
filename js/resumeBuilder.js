/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var bio = {
	"name" : "Matthew Comee",
	"role" : "Full Stack Web Developer",
	"age" : 29,
	"contacts" :{
	  "mobile" : "(818) 660-0332",
	  "email" : "mcomee87@gmail.com",
	  "github" : "https://www.github.com/MComee87",
	  "portfolio" : "https://www.inspiredwebdesign.net",
	  "location" : "5140 St. Laurent pl. Palmdale, CA 93552"
    },
	"skills" : [" Critical Thinking", " Problem Solving", " Leadership", " Goal Oriented", " HTML", " CSS", "Bootstrap", " JavaScript", "Processing.js", "jQuery", " Python", "SQL", " Full Stack Web Development."],
	"bioPic" : "images/fry.jpg"
};

var work = {
	"jobs" : [{
	"employer" : "Inspired Web Design",
	"title" : "Owner/Developer",
	"location" : "5140 st. laurent pl. Palmdale, CA",
	"dates" : "April, 2016 - current",
	"description" : "Work with clients to deliver high quality websites that meet all of the clients needs, in a timely fassion."
	}]
};

var projects = {
	"projects" : [
	{
		"title" : "<a href='http://www.mcplaygrounds.technology'>MC's Computing Playgrounds</a>",
		"dates" : "Apr, 2016",
		"description" : "A place to play and learn about all things computing."
	},
	{
		"title" : "<a href='http://www.pootsielous.zohosites.com'>Pootsie Lou's</a>",
		"dates" : "Jun, 2016",
		"description" : "Each of Pootsie Lou's Charmingly Styled accessories are diligently handcrafted to the finest quality. Every piece is uniquely designed to be one of a kind, bringing you style and class like no other."
	},
	{
		"title" : "<a href='http://www.haroldshandcrafted.zohosites.com'>Hand Crafted by Harold</a>",
		"dates" : "Aug, 2016",
		"description" : "Beautiful hand crafted specialty boxes and misc. Made with quality imported fine wood. From jewelry and music boxes to specialty games, we have a masterfully crafted piece for everyone."
	},
	{
		"title" : "<a href='http://epicstewie.netlify.com'>EpicStewie Tube</a>",
		"dates" : "Nov, 2016",
		"description" : "A website to display a youtubers newest videos from multiple channels anlong with news and announcements to keep followers up to date."
	},
	{
		"title" : "<a href='http://donnafaydesigns.netlify.com'>donnafay designs</a>",
		"dates" : "Nov, 2016",
		"description" : "A shabby chic webstore for a fashion and mixed media artist to display and sell her one of a kind merchandise."
	}
  ]
};

var education = {
    "schools" : [
    {
        "name" : "<br>Antelope Valley College",
	    "city" : "Lancaster, CA",
	    "major" : "Mathematics<br>",
	    "dates" : "2014 - 2015",
	    "url" : '<a href="https://www.avc.edu/">WWW.AVC.EDU</a>'
    },
    {
	    "name" : "<br><br>Cleveland H.S.",
	    "city" : "Reseda, CA",
	    "major" : "Highschool Diploma<br>",
	    "dates" : "2005<br>",
	    "url" : '<a href="http://www.clevelandhs.org/">WWW.ClevelandHS.ORG</a>'
    }
],
    "onlineCourses" : [
    {
    	"title" : "<br>Full Stack Web Developer NanoDegree",
        "school" : "Udacity<br>",
        "dates" : "2016",
        "url" : '<a href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004">www.udacity.com/course/full-stack-web-developer-nanodegree</a>'
    }
  ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedEmail = HTMLemail.replace("%data%", "<a href='mailto:"+bio.contacts.email+"'>mcomee87@gmail.com</a>");
var formattedGithub = HTMLgithub.replace("%data%", "<a href='"+bio.contacts.github+"'>Repositories</a>");
var formattedBlog = HTMLblog.replace("%data%", "<a href='"+bio.contacts.portfolio+"'>Inspired Web Design</a>");
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole); 
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);

 	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);

 	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkills);

 	formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkills);

	formattedSkills = HTMLskills.replace("%data%", bio.skills[7]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[8]);
    $("#skills").append(formattedSkills);
    
    formattedSkills = HTMLskills.replace("%data%", bio.skills[9]);
    $("#skills").append(formattedSkills);
    
    formattedSkills = HTMLskills.replace("%data%", bio.skills[10]);
    $("#skills").append(formattedSkills);
    
    formattedSkills = HTMLskills.replace("%data%", bio.skills[11]);
    $("#skills").append(formattedSkills);
    
    formattedSkills = HTMLskills.replace("%data%", bio.skills[12]);
    $("#skills").append(formattedSkills);
}


for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}

projects.display();

for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

	var formattedSchoolUrl = HTMLschoolName.replace("%data%", education.schools[school].url);
	    $(".education-entry:last").append(formattedSchoolUrl);

	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedSchoolLocation);

	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	    $(".education-entry:last").append(formattedSchoolMajor);

	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	    $(".education-entry:last").append(formattedSchoolDates);
}

for (course in education.onlineCourses) {
	$(".education-entry:last").append(HTMLonlineClasses);

	var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedCourseTitle);

	var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedCourseSchool);

	var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedCourseDates);

	var formattedCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedCourseUrl);
}

$("#mapDiv").append(googleMap);

$('#main').append(internationalizeButton);
