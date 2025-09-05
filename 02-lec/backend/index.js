import express from 'express'
const app = express()

const jokes = [
  {
    "id": 1,
    "title": "A Bear of a Joke",
    "joke": "Why don't bears wear shoes? Because they have bear feet!"
  },
  {
    "id": 2,
    "title": "A Puzzling Situation",
    "joke": "What do you call a fake noodle? An impasta!"
  },
  {
    "id": 3,
    "title": "The Ghostly Goalie",
    "joke": "What do you get when you cross a snowman and a vampire? Frostbite."
  },
  {
    "id": 4,
    "title": "The Cow's Complaint",
    "joke": "Why did the cow cross the road? To get to the udder side."
  },
  {
    "id": 5,
    "title": "The Bookworm's Blunder",
    "joke": "I'm reading a book on anti-gravity. It's impossible to put down!"
  }
]

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api/jokes', (req, res) => {
    res.send(jokes)
})

app.get('/api/me', (req, res) => {
  res.send('<h5>hello its me!</h5>')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Port listen on port no: ${port}`)
})