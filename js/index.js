const express = require('express')
const app = express()
const port = 5500
const fs = require('fs');
const cors = require('cors')

app.use(cors())

app.get('/count/:dir', (req, res) => {
    const dir = req.params.dir
    //sesuaikan dengan direktori kalian masing masing
    const mainPath = `../duotune/${dir}`

    const countFiles = (dirPath) => {
        fs.readdir(dirPath, (err, files) => {
            if(err){
                console.error(`Terjadi Kesalahan: ${err}`);
                res.json({
                    dir: dir,
                    count: 0
                })
                return;
            }
    
            const fileCount = files.length
            res.json({
                dir: dir,
                count: fileCount
            })
        })
    }

    countFiles(mainPath)

});

app.listen(port, () => {
    console.log(`Server berjalan di ${port}`);
})
