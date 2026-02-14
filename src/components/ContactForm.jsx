'use client';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { executeRecaptcha } from '@/lib/recaptcha';

const ContactForm = () => {
  const t = useTranslations('job_page.ApplySection');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    // Load reCAPTCHA script
    if (siteKey) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.head.appendChild(script);
    }
  }, [siteKey]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      setSubmitStatus({ type: 'error', message: 'Please accept the privacy policy' });
      return;
    }

    if (!siteKey) {
      setSubmitStatus({ type: 'error', message: 'reCAPTCHA is not configured' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Execute reCAPTCHA v3
      const recaptchaToken = await executeRecaptcha(siteKey, 'contact_form');

      // Submit form with reCAPTCHA token
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // TODO: Uncomment when email service is configured
        // setSubmitStatus({ 
        //   type: 'success', 
        //   message: data.message || 'Message sent successfully!' 
        // });
        // setFormData({
        //   name: '',
        //   email: '',
        //   message: '',
        //   privacyAccepted: false,
        // });
        
        // Temporary message until email is set up
        setSubmitStatus({ 
          type: 'success', 
          message: 'Form validated successfully! (Email service not configured yet - check console logs)' 
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="bg-white rounded-2xl shadow-md p-8 mb-8 max-w-xl mx-auto my-[80px]">
      <h2 className="text-2xl font-bold mb-6 text-primary">{t('formHeading')}</h2>
      
      {submitStatus && (
        <div className={`mb-4 p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-100 text-green-700 border border-green-300' 
            : 'bg-red-100 text-red-700 border border-red-300'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">{t('namePlaceholder')}</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">{t('emailPlaceholder')}</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">{t('newsPlaceholder')}</label>
          <textarea 
            rows="4" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              required
              className="w-4 h-4 border border-gray-300 rounded focus:outline-none pr-2" 
            />
            <span className="ml-2 text-sm text-gray-600">
              {t('privacyText')} <Link href="/privacyPolicy" className="text-primary hover:underline">{t('privacyLinkText')}</Link>
            </span>
          </label>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting || !recaptchaLoaded}
          className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : t('submitButton')}
        </button>
        
        <p className="text-xs text-gray-500 mt-2">
          Your message will be sent to info@rodopi.de
        </p>
        
        <p className="text-xs text-gray-400 mt-2">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;