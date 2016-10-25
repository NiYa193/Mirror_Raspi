var config = {
    lang: 'zh_cn',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        interval: 120000,
        fadeInterval: 10000,
        params: {
            q: 'wuhan',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'zh_cn',
            APPID: 'cf5c87897786e24ca40a018b4217e68c'
        }
    },
    tem_hum: {
      mqttServer: 'mqtt.hellowk.cc',
      mqttServerPort: 9001,
      mqttclientName: "magic_mirror_tem_hum",
      temperatureTopic: 'homekit/himitsu/temperature',
      humidityTopic: 'homekit/himitsu/humidity',
      heatIndexTopic: 'homekit/himitsu/heatIndex'
    },
    compliments: {
        interval: 5000,
        fadeInterval: 2000,
        morning: [
            '早上好, 亲爱滴！',
            '媳妇媳妇我爱你！',
            '就像老鼠爱大米！'
        ],
        afternoon: [
            '这里是华中科技大学！',
            '我是你们的朋友FCC！',
            '有没有人告诉你！'
        ],
        evening: [
            '亲爱滴好美！',
            '不要熬夜哦！',
            '一定要想我哦！'
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'calendar-plus-o',
			url: ''
		},
		// {
		// 	symbol: 'soccer-ball-o',
		// 	url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics',
		// },
		// {
			// symbol: 'mars',
			// url: "https://server/url/to/his.ics",
		// },
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'http://www.zhihu.com/rss'
    }
}
