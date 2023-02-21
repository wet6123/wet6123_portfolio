## Portfolio Link
https://wet6123-portfolio.vercel.app/

배준성의 포트폴리오
본 페이지는 Next.js로 제작되고 vercel로 배포되었습니다.
  
SEO적용.
  
### 왜 Next.js 인가?  
- Page 기반으로 Routing 이 간편
```
 파일 경로 pages에 원하는 경로를 디렉토리로 생성한 뒤에 파일을 tsx/jsx 파일을 생성한다면 그대로 url이 된다.
```
- Pre-rendering
```
 SSR(SSG) 환경을 직접 구현할 필요 없이 쉽게 사용 가능하다.
 SSR : 빌드 시 HTML 파일 구성. (default)
 SSR : page에서 getServerSideProps() 사용 시, 요청마다 서버에서 HTML을 새로 구성.
```
- 코드 스플리팅 & pre-fetch
```
 코드 스플리팅 : 번들링된 js파일을 페이지별 js파일로 분리
 pre-fetch : 관련 데이터를 미리 로딩
  
 페이지를 요청 시 코드 스플리팅을 통해 빠르게 페이지를 로딩, 해당 페이지에 링크가 있다면 연결된 페이지의 js파일을 pre-fetch하여 페이지 전환을 빠르게한다.
```



<!-- 
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
 -->
