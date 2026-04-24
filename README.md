# AnggeloMontilvi.github.io
Portadolio personal
https://anggelomontilivi.github.io/AnggeloMontilvi.github.io/

# 🚀 Projecte Symfony: Turismos Clasicos

Aquest projecte forma part del mòdul de **Desenvolupament Web en Entorn Servidor (DAW)**. És una aplicació web que permet [explicar breument la lògica: gestió d'usuaris, botiga, blog, etc.].

## 📖 Documentació Completa
Pots consultar els detalls tècnics, diagrames de base de dades i guies d'usuari a la nostra pàgina de documentació:
- Landing Page 👉 https://github.com/Montilivi-DAW2/landing-page-grup-3-turismosclasicos-com.git
- Backend 👉 https://github.com/Montilivi-DAW2/backend-grup-3-turismosclasicos-com.git
- Frontend 👉 https://github.com/Montilivi-DAW2/frontend-grup-3-turismosclasicos-com.git

## 🛠️ Stack Tècnic
- **Framework:** Symfony 7.x
- **Llenguatge:** PHP 8.2+
- **ORM:** Doctrine
- **Base de dades:** MariaDB / MySQL
- **Motor de plantilles:** Twig

## 🔧 Instal·lació i Posada en Marxa

1. **Clonar el repositori:**
   ```bash
   git clone [https://github.com/el-teu-usuari/el-teu-projecte.git](https://github.com/el-teu-usuari/el-teu-projecte.git)
   cd el-teu-projecte
   ```

2. **Instal·lar les dependències de Composer:**
   ```bash
   composer install
   ```

3. **Configurar l'entorn:**
   Copia el fitxer `.env` a `.env.local` i configura la teva cadena de connexió a la base de dades:
   ```text
   DATABASE_URL="mysql://usuari:password@127.0.0.1:3306/nom_bd?serverVersion=8.0"
   ```

4. **Crear la base de dades i executar migracions:**
   ```bash
   php bin/console doctrine:database:create
   php bin/console doctrine:migrations:migrate
   ```

5. **Aixecar el servidor local:**
   ```bash
   symfony serve
   ```

## ✒️ Autor
* **Nom:** Anggelo Collell Ramos
* **Grup:** 2n DAW - Institut Montilivi
