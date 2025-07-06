import { useState } from 'react';

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
        <FormGroup label='Email' hint='janedoe@mail.com' setter={setEmail} />
        <FormGroup label='Phone' hint='(253) 555-0987' setter={setPhone} />
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

function FormGroup({ label, hint, setter, rows = 1, type = 'text' }) {
  const id = label.toLowerCase().replace(/ /g, '_');
  const field =
    rows > 1 ? (
      <textarea
        id={id}
        name={id}
        placeholder={hint}
        className='w-1/1 border resize-none'
        onBlur={() => {
          const value = document.querySelector(`#${id}`).value;
          setter(value);
        }}
        rows={rows}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        placeholder={hint}
        className='border w-[400px]'
        onBlur={() => {
          const value = document.querySelector(`#${id}`).value;
          setter(value);
        }}
      />
    );
  const flex = rows > 1 ? 'flex-col' : 'flex';
  return (
    <div className={`${flex} justify-between m-2 flex-wrap`}>
      <label htmlFor={id} className='pr-2'>
        {label}
      </label>
      {field}
    </div>
  );
}

function SendButton({ name, email, phone, header, message }) {
  const API_ADDR = '';
  const sendMail = async () => {
    const response = await fetch(API_ADDR, {
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
        console.log('success!');
        break;
      default:
        console.log('fail!');
    }
  };
  return (
    <p
      onClick={sendMail}
      className='cursor-pointer text-2xl bg-[var(--mint-accent)] size-fit px-2 py-1 rounded-lg m-auto'
    >
      Send mail
    </p>
  );
}

export default ContactPage;
