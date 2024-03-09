# Documentación recaptcha

## Instalación

Puedes instalar esta biblioteca a través de npm utilizando el siguiente comando:

```bash
npm install vanilla-recaptcha-v3
```

## Uso

Para utilizar esta biblioteca en tu proyecto, primero debes importarla:

```javascript
import useRecaptcha from 'vanilla-recaptcha-v3';
```

Luego, puedes utilizar las funciones proporcionadas por la biblioteca:

```javascript
const recaptcha = useRecaptcha('TU_SITE_KEY_AQUI');

recaptcha.getToken('action')
  .then(token => {
    console.log('Token recibido:', token);
  })
  .catch(error => {
    console.error('Error al obtener el token:', error);
  });

```

## Contribuyendo

Si quieres contribuir a esta biblioteca, puedes abrir un issue en GitHub o enviar una solicitud de extracción con tus cambios.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT).
