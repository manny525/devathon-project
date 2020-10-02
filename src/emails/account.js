const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendSuccessEmail = (email, password) => {
    sgMail.send({
        to: email,
        from: 'mtolia9@gmail.com',
        subject: 'Registration Successful',
        text: `username: ${email}  password: ${password}`
    }).then(() => {
    }).catch((e) => {
        console.log(e.response.body)
    })
}

const sendFailureEmail = (email) => {
    sgMail.send({
        to: email,
        from: 'mtolia9@gmail.com',
        subject: 'Registration failed',
        text: 'Registration failed, register again with correct details'
    }).then(() => {
    }).catch((e) => {
        console.log(e.response.body)
    })
}

module.exports = {
    sendSuccessEmail,
    sendFailureEmail
}