import emailjs from '@emailjs/browser';

// ── EmailJS Configuration ──────────────────────────────────────────────────────
// Replace these placeholder strings with your real credentials from emailjs.com
// → Account → API Keys       for the Public Key
// → Email Services           for the Service ID
// → Email Templates          for each Template ID
// ─────────────────────────────────────────────────────────────────────────────
export const EMAILJS_PUBLIC_KEY = 'CYCoH3P8ehG-n9bGc';
export const EMAILJS_SERVICE_ID = 'service_koxcv0a';

export const TEMPLATE_IDS = {
  contact:         'template_0yoanxq',
  project_request: 'YOUR_PROJECT_REQUEST_TEMPLATE_ID',
  express_booking: 'template_vlrusav',
};

// ── sendEmail ─────────────────────────────────────────────────────────────────
// Thin wrapper that picks the correct template and calls emailjs.send().
//
// formType: 'contact' | 'project_request' | 'express_booking'
// params:   plain object whose keys match the {{variables}} in your EmailJS
//           template (see EMAIL_TEMPLATES_REFERENCE.md for the exact variable names)
//
// Returns a Promise — callers may .catch(() => {}) to silence errors.
// ─────────────────────────────────────────────────────────────────────────────
export function sendEmail(formType, params) {
  const templateId = TEMPLATE_IDS[formType];
  if (!templateId) {
    return Promise.reject(new Error(`[EmailJS] Unknown formType: "${formType}"`));
  }
  return emailjs.send(EMAILJS_SERVICE_ID, templateId, params);
}
