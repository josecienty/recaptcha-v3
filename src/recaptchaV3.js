/**
 * Genera una instancia reCaptcha y proporciona métodos para interactuar con ella.
 *
 * @param {string} siteKeyParam - La clave del sitio para reCaptcha
 * @return {object} Un objeto con la instancia reCaptcha, estado de preparación, método getToken y método onReady
 *
 * @author José Argüello
 * @link https://github.com/josecienty
 */
/*!
 * Autor: José Argüello
 * Versión: 1.0.0
 * Fecha: 2024-03-10
 * GitHub: https://github.com/josecienty
 */
export default function useRecaptcha(siteKeyParam) {
    let reCaptchaInstance = null;
    let ready = false;
    let _onReady = () => {};
    const siteKey = siteKeyParam;
  
    function initRecaptcha() {
      if (!siteKey) {
        return;
      }
  
      const recaptchaScriptUrl = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      const script = document.createElement("script");
      script.src = recaptchaScriptUrl;
  
      script.onload = () => {
        window.grecaptcha.ready(() => {
          reCaptchaInstance = window.grecaptcha;
          ready = true;
        });
  
        window.grecaptcha.ready(_onReady);
      };
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }
  
    function getToken(action = "submit") {
      return new Promise((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(siteKey, {
              action: action,
            });
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      });
    }
  
    function onReady(callback) {
      _onReady = callback;
    }
  
    initRecaptcha();
  
    return { reCaptchaInstance, ready, getToken, onReady };
  }
  