## kle-serial-server
Docker util tool for conversion json downloaded from [keyboard-layout-editor](http://www.keyboard-layout-editor.com/) to it's internal representation (for details see [kle-serial](https://github.com/ijprest/kle-serial).

## Features
- [x] JSON conversion
- [x] Included patch for key rotation issue (thanks to [@kevin-wells](https://github.com/ijprest/kle-serial/pull/1)) which is not yet included in origin repository

## How to use?
- Run `docker build -t kle-serial-server .` in order to build image
- Run `docker run -d -p 3000:3000 --name kle-container kle-serial-server` in order to start server container. It is listening on port 3000.
- Post JSON downloaded from [keyboard-layout-editor](http://www.keyboard-layout-editor.com/) and save result to file with curl: `curl -X POST -H "Content-Type: application/json" -d @FILENAME http://localhost:3000 > RESULTFILE`
- Stop and remove running container with `docker stop kle-container && docker rm kle-container`
