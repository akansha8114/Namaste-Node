
const {MongoClient} = require("mongodb") //fetching mongodb package
const URL = "mongodb+srv://NamasteNode:Aakanshavgk2004@namastenode.2tntoxm.mongodb.net/";
const client = new MongoClient(URL); //creating a new instance of MongoClient
const dbName = "NamasteNode"; //database name
async function main() {
    await client.connect(); //connecting to the database
    console.log("Connection Successful to server");
    const db = client.db(); //selecting the database
    const collection = db.collection("User"); //selecting the collection

    //Finding all documents in the collection
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);
    return "done.";
    
}
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close()); //calling the main function and closing the connection