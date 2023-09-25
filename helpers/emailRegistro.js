import nodemailer from 'nodemailer';


const emailRegistro = async (datos) =>{
    const  transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port:  process.env.EMAIL_PORT,
        auth: {
          user:  process.env.EMAIL_USER,
          pass:  process.env.EMAIL_PASS
        }
      });

    const {email, nombre, token} = datos;
    //Enviar email

    const info = await transporter.sendMail({
        from: 'APV- Administrador de Pacientes de Veterinaria',
        to: email,
        subject: 'Comprueba tu cuenta en APV',
        text: 'comprueba tu cuenta en APV',
        html:`
        <p>Hola ${nombre}, has creado una cuenta en APV.
        <p> Tu cuenta ya está lista, para confirmarla haz click en el enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a> </p>
        <p>Si tu no creaste esta cuenta, ignora este mensaje.</p>
        `
    });

    console.log('Mensaje enviado: %s,', info.messageId);
    
}

export default emailRegistro;