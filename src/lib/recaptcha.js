// Load reCAPTCHA v3 script
export const loadRecaptcha = (siteKey) => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is not defined'));
      return;
    }

    if (window.grecaptcha) {
      resolve(window.grecaptcha);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          resolve(window.grecaptcha);
        });
      } else {
        reject(new Error('reCAPTCHA failed to load'));
      }
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load reCAPTCHA script'));
    };

    document.head.appendChild(script);
  });
};

// Execute reCAPTCHA v3 and get token
export const executeRecaptcha = async (siteKey, action = 'submit') => {
  try {
    const grecaptcha = await loadRecaptcha(siteKey);
    const token = await grecaptcha.execute(siteKey, { action });
    return token;
  } catch (error) {
    console.error('reCAPTCHA execution error:', error);
    throw error;
  }
};

// Verify token on the server side
export const verifyRecaptchaToken = async (token, secretKey) => {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, error: error.message };
  }
};
