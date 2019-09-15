var vm = new Vue({
    el: "#app",
    data: {
        // 西部-->简介
        part1_content: [
        	{ me: {
	            name: 'About me',
	            content: 'Hi,I am Jame,I am 36 and I work as a Digital for the "Daydreams" Agency in Pier 56.'
	        }},
	        { tv: {
	        	name: 'Favourite TV Show',
	            content: 'Breaking Good,ReadDevil,People of Interest,The Running Dead,Found,American Guy.'
        	}},
        	{ artists: {
	        	name: 'Favourite Music Bands/Artists',
	        	content: 'Iron Maid,DC/AC,Megablow,The Ill,Kung Fihters,System of a Revenge.'
        	}}
	    ],
	    // 西部-->徽章
	    part2_content: [
	    	{ order: "image/home/badge1.png" },
	    	{ order: "image/home/badge4.png" },
	    	{ order: "image/home/badge3.png" },
	    	{ order: "image/home/badge6.png" },
	    	{ order: "image/home/badge11.png" },
	    	{ order: "image/home/badge8.png" },
	    	{ order: "image/home/badge10.png" },
	    	{ order: "image/home/badge13.png" },
	    	{ order: "image/home/badge7.png" },
	    	{ order: "image/home/badge12.png" }
	    ],
	    // 播放列表
	    part3_content: [
	    	{ 
	    		image:  "image/home/playlist6.jpg",
		    	name: "The Past Start Slow",
		    	song: "System of a Revenage2222",
		    	time: "15:42"
		    },
		    { 
	    		image:  "image/home/playlist7.jpg",
		    	name: "The Pretender",
		    	song: "Kung Fighters",
		    	time: "3:22"
		    },
		    { 
	    		image:  "image/home/playlist6.jpg",
		    	name: "The Past Start Slow",
		    	song: "System of a Revenage2222",
		    	time: "3:22"
		    },
		    { 
	    		image:  "image/home/playlist8.jpg",
		    	name: "Seven Nation Army",
		    	song: "The Black Stripes",
		    	time: "3:06"
		    },
		    { 
	    		image:  "image/home/playlist9.jpg",
		    	name: "Leap of Faith",
		    	song: "Eden Artifact",
		    	time: "6:17"
		    }
	    ],
	    // 推特订阅
	    twitter: [
	    	{
	    		img: "image/home/twitter-avatar1.png",
	    		name: "Space Cowboy",
	    		name2: "@james_spiegelOK",
	    		content: "Tomorrow with the agency we will run 5 km for charity. Come and give us your support! #Daydream5K",
	    		time: "16 hours ago"
	    	},
	    	{
	    		img: "image/home/twitter-avatar1.png",
	    		name: "Space Cowboy",
	    		name2: "@james_spiegelOK",
	    		content: "Tomorrow with the agency we will run 5 km for charity. Come and give us your support! #Daydream5K",
	    		time: "16 hours ago"
	    	},
	    	{
	    		img: "image/home/twitter-avatar1.png",
	    		name: "Space Cowboy",
	    		name2: "@james_spiegelOK",
	    		content: "Tomorrow with the agency we will run 5 km for charity. Come and give us your support! #Daydream5K",
	    		time: "16 hours ago"
	    	}
	    ],
	    // 最新视频
	    Last_video: [
	    	{
		    	img: "image/home/video8.jpg",
		    	content: "System of a Revenge-Hypnotize...",
		    	time: "3:25"
		    },
		    {
		    	img: "image/home/video7.jpg",
		    	content: "System of a Revenge-Hypnotize...",
		    	time: "3:25"
		    }
	    ]
    }
})

this.amo = 999
console.log(this.amo)