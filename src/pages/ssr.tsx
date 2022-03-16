import * as React from "react";
interface SSRPageProps {
  serverData?: any;
}
const SSRPage: React.FC<SSRPageProps> = ({ serverData }) => (
  <main>
    <h1>SSR Page with Dogs</h1>
    <img alt="Happy dog" src={serverData?.message} />
  </main>
);

export default SSRPage;
export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      props: {
        message:
          "https://www.sensorsdata.com/assets/_gatsby/static/picture-analyse-new-e166c737329835ef3c644c2c0bc2e520.png",
      },
    };
  }
}
