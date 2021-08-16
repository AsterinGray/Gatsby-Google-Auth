<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

## 🚀 Quick start

1. Clone this repository to your local.
2. Copy `.env.example` content and create `.env.development` in root directory then paste it.
3. Change the `GOOGLE_CLIENT_ID` with your Google OAuth 2.0 Client ID.
4. To run this application, run `npm run develop` in your terminal.

For Gatsby first timer, you need to install Gatsby globally to your local by running
```
npm install -g gatsby-cli
```


## How to get Google OAuth 2.0 Client ID

To get the Client ID for Google OAuth, go to this [page](https://console.cloud.google.com/apis/dashboard)

If you are a first timer, you will be asked to create a Project and OAuth Consent Page\

After create project:
1. Go to `Credential` menu.
2. In the OAuth 2.0 Client IDs section, create a new credential.
3. When creating the credential you will asked to input:  
    - Credential Name
    -  Authorized JavaScript Origins: an URI where this Credential will be use. example if we want to run it on development [localhost:8000](http://localhost:8000) we need to add `http://localhost:8000` and `http://localhost`.
    - Authorized redirect URIs: an URI where we approved the page to redirect.
4. Then copy the Client ID from created credential

## How to get Google OAuth 2.0 Client ID
Go to this page and choose the OAuth Consent Screen, then you will be asked to fill:
- Your App Name
- User Support Email
- Your App Logo
- Link to your homepage
- Link to your privacy policy
- Link to your term of service
