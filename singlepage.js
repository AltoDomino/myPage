const http = require ('http')
const fsPromises = require('fs/promises')

const GetFiles = async() => {
   const indexjs = await fsPromises.readFile('./dist/index.cyk.js')
   const htmljs = await fsPromises.readFile('./cyk.html')
   const portfolioCss = await fsPromises.readFile('./portfolio.css')
    const image1 = await fsPromises.readFile('./grafiki/instag.png')
    const technolog = await fsPromises.readFile('./grafiki/csss.png')
    const image2 = await fsPromises.readFile('./grafiki/person.png')
    const image3 = await fsPromises.readFile('./grafiki/szczegoliki.jpg')
    const image4 = await fsPromises.readFile('./grafiki/usmiech.jpg')
    const image5= await fsPromises.readFile('./grafiki/zimneognie.jpg')
    const image6 = await fsPromises.readFile('./grafiki/blackwhite.jpg')
    const image7 = await fsPromises.readFile('./grafiki/fb.png')
    const image8 = await fsPromises.readFile('./grafiki/taniec.jpg')
    const image9 = await fsPromises.readFile('./grafiki/nozki.jpg')
    const image10 = await fsPromises.readFile('./grafiki/git.png')
    return [technolog,indexjs,htmljs,image1,portfolioCss,image2,image3,image4,image5,image6,image7,image8,image9,image10]
    }

http.createServer(async(req,res) =>{
    const  [technolog,indexjs,htmljs,image1,portfolioCss,image2,image3,image4,image5,image6,image7,image8,image9,image10] = await GetFiles()
    switch(req.url){
        case '/':
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(htmljs)
        res.end()
        break
        case '/grafiki/csss.png':
        res.writeHead(200, {'Content-Type' : 'text/png'})
        res.write(technolog)
        res.end()
        break
        case '/grafiki/instag.png':
        res.writeHead(200, {'Content-Type' : 'text/png'})
        res.write(image1)
        res.end()
        break
        case '/grafiki/person.png':
        res.writeHead(200, {'Content-Type' : 'text/png'})
        res.write(image2)
        res.end()
        break
        case '/grafiki/szczegoliki.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(image3)
        res.end()
        break
        case '/grafiki/usmiech.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(image4)
        res.end()
        break
        case '/grafiki/zimneognie.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(image5)
        res.end()
        break
        case '/grafiki/blackwhite.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(image6)
        res.end()
        break
        case '/grafiki/fb.png':
        res.writeHead(200, {'Content-Type' : 'text/png'})
        res.write(image7)
        res.end()
        break
        case '/grafiki/taniec.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(image8)
        res.end()
        break
        case '/grafiki/nozki.jpg':
        res.writeHead(200, {'Content-Type' : 'text/jpg'})
        res.write(image9)
        res.end()
        break
        case '/grafiki/git.png':
        res.writeHead(200, {'Content-Type' : 'text/png'})
        res.write(image10)
        res.end()
        break
        case '/dajjs':
        res.writeHead(200, {'Content-Type' : 'text/javascript'})
        res.write(indexjs)
        res.end()
        break
         case '/portfolio.css':
        res.writeHead(200, {'Content-Type' : 'text/css'})
        res.write(portfolioCss)
        res.end()
        break
        default:
        res.writeHead(404)
        res.write("sajonara")
        res.end()
    }
}).listen(8008)