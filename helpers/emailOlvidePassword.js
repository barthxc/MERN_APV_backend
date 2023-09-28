
import sgMail from '@sendgrid/mail'


const emailOlvidePassword = async (datos) =>{
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)


    const {email, nombre, token} = datos;
    //Enviar email

    const info = await ({
        to: email,
        from: "pbartgal@myuax.com",
        subject: 'Reestablece tu Password',
        text: 'Reestablece tu Password',
        html:`
        <p>Hola ${nombre}, has solicitado reestablecer tu password.
        <p> Sigue el siguiente enlace para generar tu nuevo password:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a> </p>
        <p>Si tu no creaste esta cuenta, ignora este mensaje.</p>
        `
    });

    sgMail.send(info)
    .then(()=>{
      console.log('Email enviado');
    })
    .catch((error)=>{
      console.log(error);
    })

    console.log('Mensaje enviado: %s,', info.messageId);
    
}

export default emailOlvidePassword;