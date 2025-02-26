import transactionModel from "../Models/transactionModel.js";

const getUserTransaction = async (req,res) => {
    try{
        const transaction = await transactionModel.find({user: req.user.id}).sort({data: -1});
        res.status(200).json({success: true , transaction})
    }catch(error){
        console.log(error)  
    }
}

export {getUserTransaction}