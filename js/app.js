// refactored version of resumebuilder.js

var model = {
  // bio data
  bio: {
    'name': 'Burcu Noyan',
    'role': 'Front-End Web Developer & Digital Producer',
    'contacts': {
      'mobile': '(347) 444-4444',
      'email': 'burcunoyan@gmail.com',
      'github': 'burieberry',
      'twitter': '@burieberry',
      'linkedin': 'burcunoyan',
      'location': 'New York City'
    },
    'biopic': 'images/biopic.png',
    'welcomeMessage': 'Welcome!',
    'skills': ['HTML', 'CSS', 'Javascript', 'CMS', 'Adobe Creative Suite']
  }

}

var octopus = {
  init: function() {
    resumeView.init();
  },

  getHeader: function() {
    var bio = model.bio;
    var formattedName = HTMLheaderName.replace('%data%', bio.name),
        formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    return formattedName + ', ' + formattedRole;
  },

  getContacts: function() {
    var contacts = model.bio.contacts;
    var formattedMobile = HTMLmobile.replace('%data%', contacts.mobile),
        formattedEmail = HTMLemail.replace('%data%', contacts.email).replace('#', contacts.email),
        formattedTwitter = HTMLtwitter.replace('%data%', contacts.twitter).replace('#', contacts.twitter),
        formattedlinkedIn = HTMLlinkedIn.replace('%data%', contacts.linkedin).replace('#', contacts.linkedin),
        formattedGithub = HTMLgithub.replace('%data%', contacts.github).replace('#', contacts.github),
        formattedLocation = HTMLlocation.replace('%data%', contacts.location);
    return formattedEmail + ', ' + formattedTwitter + ', ' +
           formattedlinkedIn + ', ' + formattedGithub + ', ' +
           formattedLocation;
  }

}

var resumeView = {
  init: function() {
    this.render();
  },

  render: function() {
    $("#header").prepend(octopus.getHeader);
    $("#topContacts").append(octopus.getContacts);
    $("#footerContacts").append(octopus.getContacts);
  }
}


// start application
octopus.init();