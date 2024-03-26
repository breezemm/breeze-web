'use client'
import React from 'react'
import TimeLinePost from "@/app/components/TimeLinePost";
import {TimeLineProps} from "@/interfaces/TimeLineData";

const timelineData: TimeLineProps[] = [
    {
        "id": 30,
        "is_my_event": false,
        "name": "Quas omnis est et provident.",
        "start_date": "2015-04-29",
        "start_time": "00:52:50",
        "place": "Yangon",
        "description": "Hatter: and in a great hurry to change the subject of conversation. While she was coming back to the heads of the hall: in fact she was holding, and she drew herself up and throw us, with the words.",
        "is_has_phases": false,
        "image": "",
        "user": {
            "id": 11,
            "name": "Mr. Don Ferry I",
            "username": "keeling.idell",
            "profile_image": "",
            "email": "vaughn.armstrong@example.com",
            "date_of_birth": "2003-11-09",
            "interests": [
                {
                    "id": 1,
                    "name": "Fun & Casual"
                },
                {
                    "id": 2,
                    "name": " Social & Networking"
                },
                {
                    "id": 3,
                    "name": " Weekend Getaway"
                }
            ],
            "address": {
                "city": "Yangon"
            },
            "settings": {
                "bio": "",
                "social_links": {
                    "facebook": "",
                    "telegram": "",
                    "instagram": "",
                    "tiktok": "",
                    "snapchat": "",
                    "website": ""
                },
                "language": "en"
            },
            "has_followed": null
        },
        "phases": [],
        "comments": [],
        "likers_count": 0,
        "comments_count": 0
    },
    {
        "id": 29,
        "is_my_event": false,
        "name": "Vero ut eum molestiae ex odio eveniet iste ipsum.",
        "start_date": "2014-12-07",
        "start_time": "01:26:03",
        "place": "Letpadan",
        "description": "Queen in a voice outside, and stopped to listen. 'Mary Ann! Mary Ann!' said the King. The next thing was snorting like a thunderstorm. 'A fine day, your Majesty!' the Duchess was VERY ugly; and.",
        "is_has_phases": false,
        "image": "",
        "user": {
            "id": 11,
            "name": "Mr. Don Ferry I",
            "username": "keeling.idell",
            "profile_image": "",
            "email": "vaughn.armstrong@example.com",
            "date_of_birth": "2003-11-09",
            "interests": [
                {
                    "id": 1,
                    "name": "Fun & Casual"
                },
                {
                    "id": 2,
                    "name": " Social & Networking"
                },
                {
                    "id": 3,
                    "name": " Weekend Getaway"
                }
            ],
            "address": {
                "city": "Yangon"
            },
            "settings": {
                "bio": "",
                "social_links": {
                    "facebook": "",
                    "telegram": "",
                    "instagram": "",
                    "tiktok": "",
                    "snapchat": "",
                    "website": ""
                },
                "language": "en"
            },
            "has_followed": null
        },
        "phases": [],
        "comments": [],
        "likers_count": 0,
        "comments_count": 0
    },
    {
        "id": 31,
        "is_my_event": false,
        "name": "Vero ut eum molestiae ex odio eveniet iste ipsum.",
        "start_date": "2014-12-07",
        "start_time": "01:26:03",
        "place": "Letpadan",
        "description": "Queen in a voice outside, and stopped to listen. 'Mary Ann! Mary Ann!' said the King. The next thing was snorting like a thunderstorm. 'A fine day, your Majesty!' the Duchess was VERY ugly; and.",
        "is_has_phases": false,
        "image": "",
        "user": {
            "id": 11,
            "name": "Mr. Don Ferry I",
            "username": "keeling.idell",
            "profile_image": "",
            "email": "vaughn.armstrong@example.com",
            "date_of_birth": "2003-11-09",
            "interests": [
                {
                    "id": 1,
                    "name": "Fun & Casual"
                },
                {
                    "id": 2,
                    "name": " Social & Networking"
                },
                {
                    "id": 3,
                    "name": " Weekend Getaway"
                }
            ],
            "address": {
                "city": "Yangon"
            },
            "settings": {
                "bio": "",
                "social_links": {
                    "facebook": "",
                    "telegram": "",
                    "instagram": "",
                    "tiktok": "",
                    "snapchat": "",
                    "website": ""
                },
                "language": "en"
            },
            "has_followed": null
        },
        "phases": [],
        "comments": [],
        "likers_count": 0,
        "comments_count": 0
    },
]


const FeedScreen = () => {

    return (
        <div className='md:flex flex-col flex-1 justify-center items-center'>
            <div  className="text-sm flex gap-1"> <span className="font-semibold ">Aung Myat Moe</span>commented on this.</div>
            {
                timelineData.map((data: TimeLineProps) => {
                    return (
                        <TimeLinePost key={data.id} data={data}/>
                    )
                })
            }
        </div>
    )
}

export default FeedScreen
