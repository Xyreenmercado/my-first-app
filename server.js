const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(
        to bottom,
        #e0c3fc,
        #c193fc,
        #9d63fb,
        #6d90ff,
        #4ab0ff
      );
      font-family: 'Segoe UI', sans-serif;
    ">

      <div style="
        width: 90%;
        max-width: 700px;
        padding: 30px;
        text-align: center;
      ">

        <h2 style="
          font-size: 1.7em;
          margin-bottom: 30px;
          font-weight: 600;
          color: #2e2368;
        ">
          Hi there! Let this word light up your day.
        </h2>

        <div style="
          padding: 35px;
          border-radius: 15px;
          background-image: url('https://media.istockphoto.com/id/1144142614/photo/view-on-a-evening-purple-sky-with-cirrus-clouds-and-stars.jpg?s=612x612&w=0&k=20&c=6BMfwxcrfe7Dc5N8KkrE1-ZttRkeMrFOhruPA1o1BpQ=');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          color: white;
          font-size: 1.25em;
          line-height: 1.6;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.9);
          margin-bottom: 35px;
        ">
          “For I am sure that neither death nor life, nor angels nor rulers,
          nor things present nor things to come, nor powers, nor height nor
          depth, nor anything else in all creation, will be able to separate
          us from the love of God in Christ Jesus our Lord.”
          <br><br>
          <strong>- Romans 8:38–39</strong>
        </div>

        <p style="
          font-size: 1em;
          color: #1c1b5a;
          line-height: 1.6;
        ">
          May His grace be your secret weapon.<br>
          Signing off,<br>
          <strong>XYREEN MERCADO</strong><br>
          From BSIT–SM–4101
        </p>

      </div>

    </div>
  `);
});

app.listen(port, () => {
  console.log('Server running on port ${port}');
});