import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: req.body.email,
      from: "hey@klavenjones.com",
      subject: req.body.subject,
      html: `<!DOCTYPE html
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en">
  
      <head>
          <meta charset="utf-8">
  
          <title>Qodesnippet Design</title>
          <meta name="description" content="Qodesnippet Design">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  
          <link rel="stylesheet" href="css/styles.css?v=1.0">
  
      </head>
  
      <body>
          <div class="img-container"
              style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
          </div>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from Klaven Jones, their email is: ✉️ hey@klavenjones.com </h3>
              <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${req.body.message}</p>
                  <br>
              </div>
              <img src="https://res.cloudinary.com/klayjones/image/upload/v1643516654/Qodesnippet%20CRM/websitelogo_prtacp.png" class="logo-image"
                  style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">
                  Regards<br>Klaven Jones<br>Software Developer<br>917-615-5646</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                  <a href="https://klavenjones.com" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                  <a href="https://github.com/klavenjones"
                      style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                  <a href="https://linkedin.com/in/klaven-jones/"
                      style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                  <a href="https://twitter.com/KlavenJ/"
                      style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
  
              </div>
          </div>
      </body>
  
  </html>`
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
