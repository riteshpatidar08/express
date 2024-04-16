const express = require('express') ;
const app = express() ;
const port = 3000
 const fs = require('fs')

 app.use(express.json())
 
 const carsData = () => {
  const data =  fs.readFileSync(`${__dirname}/data/cars.json` , 'utf-8')
  return JSON.parse(data)
 }

 const addCarsData = (data) => {
    fs.writeFileSync(`${__dirname}/data/cars.json`, JSON.stringify(data), 'utf-8')
 }
//get api to fetch the data 
app.get('/cars',(req,res)=>{
 const cars = carsData() ;
 res.status(200).json({
    status : 'success',
    length : cars.length,
    data : {
        cars
    }
 })
})

//get single item by the use of the id
app.get('/cars/:id' , (req,res)=>{
  const id = parseInt(req.params.id)
  const cars = carsData() ;
  const singleCar = cars.find((car)=> car.id === id)

  res.status(200).json({
    message : 'success',
    length : singleCar.length,
    data : {
        singleCar
    }
  })
})

//add new item to the cars.json
//post method
app.post('/addcar', (req,res)=>{
  const newData = req.body
  console.log(newData) ;
  
})  



app.listen(port, ()=>{
    console.log('Server is running')
})
