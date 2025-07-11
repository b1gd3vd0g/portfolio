import { useEffect, useState } from 'react';
import { FormGroup } from '../reusable/form_groups';
import {
  formatPhoneNumber,
  validateEmail,
  validatePhone
} from '../util/contact_validators';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [header, setHeader] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Let's get in touch!</h1>
      <form className='bg-[var(--mint-green)] m-auto w-[750px] max-w-1/1 p-3 rounded-2xl'>
        <FormGroup label='Name' hint='Jane Doe' setter={setName} />
        <FormGroup
          label='Email'
          hint='janedoe@mail.com'
          setter={setEmail}
          validator={validateEmail}
        />
        <FormGroup
          label='Phone'
          hint='(123) 456 - 7890'
          setter={setPhone}
          formatter={formatPhoneNumber}
          validator={validatePhone}
        />
        <FormGroup
          label='Header'
          hint="I'm curious about..."
          rows={2}
          setter={setHeader}
        />
        <FormGroup
          label='Message'
          hint='[Provide details here]'
          rows={5}
          setter={setMessage}
        />
        <SendButton
          name={name}
          email={email}
          phone={phone}
          header={header}
          message={message}
        />
      </form>
    </div>
  );
}

function SendButton({ name, email, phone, header, message }) {
  const API_HOST = 'https://www.api.bigdevdog.com';

  // Has the message been sent?
  const [feedback, setFeedback] = useState({ mood: 0, message: '' });

  // Can the button be clicked?
  const [active, setActive] = useState(false);

  // Set the button as active if all fields are valid and a message has not
  // been sent already.
  useEffect(() => {
    if (name && email && phone && header && message && feedback.mood <= 0)
      setActive(true);
    else setActive(false);
  }, [name, email, phone, header, message, feedback.mood]);

  /** Attempt to sent the email if the button is active. */
  const sendMail = async () => {
    if (!active) return;
    try {
      const response = await fetch(`${API_HOST}/contact`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          phone,
          header,
          message
        })
      });

      switch (response.status) {
        case 200:
          setFeedback({ mood: 1, message: 'Message sent successfully!' });
          break;
        default:
          setFeedback({
            mood: -1,
            message: 'Message could not send. Try again later.'
          });
      }
    } catch (error) {
      console.log(error);
      setFeedback({ mood: -1, message: 'Fetch failed.' });
    }
  };

  const fbColor = feedback.mood < 0 ? 'text-[var(--dark-red)]' : '';
  const buttonFilter = active ? 'cursor-pointer' : 'opacity-50 cursor-default';

  return (
    <>
      <p
        onClick={sendMail}
        className={`${buttonFilter} text-2xl bg-[var(--mint-accent)] size-fit px-2 py-1 rounded-lg m-auto`}
      >
        Send mail
      </p>
      <p className={`${fbColor}`}>{feedback.message}</p>
    </>
  );
}

export default ContactPage;
