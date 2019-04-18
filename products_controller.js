module.exports = {
    create(req, res) {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body

        db.create_product([name, description, price, image_url]).then( response => {
            res.status(200).send(response)
        }).catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
    },
    getOne(req, res) {
        const db = req.app.get('db')
        const {id} = req.params

        db.read_product([id]).then( response => {
            res.status(200).send(response)
        })
        .catch(error => console.log('something went wrong in getOne', error))
    },
    getAll(req, res) {
        const db = req.app.get('db')

        db.read_products().then( response => {
            res.status(200).send(response)
        })
        .catch(error => console.log('getAll dont work', error))
    },
    update(req, res) {
        const db = req.app.get('db')
        const {desc} = req.query
        const {id} = req.params

        db.update_product([desc, id]).then( response => {
            res.status(200).send(response)
        })
        .catch(error => console.log('update dont work', error))
    },
    delete(req, res) {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product([id]).then( () => {
            res.sendStatus(200)
        })
        .catch(error => console.log('delete dont work', error))
    }
}