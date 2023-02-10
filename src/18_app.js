import React from "react"
import Joke from "./components/18_joke.js"

export default function App() {

    return (
        <div>
            <Joke
                setup="I am so stupid that I cant see that I am not improving I self I am improving others haha"
                punchline="But I am happy coz I am doing something for someone haha"
                ispun={true}
                comments={
                    [{name:"nikhil",
                    text:"this is a bad joke",
                    rating:4.5},
                {name: "nanda",
                text: "this is a bad joke",
                rating: 4.5}
                ]
                }
                ratings={4.6}
            />
            <Joke
                setup="I am so stupid that I cant see that I am not improving I self I am improving others haha"
                punchline="But I am happy coz I am doing something for someone haha"
                ispun={true}
                comments={
                    [{
                        name: "nikhil",
                        text: "this is a bad joke",
                        rating: 4.5
                    },
                    {
                        name: "nanda",
                        text: "this is a bad joke",
                        rating: 4.5
                    }
                    ]
                }
                ratings={4.6}
            />
            <Joke
                setup="I am so stupid that I cant see that I am not improving I self I am improving others haha"
                punchline="But I am happy coz I am doing something for someone haha"
                ispun={true}
 comments={
                    [{name:"nikhil",
                    text:"this is a bad joke",
                    rating:4.5},
                {name: "nanda",
                text: "this is a bad joke",
                rating: 4.5}
                ]
                }
                ratings={4.6}
            />
            <Joke
                setup="I am so stupid that I cant see that I am not improving I self I am improving others haha"
                punchline="But I am happy coz I am doing something for someone haha"
                ispun={true} 
                comments={
                    [{name:"nikhil",
                    text:"this is a bad joke",
                    rating:4.5},
                {name: "nanda",
                text: "this is a bad joke",
                rating: 4.5}
                ]
                }
                ratings={4.6}

            />
            <Joke
                setup="I am so stupid that I cant see that I am not improving I self I am improving others haha"
                punchline="But I am happy coz I am doing something for someone haha"
                ispun={true}
                  comments={
                    [{name:"nikhil",
                    text:"this is a bad joke",
                    rating:4.5},
                {name: "nanda",
                text: "this is a bad joke",
                rating: 4.5}
                ]
                }
                ratings={4.6}
            />

        </div>
    )
}