import sgMail from '@sendgrid/mail';

const emailRegistro = async (datos) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { email, nombre, token } = datos;
    //Enviar email

    const info = await sgMail.send({
      to: email,
      from: "pbartgal@myuax.com",
      subject: "Comprueba tu cuenta en APV",
      text: "comprueba tu cuenta en APV",
      html: `
        <p>Hola ${nombre}, has creado una cuenta en APV.</p>
        <p>Tu cuenta ya está lista, para confirmarla haz click en el enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a></p>
        <p>Si tu no creaste esta cuenta, ignora este mensaje.</p>
      `
    });

    console.log('Email enviado:', info);
  } catch (error) {
    console.error('Error al enviar el email:', error);
  }
};

export default emailRegistro;
