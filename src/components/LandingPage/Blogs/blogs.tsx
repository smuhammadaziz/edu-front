import { Typography, Card, CardBody } from '@material-tailwind/react';
import useLang from '../../../hooks/useLang';
import content from '../../../localization/content';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { MdOutlineDateRange } from 'react-icons/md';
import { CgDetailsMore } from 'react-icons/cg';

interface ContentCardPropsType {
  blog_id: string;
  img: string;
  title: string;
  descr: string;
  created_at: string;
}

export function Blog() {
  const [selectedLang] = useLang();

  const blogs = [
    {
      blog_id: '1',
      img: 'https://www.material-tailwind.com/image/blog-11.jpeg',
      title: 'Search and Discovery',
      descr:
        'Website visitors today demand a frictionless user experience, especially when using search. Our high standards ensure quality.',
      created_at: '2024-05-15',
    },
    {
      blog_id: '2',
      img: 'https://www.material-tailwind.com/image/blog-12.jpeg',
      title: 'Optimizing User Flow',
      descr:
        'Enhance your website by focusing on user flow and seamless navigation for better engagement and retention.',
      created_at: '2024-06-10',
    },
    {
      blog_id: '3',
      img: 'https://www.material-tailwind.com/image/blog-13.jpeg',
      title: 'Design Trends in 2024',
      descr:
        'Stay ahead with the latest design trends for 2024 that prioritize user experience and visual appeal.',
      created_at: '2024-07-20',
    },
  ];

  const truncateText = (text: string, numWords: number) => {
    const words = text.split(' ');
    return words.length > numWords ? words.slice(0, numWords).join(' ') + ' ...' : text;
  };

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
          alt="blog"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80" />
        <CardBody className="relative flex flex-col justify-end">
          <Typography variant="h4" color="white">
            {title}
          </Typography>
          <div className="flex justify-between items-center mt-5">
            <NavLink
              to={`/all/blogs/${blog_id}`}
              className="flex flex-row items-center px-7 my-2 font-normal text-center bg-fuchsia-800 py-2 text-white hover:bg-fuchsia-900 active:bg-fuchsia-500"
            >
              <span className="me-2">
                <CgDetailsMore />
              </span>
              {content[selectedLang as string].blogs.more}
            </NavLink>
            <Typography
              variant="paragraph"
              color="white"
              className="my-2 font-normal text-right flex flex-row items-center"
            >
              <span className="me-2">
                <MdOutlineDateRange />
              </span>
              {moment(created_at).format('l')}
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="relative isolate overflow-hidden bg-white sm:py-32 lg:px-8">
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
      <NavLink
        to="/all/blogs"
        className="bg-fuchsia-800 text-white py-3 px-10 text-center mx-auto block w-75 mb-20 rounded-ss-2xl rounded-ee-2xl hover:bg-fuchsia-600"
      >
        {content[selectedLang as string].blogs.btn}
      </NavLink>
    </div>
  );
}

export default Blog;
