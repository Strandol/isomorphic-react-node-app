export default (data, markup, title) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <script>window.__SERIALIZED_DATA__ = ${JSON.stringify(data)}</script>
    </head>
    <body>
      <div id="app">${markup}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;