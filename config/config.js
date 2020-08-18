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
			},
			{
				module: 'MMM-NetworkScanner',
				position: 'top_left',
				header: "Network Scan",
				config:{
					devices: [
    						{ macAddress: "2c:d0:2d:ec:d2:ea", name: "CVO Router", icon: "wifi" },    // 192.168.50.14
   						{ macAddress: "68:37:e9:95:58:a7", name: "Alexa", icon: "female " },    // 192.168.50.154
    						{ macAddress: "68:d9:3c:84:08:a4", name: "Apple", icon: "mobile" },    // 192.168.50.175
    						{ macAddress: "d4:5d:64:c5:c5:38", name: "Pi", icon: "Server" },    // 192.168.50.1
    						{ macAddress: "28:16:a8:15:3e:41", name: "Xbox", icon: "gamepad" },    // 192.168.50.22
    						{ macAddress: "c8:d0:83:a9:81:a8", name: "iPhone", icon: "mobile" },    // 192.168.50.239
    						{ macAddress: "8c:85:90:86:66:bc", name: "Work Laptop", icon: "laptop" },    // 192.168.50.251
					],
					showOffline: true,
					keepAlive: 300,
					updateInterval: 5
				}
			},
			{
				module: 'MMM-SystemStats',
				position: 'bottom_left', // This can be any of the regions.
				classes: 'small dimmed', // Add your own styling. OPTIONAL.
				header: 'System Stats', // Set the header text OPTIONAL
				config: {
					updateInterval: 10000, // every 10 seconds
					align: 'right', // align labels
					//header: 'System Stats', // This is optional
					units: 'metric', // default, metric, imperial
					view: 'textAndIcon',
				},
			},
{
				module: 'MMM-MagicMover',
				position: 'left', // This can be any of the regions.
				config: {
					updateInterval : 60 * 1000,
					maxMove: 20,
				},
			},
			// {
			// 	disabled: false,
			// 	module: "MMM-NewsFeedTicker",
			// 	position: "bottom_bar",
			// 	//classes: "day_scheduler",
			// 	config: {
			// 		feeds: [
			// 		{
			// 			title: "New York Times",
			// 			url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
			// 			customLogo: "800px-The_New_York_Times_logo.png"
			// 		},
			// 		{
			// 			title: "USA Today",
			// 			url: "http://rssfeeds.usatoday.com/UsatodaycomNation-TopStories",
			// 			customLogo: "RSS_Syndication_Logo-USATN.png"
			// 		},
			// 		{
			// 			title: "BBC World News",
			// 			url: "http://feeds.bbci.co.uk/news/world/rss.xml#",
			// 			customLogo: "BBC_News.svg"
			// 		}
			// 			]
			// 	}
			// 	},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
