// neye ihtiyac var? file folder isini yapacaz onlar icin gereklileri importla
import express from 'express'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import uniqid from 'uniqid'

// burda yeni router object olusturuyoruz
const authorsRouter = express.Router()

// simdi de file folder siralayacaz. conts diyip simdiki file i buluyoz
const currentFilePath = fileURLToPath(import.meta.url)

// file tamam simdi folder. o da neyle olcak dir e gidicen
const currentFolderPath = dirname(currentFilePath)

// json path icin folder ile birlestir
const authorsJSONPath = join(currentFolderPath, "authors.json")

//***********  burdan basliyor crud ***********/

// 1. READ --> GET ALL 
authorsRouter.get("/", (req, res, next) => {
    //dosyayi okuyacaz simdi. 
    const authorsJSONContent = fs.readFileSync(authorsJSONPath) //buffer hexadecimaldir
    const contentJSON = JSON.parse(authorsJSONContent)
    //sonra bu yaptıklarını gonderirsin
    res.send(contentJSON)
})

// 2. READ --> GET SINGLE
authorsRouter.get("/:id", (req, res, next) => {
    //dosyayi okuyacaz simdi. tamamini 
    const authors = JSON.parse(fs.readFileSync(authorsJSONPath)) //buffer hexadecimaldir
    
    // hepsi geldi ama. bi tanesini istiyoruz. find kullanicaz
    const author = authors.find(use => use._id === req.params.id)
    //sonra bu yaptıklarını gonderirsin
    res.send(author)
})

// 3. CREATE --> POST
authorsRouter.post("/", (req, res, next) => {
    // 1. read req... req data atmak istiyo ondan req body aliyoz. bu body zaaaten object
    //    ne yapmaya calisiyosa mesela onu const yapıyoruz tanimliyoruz
    const newAuthor = {...req.body, _id: uniqid(), createdAt: new Date()}

    // 2. read users.json doyasini. ki reqi ona ekleyelim
    const authors = JSON.parse(fs.readFileSync(authorsJSONPath)) //buffer hexadecimaldir

    // 3. yenisini dosyaya ekleyecez
    authors.push(newAuthor)

    // 4. bu yenisini de kaydetmek lazim. ustune yaziyoruz yani
    fs.writeFileSync
    res.send(contentJSON)
})

