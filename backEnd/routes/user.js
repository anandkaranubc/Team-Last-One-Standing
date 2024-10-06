/**
 * This file contains all the routes for the users
 * It includes the following routes:
 * 1. /register: POST route to register a new user
 * 2. /login: POST route to login a user
 * 3. /reset-password/:id/:token: GET route to render the reset password page
 * 4. /reset-password/:id/:token: POST route to reset the password
 * 5. /changePassword: POST route to change the password
 * 6. /getAllUsers: POST route to get all users
 * 7. /update: POST route to update a user
 * 8. /verify: POST route to verify a user's authorization
 * 9. /verifyManagerAdmin: POST route to verify a user's authorization as a manager or admin
 * 10. /verifyAdmin: POST route to verify a user's authorization as an admin
 * 11. /getUsersById: POST route to get users by their IDs
 */

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const nodemailer = require("nodemailer");
const moment = require("moment");
const { isAuthorized } = require("../config/isAuthenticated");
require("dotenv").config();
const { query } = require("../database");

// Get the backend host from the environment
const HOST = parseInt(process.env.DEV)
    ? process.env.DEV_BACKEND_HOST
    : process.env.PROD_BACKEND_HOST;


/*
 * @api {post} /users/register Register a new user
 */

// Check if user is authorized and is a manager before creating a user
router.post("/register", async (req, res) => {
    // Get the user details from the request body
    const { firstName, lastName, phoneNumber,password} = req.body;
    // Create User
    try {
        sql = `INSERT INTO users( firstName, lastName, email, password, role, jobStatus, shop) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        let result = await query(sql, [firstName, lastName, email, hashedPassword, role, "Active", shop])

        let id = Number(result.insertId);

        

        
    }
    catch (err) {
        return res.json({
            status: false,
            error: "Error creating user",
            errMessage: err.message,
        });

    }
});

/*
 * @api {post} /users/login Login a user
 */
router.post("/login", async (req, res) => {
    try {

        const { phoneNumber, password } = req.body;

        // Check if email exists
        sql = `SELECT * FROM users WHERE email = ?`;
        const result = await query(sql, email);


        if (!result[0]) {
            return res.json({
                status: false,
                error: "Email doesn't exist!",
            });
        }

        if (await bcrypt.compare(password, result[0].password)) {
            // Create and assign a token valid for 5 hours
            const token = jwt.sign({ _id: result[0].id }, process.env.TOKEN_SECRET, {
                expiresIn: "5h",
            });
            return res.json({
                status: true,
                token: token,
            });
        } else {

            return res.json({
                status: false,
                error: "Incorrect password!",
            });
        }
    }

    catch (error) {
        return res.json({
            status: false,
            error: "Error finding user",
            errMessage: error.message,
        });
    }
});


module.exports = router;
