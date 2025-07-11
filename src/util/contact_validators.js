export function validateEmail(email) {
  return /^.+@.+\.[A-Za-z]+$/.test(email);
}

export function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10;
}

export function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10); // Only numbers, max 10
  const parts = [];

  if (digits.length > 0) parts.push('(' + digits.slice(0, 3));
  if (digits.length >= 4) parts.push(') ' + digits.slice(3, 6));
  if (digits.length >= 7) parts.push(' - ' + digits.slice(6, 10));

  return parts.join('');
}
