import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { taskTitle, priority, assigneeEmail, boardName } = req.body;

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const priorityText = {
    0: 'Low',
    1: 'Medium',
    2: 'High'
  }[priority];

  // Email content
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: assigneeEmail,
    subject: `New Task Assigned: ${taskTitle}`,
    html: `
      <h2>New Task Assignment</h2>
      <p>You have been assigned a new task:</p>
      <ul>
        <li><strong>Task:</strong> ${taskTitle}</li>
        <li><strong>Priority:</strong> ${priorityText}</li>
        <li><strong>Board:</strong> ${boardName}</li>
      </ul>
      <p>Please log in to the NitroDynamics Kanban board to view more details.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
} 