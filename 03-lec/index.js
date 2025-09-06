import exress from "express"
const app = exress()

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Port listen on: ${port}`)
})