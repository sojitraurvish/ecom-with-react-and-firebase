require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);
exports.handler=async(event)=>{
    try {//when you send me this event ant that time i am going to make inetent but before that the cupel thing i need to know currency , payment method , and amount
        const {amount}=JSON.parse(event.body);// 1 dollar is equal to 100 cense

        const paymentIntent=await stripe.paymentIntents.create({
            amount,
            currency:"usd",
            payment_method_types:["card"]
        });

        return {
            statusCode:200,
            body:JSON.stringify({paymentIntent})
        }
    } catch (error) {
        console.log({error});

        return{
            status:400,
            body:JSON.stringify({error})
        }
    }
}