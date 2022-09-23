# JSON.Resume()

Little app to manage the resume. It can be generated and updated by a JSON file.

I wrote it in a day, in a kind of "stream of consciousness", and in the process, I build a framework that reminds me React :D.

## ❓Why
Why do I build a framework from scratch instead of making it directly in plain HTML?
To have fun, of course.

But the reason why I wrote this tool, is because I wanted to have a cv version on GitHub, to take advantage of the versioning. I can make changes and rebuild the cv as releases. Only managing a JSON file.
No more diving into the computer folders to find an old version of the cv and then fight against Microsoft Word or Google Documents or Pages to align that damn table.

---
## 🔨 How to use it
Under `/src` rename `cv_config.json.example` in `cv_config.json` and fill in the information. I suppose you know how to write a JSON file.

### 👉 Development
Now you can start the tool in development mode, to check your CV and make the changes you want. Just run
```
npm run dev
```
Now you can see your cv in the browser under port 5005 (you can change it if you want of course).

### 👉 Convert to pdf
If you are ok with your cv you can run
```
npm run build-convert
```
This command will compile and minify the js and CSS files and will convert the HTML into a pdf. Saved in the project root folder.

---
## 👨‍💻 TODO
- [X] convert the HTML into pdf
- [ ] write a complete JSON
- [ ] work on design
- [ ] host somewhere the HTML version
- [ ] save a pdf version as the first release