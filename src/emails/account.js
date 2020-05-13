const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.sendgridAPIKey)

// sgMail.send( {
//     to: 'mahathiamencherla15@gmail.com',
//     from: 'mahathiamencherla15@gmail.com',
//     subject: 'My first sendgrid!!',
//     text: 'I hope you get this mata'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mahathiamencherla15@gmail.com',
        subject: 'Thanks for joining my app!',
        text: `Welcome to the app, ${name}. Let me know if you like this app!`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mahathiamencherla15@gmail.com',
        subject: 'Sad you are leaving',
        text: `Goodbye, ${name}. Let me know why you left this app!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}