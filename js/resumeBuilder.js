/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
   "name" : "Sachin Khajjidoni",
   "role" : "Developer",
   "contacts" : {
       "mobile"     : "+919480410696",
       "email"      : "sachinmk27@gmail.com",
       "github"     : "sachinmk27",
       "twitter"    : "@sachinmk27",
       "location"   : "Bangalore, India"
   },
   "welcomeMessage" : "Hola!",
   "skills" : ["Python", "Data Analysis", "PostgreSQL", "pandas", "HTML"],
   "biopic" : "images/me.jpg",
   "display" : function () {
       var formattedHeaderRole = HTMLheaderRole.replace("%data%", this.role);
       $("#header").prepend(formattedHeaderRole);

       var formattedHeaderName = HTMLheaderName.replace("%data%", this.name);
       $("#header").prepend(formattedHeaderName);

       var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
       $("#topContacts").append(formattedMobile);
       $("#footerContacts").append(formattedMobile);

       var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
       $("#topContacts").append(formattedEmail);
       $("#footerContacts").append(formattedEmail);

       var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
       $("#topContacts").append(formattedTwitter);
       $("#footerContacts").append(formattedTwitter);

       var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
       $("#topContacts").append(formattedGithub);
       $("#footerContacts").append(formattedGithub);

       var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
       $("#topContacts").append(formattedLocation);

       var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
       $("#header").append(formattedBioPic);

       var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
       $("#header").append(formattedWelcomeMsg);

       $("#header").append(HTMLskillsStart);

       for ( skill in this.skills) {
           var formattedSkills = HTMLskills.replace("%data%", this.skills[skill]);
           $("#skills").append(formattedSkills);
       }

   }
 }
var work = {
    "jobs" : [
        {
            "employer" : "Shree Cement Ltd",
            "title" : "Summer Intern",
            "location" : "Ajmer, India",
            "dates" : "May 2012 - July 2012",
            "description" : "Analyzed timing data of equipment in cement mill for reduction of idle running time. " +
                            "Identified equipment in cement mill whose idle running time was significantly higher"

        },
        {
            "employer" : "ARM",
            "title": "Intern",
            "location" : "Bangalore, India",
            "dates" : "July 2013 - December 2013",
            "description" : "Designed and developed an automation framework for system verification flow of Cortex-A Series IP cores. " +
                            "Implemented the framework using RIS(Random Instruction Sequence) Generators and verification models. " +
                            "Streamlined the entire flow of verification process resulting in efficient usage of resources"
        }
    ],
    "display" : function () {
        for (job in this.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            $(".work-entry:last").append(formattedWorkEmployer);

            var formattedWorkTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
            $(".work-entry:last").append(formattedWorkTitle);

            var formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
            $(".work-entry:last").append(formattedWorkDates);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
            $(".work-entry:last").append(formattedWorkLocation);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
            $(".work-entry:last").append(formattedWorkDescription);

        }

    }
}
var projects = {
    "projects" : [
        {
            "title" : "Analysis of Smart Metering data",
            "dates" : "January 2015 - March 2015",
            "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            "images" : ["images/project.jpg", "images/project.jpg"]
        }
    ],
    "display" : function() {
        for (project in this.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

            for (image in this.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}
var education = {
    "schools" : [
        {
            "name" : "Kendriya Vidyalaya Malleshwaram",
            "location" : "Bangalore, India",
            "degree" : "Pre-University College",
            "majors" : ["Science"],
            "dates" : 2010,
            "url" : "http://www.kvmb.net/"
        },
        {
            "name" : "BITS Pilani, K.K. Birla Goa Campus",
            "location" : "Goa, India",
            "degree" : "Bachelor of Technology",
            "majors" : ["Electronics"],
            "dates" : 2014,
            "url" : "http://www.bits-pilani.ac.in/goa/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Coursera Data Science specialization",
            "school" : "John Hopkins",
            "date" : 2014,
            "url" : "https://www.coursera.org/specializations/jhudatascience"
        },
        {
            "title" : "Udacity Front-end Nanodegree",
            "school" : "Udacity",
            "date" : 2015,
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "display" : function() {
        for (school in this.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedSchoolDegree = formattedSchoolName + HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDates  = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            for ( major in this.schools[school].majors) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }
        $("#education").append(HTMLonlineClasses);
        for ( oClass in this.onlineCourses) {

            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[oClass].title);
            var formattedOnlineSchool = formattedOnlineTitle + HTMLonlineSchool.replace("%data%", this.onlineCourses[oClass].school);
            $(".education-entry:last").append(formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[oClass].date);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[oClass].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }

    }
}
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
