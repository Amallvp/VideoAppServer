//json servere import chayyal aan first step & import cheyyanulla function aan require .

const jsonserver=require('json-server')

// server creation
//adyam oru name kodkkanam server ennan evide kodkkne & create cheyyan vendi use cheyyuna function jsonserver.create
//mukkali kodtha variable aan jsonserver so jsonserver.create() vanne 

const server=jsonserver.create()

//server json typum  code js filum aan so json filine convert cheyyam . Athini oru middleware aan use cheyyunne 

const middleware=jsonserver.defaults()

// router create cheyyanam 

const router=jsonserver.router("db.json")

//server run  cheyyan vendi port define cheyyanam , chelappo env filum indavum so 

const PORT=process.env.PORT || 4000

//epo middleware create cheythathe illu athinne use cheyyan parayanam servernod so 

server.use(middleware)

// serverno use cheyyanum parayanama
server.use(router)

//eni listen cheyyan parayanam

server.listen(PORT,()=>{
    console.log(`Json server started running at port ${PORT}`);
})