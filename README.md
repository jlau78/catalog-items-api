# Catalog-app API

Learning react, typescript, nodejs and mongodb while building the catalog-app. This is the API service using node express. 

This service is used by the embedded catalog-app frontend module.



Reference tutorial: [Ibrahima Ndaw: How to Build a Todo App with React, TypeScript, NodeJS, and MongoDB](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/)


## Configuration file - nodemon.json

This app's configuration is stored in the nodemon.json, and called using the `process.env` call. 
In the future configurations will be moved a purpose built configuration framework.

### Mongodb

To connect to the MongoDB in WSL call `mongosh mongodb://winhost:27017`

```
james@yogatop james] $ mongosh mongodb://winhost:27017
Current Mongosh Log ID: 63d526bad489c1467f9f85dc
Connecting to:          mongodb://winhost:27017/?directConnection=true&appName=mongosh+1.6.1
Using MongoDB:          6.0.1
Using Mongosh:          1.6.1

test> show dbs
admin       40.00 KiB
config      60.00 KiB
local       72.00 KiB
shop         8.00 KiB
spareroom  784.00 KiB

test> use spareroom
switched to db spareroom
spareroom> db.items.find()

[
  {
    _id: ObjectId("63b605a93284c93a05477fb5"),
    itemId: '16247995',
    description: null,
    fullDescription: '\n' +
      "                    â­\x90ï¸\x8FTwo Double Roomsâ­\x90ï¸\x8F  £1000 PCM, all bills included Available from 23/01/....",
    thumbnails: '//photos2.spareroom.co.uk/images/flatshare/listings/large/84/70/84705139.jpg',
    price: '£850 pcm',
    keyFeatures: '\n        \n        Flat share\n        \n      ',
    featureList: {
      Available: '08 Jan 2023',
      'Minimum term': '6 months',
      'Maximum term': '18 months',
      Deposit: '£850.00',
      'Bills included?': 'Yes',
      Furnishings: 'Furnished',
      Parking: 'Yes'
    
    }
]

```

