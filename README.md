![JSON.resume](./public/logo.png)

<br />
Little app to manage the resume. It can be generated and updated by a JSON file.
<br />
<br />

## ❓Why

The reason why I wrote this tool, is because I wanted to have a cv version on GitHub, to take advantage of the versioning. I can make changes and rebuild the cv as releases. Only managing a JSON file.
No more diving into the computer folders to find an old version of the cv and then fighting against Microsoft Word or Google Documents or Pages to align that damn table.

---

## 🔨 How to use it

Under `/src` rename `cv_config.json.example` in `cv_config.json` and fill in the information. I suppose you know how to write a JSON file.

Then add your profile image under `public/` with the name `profile.jpg`.

## Cover Letter

You can generate also a cover letter, matching the style of the cv. To do this, fill the part of the `cv_config.json` under the key `cover_letter`. If you do not want to generate the cover letter, than just leave the key `cover_letter` empty. Like this:

```
{
  ...
  "cover_letter": {}
  ...
}
```

### 👉 Development

Now you can start the tool in development mode, to check your CV and make the changes you want. Just run

```
npm run start
```

Now you can see your cv in the browser under port 5005 (you can change it if you want of course).

### 👉 Use your PDF

This project uses react-pdf to generate the document. In this configuration, the document is rendered in DOM.

If you want to change the behavior and generate a File, then please refer to the react-pdf documentation to make the needed modification (hint: is 1 line code)
