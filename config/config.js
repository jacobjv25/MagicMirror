/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
                        url: 'http://localhost:8080/modules/calendars/home.ics',
                        symbol: 'calendar',
                        color: '#3371FF'   // Assign color
                },
                // "Calendar 2"
                {
                        url: 'http://localhost:8080/modules/calendars/c8bfee39053cffd57bbd647eb8e694af983dd36f98b23c0883a7ab5d36287f33.ics',
                        symbol: 'calendar',
                        color: '#FF0000'  // Assign color
                }
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Minneapolis",
				locationID: "5037649",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "e63b67657f31e133d336f9c983aa22a1"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Minneapolis",
				locationID: "5037649",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "e63b67657f31e133d336f9c983aa22a1"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
			{
				module: 'MMM-MirrorMirrorOnTheWall',
				position: "middle_center",
				config: {}
			},
			{
		    module: 'phone_notification',
            position: 'bottom_right',
            header: 'Phone Notifications',
            config:{
                accessToken: 'o.6OcST7FUmsmJnvG2lx64EJN5uDZHvLOk',
                numberOfNotifications: 5,
                displayNotificationIcon: true,
                displayMessage: true,
                displayCount: false,
                alert: false,
                fade: true,
				maxCharacters: 50,
				useEncryption: true,
				key: {
					password: 'kx*w3ZImap%!8esk$#!2QHyLUC$#SkGzf8KIYzKn',
					ident: 'ujA9gV514TY'
				}
			}
			{
				module: 'MMM-NetworkScanner',
				position: 'bottom_left',
				header: "Network Scan",
				config:{
					showUnknown: true
				}
			}
	},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
