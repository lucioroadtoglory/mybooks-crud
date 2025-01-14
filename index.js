const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    if (!title || !pageqty) {
        console.log('Os campos título e quantidade de páginas são obrigatórios.')
        res.redirect('/books')
        return
    }

 
    const sql = 'INSERT INTO books (title, pageqty) VALUES (?)';
    const values = [title, pageqty];
 
    conn.query(sql, [values], function (err)  {
        if (err) {
            console.log(err)
        }
        res.redirect('/books')
    })
})


app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"

    conn.query(sql, function(err, data) {
        if (err) {
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        res.render('books', {books})
    })
})


app.get('/books/:id', (req, res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = (?)`

    const value = [id]

    conn.query(sql, [value], function(err, data) {
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        res.render('book', {book})
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = (?)`

    const value = [id]

    conn.query(sql, [value], function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]
        res.render('editbook', {book})
    })

})

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    // Corrigir a consulta SQL com a sintaxe correta
    const sql = `UPDATE books SET title = ?, pageqty = ? WHERE id = ?`
    const values = [title, pageqty, id]

    conn.query(sql, values, function(err, data) {
        if (err) {
            console.log(err)
            return;
        }

        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM books WHERE id = ?`

    conn.query(sql, [id], function(err) {
        if (err) {
            console.log(err)
            return
        }

        // Redefinir o valor de autoincremento
        conn.query("ALTER TABLE books AUTO_INCREMENT = 1;", function(err) {
            if (err) {
                console.log(err)
            }
            res.redirect('/books')
        })
    })
})


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql1'
})

conn.connect(function(err) {
    if(err) {
        console.log(err)

    }

    console.log('Conectou ao MySQL!')
    app.listen(3000)
    
})

