import { Typography, Card, CardBody } from '@material-tailwind/react';
import useLang from '../../../hooks/useLang';
import content from '../../../localization/content';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

interface ContentCardPropsType {
  blog_id: string;
  img: string;
  title: string;
  descr: string;
  created_at: string;
}

export function Blog() {
  const [selectedLang] = useLang();

  const truncateText = (text: string, numWords: number) => {
    const words = text.split(' ');
    if (words.length > numWords) {
      return words.slice(0, numWords).join(' ') + ' ...';
    }
    return text;
  };

  // Static blog data
  const blogs = [
    {
      blog_id: '1',
      img: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/23151218/BA-Courses.png', // Replace with actual image paths
      title: 'Understanding React Hooks',
      descr: 'React hooks allow you to use state and other React features without writing a class. This blog will explore the various hooks available in React.',
      created_at: '2024-10-01T12:00:00Z',
    },
    {
      blog_id: '2',
      img: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/23151218/BA-Courses.png', // Replace with actual image paths
      title: 'CSS Grid vs Flexbox',
      descr: 'In this post, we will compare CSS Grid and Flexbox, two powerful layout systems in CSS, to help you choose the right one for your project.',
      created_at: '2024-10-05T14:30:00Z',
    },
    {
      blog_id: '3',
      img: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/23151218/BA-Courses.png', // Replace with actual image paths
      title: 'Getting Started with TypeScript',
      descr: 'TypeScript is a superset of JavaScript that adds static types. Learn how to set up TypeScript in your projects and its key features.',
      created_at: '2024-10-10T09:15:00Z',
    }
  ];

  function ContentCard({
    blog_id,
    title,
    descr,
    img,
    created_at,
  }: ContentCardPropsType) {
    const truncatedDesc = truncateText(descr, 12);

    return (
      <Card
        className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl transform 
                                        transition duration-1000 
                                        hover:scale-110"
        color="transparent"
        key={blog_id}
      >
        <img
          src={img}
          alt="image"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80" />
        <CardBody className="relative flex flex-col justify-end">
          <Typography variant="h4" color="white">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="my-2 font-normal"
          >
            {truncatedDesc}
          </Typography>
          <div className="flex justify-between items-center mt-5">
            <NavLink
              to={`/all/blogs/${blog_id}`}
              className="my-2 font-normal text-center bg-fuchsia-800 w-40 py-2 text-white hover:bg-fuchsia-600 active:bg-fuchsia-500"
            >
              {content[selectedLang as string].blogs.more}
            </NavLink>
            <Typography
              variant="paragraph"
              color="white"
              className="my-2 font-normal text-right"
            >
              {moment(created_at).format('LT')} {''}
              {moment(created_at).format('l')}
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="relative isolate overflow-hidden bg-white sm:py-0 lg:px-8 mt-20">
      <section className="container mx-auto px-8 py-10 lg:py-28 ">
        <Typography
          variant="h2"
          color="blue-gray"
          className="!text-4xl !leading-snug lg:!text-5xl text-center"
        >
          {content[selectedLang as string].blogs.blogs}
        </Typography>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {blogs.map(({ blog_id, img, title, descr, created_at }) => (
            <ContentCard
              key={blog_id}
              blog_id={blog_id}
              img={img}
              title={title}
              descr={descr}
              created_at={created_at}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
