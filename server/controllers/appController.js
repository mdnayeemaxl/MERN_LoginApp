import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import ENV from '../config.js'


export async function register(req,res){
    try{
        const {username, password, profile, email} = req.body;

        const existUsername = new Promise((resolve,reject) =>{
            UserModel.findOne({username},function (err,user){
                if(err) reject (new Error(err));
                if(user) reject ({error : "please Use unique Username"});

                resolve();
            } );
        });

        const existEmail = new Promise((resolve,reject) =>{
            UserModel.findOne({email},function (err,email){
                if(err) reject (new Error(err));
                if(email) reject ({error : "please Use unique email"});

                resolve();
            } );
        });

        Promise.all([existUsername,existEmail])
        .then(() =>{
            if (password){
                bcrypt.hash(password,10).then(hashPassword =>{
                    const user = new UserModel({
                        username,
                        password : hashPassword,
                        profile: profile || "",
                        email
                    });

                    user.save()
                        .then(result => res.status(201).send({msg: "User Register Successfully !!!"}))
                        .catch( error => res.status(500).send({error}))
                }).catch(error => {
                    return res.status(500).send({error : "Enable to hashed password"})
                })
            }
        }).catch(error => {
            return res.status(500).send({error})
        })
    }
 catch (error) {
    console.log("Bad request")
        return res.status(500).send({error})
 }
}

export async function login(req,res){
    const {username, password} =req.body;

    try{
        UserModel.findOne({username})
            .then(user => {
                bcrypt.compare(password,user.password)
                    .then(passwordCheck =>{
                        if(!passwordCheck) return res.status(400).send({error : "Don't have password"})
                         
                            const token= jwt.sign({
                                    userId :user._id,
                                    username : user.username
                                },ENV.JWT_SECRET,{expiresIn: "2h"});

                            return res.status(200).send({
                                msg: "Login Successful...!",
                                username : user.username,
                                token
                            });

                    }).catch(error => {
                        return res.status(400).send({error: "Password Not Found"});
                    })
            })
            .catch(error => {
                return res.status(404).send({error :"Username not Found"});
            })
    }catch (error){
        return res.status(500).send({error})

    }
}

export async function getUser(req,res){

}

export async function updateUser(req,res){

}

export async function generateOTPl(req,res){

}