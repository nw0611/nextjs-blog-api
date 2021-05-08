import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { IPost } from "../../models/posts";

const Post: NextPage<IPost> = ({ title, content, createdAt }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{createdAt}</p>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {

  const key = {
    headers: { "X-API-KEY": process.env.API_KEY! },
  }

  const res: any = await fetch(`https://nextjs-blog-api.microcms.io/api/v1/bloglist`, key)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  const data = await res.json();

  const paths = data.contents.map((post: IPost) => `/posts/${post.id}`);
  return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  // paramsにはroutingの情報が入る
  if(!params?.id) {
    return { notFound: true };
  }

  const key = {
    headers: { "X-API-KEY": process.env.API_KEY! },
  }

  const res: any = await fetch(`https://nextjs-blog-api.microcms.io/api/v1/bloglist/${params.id}`, key)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
    
  const post = await res.json();

  return post === undefined ? { notFound: true } : { props: post };
};

export default Post;