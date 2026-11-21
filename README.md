# ionic_changeorg

App móvil con Ionic y Angular 15 (mayo de 2023, ciclo de DAM) para crear y gestionar peticiones, al estilo de Change.org. Se parte de [ionic-angular-crud-app](https://github.com/IkerAbad/ionic-angular-crud-app). Su servidor es [backend_ionic_changeorg](https://github.com/IkerAbad/backend_ionic_changeorg).

## Qué hay

- Registro e inicio de sesión (`auth`).
- Página de inicio con el listado de peticiones, y páginas para añadir y editar una petición (`add-petition`, `edit-petition/:id`).
- Cada petición tiene identificador, título y descripción. El servicio `petition.service.ts` hace el CRUD contra el servidor.
- Capacitor configurado para llevarla a Android o iOS.
- `ng build` compila sin errores. No la he probado contra el servidor ni en un dispositivo desde aquí.

## Cómo probarla

Hace falta el servidor en `http://localhost:3000` (la dirección está escrita en `auth.service.ts` y `petition.service.ts`). Ese servidor cubre el CRUD de peticiones, pero no `/login` ni `/register`, que la app también llama. Luego:

```
npm ci
npx ionic serve
```

## Licencia

MIT, ver [LICENSE](LICENSE).

---

# ionic_changeorg (English)

A mobile app with Ionic and Angular 15 (May 2023, DAM vocational course) to create and manage petitions, Change.org style. It starts from [ionic-angular-crud-app](https://github.com/IkerAbad/ionic-angular-crud-app). Its server is [backend_ionic_changeorg](https://github.com/IkerAbad/backend_ionic_changeorg).

## What's inside

- Sign-up and login (`auth`).
- A home page listing petitions, and pages to add and edit a petition (`add-petition`, `edit-petition/:id`).
- Each petition has an id, a title and a description. `petition.service.ts` does the CRUD against the server.
- Capacitor configured to take it to Android or iOS.
- `ng build` compiles without errors. I have not tested it against the server or on a device from here.

## Trying it

You need the server at `http://localhost:3000` (the address is hardcoded in `auth.service.ts` and `petition.service.ts`). That server covers the petitions CRUD, but not `/login` or `/register`, which the app also calls. Then:

```
npm ci
npx ionic serve
```

## License

MIT, see [LICENSE](LICENSE).
