// 모듈
// 1. 내장 모듈 : os, fs, path, url, querystring
// 2. 외부 모듈 : date-fns
// 3. 사용자 모듈 : hello모듈

const{format} = require('date-fns');
console.log(format(new Date(), 'yyyy-MM-dd'));

/*
-프로젝트 초기화
    %npm init -y
-프로젝트 구성하는 모듈 설치
    %npm i 모듈명 모듈명 ...
    설치된 모듈정보를 package.json에 등록

    .gitignore : node_modules 폴더 제외하기
-프로젝트 복원
    %npm install

-모듈 삭제 : package.json의 dependencies 항목도 지우고 실제 node_modules에 있는 파일도 지움
    %npm uninstall date-fns

-@babel : ECMAScript

-github push
    echo "# day02_0613" >> README.md 파일 만들기
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/choiswan49/day02_0613.git
    git push -u origin main
*/