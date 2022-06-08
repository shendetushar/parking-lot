const middleService=require('../service/service')
const dbsetup=require('../model/dbsetup')

beforeAll(async() => {
    dbsetup.setupDb()
  });

test("Testing newparking function used to book new parking slot",async()=>{
    const obj={
        ownerName:"Sanket",
        registrationNumber:"PP10001",
     color:"Black",
     company:"nano",
     contactNumber:"7083835275"
    }
    const data=await middleService.newParking(obj)
    expect(data).toContain("Your parking lot is booked and your ticket number is")
})

test("Testing getRegistrationNumbers function used to get registration numbers of all same color cars",async()=>{
    const data=await middleService.getRegistrationNumbers("Black")
    const response=await data.toString()
    expect(response).toContain("PP10001","R1001")
})

test("Testing getTicketDetail function used to get ticket details using registration number",async()=>{
    const data=await middleService.getTicketDetail("PP10001")
    expect(data).toBeDefined()
})

test("Testing removeCarParking function used to delete ticket record",async()=>{
    const data=await middleService.removeCarParking("Tick302")
    expect(data).toContain("deleted successfully")
})

test("Testing allParkingData function used to get all the ticket records",async()=>{
    const data= await middleService.allParkingData()
    expect(data).toBeDefined()
})