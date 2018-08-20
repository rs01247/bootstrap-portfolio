const express = require('express');
const sgMail = require('@sendgrid/mail');
const msg = require('./helpers/email.helpers')

const router = express.Router();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send(msg);

module.exports = router;