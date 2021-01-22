export default function template(title, content = "") {
  let scripts = '';
  if (content) {
    scripts = `<script src="build/client.js"></script>`
  } else {
    scripts = ` <script src="build/bundle.js"> </script> `
  }
  let page = `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" >
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>${title}</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
                    <link rel="stylesheet" href="/assets/style/burger_style.css" type="text/css" />
                      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                  </head>
                
                  <body>
                    <div id="app" class="wrap-inner">${content}</div>
                    ${scripts}
                </body>
              </html>
              `;

  return page;
}
