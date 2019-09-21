var vm = new Vue({
    el: "#app",
    data: {
       repeat_show: false,
       repeat_num: 1,
    // 西部-->简介
        brief_content: [{
                me: {
                    name: 'About me',
                    content: 'Hi,I am Jame,I am 36 and I work as a Digital for the "Daydreams" Agency in Pier 56.'
                }
            },
            {
                tv: {
                    name: 'Favourite TV Show',
                    content: 'Breaking Good,ReadDevil,People of Interest,The Running Dead,Found,American Guy.'
                }
            },
            {
                artists: {
                    name: 'Favourite Music Bands/Artists',
                    content: 'Iron Maid,DC/AC,Megablow,The Ill,Kung Fihters,System of a Revenge.'
                }
            }
        ],
    // 西部-->徽章
        badge_content: [
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
        playlist_content: [{
                image: "image/home/playlist6.jpg",
                name: "The Past Start Slow",
                song: "System of a Revenage2222",
                time: "15:42"
            },
            {
                image: "image/home/playlist7.jpg",
                name: "The Pretender",
                song: "Kung Fighters",
                time: "3:22"
            },
            {
                image: "image/home/playlist6.jpg",
                name: "The Past Start Slow",
                song: "System of a Revenage2222",
                time: "3:22"
            },
            {
                image: "image/home/playlist8.jpg",
                name: "Seven Nation Army",
                song: "The Black Stripes",
                time: "3:06"
            },
            {
                image: "image/home/playlist9.jpg",
                name: "Leap of Faith",
                song: "Eden Artifact",
                time: "6:17"
            }
        ],
        // 推特订阅
        twitter: [{
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
        Last_video: [{
                img: "image/home/video8.jpg",
                content: "System of a Revenge-Hypnotize...",
                time: "3:25"
            },
            {
                img: "image/home/video7.jpg",
                content: "System of a Revenge-Hypnotize...",
                time: "3:25"
            }
        ],

    // 中部，发表文章
        publisher: [{
                name: "Jame Spiegel",
                avatar: "",
                article: {
                	flag: false,
                    dateline: "20 hours ago",
                    content: "Hello World!",
                    fav: "99",
                    likes: "62",
                    // 子级评论用户信息
                    comment: "",
                    replay: "55",
                    social: "",
                    image: ""
                }
            },
            {
                name: "Jame Spiegel",
                avatar: "",
                article: {
                	flag: false,
                    dateline: "21 hours ago",
                    content: "If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...",
                    fav: "99",
                    likes: "62",
                    // 子级评论用户信息
                    comment: "",
                    replay: "55",
                    // 转发的视频信息
                    social: {
                    	image: "image/home/video5.jpg",
                    	title: "System of a Revenge-Nothing Else Matters(LIVE)",
                    	content: "Lorem ipsum dolor sit amet,consectetur ipisiciling elit,sed do eiusmod tempo ubcududunt ut labore...",
                    	from: "YOUTUBE.COM"
                    }
                },
                image: ""
            },
            {
                name: "Jame Spiegel",
                avatar: "",
                article: {
                	flag: false,
                    dateline: "21 hours ago",
                    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
                    fav: "99",
                    likes: "62",
                    // 是否显示 子级评论用户信息
                    com_show: false,
                    comment: [
                    	{
	                    	com_sum: "66",
	                    	com_avatar: "image/home/avatar10-sm.jpg",
	                    	com_name: "Elaine Dreyfuss",
	                    	com_time: "5 mins ago",
	                    	com_content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.",
	                    	com_fav: "22",
	                    	com_comment: "",
	                    	 // 是否显示 子子级评论用户信息
	                    	inner_show:false
	                    },
	                    {
	                    	com_sum: "50",
	                    	com_avatar: "image/home/avatar4-sm.jpg",
	                    	com_name: "Chris Greyson",
	                    	com_time: "1.5 hour ago",
	                    	com_content: "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
	                    	com_fav: "25",
	                    	inner_show:false,
	                    	com_comment: [
	                    		{
	                    			ic_avatar:"image/home/avatar8-sm.jpg",
	                    			ic_name:"Diana Jameson",
	                    			ic_time:"39 mins ago",
	                    			ic_content:"第一条评论!",
	                    			ic_fav:"14"
	                    		},
	                    		{
	                    			ic_avatar:"image/home/avatar2-sm.jpg",
	                    			ic_name:"Nicholas Grisom",
	                    			ic_time:"29 mins ago",
	                    			ic_content:"第二条评论!",
	                    			ic_fav:"124"
	                    		}
	                    	],
	                    },
	                    {
	                    	com_sum: "50",
	                    	com_avatar: "image/home/avatar5-sm.jpg",
	                    	com_name: "Chris Greyson",
	                    	com_time: "1 hour ago",
	                    	com_content: "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
	                    	com_fav: "123",
	                    	com_comment: "",
	                    	inner_show:false
		                }
                    ],
                    replay: "55",
                    // 转发的视频信息
                    social: ""
                },
                image: ""
            },
            {
                name: "Jame Spiegel",
                avatar: "",
                article: {
                	flag: false,
                    dateline: "20 hours ago",
                    content: " Hi! Everyone should check out these amazing photographs that my friend shot the past week. Here’s one of them...leave a kind comment!",
                    fav: "18",
                    likes: "6",
                    // 子级评论用户信息
                    comment: "",
                    replay: "17",
                    social: "",
                    image: "image/home/post-photo6.jpg"
                }
            }
        ]
    },
    computed: {
    	// 判断子子评论是否展开
    	is_show:function() {
    		if (this.repeat_show) {
	    		this.repeat_num = 3;
	    	}else {
	    		this.repeat_num = 1;
	    	}
	    	return this.repeat_num;
    	}
    }
})

this.amo = 999
console.log(this.amo)