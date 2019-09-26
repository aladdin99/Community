// import VueLazyload from 'vue-lazyload'
Vue.use( VueLazyload )
var vm = new Vue({
    el: "#app",
    data: {
        repeat_show: false,
        repeat_num: 1,
        picked: "",
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
                    fav: 25,
                    active: false,
                    avatar: [
                    	{ order: "image/home/friend-harmonic7.jpg" },
                    	{ order: "image/home/friend-harmonic8.jpg" },
                    	{ order: "image/home/friend-harmonic9.jpg" },
                    	{ order: "image/home/friend-harmonic10.jpg" },
                    	{ order: "image/home/friend-harmonic11.jpg" },
                    ],
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
                    fav: 99,
                    active: false,
                    avatar: [
                    	{ order: "image/home/friend-harmonic7.jpg" },
                    	{ order: "image/home/friend-harmonic8.jpg" },
                    	{ order: "image/home/friend-harmonic9.jpg" },
                    	{ order: "image/home/friend-harmonic10.jpg" },
                    	{ order: "image/home/friend-harmonic11.jpg" },
                    ],
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
                    fav: 42,
                    active: false,
                    avatar: [
                    	{ order: "image/home/friend-harmonic7.jpg" },
                    	{ order: "image/home/friend-harmonic8.jpg" },
                    	{ order: "image/home/friend-harmonic9.jpg" },
                    	{ order: "image/home/friend-harmonic10.jpg" },
                    	{ order: "image/home/friend-harmonic11.jpg" },
                    ],
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
	                    	com_fav: 22,
                            com_active: false,
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
	                    	com_fav: 25,
                            com_active: false,
	                    	inner_show:false,
	                    	com_comment: [
	                    		{
	                    			ic_avatar:"image/home/avatar8-sm.jpg",
	                    			ic_name:"Diana Jameson",
	                    			ic_time:"39 mins ago",
	                    			ic_content:"第一条评论!",
	                    			ic_fav: 14,
                                    ic_active: false,
	                    		},
	                    		{
	                    			ic_avatar:"image/home/avatar2-sm.jpg",
	                    			ic_name:"Nicholas Grisom",
	                    			ic_time:"29 mins ago",
	                    			ic_content:"第二条评论!",
	                    			ic_fav: 124,
                                    ic_active: false,
	                    		}
	                    	],
	                    },
	                    {
	                    	com_sum: "50",
	                    	com_avatar: "image/home/avatar5-sm.jpg",
	                    	com_name: "Chris Greyson",
	                    	com_time: "1 hour ago",
	                    	com_content: "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
	                    	com_fav: 123,
                            com_active: false,
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
                    fav: 18,
                    active: false,
                    avatar: [
                    	{ order: "image/home/friend-harmonic7.jpg" },
                    	{ order: "image/home/friend-harmonic8.jpg" },
                    	{ order: "image/home/friend-harmonic9.jpg" },
                    	{ order: "image/home/friend-harmonic10.jpg" },
                    	{ order: "image/home/friend-harmonic11.jpg" },
                    ],
                    likes: "6",
                    // 子级评论用户信息
                    comment: "",
                    replay: "17",
                    social: "",
                    image: "image/home/post-photo6.jpg"
                }
            }
        ],
    // 东部-->最新图片
    	last_photos: [
    		{ order: "image/home/last-photo10-large.jpg" },
    		{ order: "image/home/last-phot11-large.jpg" },
    		{ order: "image/home/last-phot12-large.jpg" },
    		{ order: "image/home/last-phot13-large.jpg" },
    		{ order: "image/home/last-phot14-large.jpg" },
    		{ order: "image/home/last-phot15-large.jpg" },
    		{ order: "image/home/last-phot16-large.jpg" },
    		{ order: "image/home/last-phot17-large.jpg" },
    		{ order: "image/home/last-phot18-large.jpg" }
    	],
    // 东部-->博客文章
    	blog_posts: [
    		{
    			name: "My Perfect Vacations in South America and Europe",
    			content: "orem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.",
    			time: "7 hours ago"
    		},
    		{
    			name: "The Big Experience of Travelling Alone",
    			content: "Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.",
    			time: "March 18th, at 6:52pm"
    		}
    	],
    // 东部-->朋友
    	friends: [
    		{ order: "image/home/avatar24-sm.jpg" },
    		{ order: "image/home/avatar25-sm.jpg" },
    		{ order: "image/home/avatar26-sm.jpg" },
    		{ order: "image/home/avatar27-sm.jpg" },
    		{ order: "image/home/avatar28-sm.jpg" },
    		{ order: "image/home/avatar29-sm.jpg" },
    		{ order: "image/home/avatar30-sm.jpg" },
    		{ order: "image/home/avatar31-sm.jpg" },
    		{ order: "image/home/avatar32-sm.jpg" },
    		{ order: "image/home/avatar33-sm.jpg" },
    		{ order: "image/home/avatar34-sm.jpg" },
    		{ order: "image/home/avatar35-sm.jpg" },
    		{ order: "image/home/avatar36-sm.jpg" },
    		{ order: "image/home/avatar37-sm.jpg" },
    		{ order: "image/home/avatar38-sm.jpg" }
    	],
    // 东部-->特别喜爱
    	Favourite: [
    		{
    			img: "image/home/avatar43-sm.jpg",
    			title: "The Marina Bar",
    			author: "Restaurant / Bar",
    			active: false
    		},
    		{
    			img: "image/home/avatar44-sm.jpg",
    			title: "Tapronus Rock",
    			author: "Rock Band",
    			active: false
    		},
    		{
    			img: "image/home/avatar45-sm.jpg",
    			title: "Pixel Digital Design",
    			author: "Company",
    			active: false
    		},
    		{
    			img: "image/home/avatar46-sm.jpg",
    			title: "Thompson’s Custom Clothing Boutique",
    			author: "Clothing Store",
    			active: false
    		},
    		{
    			img: "image/home/avatar41-sm.jpg",
    			title: "Crimson Agency",
    			author: "Company",
    			active: false
    		},
    		{
    			img: "image/home/avatar42-sm.jpg",
    			title: "Mannequin Angel",
    			author: "Clothing Store",
    			active: false
    		}
    	],
    // 东部-->民意测验
    	Poll: [
    		{	
    			name: "James's Poll",
    			question: "If you had to choose, which actor do you prefer to be the next Darkman?",
    			option: [
    				{
    					name: "Thomas Bale",
    					per: "61%",
    					num: "12",
    					img: [
    						{ order: "image/home/friend-harmonic1.jpg" },
    						{ order: "image/home/friend-harmonic2.jpg" },
    						{ order: "image/home/friend-harmonic3.jpg" },
    						{ order: "image/home/friend-harmonic4.jpg" },
    						{ order: "image/home/friend-harmonic5.jpg" }
    					]
    				},
    				{
    					name: "Ben Robertson",
    					per: "27%",
    					num: "7",
    					img: [
    						{ order: "image/home/friend-harmonic1.jpg" },
    						{ order: "image/home/friend-harmonic2.jpg" },
    						{ order: "image/home/friend-harmonic3.jpg" },
    						{ order: "image/home/friend-harmonic5.jpg" }
    					]
    				},
    				{
    					name: "Michael Streiton",
    					per: "11%",
    					num: "2",
    					img: [
    						{ order: "image/home/friend-harmonic1.jpg" },
    						{ order: "image/home/friend-harmonic5.jpg" }
    					]
    				}
    			]
    		}
    	]
    },
    methods: {
    	add_fav: function(active) {
    		active = !active;
    		// num += 1;
    		alert(active);
    	}
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