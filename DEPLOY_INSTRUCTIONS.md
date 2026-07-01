Instrucciones rápidas para desplegar en Vercel

Opción A — (recomendada): Configurar la carpeta `algorithms` como Root Directory en Vercel

1. Entra a tu proyecto en Vercel.
2. Ve a Settings → General.
3. En "Root Directory" escribe: `algorithms` y guarda.
4. Vuelve a desplegar (Deploy). Vercel construirá desde esa carpeta donde ya existe `package.json` y `app/`.

Opción B — Mover el proyecto al root del repositorio (si prefieres no cambiar configuración en Vercel)

ADVERTENCIA: estas acciones mueven archivos; haz un backup si tienes dudas.
Ejecuta desde la carpeta que contiene `algorithms` (el padre):

```powershell
# crear backup por seguridad
mkdir algorithms-backup
Copy-Item -Recurse algorithms\* algorithms-backup\

# mover contenido del proyecto al directorio actual (repo root)
Move-Item algorithms\* . -Force

# opcional: eliminar carpeta vacía
Remove-Item -Recurse algorithms -Force
```

Opción C — (si quieres subir sólo la carpeta `algorithms` como repo independiente)

```bash
# dentro de algorithms/
git init
git add .
git commit -m "Initial commit - portfolio nextjs"
# crear el repo en GitHub y luego:
git remote add origin git@github.com:TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

Notas finales
- Asegúrate de que `vercel.json` sea mínimo o esté ausente; lo dejamos en:

```json
{
  "version": 2
}
```

- Si prefieres que haga el movimiento de archivos aquí, dime y lo hago; si prefieres que te guíe para conectar `algorithms` en Vercel, confirmame y te doy los pasos exactos con capturas de comandos.
