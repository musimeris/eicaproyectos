const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res)=>{
    const {name, email, message}= req.body;

    contentHTML = `
    <h1>informacion de usuario</h1>
    <ul>
        <li>username: ${name}</li>
        <li>username: ${email}</li>
        <li>username: ${name}</li>
    </ul>
    <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
            user:'waipen71441@gmail.com',
            pass:'exiusbpuetpxyspp'
        },
        tls:{
            rejectUnauthorized: false
        }

    })
    
    const info = await transporter.sendMail({
        from: '"eica 👻" <foo@example.com>',
        to:'waipen71441@gmail.com',
        subject: "Hello ✔", // Subject line
        html: contentHTML, // plain text body
    });
    
    console.log('message send', info.messageId);
       
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            console.log('Error ocurido upss');
        }else{
            console.log('Email enviado correctamente');
            res.redirect('/index.html');
            alert('Su correo a sido recicido, espere nuestra pronta respuesta');
        }
    });
});

module.exports = router;